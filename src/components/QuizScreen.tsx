import { useState, useEffect, useRef, useCallback } from 'react';
import type { MiniTestQuestion, UserAnswer } from '../data/types';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import OptionButton from './OptionButton';
import FeedbackBanner from './FeedbackBanner';
import TimeUpModal from './TimeUpModal';

const TOTAL_SECONDS = 10 * 60; // 10 minutes

interface QuizScreenProps {
  questions: MiniTestQuestion[];
  onComplete: (answers: UserAnswer[], elapsedSeconds: number) => void;
}

export default function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [showTimeUp, setShowTimeUp] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const startTimeRef = useRef(Date.now());

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const isLast = currentIndex === questions.length - 1;

  // Countdown timer
  useEffect(() => {
    if (timerExpired) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerExpired]);

  const getElapsedSeconds = useCallback(() => {
    return Math.round((Date.now() - startTimeRef.current) / 1000);
  }, []);

  function handleSelect(optionId: string) {
    if (selectedAnswer) return;
    setSelectedAnswer(optionId);
    setShowFeedback(true);

    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: optionId,
      isCorrect: optionId === currentQuestion.correctAnswer,
    };
    setAnswers((prev) => [...prev, newAnswer]);
  }

  function handleNext() {
    if (isLast) {
      onComplete([...answers], getElapsedSeconds());
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleContinue() {
    setShowTimeUp(false);
    setTimerExpired(true);
  }

  return (
    <div className="quiz-screen">
      <ProgressBar
        current={currentIndex}
        total={questions.length}
        section={currentQuestion.section}
        secondsLeft={secondsLeft}
        timerExpired={timerExpired}
      />
      <div className="quiz-body" key={currentQuestion.id}>
        <QuestionCard question={currentQuestion} />
        <div className="options-list">
          {currentQuestion.options.map((opt) => (
            <OptionButton
              key={opt.id}
              id={opt.id}
              text={opt.text}
              selected={selectedAnswer === opt.id}
              isCorrect={
                selectedAnswer === null
                  ? null
                  : selectedAnswer === opt.id
                    ? opt.id === currentQuestion.correctAnswer
                    : null
              }
              correctAnswer={selectedAnswer ? currentQuestion.correctAnswer : ''}
              disabled={selectedAnswer !== null}
              onSelect={handleSelect}
            />
          ))}
        </div>
        {showFeedback && (
          <FeedbackBanner
            isCorrect={isCorrect}
            explanation={currentQuestion.explanation}
            difficulty={currentQuestion.difficulty}
            isLast={isLast}
            onNext={handleNext}
          />
        )}
      </div>
      {showTimeUp && <TimeUpModal onContinue={handleContinue} />}
    </div>
  );
}
