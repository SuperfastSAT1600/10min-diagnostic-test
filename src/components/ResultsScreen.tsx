import { useState } from 'react';
import type { MiniTestQuestion, UserAnswer } from '../data/types';
import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';
import { calculateSectionResults, getScoreRange, getEstimatedScore, getTotalCorrect } from '../utils/scoring';
import { generateGapMessages } from '../utils/gapAnalysis';
import SectionScore from './SectionScore';
import GapMessage from './GapMessage';
import LanguageToggle from './LanguageToggle';
import ScoreGauge from './ScoreGauge';
import StudyStrategy from './StudyStrategy';

interface ResultsScreenProps {
  questions: MiniTestQuestion[];
  answers: UserAnswer[];
  elapsedSeconds: number;
  onRetry: () => void;
}

export default function ResultsScreen({ questions, answers, elapsedSeconds, onRetry }: ResultsScreenProps) {
  const [lang, setLang] = useState<Lang>('en');
  const t = getTranslations(lang);

  const totalCorrect = getTotalCorrect(answers);
  const sectionResults = calculateSectionResults(questions, answers);
  const scoreRange = getScoreRange(totalCorrect, questions.length, lang);
  const estimatedScore = getEstimatedScore(totalCorrect, questions.length);
  const gapMessages = generateGapMessages(sectionResults, lang);
  const allPerfect = totalCorrect === questions.length;

  const m = Math.floor(elapsedSeconds / 60);
  const s = elapsedSeconds % 60;
  const timeText = m === 0 ? t.completedInSeconds(s) : t.completedIn(m, s);

  return (
    <div className="results-screen">
      <LanguageToggle lang={lang} onToggle={setLang} />

      <div className="results-header">
        <div className="results-title">{t.resultsTitle}</div>
        <div className="results-score-big">{totalCorrect}/{questions.length}</div>
        <div className="results-score-label">{t.questionsCorrect}</div>
        {elapsedSeconds > 0 && (
          <div className="results-time">{timeText}</div>
        )}
      </div>

      <div className="toss-card score-range-card">
        <div className="score-range-label">{t.estimatedScoreRange}</div>
        <div className="score-range-value">{scoreRange}</div>
        <ScoreGauge estimatedScore={estimatedScore} lang={lang} />
      </div>

      <div className="toss-card section-scores">
        <div className="section-scores-title">{t.scoreBySection}</div>
        {sectionResults.map((result) => (
          <SectionScore key={result.section} result={result} lang={lang} />
        ))}
      </div>

      <StudyStrategy estimatedScore={estimatedScore} lang={lang} />

      {gapMessages.length > 0 && (
        <div className="gap-messages">
          {gapMessages.map((msg, i) => (
            <GapMessage key={i} section={msg.section} message={msg.message} />
          ))}
        </div>
      )}

      {allPerfect && (
        <div className="toss-card gap-messages" style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#03B26C', marginBottom: 8 }}>
            {t.perfectTitle}
          </div>
          <div style={{ fontSize: 14, color: '#4E5968', lineHeight: 1.6 }}>
            {t.perfectBody}
          </div>
        </div>
      )}

      <div className="results-cta">
        <p className="results-cta-text">
          {t.ctaLine1}<br />
          {t.ctaLine2}
        </p>
        <a
          href="https://superfastsat.com/consult"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-toss"
          style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
        >
          {t.ctaButton}
        </a>
        <div className="results-retry">
          <button onClick={onRetry}>{t.tryAgain}</button>
        </div>
      </div>

      <div className="results-screenshot-hint">
        {t.screenshotHint}
      </div>

      <div className="results-brand-small">{t.brand}</div>
    </div>
  );
}
