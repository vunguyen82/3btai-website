import React from 'react';
import Link from 'next/link';

const Blog = () => {
  const posts = [
    {
      category: 'Marketing',
      title: '5 Ways AI Can Revolutionize Your Marketing Strategy in 2025',
      link: '#',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-500',
      hoverColor: 'group-hover:text-sky-600',
      badgeText: 'AI Trends',
    },
    {
      category: 'Customer Service',
      title: 'Is an AI Chatbot Right for Your Small Business?',
      link: '#',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-500',
      hoverColor: 'group-hover:text-indigo-600',
      badgeText: 'Customer Service',
    },
    {
      category: 'Analytics',
      title: 'Beyond Spreadsheets: Making Data-Driven Decisions with AI',
      link: '#',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-500',
      hoverColor: 'group-hover:text-pink-600',
      badgeText: 'Data Analytics',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Insights from Our Experts</h2>
          <p className="text-slate-600 mt-2">Stay ahead of the curve with the latest in AI for business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="light-card rounded-xl overflow-hidden group">
              <div className={`w-full h-48 ${post.bgColor} flex items-center justify-center p-4`}>
                <span className={`text-3xl font-bold ${post.textColor} text-center`}>{post.badgeText}</span>
              </div>
              <div className="p-6">
                <p className={`text-sm ${post.textColor} mb-2 font-semibold`}>{post.category}</p>
                <h3 className={`text-xl font-bold text-slate-800 mb-3 ${post.hoverColor} transition`}>{post.title}</h3>
                <Link href={post.link} className="text-slate-600 hover:text-slate-900 font-semibold">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#" className="border border-sky-500 text-sky-500 font-semibold px-6 py-3 rounded-lg hover:bg-sky-500 hover:text-white transition">
            Visit Our Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
