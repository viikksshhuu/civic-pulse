import Link from 'next/link';
import { MapPin, Globe2, Share2, Globe, Share, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      {/* Main Footer */}
      <div className="container-civic py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-civic-blue rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading">CivicPulse</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs italic">
              "CivicPulse — Making cities work, one report at a time."
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Globe2, href: '#', label: 'Twitter' },
                { Icon: Share2, href: '#', label: 'Facebook' },
                { Icon: Globe, href: '#', label: 'Instagram' },
                { Icon: Share, href: '#', label: 'LinkedIn' },
                { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:bg-civic-blue hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Report */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Report</h4>
            <ul className="space-y-2">
              {[
                ['Report an Issue', '/report'],
                ['View Issue Map', '/map'],
                ['Browse All Issues', '/issues'],
                ['Track My Reports', '/dashboard'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2">
              {[
                ['Our Mission', '/about'],
                ['How It Works', '/how-it-works'],
                ['Government Portal', '/gov'],
                ['Press & Media', '/about'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                ['Help Centre', '/contact'],
                ['FAQ', '/how-it-works'],
                ['Contact Us', '/contact'],
                ['Privacy Policy', '/privacy'],
                ['Terms of Service', '/terms'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-civic py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © 2026 CivicPulse Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made with ❤️ for Indian cities.
          </p>
        </div>
      </div>
    </footer>
  );
}
