import type { SectionResult } from '../data/types';
import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';

interface SectionScoreProps {
  result: SectionResult;
  lang?: Lang;
}

const sectionColorClass: Record<string, string> = {
  Reading: 'reading',
  Writing: 'writing',
  Math: 'math',
};

export default function SectionScore({ result, lang = 'en' }: SectionScoreProps) {
  const t = getTranslations(lang);
  const percentage = Math.round((result.correct / result.total) * 100);
  const colorClass = sectionColorClass[result.section] || 'reading';
  const sectionName = t.sections[result.section] || result.section;

  return (
    <div className="section-score-item">
      <div className="section-score-header">
        <span className="section-score-name">{sectionName}</span>
        <span className={`section-score-percent ${colorClass}`}>{percentage}%</span>
      </div>
      <div className="section-score-bar-track">
        <div
          className={`section-score-bar-fill ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
