import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';

interface StudyStrategyProps {
  estimatedScore: number;
  lang?: Lang;
}

function getTierIndex(score: number): number {
  if (score >= 1400) return 3;
  if (score >= 1200) return 2;
  if (score >= 1000) return 1;
  return 0;
}

export default function StudyStrategy({ estimatedScore, lang = 'en' }: StudyStrategyProps) {
  const t = getTranslations(lang);
  const activeIndex = getTierIndex(estimatedScore);
  const strategy = t.studyStrategies[activeIndex];

  return (
    <div className="toss-card study-strategy">
      <div className="study-strategy-title">{t.studyStrategyTitle}</div>
      <div className="study-strategy-steps">
        {t.studyStrategies.map((s, i) => (
          <div
            key={s.tier}
            className={`study-strategy-step ${i === activeIndex ? 'active' : ''}`}
          >
            <div className="study-strategy-dot-col">
              <div className={`study-strategy-dot ${i === activeIndex ? 'active' : ''}`}>
                {i === activeIndex ? strategy.emoji : ''}
              </div>
              {i < t.studyStrategies.length - 1 && (
                <div className={`study-strategy-line ${i < activeIndex ? 'filled' : ''}`} />
              )}
            </div>
            <div className={`study-strategy-content ${i === activeIndex ? 'active' : ''}`}>
              <div className="study-strategy-step-title">{s.title}</div>
              {i === activeIndex && (
                <div className="study-strategy-desc">{s.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
