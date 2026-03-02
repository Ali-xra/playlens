
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon, AlignLeft } from 'lucide-react';
import Button from '../../../components/UI/Button';
import { MOCK_BLOG_POSTS } from '../../../mocks/mockData';
import { BlogPost } from '../../../types';

const ArticleEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    category: '',
    author: '',
    excerpt: '',
    imageUrl: '',
    content: null, // Simplified for mock
    readTime: '5 min read',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  });

  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    if (isEditMode && id) {
      const post = MOCK_BLOG_POSTS.find(p => p.id === id);
      if (post) {
        setFormData(post);
        // Extract text from ReactNode for editing simulation (simplified)
        // In a real app, this would be a rich text editor state
        setTextContent("Existing content loaded..."); 
      }
    }
  }, [isEditMode, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    alert(`Article ${isEditMode ? 'updated' : 'created'} successfully! (Mock Action)`);
    navigate('/dashboard/admin/content');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/dashboard/admin/content" className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-heading font-bold text-dark">
              {isEditMode ? 'Edit Article' : 'New Article'}
            </h1>
            <p className="text-gray-500 text-sm">
              {isEditMode ? 'Update existing content' : 'Draft a new blog post'}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => navigate('/dashboard/admin/content')}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit} leftIcon={<Save className="w-4 h-4" />}>
            {isEditMode ? 'Update' : 'Publish'}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        
        {/* Title */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Article Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-heading font-bold text-lg"
            placeholder="Enter title here..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
            >
              <option value="">Select Category</option>
              <option value="Child Development">Child Development</option>
              <option value="Neurodiversity">Neurodiversity</option>
              <option value="Parenting Science">Parenting Science</option>
              <option value="Digital Wellness">Digital Wellness</option>
              <option value="EdTech Philosophy">EdTech Philosophy</option>
            </select>
          </div>

          {/* Author */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Author Name"
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Short Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Brief summary for the blog card..."
          />
        </div>

        {/* Hero Image */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <ImageIcon className="w-4 h-4" /> Hero Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="https://..."
          />
          {formData.imageUrl && (
            <div className="mt-2 h-40 w-full rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        {/* Main Content (Simulated Rich Text) */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <AlignLeft className="w-4 h-4" /> Article Content
          </label>
          <div className="border border-gray-200 rounded-xl overflow-hidden">
             <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex gap-2">
                <button type="button" className="p-1 hover:bg-gray-200 rounded font-bold">B</button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded italic">I</button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded underline">U</button>
             </div>
             <textarea
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 focus:outline-none resize-y"
                placeholder="Write your article here..."
            />
          </div>
          <p className="text-xs text-gray-400">Markdown supported.</p>
        </div>

      </form>
    </div>
  );
};

export default ArticleEditor;
