import type { Lang } from '../i18n/results';

interface LanguageToggleProps {
  lang: Lang;
  onToggle: (lang: Lang) => void;
}

export default function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  return (
    <div className="lang-toggle">
      <button
        className={`lang-toggle-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => onToggle('en')}
      >
        EN
      </button>
      <button
        className={`lang-toggle-btn ${lang === 'ko' ? 'active' : ''}`}
        onClick={() => onToggle('ko')}
      >
        한국어
      </button>
    </div>
  );
}
