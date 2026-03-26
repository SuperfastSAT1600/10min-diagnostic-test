interface ProgressBarProps {
  current: number;
  total: number;
  section: string;
  secondsLeft: number;
  timerExpired: boolean;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function ProgressBar({ current, total, section, secondsLeft, timerExpired }: ProgressBarProps) {
  const percentage = ((current + 1) / total) * 100;

  const timerClass = timerExpired
    ? 'timer overtime'
    : secondsLeft <= 60
      ? 'timer danger'
      : secondsLeft <= 180
        ? 'timer warning'
        : 'timer';

  return (
    <div className="progress-header">
      <div className="progress-info">
        <span className="progress-count">{current + 1} of {total}</span>
        <span className={timerClass}>
          {timerExpired ? 'Overtime' : formatTime(secondsLeft)}
        </span>
        <span className="progress-section">{section}</span>
      </div>
      <div className="toss-progress-track">
        <div
          className="toss-progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
