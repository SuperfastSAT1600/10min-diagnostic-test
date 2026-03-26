interface FeedbackBannerProps {
  isCorrect: boolean;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isLast: boolean;
  onNext: () => void;
}

export default function FeedbackBanner({
  isCorrect,
  explanation,
  difficulty,
  isLast,
  onNext,
}: FeedbackBannerProps) {
  const showRealityCheck = !isCorrect && difficulty !== 'Hard';
  const realityCheckText =
    difficulty === 'Easy'
      ? 'This is considered an easy question on the SAT.'
      : 'Most SAT test-takers get this one right.';

  return (
    <div className={`feedback-banner ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="feedback-title">
        {isCorrect ? '✓ Correct!' : '✗ Not quite'}
      </div>
      <div className="feedback-explanation">{explanation}</div>
      {showRealityCheck && (
        <div className="feedback-reality-check">{realityCheckText}</div>
      )}
      <button className="feedback-next-btn" onClick={onNext}>
        {isLast ? 'See Results' : 'Next'}
      </button>
    </div>
  );
}
