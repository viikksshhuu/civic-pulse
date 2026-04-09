'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/issues', label: 'Browse Issues' },
  { href: '/map', label: 'Live Map' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/gov', label: 'Gov Portal' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-mist shadow-sm">
      <div className="container-civic">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-deep-navy font-bold text-xl hover:text-civic-blue transition-colors"
          >
            <div className="w-8 h-8 bg-civic-blue rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading">CivicPulse</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate text-sm font-medium hover:text-civic-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="hidden md:inline-flex text-slate text-sm font-medium hover:text-civic-blue transition-colors"
            >
              My Reports
            </Link>
            <Link
              href="/report"
              className="btn-primary text-sm py-2 px-4"
            >
              Report an Issue
            </Link>
            <button
              className="md:hidden p-2 text-slate hover:text-deep-navy transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-mist px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-slate font-medium hover:text-civic-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className="block text-slate font-medium hover:text-civic-blue transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            My Reports
          </Link>
          <Link
            href="/report"
            className="btn-primary w-full justify-center text-sm"
            onClick={() => setIsOpen(false)}
          >
            Report an Issue
          </Link>
        </div>
      )}
    </header>
  );
}
