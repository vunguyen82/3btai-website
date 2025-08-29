'use client';

import React, { useState } from 'react';

const Contact = () => {
  console.log('Contact component rendered!'); // Added for debugging
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleSubmit called!'); // Added for debugging
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(''); // Clear previous messages

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormMessage(result.message || 'Email sent successfully!');
        e.currentTarget.reset();
      } else {
        setFormMessage(result.message || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="light-card rounded-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to Transform Your Business?</h2>
            <p className="text-slate-600 mt-2">Let&apos;s talk about how AI can help you achieve your goals. Fill out the form below for a free, no-obligation consultation.</p>
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Your Name" name="name" required className="w-full bg-slate-100 text-slate-800 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
              <input type="text" placeholder="Company Name" name="company" required className="w-full bg-slate-100 text-slate-800 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
              <input type="email" placeholder="Email Address" name="email" required className="w-full bg-slate-100 text-slate-800 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
              <input type="tel" placeholder="Phone Number" name="phone" className="w-full bg-slate-100 text-slate-800 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none" />
            </div>
            <textarea placeholder="Tell us about your business needs..." name="message" rows={5} required className="w-full bg-slate-100 text-slate-800 p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none mb-6"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-sky-500 text-white font-bold px-8 py-4 rounded-lg text-lg w-full md:w-auto cta-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {formMessage && (
            <div id="form-message" className={`text-center mt-4 ${formMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {formMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;