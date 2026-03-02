
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES, MOCK_USERS, MOCK_CHILDREN } from '../../mocks/mockData';
import { Conversation, Message, User, ChildProfile } from '../../types';
import { Send, User as UserIcon, Search, MoreVertical, Paperclip } from 'lucide-react';
import Button from '../../components/UI/Button';

const Messages: React.FC = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>(MOCK_CONVERSATIONS);
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState('');

  // 1. Handle "Start Chat" via URL Params (Deep Linking)
  useEffect(() => {
    const childId = searchParams.get('childId');
    const targetUserId = searchParams.get('targetUserId');

    if (childId && targetUserId && user) {
      // Check if conversation already exists
      const existingConv = conversations.find(c => 
        c.childId === childId && 
        c.participants.includes(user.id) && 
        c.participants.includes(targetUserId)
      );

      if (existingConv) {
        setActiveConversationId(existingConv.id);
      } else {
        // Create temporary mock conversation for UI
        const newConv: Conversation = {
          id: `new_${Date.now()}`,
          participants: [user.id, targetUserId],
          childId: childId,
          unreadCount: 0,
          lastMessage: {
            id: 'temp',
            conversationId: `new_${Date.now()}`,
            senderId: user.id,
            content: 'Start of conversation',
            timestamp: new Date().toISOString(),
            read: true
          }
        };
        setConversations(prev => [newConv, ...prev]);
        setActiveConversationId(newConv.id);
      }
    } else if (conversations.length > 0 && !activeConversationId) {
        // Default select first if none selected
        setActiveConversationId(conversations[0].id);
    }
  }, [searchParams, user]);

  // 2. Helpers to resolve Names from IDs
  const getUser = (id: string) => MOCK_USERS.find(u => u.id === id);
  const getChild = (id: string) => MOCK_CHILDREN.find(c => c.id === id);

  const getOtherParticipant = (conv: Conversation) => {
    const otherId = conv.participants.find(p => p !== user?.id);
    return getUser(otherId || '');
  };

  // 3. Send Message Handler
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversationId || !user) return;

    const msg: Message = {
      id: `m_${Date.now()}`,
      conversationId: activeConversationId,
      senderId: user.id,
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false
    };

    setMessages(prev => [...prev, msg]);
    setNewMessage('');
    
    // Update conversation last message
    setConversations(prev => prev.map(c => 
        c.id === activeConversationId 
        ? { ...c, lastMessage: msg } 
        : c
    ));
  };

  // 4. Filter messages for active chat
  const activeMessages = messages.filter(m => m.conversationId === activeConversationId);
  const activeConversation = conversations.find(c => c.id === activeConversationId);
  const activePartner = activeConversation ? getOtherParticipant(activeConversation) : null;
  const activeChildContext = activeConversation ? getChild(activeConversation.childId) : null;

  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-sm border border-gray-100 flex overflow-hidden">
      {/* Sidebar: Thread List */}
      <div className={`w-full md:w-80 border-r border-gray-100 flex flex-col ${activeConversationId ? 'hidden md:flex' : 'flex'}`}>
        <div className="p-4 border-b border-gray-100">
           <h2 className="font-heading font-bold text-lg mb-4">Messages</h2>
           <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-all text-sm"
              />
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
           {conversations.map(conv => {
             const partner = getOtherParticipant(conv);
             const child = getChild(conv.childId);
             const isActive = conv.id === activeConversationId;

             return (
               <div 
                 key={conv.id}
                 onClick={() => setActiveConversationId(conv.id)}
                 className={`p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? 'bg-primary/5 border-primary/20' : ''}`}
               >
                 <div className="flex gap-3">
                   <div className="relative">
                     <img src={partner?.avatarUrl} alt="" className="w-10 h-10 rounded-full bg-gray-200" />
                     {conv.unreadCount > 0 && (
                       <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
                     )}
                   </div>
                   <div className="flex-1 min-w-0">
                     <div className="flex justify-between items-start mb-0.5">
                       <h3 className={`font-bold text-sm truncate ${isActive ? 'text-primary' : 'text-dark'}`}>
                         {partner?.name}
                       </h3>
                       <span className="text-[10px] text-gray-400">
                         {new Date(conv.lastMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                       </span>
                     </div>
                     <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
                        Re: <span className="bg-secondary/50 px-1.5 rounded text-primary-dark">{child?.name}</span>
                     </p>
                     <p className={`text-xs truncate ${conv.unreadCount > 0 ? 'font-bold text-dark' : 'text-gray-400'}`}>
                       {conv.lastMessage.senderId === user?.id ? 'You: ' : ''}{conv.lastMessage.content}
                     </p>
                   </div>
                 </div>
               </div>
             );
           })}
        </div>
      </div>

      {/* Chat Window */}
      {activeConversation ? (
        <div className={`flex-1 flex flex-col ${activeConversationId ? 'flex' : 'hidden md:flex'}`}>
          {/* Chat Header */}
          <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0">
             <div className="flex items-center gap-3">
                <button className="md:hidden" onClick={() => setActiveConversationId(null)}>
                  <ArrowLeftIcon className="w-5 h-5 text-gray-500" />
                </button>
                <img src={activePartner?.avatarUrl} alt="" className="w-9 h-9 rounded-full bg-gray-200" />
                <div>
                  <h3 className="font-bold text-dark text-sm">{activePartner?.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                     <span>Context:</span>
                     <span className="px-2 py-0.5 bg-secondary/30 rounded-full flex items-center gap-1">
                       <img src={activeChildContext?.avatar} className="w-3 h-3 rounded-full" />
                       {activeChildContext?.name}
                     </span>
                  </div>
                </div>
             </div>
             <button className="text-gray-400 hover:text-dark">
               <MoreVertical className="w-5 h-5" />
             </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
             {activeMessages.map(msg => {
               const isMe = msg.senderId === user?.id;
               return (
                 <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3 shadow-sm ${
                     isMe 
                       ? 'bg-primary text-white rounded-br-none' 
                       : 'bg-white text-dark rounded-bl-none border border-gray-100'
                   }`}>
                     <p className="text-sm leading-relaxed">{msg.content}</p>
                     <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-white/70' : 'text-gray-400'}`}>
                       {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                     </p>
                   </div>
                 </div>
               );
             })}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
             <form onSubmit={handleSendMessage} className="flex items-end gap-3 max-w-4xl mx-auto">
               <button type="button" className="p-3 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors">
                 <Paperclip className="w-5 h-5" />
               </button>
               <div className="flex-1 relative">
                 <input 
                   type="text" 
                   value={newMessage}
                   onChange={(e) => setNewMessage(e.target.value)}
                   className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                   placeholder={`Message ${activePartner?.name.split(' ')[0]}...`}
                 />
               </div>
               <Button type="submit" variant="primary" size="md" className="h-[46px] w-[46px] p-0 rounded-xl flex items-center justify-center">
                 <Send className="w-5 h-5 ml-0.5" />
               </Button>
             </form>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50/30 hidden md:flex">
           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
             <Send className="w-8 h-8 text-gray-300" />
           </div>
           <p>Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  );
};

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

export default Messages;
