
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MOCK_BLOG_POSTS } from '../mocks/mockData';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Button from '../components/UI/Button';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <article className="pt-32 pb-20 bg-white min-h-screen">
      {/* Hero Header */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>
        
        <div className="flex items-center gap-2 mb-6">
            <span className="bg-secondary/30 text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                {post.category}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-gray-500 text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
            </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-4">
                <img 
                    src={post.authorAvatar || `https://ui-avatars.com/api/?name=${post.author}&background=random`} 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <div className="font-bold text-dark">{post.author}</div>
                    <div className="text-xs text-gray-500">{post.authorRole}</div>
                </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar className="w-4 h-4" /> {post.date}
            </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 md:px-6 max-w-5xl mb-12">
        <div className="rounded-3xl overflow-hidden shadow-card aspect-video">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary-dark prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark">
            {post.content}
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-center font-heading font-bold text-dark mb-6">Share this article</h3>
            <div className="flex justify-center gap-4">
                <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-100 hover:bg-sky-100 hover:text-sky-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-16 bg-cream rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-secondary/50">
             <img 
                src={post.authorAvatar} 
                alt={post.author} 
                className="w-20 h-20 rounded-full border-2 border-white shadow-sm"
            />
            <div className="text-center md:text-left">
                <h4 className="font-heading font-bold text-primary-dark text-lg mb-1">About {post.author}</h4>
                <p className="text-gray-500 text-sm mb-4">{post.authorRole}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate about unlocking human potential. Writing about the intersection of neuroscience, play, and child development.
                </p>
            </div>
        </div>
        
        {/* Next/Prev Navigation could go here */}
        <div className="mt-12 text-center">
            <Link to="/blog">
                <Button variant="outline">View All Articles</Button>
            </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
