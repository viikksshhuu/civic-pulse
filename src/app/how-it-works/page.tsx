'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: '👀',
    title: 'Spot the Problem',
    description:
      'You notice a civic issue on your daily commute, walk, or in your neighbourhood — a pothole, broken light, garbage dump, or flooded road.',
  },
  {
    number: '02',
    icon: '📱',
    title: 'Report in 60 Seconds',
    description:
      'Open CivicPulse, drop a pin on the map, take a photo, pick a category, and submit. No account required. Works on any device.',
  },
  {
    number: '03',
    icon: '🔄',
    title: 'We Route It',
    description:
      'CivicPulse checks for duplicates using AI, then automatically forwards the report to the correct municipal department in your ward.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Track Until Fixed',
    description:
      'Follow your issue through every stage. Get notified by SMS or email when it\'s acknowledged, worked on, and finally resolved.',
  },
];

const faqs = [
  {
    q: 'Do I need to create an account?',
    a: 'No. You can report any civic issue without signing up. Creating an account lets you track reports across devices and receive status notifications.',
  },
  {
    q: 'What happens to my personal information?',
    a: 'Your identity is never shown publicly. Only anonymised data (e.g., "reported by a citizen") is visible on public issue pages. Your contact details are only used for status updates.',
  },
  {
    q: 'What if my report is a duplicate?',
    a: 'Our AI detects geographic and content similarity between reports. If a duplicate is found, you\'ll be prompted to upvote the existing report instead. Your upvote adds weight to help prioritise it.',
  },
  {
    q: 'How long does resolution take?',
    a: 'It depends on the issue type and municipality. Fallen trees typically resolve in 1–3 days; utility issues in 3–10 days; structural issues like broken pavements may take 14–30 days. You can always track the status in real time.',
  },
  {
    q: 'Can I report anonymously?',
    a: 'Yes. Anonymous reporting is fully supported. You don\'t need to provide any contact information. If you choose to report anonymously, you won\'t receive status notifications.',
  },
  {
    q: 'What if my issue is urgent?',
    a: 'Mark it as "Emergency" severity during submission. It will be flagged for immediate attention and placed at the top of the municipal queue. Issues with high upvote counts are also auto-escalated.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-mist rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-off-white transition-colors text-left gap-4"
      >
        <span className="font-semibold text-deep-navy text-sm">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-civic-blue flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 py-4 bg-off-white border-t border-mist">
          <p className="text-slate text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="bg-deep-navy py-16">
        <div className="container-civic text-center">
          <p className="section-label text-alert-amber mb-3">Simple by Design</p>
          <h1 className="text-5xl text-white mb-4">How CivicPulse Works</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From spotting a problem to seeing it fixed — four simple steps that put the power in your hands.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-civic max-w-4xl">
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex gap-6 md:gap-10 items-start">
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-civic-blue flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 bg-mist mt-3" style={{ height: '3rem' }} />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-mist p-6 mb-6 card-hover">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-xl text-deep-navy font-bold mb-2">{step.title}</h3>
                  <p className="text-slate leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/report" className="btn-primary text-base">
              Try It Now — Report an Issue →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-civic max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-4xl text-deep-navy">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-deep-navy py-16">
        <div className="container-civic text-center">
          <h2 className="text-3xl text-white mb-4">Ready to make a difference?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join 18,400+ citizens who've already reported issues and helped fix their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/report" className="btn-primary">Report an Issue →</Link>
            <Link href="/issues" className="btn-outline border-white/40 text-white hover:bg-white hover:text-deep-navy">Browse Open Issues</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
