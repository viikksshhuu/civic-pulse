'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { mockIssues } from '@/lib/mock-data';
import StatusBadge from '@/components/ui/StatusBadge';
import Link from 'next/link';
import { X, SlidersHorizontal } from 'lucide-react';

// Dynamically import the map to avoid SSR issues with Leaflet
const MapView = dynamic(() => import('@/components/map/MapView'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-ink">
      <div className="text-white/60 text-sm">Loading map...</div>
    </div>
  ),
});

export default function MapPage() {
  const [selectedIssue, setSelectedIssue] = useState<(typeof mockIssues)[0] | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockIssues.filter((i) =>
    statusFilter === 'all' ? true : i.status === statusFilter
  );

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 4rem)' }}>
      {/* Full-screen map */}
      <MapView
        issues={filtered}
        onSelectIssue={setSelectedIssue}
      />

      {/* Filter Toggle Button */}
      <button
        id="map-filter-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2.5 text-sm font-medium text-deep-navy hover:bg-off-white transition-colors"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {/* Legend */}
      <div className="absolute bottom-6 left-4 z-20 bg-white rounded-xl shadow-lg p-4 text-xs">
        <p className="font-semibold text-deep-navy mb-2 uppercase tracking-wider text-[10px]">Legend</p>
        {[
          { color: 'bg-alert-amber', label: 'Open' },
          { color: 'bg-blue-status', label: 'In Progress' },
          { color: 'bg-resolution-green', label: 'Resolved' },
          { color: 'bg-report-red', label: 'Emergency' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2 mb-1.5">
            <div className={`w-3 h-3 rounded-full ${color}`} />
            <span className="text-slate">{label}</span>
          </div>
        ))}
      </div>

      {/* Report Here button */}
      <Link
        href="/report"
        id="map-report-btn"
        className="absolute top-4 right-4 z-20 btn-primary text-sm py-2.5"
      >
        + Report Issue Here
      </Link>

      {/* Filter Sidebar */}
      {sidebarOpen && (
        <div className="absolute top-0 left-0 h-full w-72 bg-white shadow-2xl z-30 flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-mist">
            <h2 className="font-semibold text-deep-navy">Filter Issues</h2>
            <button onClick={() => setSidebarOpen(false)} className="text-slate hover:text-deep-navy">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-5 flex-1 overflow-y-auto">
            <div className="mb-5">
              <label className="block text-xs font-semibold text-deep-navy uppercase tracking-wider mb-3">Status</label>
              <div className="space-y-2">
                {['all', 'open', 'acknowledged', 'in_progress', 'resolved'].map((s) => (
                  <button
                    key={s}
                    id={`map-filter-${s}`}
                    onClick={() => setStatusFilter(s)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm capitalize transition-all ${
                      statusFilter === s ? 'bg-civic-blue text-white' : 'hover:bg-off-white text-slate'
                    }`}
                  >
                    {s.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-mist pt-5">
              <p className="text-xs font-semibold text-deep-navy uppercase tracking-wider mb-3">Showing {filtered.length} issues</p>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filtered.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => { setSelectedIssue(issue); setSidebarOpen(false); }}
                    className="w-full text-left bg-off-white hover:bg-mist rounded-lg p-3 transition-colors"
                  >
                    <p className="text-xs font-medium text-deep-navy line-clamp-1 mb-1">{issue.title}</p>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={issue.status} size="sm" />
                      <span className="text-xs text-slate">▲ {issue.upvotes}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Issue Preview Card */}
      {selectedIssue && (
        <div className="absolute bottom-6 right-4 z-20 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative">
            <img src={selectedIssue.imageUrl} alt={selectedIssue.title} className="w-full h-36 object-cover" />
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-2 right-2 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-2">
              <StatusBadge status={selectedIssue.status} size="sm" />
            </div>
          </div>
          <div className="p-4">
            <p className="text-xs text-slate mb-1">{selectedIssue.categoryIcon} {selectedIssue.category}</p>
            <h3 className="font-semibold text-deep-navy text-sm leading-snug mb-2 line-clamp-2">{selectedIssue.title}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-slate">
                <span>▲ {selectedIssue.upvotes}</span>
                <span>💬 {selectedIssue.comments}</span>
              </div>
              <Link href={`/issues/${selectedIssue.id}`} className="text-civic-blue text-xs font-semibold hover:underline">
                View Full Report →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
