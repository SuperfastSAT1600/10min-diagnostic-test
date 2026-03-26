import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';

interface ScoreGaugeProps {
  estimatedScore: number;
  lang?: Lang;
}

const ZONES = [
  { min: 400, max: 1000, color: '#FEE2E2', label: '400' },
  { min: 1000, max: 1200, color: '#FEF3C7', label: '1000' },
  { min: 1200, max: 1400, color: '#D1FAE5', label: '1200' },
  { min: 1400, max: 1600, color: '#DBEAFE', label: '1400' },
];

function scoreToPercent(score: number): number {
  const clamped = Math.max(400, Math.min(1600, score));
  return ((clamped - 400) / 1200) * 100;
}

export default function ScoreGauge({ estimatedScore, lang = 'en' }: ScoreGaugeProps) {
  const t = getTranslations(lang);
  const markerPercent = scoreToPercent(estimatedScore);

  return (
    <div className="score-gauge">
      <div className="score-gauge-track">
        {ZONES.map((zone) => {
          const width = ((zone.max - zone.min) / 1200) * 100;
          return (
            <div
              key={zone.min}
              className="score-gauge-zone"
              style={{ width: `${width}%`, background: zone.color }}
            />
          );
        })}
        <div
          className="score-gauge-marker"
          style={{ left: `${markerPercent}%` }}
        >
          <div className="score-gauge-marker-label">{t.gaugeYourScore}</div>
          <div className="score-gauge-marker-dot" />
          <div className="score-gauge-marker-score">{estimatedScore}</div>
        </div>
      </div>
      <div className="score-gauge-labels">
        {ZONES.map((zone) => {
          const left = ((zone.min - 400) / 1200) * 100;
          return (
            <span key={zone.min} className="score-gauge-label" style={{ left: `${left}%` }}>
              {zone.label}
            </span>
          );
        })}
        <span className="score-gauge-label" style={{ left: '100%' }}>1600</span>
      </div>
    </div>
  );
}
