'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home">
            <Image src="/logo-one-line.svg" alt="3BTAI Logo" width={120} height={40} />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-600 hover:text-sky-500 transition">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-sky-500 text-white font-semibold px-5 py-2 rounded-lg cta-button">
            Get Started
          </a>
        </div>
        <button id="mobile-menu-button" className="md:hidden text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block py-2 px-4 text-sm text-slate-600 hover:bg-slate-100" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="block py-4 px-4 text-center bg-sky-500 text-white font-semibold" onClick={() => setIsMenuOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
