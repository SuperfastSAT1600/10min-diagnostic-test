interface GapMessageProps {
  section: string;
  message: string;
}

function renderBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function GapMessage({ section, message }: GapMessageProps) {
  return (
    <div className="gap-message-card">
      <div className="gap-message-section">{section}</div>
      <div className="gap-message-text">{renderBold(message)}</div>
    </div>
  );
}
