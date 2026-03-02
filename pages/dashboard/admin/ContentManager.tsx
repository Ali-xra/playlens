
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../../../mocks/mockData';
import Button from '../../../components/UI/Button';
import { BlogPost } from '../../../types';

const ContentManager: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_BLOG_POSTS);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/dashboard/admin/content/edit/${id}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-heading font-bold text-dark">Content Manager</h1>
          <p className="text-gray-500">Create, edit, and publish blog articles.</p>
        </div>
        <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4"/>} onClick={() => navigate('/dashboard/admin/content/new')}>
          New Article
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
                <img src={post.imageUrl} alt={post.title} className="w-24 h-24 rounded-xl object-cover" />
                
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-secondary/30 text-primary-dark text-xs font-bold rounded w-fit mx-auto md:mx-0">
                            {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1">{post.excerpt}</p>
                    <div className="mt-2 text-xs text-gray-400">
                        Author: {post.author}
                    </div>
                </div>

                <div className="flex gap-2">
                    <button 
                        onClick={() => handleEdit(post.id)}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                        title="Edit"
                    >
                        <Edit2 className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => window.open(`/#/blog/${post.id}`, '_blank')}
                        className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Preview"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </button>
                     <button 
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        ))}
        {posts.length === 0 && (
            <div className="p-8 text-center text-gray-500 bg-white rounded-2xl border border-dashed border-gray-200">
                No articles found. Start writing!
            </div>
        )}
      </div>
    </div>
  );
};

export default ContentManager;
