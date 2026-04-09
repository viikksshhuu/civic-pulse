import Link from 'next/link';
import { mockIssues } from '@/lib/mock-data';
import StatusBadge from '@/components/ui/StatusBadge';
import ProgressStepper from '@/components/ui/ProgressStepper';
import { PlusCircle, MapPin, Bell, BarChart3 } from 'lucide-react';

const myIssues = mockIssues.slice(0, 5);

export default function DashboardPage() {
  const resolved = myIssues.filter((i) => i.status === 'resolved').length;
  const open = myIssues.filter((i) => i.status === 'open').length;
  const inProgress = myIssues.filter((i) => i.status === 'in_progress').length;

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="bg-deep-navy py-12">
        <div className="container-civic">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-label text-alert-amber mb-2">Citizen Dashboard</p>
              <h1 className="text-4xl text-white mb-1">My Reports</h1>
              <p className="text-white/70">Track the issues you've submitted and upvoted.</p>
            </div>
            <Link href="/report" className="btn-primary hidden sm:flex">
              <PlusCircle className="w-4 h-4" /> New Report
            </Link>
          </div>
        </div>
      </div>

      <div className="container-civic py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Reports Submitted', value: myIssues.length, color: 'text-civic-blue', bg: 'bg-blue-status-light' },
            { label: 'Resolved', value: resolved, color: 'text-resolution-green', bg: 'bg-resolution-green-light' },
            { label: 'In Progress', value: inProgress, color: 'text-blue-600', bg: 'bg-blue-status-light' },
            { label: 'Awaiting Action', value: open, color: 'text-amber-700', bg: 'bg-alert-amber-light' },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-5 border border-mist`}>
              <p className={`text-3xl font-bold mb-1 ${s.color}`}>{s.value}</p>
              <p className="text-slate text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <PlusCircle className="w-5 h-5" />, label: 'Report New Issue', href: '/report', color: 'border-civic-blue text-civic-blue' },
            { icon: <MapPin className="w-5 h-5" />, label: 'View on Map', href: '/map', color: 'border-slate text-slate' },
            { icon: <BarChart3 className="w-5 h-5" />, label: 'Browse All Issues', href: '/issues', color: 'border-slate text-slate' },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`bg-white flex items-center gap-3 px-5 py-4 rounded-xl border ${action.color} hover:shadow-sm transition-all font-medium text-sm`}
            >
              {action.icon}
              {action.label}
            </Link>
          ))}
        </div>

        {/* Issues List */}
        <div className="bg-white rounded-2xl border border-mist overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
            <h2 className="font-semibold text-deep-navy">My Submitted Reports</h2>
            <Link href="/issues" className="text-civic-blue text-sm hover:underline">View All</Link>
          </div>
          <div className="divide-y divide-mist">
            {myIssues.map((issue) => (
              <Link key={issue.id} href={`/issues/${issue.id}`} className="flex gap-4 p-5 hover:bg-off-white transition-colors group">
                <img src={issue.imageUrl} alt={issue.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <StatusBadge status={issue.status} size="sm" />
                    <span className="text-xs text-slate font-mono">{issue.id}</span>
                  </div>
                  <h3 className="font-medium text-deep-navy text-sm leading-snug group-hover:text-civic-blue transition-colors line-clamp-1 mb-2">
                    {issue.title}
                  </h3>
                  <ProgressStepper status={issue.status} compact />
                </div>
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <p className="text-xs text-slate">{new Date(issue.reportedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                  <p className="text-xs text-slate mt-1">▲ {issue.upvotes}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mt-6 bg-white rounded-2xl border border-mist p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-civic-blue" />
            <h2 className="font-semibold text-deep-navy">Notification Preferences</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Issue status changes', sub: 'Get notified when any of your reports are updated' },
              { label: 'Weekly ward digest', sub: 'Summary of new issues in your area every Sunday' },
              { label: 'Upvote milestones', sub: 'When your report reaches 25, 50, or 100 upvotes' },
            ].map((pref) => (
              <label key={pref.label} className="flex items-start gap-4 cursor-pointer py-2">
                <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-civic-blue rounded" />
                <div>
                  <p className="text-sm font-medium text-deep-navy">{pref.label}</p>
                  <p className="text-xs text-slate mt-0.5">{pref.sub}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
