'use client';

import { useState } from 'react';
import IssueCard from '@/components/ui/IssueCard';
import { mockIssues } from '@/lib/mock-data';
import type { IssueStatus } from '@/lib/mock-data';
import { Grid, List, Map, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'All', 'Potholes', 'Street Lights', 'Waste & Dumping', 'Waterlogging',
  'Fallen Trees', 'Pavements', 'Water Supply', 'Encroachment',
  'Stray Animals', 'Graffiti', 'Public Transit', 'Parks & Spaces',
];

const categoryToKey: Record<string, string[]> = {
  Potholes: ['Potholes'],
  'Street Lights': ['Street Light'],
  'Waste & Dumping': ['Dumping', 'Waste'],
  Waterlogging: ['Waterlogging'],
  'Fallen Trees': ['Fallen'],
  Pavements: ['Pavements'],
  'Water Supply': ['Water Supply'],
  Encroachment: ['Encroachment'],
  'Stray Animals': ['Stray'],
  Graffiti: ['Graffiti'],
  'Public Transit': ['Transit'],
  'Parks & Spaces': ['Parks'],
};

export default function IssuesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = mockIssues
    .filter((issue) => {
      if (activeCategory !== 'All') {
        const keys = categoryToKey[activeCategory] || [];
        const match = keys.some((k) => issue.category.toLowerCase().includes(k.toLowerCase()));
        if (!match) return false;
      }
      if (statusFilter !== 'all' && issue.status !== statusFilter) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'upvotes') return b.upvotes - a.upvotes;
      if (sortBy === 'recent') return new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime();
      return 0;
    });

  return (
    <div className="bg-off-white min-h-screen">
      {/* Page Header */}
      <div className="bg-deep-navy py-12">
        <div className="container-civic">
          <p className="section-label text-alert-amber mb-2">Community Reports</p>
          <h1 className="text-4xl text-white mb-2">All Reported Issues</h1>
          <p className="text-white/70 text-lg">
            Browse, upvote, and track civic problems reported by citizens like you.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="bg-white border-b border-mist sticky top-16 z-30">
        <div className="container-civic">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-civic-blue text-white shadow-sm'
                    : 'bg-off-white text-slate hover:bg-mist'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters + View Toggle */}
      <div className="container-civic py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm border border-mist rounded-lg px-3 py-2 bg-white text-slate focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="acknowledged">Acknowledged</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="rejected">Rejected</option>
            </select>

            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-mist rounded-lg px-3 py-2 bg-white text-slate focus:outline-none focus:ring-2 focus:ring-civic-blue/30"
            >
              <option value="recent">Most Recent</option>
              <option value="upvotes">Most Upvoted</option>
            </select>

            <Link
              href="/map"
              className="flex items-center gap-1.5 text-sm border border-mist rounded-lg px-3 py-2 bg-white text-slate hover:bg-mist transition-colors"
            >
              <Map className="w-4 h-4" /> Map View
            </Link>
          </div>

          <div className="flex items-center gap-2 bg-mist rounded-lg p-1">
            <button
              id="view-grid"
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-civic-blue' : 'text-slate'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              id="view-list"
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-civic-blue' : 'text-slate'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-slate text-sm mt-3">
          Showing <strong>{filtered.length}</strong> issue{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
        </p>
      </div>

      {/* Issue Grid / List */}
      <div className="container-civic pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl text-deep-navy font-semibold mb-2">No issues found</h3>
            <p className="text-slate text-sm">Try changing your filters or be the first to report in this category.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((issue) => (
              <Link
                key={issue.id}
                href={`/issues/${issue.id}`}
                className="flex gap-4 bg-white border border-mist rounded-xl p-4 hover:border-civic-blue hover:shadow-sm transition-all group"
              >
                <img
                  src={issue.imageUrl}
                  alt={issue.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs text-slate">{issue.categoryIcon} {issue.category}</span>
                    <span className="text-slate/40">·</span>
                    <span className="text-xs text-slate">{issue.ward}</span>
                  </div>
                  <h3 className="font-semibold text-deep-navy text-sm leading-snug group-hover:text-civic-blue transition-colors line-clamp-1 mb-1.5">
                    {issue.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate">▲ {issue.upvotes}</span>
                    <span className="text-xs text-slate">💬 {issue.comments}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-end gap-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                    issue.status === 'resolved' ? 'bg-resolution-green-light text-green-800' :
                    issue.status === 'open' ? 'bg-alert-amber-light text-amber-800' :
                    'bg-blue-status-light text-blue-800'
                  }`}>{issue.status.replace('_', ' ')}</span>
                  <span className="text-xs text-slate/60">{issue.city}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
