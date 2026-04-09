import { mockIssues } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StatusBadge from '@/components/ui/StatusBadge';
import ProgressStepper from '@/components/ui/ProgressStepper';
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, MapPin, Calendar, User, Bell } from 'lucide-react';

export default async function IssueDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const issue = mockIssues.find((i) => i.id === id);

  if (!issue) notFound();

  const severityColors: Record<string, string> = {
    low: 'text-slate bg-mist',
    medium: 'text-amber-700 bg-alert-amber-light',
    high: 'text-red-700 bg-report-red-light',
    emergency: 'text-red-900 bg-report-red-light font-bold',
  };

  const mockComments = [
    { author: 'Citizen #2089', time: '2 days ago', text: "This same pothole damaged my car tyre last week. It's gotten much worse." },
    { author: 'Citizen #5934', time: '1 day ago', text: 'Can we escalate this? Upvoting — this needs immediate attention.' },
    { author: 'Citizen #7712', time: '18 hours ago', text: 'Saw a BBMP crew surveying the area this morning. Fingers crossed!' },
  ];

  return (
    <div className="bg-off-white min-h-screen">
      {/* Back nav */}
      <div className="bg-white border-b border-mist">
        <div className="container-civic py-3">
          <Link href="/issues" className="inline-flex items-center gap-2 text-slate text-sm hover:text-civic-blue transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Issues
          </Link>
        </div>
      </div>

      <div className="container-civic py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <StatusBadge status={issue.status} />
                <span className="text-slate text-sm">{issue.categoryIcon} {issue.category}</span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase ${severityColors[issue.severity]}`}>
                  {issue.severity}
                </span>
              </div>
              <h1 className="text-3xl text-deep-navy leading-tight mb-2">{issue.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-slate text-sm">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-civic-blue" />{issue.ward}, {issue.city}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(issue.reportedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{issue.reportedBy}</span>
              </div>
            </div>

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden border border-mist shadow-sm">
              <img src={issue.imageUrl} alt={issue.title} className="w-full h-72 object-cover" />
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl border border-mist p-6">
              <h2 className="text-lg text-deep-navy font-semibold mb-3">Issue Description</h2>
              <p className="text-slate leading-relaxed">{issue.description}</p>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-xl border border-mist p-6">
              <h2 className="text-lg text-deep-navy font-semibold mb-6">Issue Timeline</h2>
              <div className="mb-6">
                <ProgressStepper status={issue.status} />
              </div>
              <div className="space-y-5 mt-6 border-t border-mist pt-6">
                {issue.timeline.map((event, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${
                        event.completed && !event.current ? 'bg-resolution-green' :
                        event.current ? 'bg-civic-blue' :
                        'bg-mist text-slate'
                      }`}>
                        {event.completed && !event.current ? '✓' : idx + 1}
                      </div>
                      {idx < issue.timeline.length - 1 && (
                        <div className={`w-0.5 flex-1 mt-2 ${event.completed ? 'bg-resolution-green' : 'bg-mist'}`} style={{ minHeight: '2rem' }} />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold text-sm ${event.completed ? 'text-deep-navy' : 'text-slate'}`}>{event.label}</span>
                        {event.current && (
                          <span className="text-xs bg-civic-blue text-white px-2 py-0.5 rounded-full">Current</span>
                        )}
                      </div>
                      <p className={`text-sm mt-0.5 font-mono ${event.completed ? 'text-slate' : 'text-slate/50'}`}>{event.timestamp}</p>
                      {event.department && (
                        <p className="text-xs text-civic-blue mt-1">📋 {event.department}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-xl border border-mist p-6">
              <h2 className="text-lg text-deep-navy font-semibold mb-5">
                Community Updates <span className="text-slate font-normal text-sm">({mockComments.length})</span>
              </h2>
              <div className="space-y-5">
                {mockComments.map((c, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-slate text-xs font-bold flex-shrink-0">
                      {c.author[8]}
                    </div>
                    <div className="flex-1 bg-off-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-deep-navy text-sm">{c.author}</span>
                        <span className="text-slate text-xs">{c.time}</span>
                      </div>
                      <p className="text-slate text-sm">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment form */}
              <div className="mt-5 pt-5 border-t border-mist">
                <textarea
                  placeholder="Add a community update or comment..."
                  className="w-full border border-mist rounded-xl px-4 py-3 text-sm text-slate focus:outline-none focus:ring-2 focus:ring-civic-blue/30 resize-none h-24"
                />
                <button className="btn-primary text-sm mt-2">Post Update</button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* Upvote CTA */}
            <div className="bg-white rounded-xl border border-mist p-5 text-center">
              <p className="text-slate text-sm mb-3">Signal urgency. Support this report.</p>
              <button id="upvote-btn" className="w-full bg-off-white border-2 border-civic-blue text-civic-blue hover:bg-civic-blue hover:text-white font-bold text-lg rounded-xl py-4 transition-all duration-200 flex items-center justify-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                Upvote ({issue.upvotes})
              </button>
              <p className="text-xs text-slate/60 mt-2">Upvoting helps prioritise this issue.</p>
            </div>

            {/* Metadata */}
            <div className="bg-white rounded-xl border border-mist p-5">
              <h3 className="font-semibold text-deep-navy text-sm mb-4 uppercase tracking-wider">Issue Details</h3>
              <div className="space-y-3">
                {[
                  { label: 'Issue ID', value: issue.id, mono: true },
                  { label: 'Category', value: `${issue.categoryIcon} ${issue.category}` },
                  { label: 'Ward', value: issue.ward },
                  { label: 'City', value: issue.city },
                  { label: 'Severity', value: issue.severity },
                  { label: 'Upvotes', value: issue.upvotes.toString() },
                  { label: 'Comments', value: issue.comments.toString() },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-start gap-2">
                    <span className="text-slate text-xs">{row.label}</span>
                    <span className={`text-xs font-medium text-deep-navy text-right ${row.mono ? 'font-mono' : ''}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-xl border border-mist p-5">
              <h3 className="font-semibold text-deep-navy text-sm mb-4">Share This Issue</h3>
              <div className="space-y-2">
                {[
                  { label: '📱 Share on WhatsApp', color: 'hover:bg-green-50 hover:border-green-300' },
                  { label: '🐦 Share on Twitter/X', color: 'hover:bg-blue-50 hover:border-blue-300' },
                  { label: '🔗 Copy Link', color: 'hover:bg-mist' },
                ].map((btn) => (
                  <button key={btn.label} className={`w-full text-left text-sm text-slate border border-mist rounded-lg px-4 py-2.5 transition-all ${btn.color}`}>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div className="bg-civic-blue rounded-xl p-5">
              <div className="flex items-center gap-2 text-white mb-2">
                <Bell className="w-4 h-4" />
                <span className="font-semibold text-sm">Subscribe to Updates</span>
              </div>
              <p className="text-white/70 text-xs mb-3">Get notified when the status changes.</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 mb-2"
              />
              <button className="w-full bg-white text-civic-blue font-semibold text-sm py-2 rounded-lg hover:bg-white/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
