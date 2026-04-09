import Link from 'next/link';
import { ArrowRight, MapPin, Brain, Bell, Building, CheckCircle, Star, ChevronRight } from 'lucide-react';
import IssueCard from '@/components/ui/IssueCard';
import { SparklesCore } from '@/components/ui/sparkles';
import { mockIssues, testimonials, categories, stats } from '@/lib/mock-data';

/* ─────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-deep-navy">
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#1A4FD6"
          speed={0.5}
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/80 to-deep-navy/30 z-5" />

      {/* Animated pulse rings */}
      <div className="absolute right-1/3 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 rounded-full bg-civic-blue opacity-80" />
          <div className="absolute -inset-4 rounded-full border-2 border-civic-blue/60 animate-pulse-ring" />
          <div className="absolute -inset-8 rounded-full border-2 border-civic-blue/40 animate-pulse-ring" style={{ animationDelay: '0.5s' }} />
          <div className="absolute -inset-12 rounded-full border-2 border-civic-blue/20 animate-pulse-ring" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      <div className="container-civic relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8">
              <MapPin className="w-3.5 h-3.5 text-alert-amber" />
              Your city. Your voice. Your fix.
            </div>

            <h1 className="text-white text-5xl lg:text-6xl font-black leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Fix Your City.{' '}
              <span className="text-alert-amber">Start Here.</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg">
              Report potholes, broken lights, and civic problems in under 60 seconds. Track every issue until it's resolved. CivicPulse connects citizens directly to the people who can act.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/report" id="hero-report-cta" className="btn-primary text-base">
                Report an Issue <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/map" id="hero-map-cta" className="btn-outline text-base border-white/40 text-white hover:bg-white hover:text-deep-navy">
                View Issues Near Me
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
              {['No app download needed', 'Free for all citizens', 'Works on any device'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-resolution-green" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Floating issue card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="glass-card rounded-2xl p-5 w-80 animate-float shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/70 text-xs font-mono">CR-20264089</span>
                <span className="bg-alert-amber/20 text-alert-amber text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Under Review
                </span>
              </div>
              <div className="rounded-lg overflow-hidden mb-3 h-32">
                <img
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&q=80"
                  alt="Pothole on MG Road"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">Pothole on MG Road, Indiranagar</h3>
              <p className="text-white/60 text-xs mb-3">Ward 81 · Reported 2 days ago</p>

              {/* Mini stepper */}
              <div className="flex items-center gap-1">
                {['Reported', 'Acknowledged', 'In Progress', 'Resolved'].map((s, i) => (
                  <div key={s} className="flex items-center flex-1">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i <= 1 ? 'bg-civic-blue' : 'bg-white/20'}`} />
                    {i < 3 && <div className={`flex-1 h-0.5 ${i < 1 ? 'bg-civic-blue' : 'bg-white/20'}`} />}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {['Reported', 'Acknowledged', 'In Progress', 'Resolved'].map((s, i) => (
                  <span key={s} className={`text-xs ${i <= 1 ? 'text-white/80' : 'text-white/30'}`}
                    style={{ fontSize: '9px' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TRUST BADGES
───────────────────────────────────────── */
function TrustBadges() {
  const features = [
    { icon: '🗺️', title: 'Live Issue Map', desc: 'See every reported problem in your area on a real-time interactive map.' },
    { icon: '🧠', title: 'Smart Deduplication', desc: 'Our AI groups similar nearby reports so nothing gets lost or repeated.' },
    { icon: '🔔', title: 'Real-Time Updates', desc: 'Get notified by SMS or email the moment your issue status changes.' },
    { icon: '🏛️', title: 'Direct to Government', desc: 'Reports are routed automatically to the right municipal department.' },
  ];

  return (
    <section className="bg-white py-16 border-b border-mist">
      <div className="container-civic">
        <p className="section-label text-center mb-10">Why CivicPulse Works</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="font-semibold text-deep-navy text-base mb-2">{f.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   BENTO GRID FEATURES
───────────────────────────────────────── */
function BentoFeatures() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-civic">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Platform Features</p>
          <h2 className="text-4xl text-deep-navy mb-4">
            Everything you need to make your neighbourhood better.
          </h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            CivicPulse gives citizens the tools to speak up — and gives governments the data to act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature Cards */}
          {[
            {
              icon: '⚡',
              title: 'Report in 60 Seconds',
              body: 'A streamlined 4-step form. Take a photo, drop a pin, pick a category, and submit. No account needed to report.',
              tag: 'Zero friction',
              tagColor: 'text-civic-blue bg-blue-status-light',
            },
            {
              icon: '📋',
              title: 'Track Every Step',
              body: 'Every issue has a transparent lifecycle — from submission to assignment to resolution. You\'ll never wonder what happened.',
              tag: 'Full transparency',
              tagColor: 'text-resolution-green bg-resolution-green-light',
            },
            {
              icon: '👍',
              title: 'Upvote What Matters',
              body: 'Upvote an existing issue to signal urgency. Issues with the most votes surface to the top of the municipal queue.',
              tag: 'Community-powered',
              tagColor: 'text-amber-700 bg-alert-amber-light',
            },
            {
              icon: '📊',
              title: 'Data Your City Can Use',
              body: 'CivicPulse generates ward-level reports on issue density, resolution time, and category breakdown.',
              tag: 'For governments',
              tagColor: 'text-slate bg-mist',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-7 border border-mist card-hover"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-xl text-deep-navy font-bold mb-3">{card.title}</h3>
              <p className="text-slate text-sm leading-relaxed mb-5">{card.body}</p>
              <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${card.tagColor}`}>
                {card.tag}
              </span>
            </div>
          ))}

          {/* Large Bento Block — Resolved Counter */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-deep-navy p-8 flex flex-col justify-end min-h-64">
            <img
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1000&q=80"
              alt="City overview"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <div className="glass-card rounded-xl p-5 inline-block mb-4">
                <p className="text-4xl font-black text-white mb-1">
                  {stats.totalResolved.toLocaleString()}
                </p>
                <p className="text-white/70 text-sm">Issues Resolved</p>
                <p className="text-white/50 text-xs mt-1">Across 3 cities in the last 90 days</p>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-2xl font-bold text-alert-amber">{stats.totalReports.toLocaleString()}</p>
                  <p className="text-white/60 text-xs">Reports submitted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-resolution-green">{stats.avgResolutionDays} days</p>
                  <p className="text-white/60 text-xs">Avg. resolution time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CATEGORIES GRID
───────────────────────────────────────── */
function CategoriesSection() {
  const badgeColorMap: Record<string, string> = {
    amber: 'bg-alert-amber-light text-amber-800',
    green: 'bg-resolution-green-light text-green-800',
    red: 'bg-report-red-light text-red-800',
    blue: 'bg-blue-status-light text-blue-800',
    slate: 'bg-mist text-slate',
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-civic">
        <div className="text-center mb-14">
          <p className="section-label mb-3">12 Issue Categories</p>
          <h2 className="text-4xl text-deep-navy mb-4">What can you report?</h2>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            From dangerous roads to broken benches — if it affects your community, CivicPulse handles it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              href="/report"
              key={cat.name}
              className="group bg-off-white hover:bg-white border border-mist hover:border-civic-blue rounded-xl p-5 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColorMap[cat.badgeColor]}`}>
                  {cat.badge}
                </span>
              </div>
              <h3 className="font-semibold text-deep-navy text-sm mb-1.5 group-hover:text-civic-blue transition-colors">
                {cat.name}
              </h3>
              <p className="text-slate text-xs leading-relaxed mb-3">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate/70">⏱ {cat.avgDays}</span>
                <span className="text-xs text-civic-blue font-medium flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Report <ChevronRight className="w-3 h-3" />
                </span>
              </div>
              <div className="text-xs text-resolution-green font-semibold mt-2">Free</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   RECENT ISSUES PREVIEW
───────────────────────────────────────── */
function RecentIssues() {
  const featured = mockIssues.slice(0, 3);
  return (
    <section className="section-padding bg-off-white">
      <div className="container-civic">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-3">Live from the Community</p>
            <h2 className="text-4xl text-deep-navy">Recently reported issues</h2>
          </div>
          <Link href="/issues" className="hidden md:flex items-center gap-1 text-civic-blue font-semibold text-sm hover:text-deep-navy transition-colors">
            View all issues <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/issues" className="btn-outline">View All Issues</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-civic">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Citizen Stories</p>
          <h2 className="text-4xl text-deep-navy mb-4">Citizens who spoke up — and saw results.</h2>
          <p className="text-slate text-lg">Real people. Real issues. Real resolutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-off-white border border-mist rounded-2xl p-6 card-hover flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'fill-alert-amber text-alert-amber' : 'fill-mist text-mist'}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-mist">
                <div className="w-10 h-10 rounded-full bg-civic-blue flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-deep-navy text-sm">{t.name}</p>
                  <p className="text-slate text-xs">{t.city}</p>
                </div>
                <span className="ml-auto text-xs text-slate/60 bg-mist px-2 py-0.5 rounded-full">{t.service.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CTA BANNER
───────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-deep-navy py-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container-civic relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Your report could be the one that fixes it for everyone.
          </h2>
          <p className="text-white/70 text-lg mb-12">
            Join thousands of citizens who've already made their cities more liveable.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '⏱️', title: 'Submit in under 60 seconds', desc: 'No lengthy forms. Just a photo, a location, and a category.' },
              { icon: '📱', title: 'Works on any device', desc: 'Fully responsive. Report from your phone at the scene.' },
              { icon: '🔒', title: 'Your privacy is protected', desc: 'We never share your personal details with the public.' },
            ].map((item) => (
              <div key={item.title} className="text-left bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/report" className="btn-primary text-base bg-alert-amber hover:bg-amber-500 text-deep-navy">
              Report Your First Issue — It's Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-it-works" className="text-white/70 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
              See How It Works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="bg-off-white py-16 border-t-4 border-alert-amber">
      <div className="container-civic">
        <div className="max-w-xl mx-auto text-center">
          <p className="section-label mb-3">Weekly Digest</p>
          <h2 className="text-3xl text-deep-navy mb-4">Stay informed about your neighbourhood.</h2>
          <p className="text-slate text-base mb-8">
            Get a weekly digest of new issues in your area, resolution highlights, and civic updates from your ward. No spam — ever.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-mist rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30 focus:border-civic-blue bg-white"
              />
            </div>
            <button
              id="newsletter-submit"
              type="submit"
              className="btn-primary text-sm whitespace-nowrap"
            >
              Subscribe to Local Updates
            </button>
          </form>

          <p className="text-slate text-xs">
            📬 Sent every Sunday morning · 🔒 Your data stays private · ✅ {stats.subscribers.toLocaleString()}+ subscribers
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <BentoFeatures />
      <CategoriesSection />
      <RecentIssues />
      <TestimonialsSection />
      <CTABanner />
      <NewsletterSection />
    </>
  );
}
