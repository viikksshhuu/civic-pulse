import Link from 'next/link';
import { ThumbsUp, MessageSquare, MapPin, Clock } from 'lucide-react';
import type { Issue } from '@/lib/mock-data';
import StatusBadge from './StatusBadge';
import ProgressStepper from './ProgressStepper';

interface IssueCardProps {
  issue: Issue;
}

function formatTimeAgo(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export default function IssueCard({ issue }: IssueCardProps) {
  return (
    <Link href={`/issues/${issue.id}`} className="group block">
      <article className="bg-white rounded-xl border border-mist overflow-hidden card-hover h-full flex flex-col">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <img
            src={issue.imageUrl}
            alt={issue.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <StatusBadge status={issue.status} size="sm" />
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm text-slate text-xs font-medium px-2.5 py-1 rounded-full">
              {issue.categoryIcon} {issue.category.split(' ')[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3 flex-1">
          <h3 className="font-semibold text-deep-navy text-sm leading-snug line-clamp-2 group-hover:text-civic-blue transition-colors">
            {issue.title}
          </h3>

          <div className="flex items-center gap-1.5 text-slate text-xs">
            <MapPin className="w-3.5 h-3.5 text-civic-blue flex-shrink-0" />
            <span className="truncate">{issue.ward}</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate text-xs">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Reported {formatTimeAgo(issue.reportedAt)} by {issue.reportedBy}</span>
          </div>

          {/* Stepper */}
          <div className="mt-auto">
            <ProgressStepper status={issue.status} compact />
          </div>

          {/* Footer stats */}
          <div className="flex items-center justify-between pt-2 border-t border-mist">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs text-slate font-medium">
                <ThumbsUp className="w-3.5 h-3.5 text-civic-blue" />
                {issue.upvotes}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate font-medium">
                <MessageSquare className="w-3.5 h-3.5" />
                {issue.comments}
              </span>
            </div>
            {issue.severity === 'emergency' && (
              <span className="text-xs font-bold text-report-red uppercase tracking-wide">
                🚨 Emergency
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
