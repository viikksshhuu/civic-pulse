'use client';

import { useState } from 'react';
import { MapPin, Navigation, ChevronRight, CheckCircle, Upload, ArrowLeft } from 'lucide-react';
import { categories } from '@/lib/mock-data';
import Link from 'next/link';

const STEPS = ['Location', 'Category & Details', 'Evidence', 'Contact'];

export default function ReportPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [severity, setSeverity] = useState('medium');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notify, setNotify] = useState('email');

  const issueId = 'CR-' + Math.floor(20260000 + Math.random() * 9999);

  function handleNext() {
    if (step < 4) setStep(step + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-mist p-10 text-center max-w-md w-full shadow-lg">
          <div className="w-16 h-16 bg-resolution-green-light rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-resolution-green" />
          </div>
          <h2 className="text-2xl text-deep-navy font-bold mb-2">Issue Reported!</h2>
          <p className="text-5xl font-mono font-bold text-civic-blue mb-2">{issueId}</p>
          <p className="text-slate text-sm mb-6">
            Your issue has been submitted and routed to the appropriate municipal department.
          </p>
          <div className="space-y-3">
            <Link href={`/issues/CR-20263847`} className="btn-primary w-full justify-center">
              Track This Issue
            </Link>
            <button onClick={() => { setSubmitted(false); setStep(1); setSelectedCategory(null); }} className="btn-outline w-full justify-center">
              Report Another Issue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="bg-deep-navy py-10">
        <div className="container-civic">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl text-white mb-1">Report a Civic Issue</h1>
          <p className="text-white/70">Takes about 60 seconds. We'll route it to the right department.</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-mist">
        <div className="container-civic py-5">
          <div className="flex items-center gap-0">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i + 1 < step ? 'bg-resolution-green text-white' :
                    i + 1 === step ? 'bg-civic-blue text-white' :
                    'bg-mist text-slate'
                  }`}>
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs mt-1 whitespace-nowrap ${i + 1 === step ? 'text-civic-blue font-semibold' : 'text-slate'}`}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-4 ${i + 1 < step ? 'bg-resolution-green' : 'bg-mist'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-civic py-10 max-w-2xl">
        <div className="bg-white rounded-2xl border border-mist p-8 shadow-sm">

          {/* STEP 1 — Location */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl text-deep-navy font-bold mb-1">Step 1: Where is the issue?</h2>
                <p className="text-slate text-sm">Drop a pin on the map or enter the address.</p>
              </div>

              <div className="rounded-xl overflow-hidden border border-mist h-52 bg-slate-100 relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Map placeholder"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 text-center">
                  <MapPin className="w-8 h-8 text-civic-blue mx-auto mb-2" />
                  <p className="text-deep-navy text-sm font-medium">Click to place pin</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-1.5">Address / Landmark</label>
                  <input
                    id="location-input"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. 12th Main, Indiranagar, Bengaluru"
                    className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 focus:border-civic-blue"
                  />
                </div>
                <button
                  id="use-location-btn"
                  type="button"
                  className="flex items-center gap-2 text-civic-blue text-sm font-medium border border-civic-blue rounded-xl px-4 py-2.5 hover:bg-civic-blue hover:text-white transition-all"
                >
                  <Navigation className="w-4 h-4" /> Use My Current Location
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — Category & Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl text-deep-navy font-bold mb-1">Step 2: What's the issue?</h2>
                <p className="text-slate text-sm">Select a category and describe the problem.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-3">Issue Category</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      id={`cat-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedCategory === cat.name
                          ? 'border-civic-blue bg-blue-status-light'
                          : 'border-mist hover:border-civic-blue/50 hover:bg-off-white'
                      }`}
                    >
                      <div className="text-2xl mb-1">{cat.icon}</div>
                      <div className={`text-xs leading-tight ${selectedCategory === cat.name ? 'text-civic-blue font-semibold' : 'text-slate'}`}>
                        {cat.name.split(' ')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-1.5">Issue Title <span className="text-slate font-normal">(max 80 chars)</span></label>
                <input
                  id="issue-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value.slice(0, 80))}
                  placeholder="e.g. Large pothole near 12th Main junction"
                  className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
                />
                <p className="text-xs text-slate mt-1">{title.length}/80</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-1.5">Description <span className="text-slate font-normal">(optional)</span></label>
                <textarea
                  id="issue-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue in more detail..."
                  className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 resize-none h-24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-2">Severity</label>
                <div className="grid grid-cols-4 gap-2">
                  {['low', 'medium', 'high', 'emergency'].map((s) => (
                    <button
                      key={s}
                      id={`severity-${s}`}
                      onClick={() => setSeverity(s)}
                      className={`py-2.5 rounded-xl border text-sm font-medium capitalize transition-all ${
                        severity === s
                          ? s === 'emergency' ? 'border-report-red bg-report-red-light text-red-800' :
                            s === 'high' ? 'border-alert-amber bg-alert-amber-light text-amber-800' :
                            'border-civic-blue bg-blue-status-light text-blue-800'
                          : 'border-mist text-slate hover:border-slate'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Evidence */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl text-deep-navy font-bold mb-1">Step 3: Add evidence</h2>
                <p className="text-slate text-sm">Photos help prioritise your report. Up to 5 images.</p>
              </div>

              <div className="border-2 border-dashed border-mist rounded-2xl p-10 text-center hover:border-civic-blue transition-colors cursor-pointer bg-off-white">
                <Upload className="w-10 h-10 text-slate mx-auto mb-3" />
                <p className="text-deep-navy font-medium text-sm mb-1">Drag & drop photos here</p>
                <p className="text-slate text-xs mb-3">or click to browse — JPG, PNG, WebP · max 5MB each</p>
                <button
                  id="upload-photos-btn"
                  className="btn-outline text-sm py-2 px-5"
                >
                  Choose Photos
                </button>
              </div>

              {/* AI Duplicate Check UI */}
              <div className="bg-blue-status-light border border-blue-status/30 rounded-xl p-4">
                <p className="text-blue-800 font-semibold text-sm mb-2">🧠 AI Similarity Check</p>
                <p className="text-blue-700 text-xs mb-3">We found 2 similar reports nearby. Are any of these your issue?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[mockIssues[0], mockIssues[5]].map((issue) => (
                    <Link key={issue.id} href={`/issues/${issue.id}`} className="bg-white rounded-lg p-3 border border-blue-status/20 hover:border-civic-blue transition-colors">
                      <img src={issue.imageUrl} alt="" className="w-full h-16 object-cover rounded mb-2" />
                      <p className="text-xs text-deep-navy font-medium line-clamp-2">{issue.title}</p>
                      <p className="text-xs text-civic-blue mt-1">▲ {issue.upvotes} upvotes · View →</p>
                    </Link>
                  ))}
                </div>
                <p className="text-blue-700 text-xs mt-3">Not your issue? Continue to submit a new report below.</p>
              </div>
            </div>
          )}

          {/* STEP 4 — Contact */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl text-deep-navy font-bold mb-1">Step 4: Stay updated</h2>
                <p className="text-slate text-sm">Optional — leave your contact to get status notifications.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-1.5">Phone or Email <span className="text-slate font-normal">(optional)</span></label>
                  <input
                    id="contact-input"
                    type="text"
                    placeholder="e.g. +91 9876543210 or you@example.com"
                    className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Notification Preference</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['sms', 'email', 'both', 'none'].map((n) => (
                      <button
                        key={n}
                        id={`notify-${n}`}
                        onClick={() => setNotify(n)}
                        className={`py-2.5 rounded-xl border text-sm font-medium capitalize transition-all ${notify === n ? 'border-civic-blue bg-blue-status-light text-civic-blue' : 'border-mist text-slate hover:border-slate'}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input id="consent-checkbox" type="checkbox" className="mt-1 w-4 h-4 text-civic-blue rounded" required />
                  <span className="text-sm text-slate leading-relaxed">
                    I confirm this issue is real and located in a public space. I understand that false reports may be removed.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-mist">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="btn-outline text-sm py-2.5">
                ← Back
              </button>
            ) : <div />}

            <button
              id={step === 4 ? 'submit-report-btn' : 'next-step-btn'}
              onClick={handleNext}
              className="btn-primary text-sm"
            >
              {step === 4 ? '✅ Submit Report' : `Next: ${STEPS[step]} →`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
