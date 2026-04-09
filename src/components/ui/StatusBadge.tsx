import type { IssueStatus } from '@/lib/mock-data';

interface StatusBadgeProps {
  status: IssueStatus;
  size?: 'sm' | 'md';
}

const statusConfig: Record<IssueStatus, { label: string; bg: string; text: string; dot: string }> = {
  open: {
    label: 'Open',
    bg: 'bg-alert-amber-light',
    text: 'text-amber-800',
    dot: 'bg-alert-amber',
  },
  acknowledged: {
    label: 'Acknowledged',
    bg: 'bg-blue-status-light',
    text: 'text-blue-800',
    dot: 'bg-blue-status',
  },
  in_progress: {
    label: 'In Progress',
    bg: 'bg-blue-status-light',
    text: 'text-blue-800',
    dot: 'bg-blue-status',
  },
  resolved: {
    label: 'Resolved',
    bg: 'bg-resolution-green-light',
    text: 'text-green-800',
    dot: 'bg-resolution-green',
  },
  rejected: {
    label: 'Rejected',
    bg: 'bg-report-red-light',
    text: 'text-red-800',
    dot: 'bg-report-red',
  },
};

export default function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full uppercase tracking-wide ${config.bg} ${config.text} ${sizeClass}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
