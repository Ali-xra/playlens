
import React, { useState } from 'react';
import { MOCK_BLOG_POSTS } from '../mocks/mockData';
import Button from '../components/UI/Button';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const posts = MOCK_BLOG_POSTS.slice(0, visibleCount);
  const totalPosts = MOCK_BLOG_POSTS.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, totalPosts));
  };

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary-dark mb-4">PlayLens Insights</h1>
          <p className="text-gray-600">The latest research, tips, and stories on unlocking human potential through play.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow border border-gray-100 flex flex-col h-full group animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-dark uppercase tracking-wide">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-heading font-bold text-primary-dark mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                    </h2>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold text-sm hover:text-primary-dark mt-auto group/btn">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < totalPosts && (
            <div className="mt-16 text-center">
                <Button variant="outline" onClick={handleLoadMore}>Load More Articles</Button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
