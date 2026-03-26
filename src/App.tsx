import { useState } from 'react';
import type { UserAnswer } from './data/types';
import { questions } from './data/questions';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';

type Screen = 'welcome' | 'quiz' | 'results';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  function handleStart() {
    setScreen('quiz');
  }

  function handleComplete(userAnswers: UserAnswer[], elapsed: number) {
    setAnswers(userAnswers);
    setElapsedSeconds(elapsed);
    setScreen('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleRetry() {
    setAnswers([]);
    setElapsedSeconds(0);
    setScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {screen === 'quiz' && (
        <QuizScreen questions={questions} onComplete={handleComplete} />
      )}
      {screen === 'results' && (
        <ResultsScreen
          questions={questions}
          answers={answers}
          elapsedSeconds={elapsedSeconds}
          onRetry={handleRetry}
        />
      )}
    </>
  );
}
