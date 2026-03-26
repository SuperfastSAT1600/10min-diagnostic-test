import type { MiniTestQuestion } from '../data/types';

interface QuestionCardProps {
  question: MiniTestQuestion;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="question-card" key={question.id}>
      {question.passage && (
        <div
          className="question-passage"
          dangerouslySetInnerHTML={{ __html: question.passage }}
        />
      )}
      <div
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
    </div>
  );
}
