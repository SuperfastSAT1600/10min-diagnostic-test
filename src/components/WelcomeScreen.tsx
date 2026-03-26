interface WelcomeScreenProps {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <h1 className="welcome-title">
        Am I Really Ready<br />for the SAT?
      </h1>
      <p className="welcome-subtitle">
        Find out in 10 minutes — 15 real questions, instant results.
      </p>

      <div className="welcome-features">
        <div className="welcome-feature">
          <div className="welcome-feature-icon">📝</div>
          <span>15 real SAT-style questions</span>
        </div>
        <div className="welcome-feature">
          <div className="welcome-feature-icon">⏱</div>
          <span>Takes about 10 minutes</span>
        </div>
        <div className="welcome-feature">
          <div className="welcome-feature-icon">📊</div>
          <span>Instant score + personalized feedback</span>
        </div>
      </div>

      <div className="welcome-cta">
        <button className="btn-toss" onClick={onStart}>
          Let's Go
        </button>
      </div>

      <p className="welcome-note">Takes 10 min · No signup · Just you and the SAT</p>
      <div className="welcome-brand-small">by SuperfastSAT</div>
    </div>
  );
}
