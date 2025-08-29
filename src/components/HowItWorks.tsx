import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We start by understanding your unique business goals and challenges.',
    },
    {
      step: 2,
      title: 'Implementation',
      description: 'Our expert team handles the entire technical setup and integration for you.',
    },
    {
      step: 3,
      title: 'Growth',
      description: 'You see measurable results as AI begins to drive demand and optimize costs.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get Started in 3 Simple Steps</h2>
          <p className="text-slate-600 mt-2">We make adopting AI straightforward and hassle-free.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-300"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-block bg-slate-50 px-2">
                  <div className="w-16 h-16 bg-white border-2 border-sky-500 rounded-full flex items-center justify-center text-2xl font-bold text-sky-500 mb-4">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
