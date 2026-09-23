import React, { useState, useEffect } from 'react';
import { Lightbulb, Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bulbCafeData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Must Try', href: '#featured' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-bulb-nav py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0e0e11]/90 via-[#0e0e11]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Wordmark with glowing bulb icon */}
          <a
            href="#home"
            className="flex items-center space-x-2.5 group cursor-pointer select-none"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#1c1c22] border border-[#FFC837]/40 flex items-center justify-center text-[#FFC837] group-hover:border-[#FFC837] transition-all duration-300 shadow-md">
              <Lightbulb className="w-5 h-5 text-[#FFC837]" />
              {/* Micro yellow glow ambient */}
              <div className="absolute inset-0 rounded-xl bg-[#FFC837]/10 filter blur-sm pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#FAF7F2] leading-none">
                Bulb <span className="text-[#FFC837]">Café</span>
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase font-semibold text-[#D1C7BA] mt-0.5">
                MANSAROVAR · JAIPUR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Zero-pill discipline, clean unboxed typography with hover accent) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-xs font-semibold uppercase tracking-wider text-[#D1C7BA] hover:text-[#FAF7F2] transition-colors py-1 group"
              >
                <span>{link.label}</span>
                {/* Clean hover indicator underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC837] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Direct Call Link */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 text-xs font-semibold text-[#D1C7BA] hover:text-[#FFC837] transition-colors py-2"
              title="Call Bulb Cafe"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC837]" />
              <span className="tabular-nums font-mono">{BUSINESS_INFO.phone}</span>
            </a>

            {/* Primary "Reserve a Table" CTA */}
            <button
              onClick={onReserveClick}
              className="relative px-5 py-2.5 rounded-lg bg-[#FFC837] hover:bg-[#F5A623] text-[#0e0e11] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#FFC837]/20 active:scale-95 flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0e0e11]" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Right Controls: Quick Reserve & Hamburger Menu */}
          <div className="flex md:hidden items-center space-x-2.5">
            <button
              onClick={onReserveClick}
              className="px-3.5 py-1.5 rounded-lg bg-[#FFC837] text-[#0e0e11] text-[11px] font-bold uppercase tracking-wider shadow-sm active:scale-95"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1c1c22] border border-[#FFC837]/25 text-[#FAF7F2] hover:text-[#FFC837] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-bulb-nav border-b border-[#FFC837]/20 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-semibold uppercase tracking-wider text-[#FAF7F2] hover:text-[#FFC837] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FFC837]/60" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-lg bg-[#1c1c22] border border-[#FFC837]/30 text-[#FAF7F2] text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#FFC837]" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onReserveClick();
              }}
              className="w-full py-3 rounded-lg bg-[#FFC837] text-[#0e0e11] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
