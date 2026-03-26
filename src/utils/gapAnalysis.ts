import type { SectionResult } from '../data/types';
import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';

interface GapMessage {
  section: string;
  message: string;
}

export function generateGapMessages(sectionResults: SectionResult[], lang: Lang = 'en'): GapMessage[] {
  const t = getTranslations(lang);
  const messages: GapMessage[] = [];

  for (const result of sectionResults) {
    if (result.missedSkills.length === 0) continue;
    if (result.correct === result.total) continue;

    const skillKey = result.missedSkills[0];
    const skillName = t.skillNames[skillKey] || skillKey;
    const tip = t.skillMessages[skillKey] || t.gapFallback(skillName);
    const message = t.gapMessageTemplate(skillName, tip);

    messages.push({
      section: t.sections[result.section] || result.section,
      message,
    });
  }

  return messages;
}
