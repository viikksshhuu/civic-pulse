'use client';

import { useState } from 'react';
import { mockIssues, stats } from '@/lib/mock-data';
import StatusBadge from '@/components/ui/StatusBadge';
import { LogIn, CheckCircle, Clock, AlertTriangle, BarChart3, Download, RefreshCw } from 'lucide-react';

export default function GovPortalPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-deep-navy flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-civic-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl text-deep-navy font-bold mb-1">Government Portal</h1>
            <p className="text-slate text-sm">For authorised municipal officers only</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1.5">Official Email</label>
              <input
                id="gov-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="officer@bbmp.gov.in"
                className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-navy mb-1.5">Password</label>
              <input
                id="gov-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-mist rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
              />
            </div>
            <button
              id="gov-login-btn"
              onClick={() => setLoggedIn(true)}
              className="btn-primary w-full justify-center"
            >
              Sign In to Portal
            </button>
          </div>

          <p className="text-center text-xs text-slate mt-5">
            Demo: click Sign In with any credentials
          </p>
        </div>
      </div>
    );
  }

  const openIssues = mockIssues.filter((i) => i.status === 'open').length;
  const resolvedToday = mockIssues.filter((i) => i.status === 'resolved').length;
  const inProgress = mockIssues.filter((i) => i.status === 'in_progress').length;
  const emergency = mockIssues.filter((i) => i.severity === 'emergency').length;

  return (
    <div className="bg-off-white min-h-screen">
      {/* Header */}
      <div className="bg-deep-navy py-8">
        <div className="container-civic">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-label text-alert-amber mb-1">BBMP Ward Officer Dashboard</p>
              <h1 className="text-3xl text-white">Issue Management Portal</h1>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <Download className="w-4 h-4" /> Export CSV
              </button>
              <button
                id="gov-logout-btn"
                onClick={() => setLoggedIn(false)}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-civic py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { label: 'Open Issues', value: openIssues, icon: <Clock className="w-5 h-5" />, bg: 'bg-alert-amber-light', text: 'text-amber-800', border: 'border-alert-amber/30' },
            { label: 'Resolved Today', value: resolvedToday, icon: <CheckCircle className="w-5 h-5" />, bg: 'bg-resolution-green-light', text: 'text-green-800', border: 'border-resolution-green/30' },
            { label: 'In Progress', value: inProgress, icon: <RefreshCw className="w-5 h-5" />, bg: 'bg-blue-status-light', text: 'text-blue-800', border: 'border-blue-status/30' },
            { label: 'Emergency', value: emergency, icon: <AlertTriangle className="w-5 h-5" />, bg: 'bg-report-red-light', text: 'text-red-800', border: 'border-report-red/30' },
          ].map((kpi) => (
            <div key={kpi.label} className={`${kpi.bg} border ${kpi.border} rounded-2xl p-5`}>
              <div className={`${kpi.text} mb-2`}>{kpi.icon}</div>
              <p className={`text-3xl font-bold ${kpi.text} mb-1`}>{kpi.value}</p>
              <p className={`text-sm ${kpi.text} opacity-80`}>{kpi.label}</p>
            </div>
          ))}
        </div>

        {/* Analytics Summary */}
        <div className="bg-white rounded-2xl border border-mist p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <BarChart3 className="w-5 h-5 text-civic-blue" />
            <h2 className="font-semibold text-deep-navy">Ward Performance Overview</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { metric: 'Avg. Response Time', value: '18.4 hours', target: '≤ 48h', ok: true },
              { metric: 'Resolution Rate (30d)', value: '42%', target: '≥ 40%', ok: true },
              { metric: 'SLA Breaches', value: '3', target: '0 target', ok: false },
            ].map((m) => (
              <div key={m.metric} className="bg-off-white rounded-xl p-4">
                <p className="text-xs text-slate mb-1">{m.metric}</p>
                <p className="text-2xl font-bold text-deep-navy mb-1">{m.value}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${m.ok ? 'bg-resolution-green-light text-green-800' : 'bg-report-red-light text-red-800'}`}>
                  Target: {m.target}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Issue Queue */}
        <div className="bg-white rounded-2xl border border-mist overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
            <h2 className="font-semibold text-deep-navy">Issue Queue</h2>
            <div className="flex gap-2">
              <select className="text-xs border border-mist rounded-lg px-2 py-1.5 bg-off-white text-slate focus:outline-none">
                <option>All Wards</option>
                <option>Ward 81</option>
                <option>Ward 68</option>
              </select>
              <select className="text-xs border border-mist rounded-lg px-2 py-1.5 bg-off-white text-slate focus:outline-none">
                <option>Sort: Most Upvoted</option>
                <option>Sort: Oldest</option>
                <option>Sort: Severity</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-off-white border-b border-mist">
                <tr>
                  {['ID', 'Issue', 'Category', 'Ward', 'Upvotes', 'Status', 'Severity', 'Actions'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-slate uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-mist">
                {mockIssues.map((issue) => (
                  <tr key={issue.id} className="hover:bg-off-white transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-slate">{issue.id}</td>
                    <td className="px-4 py-3 max-w-xs">
                      <p className="text-deep-navy text-xs font-medium line-clamp-2">{issue.title}</p>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate whitespace-nowrap">{issue.categoryIcon} {issue.category.split(' ')[0]}</td>
                    <td className="px-4 py-3 text-xs text-slate whitespace-nowrap">{issue.ward.split(' ')[1]}</td>
                    <td className="px-4 py-3 text-xs font-semibold text-civic-blue">▲ {issue.upvotes}</td>
                    <td className="px-4 py-3"><StatusBadge status={issue.status} size="sm" /></td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold uppercase ${
                        issue.severity === 'emergency' ? 'text-report-red' :
                        issue.severity === 'high' ? 'text-amber-700' :
                        'text-slate'
                      }`}>{issue.severity}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <button className="text-xs bg-civic-blue text-white px-2 py-1 rounded-lg hover:bg-deep-navy transition-colors whitespace-nowrap">Assign</button>
                        <button className="text-xs bg-resolution-green text-white px-2 py-1 rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">Resolve</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
