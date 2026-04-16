import { cn } from "@/lib/utils";

interface Props {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function ProgressCircle({ percentage, size = 120, strokeWidth = 8, className }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke="hsl(var(--lms-border))"
          strokeWidth={strokeWidth} fill="none"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          stroke="hsl(var(--lms-primary))"
          strokeWidth={strokeWidth} fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute text-lms-text font-bold text-xl">{percentage}%</span>
    </div>
  );
}
