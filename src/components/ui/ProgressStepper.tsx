import type { IssueStatus } from '@/lib/mock-data';

interface ProgressStepperProps {
  status: IssueStatus;
  compact?: boolean;
}

const steps = [
  { key: 'reported', label: 'Reported' },
  { key: 'acknowledged', label: 'Acknowledged' },
  { key: 'in_progress', label: 'In Progress' },
  { key: 'resolved', label: 'Resolved' },
];

const statusOrder: Record<IssueStatus, number> = {
  open: 0,
  acknowledged: 1,
  in_progress: 2,
  resolved: 3,
  rejected: -1,
};

export default function ProgressStepper({ status, compact = false }: ProgressStepperProps) {
  const currentStep = statusOrder[status];

  if (compact) {
    return (
      <div className="flex items-center gap-0.5">
        {steps.map((step, idx) => (
          <div key={step.key} className="flex items-center">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                idx <= currentStep
                  ? idx === currentStep
                    ? 'bg-civic-blue'
                    : 'bg-resolution-green'
                  : 'bg-mist'
              }`}
            />
            {idx < steps.length - 1 && (
              <div
                className={`w-4 h-0.5 ${idx < currentStep ? 'bg-resolution-green' : 'bg-mist'}`}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-0">
      {steps.map((step, idx) => (
        <div key={step.key} className="flex flex-col items-center flex-1">
          <div className="flex items-center w-full">
            {/* Circle */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 flex-shrink-0 transition-all ${
                idx < currentStep
                  ? 'bg-resolution-green border-resolution-green text-white'
                  : idx === currentStep
                  ? 'bg-civic-blue border-civic-blue text-white'
                  : 'bg-white border-mist text-slate-400'
              }`}
            >
              {idx < currentStep ? '✓' : idx + 1}
            </div>
            {/* Line */}
            {idx < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 transition-colors ${
                  idx < currentStep ? 'bg-resolution-green' : 'bg-mist'
                }`}
              />
            )}
          </div>
          <span
            className={`text-xs mt-1.5 font-medium text-center leading-tight ${
              idx <= currentStep ? 'text-deep-navy' : 'text-slate-400'
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}
