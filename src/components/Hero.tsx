import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-0">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
          <span className="gradient-text">AI that grows your business</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 md:mb-12">
          Simple. Practical. Results-driven.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="light-card group p-6 rounded-xl bg-sky-50 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold text-sky-600 group-hover:text-sky-700 transition mb-2">Drive Demand</h3>
            <p className="text-slate-600">Attract and engage more of the right customers with intelligent automation.</p>
          </div>
          <div className="light-card group p-6 rounded-xl bg-indigo-50 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold text-indigo-600 group-hover:text-indigo-700 transition mb-2">Boost Revenue</h3>
            <p className="text-slate-600">Increase the value of every customer relationship through personalization.</p>
          </div>
          <div className="light-card group p-6 rounded-xl bg-pink-50 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-bold text-pink-600 group-hover:text-pink-700 transition mb-2">Optimize Costs</h3>
            <p className="text-slate-600">Work smarter, streamline operations, and run leaner with AI-powered efficiency.</p>
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          <a href="#contact" className="bg-sky-500 text-white font-bold px-8 py-4 rounded-lg text-lg inline-block cta-button">
            Request a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
