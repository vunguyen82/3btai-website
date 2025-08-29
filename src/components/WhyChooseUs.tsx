import React from 'react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: 'Easy to Start',
      description: 'We handle the AI, you focus on your business. No technical expertise required on your end.',
    },
    {
      title: 'Proven ROI',
      description: 'Our solutions are built from the ground up to grow revenue and optimize your costs.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Our platform works for small startups and grows with you to support large enterprises.',
    },
    {
      title: 'All-Industry Ready',
      description: 'From retail and e-commerce to healthcare and services, our AI is adaptable.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The 3BTAI Advantage</h2>
          <p className="text-slate-600 mt-2">We&apos;re more than a technology provider; we&apos;re your partner in growth.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="text-center p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{advantage.title}</h3>
              <p className="text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
