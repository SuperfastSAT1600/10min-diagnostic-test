interface OptionButtonProps {
  id: string;
  text: string;
  selected: boolean;
  isCorrect: boolean | null;
  correctAnswer: string;
  disabled: boolean;
  onSelect: (id: string) => void;
}

export default function OptionButton({
  id,
  text,
  selected,
  isCorrect,
  correctAnswer,
  disabled,
  onSelect,
}: OptionButtonProps) {
  let className = 'option-btn';

  if (disabled) {
    className += ' disabled';
    if (selected && isCorrect) {
      className += ' correct pulse-correct';
    } else if (selected && isCorrect === false) {
      className += ' incorrect';
    } else if (id === correctAnswer && isCorrect === false) {
      // Reveal the correct answer when user got it wrong
      className += ' reveal-correct';
    }
  }

  return (
    <button
      className={className}
      onClick={() => !disabled && onSelect(id)}
      disabled={disabled}
    >
      <span className="option-label">{id}</span>
      <span className="option-text">{text}</span>
    </button>
  );
}
