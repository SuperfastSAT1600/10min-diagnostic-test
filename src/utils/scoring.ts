import type { MiniTestQuestion, UserAnswer, SectionResult } from '../data/types';
import type { Lang } from '../i18n/results';
import { getTranslations } from '../i18n/results';

export function calculateSectionResults(
  questions: MiniTestQuestion[],
  answers: UserAnswer[]
): SectionResult[] {
  const sections: ('Reading' | 'Writing' | 'Math')[] = ['Reading', 'Writing', 'Math'];

  return sections.map((section) => {
    const sectionQuestions = questions.filter((q) => q.section === section);
    const sectionAnswers = answers.filter((a) =>
      sectionQuestions.some((q) => q.id === a.questionId)
    );
    const correct = sectionAnswers.filter((a) => a.isCorrect).length;
    const missedSkills = sectionQuestions
      .filter((q) => {
        const answer = sectionAnswers.find((a) => a.questionId === q.id);
        return answer && !answer.isCorrect;
      })
      .map((q) => q.skill);

    return {
      section,
      correct,
      total: sectionQuestions.length,
      missedSkills: [...new Set(missedSkills)],
    };
  });
}

export function getScoreRange(totalCorrect: number, totalQuestions: number, lang: Lang = 'en'): string {
  const t = getTranslations(lang);
  const ratio = totalCorrect / totalQuestions;
  if (ratio >= 0.87) return '1400–1600';
  if (ratio >= 0.67) return '1200–1400';
  if (ratio >= 0.47) return '1000–1200';
  return t.belowScore;
}

export function getEstimatedScore(totalCorrect: number, totalQuestions: number): number {
  const ratio = totalCorrect / totalQuestions;
  return Math.round(400 + ratio * 1200);
}

export function getTotalCorrect(answers: UserAnswer[]): number {
  return answers.filter((a) => a.isCorrect).length;
}
