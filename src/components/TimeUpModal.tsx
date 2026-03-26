interface TimeUpModalProps {
  onContinue: () => void;
}

export default function TimeUpModal({ onContinue }: TimeUpModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-icon">⏰</div>
        <h2 className="modal-title">Time's Up!</h2>
        <p className="modal-desc">
          10 minutes have passed.<br />
          Would you like to continue and finish the remaining questions?
        </p>
        <button className="btn-toss" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
