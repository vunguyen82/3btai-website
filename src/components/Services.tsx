import React from 'react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'Operations Optimization',
      description: 'Analyze workflows and apply AI to streamline processes, boost productivity, reduce costs, and minimize errors.',
      link: '#',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
      hoverColor: 'hover:text-sky-700',
      linkColor: 'text-sky-500',
      hoverLinkColor: 'hover:text-sky-600',
    },
    {
      title: 'Sales & Marketing Automation',
      description: 'Deploy AI-driven chatbots and campaigns to engage prospects, educate customers, generate content, and drive conversions around the clock.',
      link: '#',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      hoverColor: 'hover:text-indigo-700',
      linkColor: 'text-indigo-500',
      hoverLinkColor: 'hover:text-indigo-600',
    },
    {
      title: 'Customer Service Automation',
      description: 'Deliver fast, intelligent support that resolves issues, answers questions, and manages tickets seamlessly.',
      link: '#',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      hoverColor: 'hover:text-pink-700',
      linkColor: 'text-pink-500',
      hoverLinkColor: 'hover:text-pink-600',
    },
    {
      title: 'AI-Driven Analytics',
      description: 'Convert raw data into actionable insights that power smarter strategies and faster decisions.',
      link: '#',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      hoverColor: 'hover:text-teal-700',
      linkColor: 'text-teal-500',
      hoverLinkColor: 'hover:text-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our AI-Powered Services</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Solutions designed to deliver tangible results for your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className={`light-card group p-8 rounded-xl transform hover:-translate-y-2 transition-transform duration-300 ${service.bgColor}`}>
              <h3 className={`text-2xl font-bold ${service.textColor} ${service.hoverColor} transition mb-3`}>{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <Link href={service.link} className={`${service.linkColor} font-semibold ${service.hoverLinkColor}`}>
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
