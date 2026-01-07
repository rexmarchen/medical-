
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#005b82] mb-4">Clinic Blog & News</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Educational insights, clinic updates, and wellness tips for the Bloomington community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-6">
              <img src={`https://picsum.photos/800/600?blog${post.id}`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-[#00b2a9] uppercase tracking-widest mb-3">
              <span>{post.category}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-400 font-medium">{post.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#005b82] transition-colors mb-4 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-3">
              {post.excerpt}
            </p>
            <span className="text-[#005b82] font-semibold flex items-center">
              Read More <span className="ml-2 group-hover:ml-4 transition-all">→</span>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
