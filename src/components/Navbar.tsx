"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Tent, Map as MapIcon, Info, Palette, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'プレーパークとは', href: '/about', icon: <Tent size={18} /> },
    { name: '作品ギャラリー', href: '/gallery', icon: <Palette size={18} /> },
    { name: 'ボランティア', href: '/volunteer', icon: <Heart size={18} /> },
    { name: 'アクセス', href: '/access', icon: <Map size={18} /> },
    { name: '私たちについて', href: '/members', icon: <Info size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-morphism py-3 shadow-premium' : 'bg-transparent py-6'
    }`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary organic-shape flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Tent size={24} />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-secondary">
            こだいら<span className="text-primary">自由遊びの会</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-semibold text-secondary-light hover:text-primary transition-colors"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary py-2 px-5 text-sm">
            お問い合わせ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-secondary transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="text-primary">{link.icon}</div>
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="btn-primary justify-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      )}

      <style jsx>{`
        .glass-morphism {
          background: rgba(253, 252, 248, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(45, 90, 39, 0.1);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
