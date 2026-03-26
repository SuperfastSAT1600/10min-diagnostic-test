export type Lang = 'en' | 'ko';

interface ResultsTranslations {
  resultsTitle: string;
  questionsCorrect: string;
  completedIn: (m: number, s: number) => string;
  completedInSeconds: (s: number) => string;
  estimatedScoreRange: string;
  scoreBySection: string;
  perfectTitle: string;
  perfectBody: string;
  ctaLine1: string;
  ctaLine2: string;
  ctaButton: string;
  tryAgain: string;
  screenshotHint: string;
  brand: string;
  gaugeYourScore: string;
  studyStrategyTitle: string;
  studyStrategies: {
    tier: string;
    emoji: string;
    title: string;
    description: string;
  }[];
  sections: Record<string, string>;
  belowScore: string;
  gapMessageTemplate: (skill: string, tip: string) => string;
  gapFallback: (skill: string) => string;
  skillNames: Record<string, string>;
  skillMessages: Record<string, string>;
}

const en: ResultsTranslations = {
  resultsTitle: "Here's Where You Stand",
  questionsCorrect: 'questions correct',
  completedIn: (m, s) => `Completed in ${m}m ${s}s`,
  completedInSeconds: (s) => `${s} seconds`,
  estimatedScoreRange: 'Estimated SAT Score Range',
  scoreBySection: 'Score by Section',
  perfectTitle: 'Perfect Score!',
  perfectBody: "You nailed every question. Let's see how you do on a full-length practice test.",
  ctaLine1: "You don't have to figure it out alone.",
  ctaLine2: 'Feel free to reach out anytime.',
  ctaButton: 'Learn More',
  tryAgain: 'Try Again',
  screenshotHint: '\ud83d\udcf1 Screenshot your results to track your progress',
  brand: 'by SuperfastSAT',
  gaugeYourScore: 'You',
  studyStrategyTitle: 'How Should I Study?',
  studyStrategies: [
    {
      tier: 'below1000',
      emoji: '\ud83c\udf31',
      title: 'Build Your Foundation',
      description: 'Focus on core grammar rules and basic math concepts first. Practice one section at a time and aim for 30 minutes of focused study daily.',
    },
    {
      tier: '1000-1200',
      emoji: '\ud83d\udcda',
      title: 'Strengthen Core Skills',
      description: 'You have the basics — now drill your weak areas. Do timed practice sets by question type. Review every wrong answer and understand why.',
    },
    {
      tier: '1200-1400',
      emoji: '\ud83c\udfaf',
      title: 'Practice Strategy & Time Management',
      description: 'Take full-length practice tests under real conditions. Focus on time management and eliminating careless mistakes. Target your weakest 2-3 skills.',
    },
    {
      tier: '1400-1600',
      emoji: '\ud83d\ude80',
      title: 'Fine-Tune for Perfection',
      description: "You're close to the top. Focus on the hardest question types and edge cases. Review tricky passages and advanced math topics. Every point counts.",
    },
  ],
  sections: {
    Reading: 'Reading',
    Writing: 'Writing',
    Math: 'Math',
  },
  belowScore: 'Below 1000',
  gapMessageTemplate: (skill, tip) =>
    `**${skill}** \u2014 ${tip}`,
  gapFallback: (skill) => `Review ${skill} concepts and try practice problems from official SAT prep materials.`,
  skillNames: {
    'Central Ideas and Details': 'Central Ideas & Details',
    'Inferences': 'Inferences',
    'Words in Context': 'Words in Context',
    'Text Structure and Purpose': 'Text Structure & Purpose',
    'Cross-Text Connections': 'Cross-Text Connections',
    'Rhetorical Synthesis': 'Rhetorical Synthesis',
    'Transitions': 'Transitions',
    'Boundaries': 'Sentence Boundaries',
    'Form, Structure, and Sense': 'Grammar & Sentence Structure',
    'Linear equations in one variable': 'Linear Equations',
    'Systems of two linear equations in two variables': 'Systems of Equations',
    'Nonlinear equations in one variable and systems of equations in two variables': 'Quadratic & Nonlinear Equations',
    'Percentages': 'Percentages',
    'Area and volume': 'Area & Volume',
  },
  skillMessages: {
    'Central Ideas and Details': 'After reading each paragraph, pause and ask: "What is the one main point here?" Practice summarizing passages into a single sentence. Try reading editorials or short opinion pieces and identifying the thesis.',
    'Inferences': "Don\u2019t just read what\u2019s on the page \u2014 think about what the author is implying. Practice by asking \"Why did the author include this?\" after each paragraph. The answer is almost always supported by specific words in the text.",
    'Words in Context': "Cover the word in the sentence and try to guess what fits. Then check the answer choices. This is one of the fastest skills to improve \u2014 practice with 10 vocabulary-in-context questions a day.",
    'Text Structure and Purpose': "For every passage, ask yourself: \"What is the author trying to do?\" (inform, persuade, compare, describe). Underline transition words \u2014 they reveal how the argument is built.",
    'Cross-Text Connections': "Read each passage separately and write down its main claim in one sentence. Then compare: where do they agree? Disagree? The question usually asks about the relationship between the two viewpoints.",
    'Rhetorical Synthesis': "Read the prompt carefully before the passage. It tells you exactly what to look for. Practice by reading a short article and then writing one sentence that achieves a specific goal (e.g., \"summarize the counterargument\").",
    'Transitions': "Ask: \"What is the relationship between these two sentences?\" Is it contrast (however), addition (moreover), or cause-effect (therefore)? Read the sentences before and after the blank to determine the logical connection.",
    'Boundaries': "Learn three rules and you\u2019ll get most of these right: (1) Two complete sentences need a period or semicolon, not a comma. (2) Use commas around non-essential information. (3) No comma between subject and verb. Practice these rules with grammar drills daily.",
    'Form, Structure, and Sense': "Find the real subject of the sentence \u2014 ignore everything between the subject and verb. Then check: does the verb match in number and tense? Read the surrounding sentences to confirm the correct tense. Practice with 5 subject-verb agreement drills daily.",
    'Linear equations in one variable': "Practice solving equations step by step: isolate the variable by doing the same operation to both sides. Do 10 problems a day until it feels automatic.",
    'Systems of two linear equations in two variables': "Try both methods: substitution (solve one equation for a variable, plug into the other) and elimination (add/subtract equations). Use whichever feels faster. Practice identifying which method works best by looking at the coefficients.",
    'Nonlinear equations in one variable and systems of equations in two variables': "Make sure you can do three things: (1) factor simple quadratics, (2) use the quadratic formula, (3) complete the square. Memorize the formula: x = (-b \u00b1 \u221a(b\u00b2-4ac)) / 2a and practice until it\u2019s second nature.",
    'Percentages': "Always convert percent problems into step-by-step calculations. \"30% increase\" means multiply by 1.3. \"20% decrease\" means multiply by 0.8. Never try to combine percent changes in your head \u2014 calculate each step separately.",
    'Area and volume': "The SAT gives you all formulas, so focus on knowing when to use each one. Draw a diagram for every geometry problem. Label all known values, then identify which formula connects what you know to what you need.",
  },
};

const ko: ResultsTranslations = {
  resultsTitle: '나는 지금 어느 정도일까?',
  questionsCorrect: '\ubb38\uc81c \uc815\ub2f5',
  completedIn: (m, s) => `\uc18c\uc694 \uc2dc\uac04: ${m}\ubd84 ${s}\ucd08`,
  completedInSeconds: (s) => `\uc18c\uc694 \uc2dc\uac04: ${s}\ucd08`,
  estimatedScoreRange: '\uc608\uc0c1 SAT \uc810\uc218 \ubc94\uc704',
  scoreBySection: '\uc601\uc5ed\ubcc4 \uc810\uc218',
  perfectTitle: '\ub9cc\uc810!',
  perfectBody: '\ubaa8\ub4e0 \ubb38\uc81c\ub97c \ub9de\ud788\uc168\uc5b4\uc694. \uc2e4\uc804 \ubaa8\uc758\uace0\uc0ac\uc5d0\uc11c\ub3c4 \uc2e4\ub825\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694.',
  ctaLine1: '\ud63c\uc790 \uace0\ubbfc\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub3fc\uc694.',
  ctaLine2: '\uc5b8\uc81c\ub4e0 \ud3b8\ud558\uac8c \ubb3c\uc5b4\ubcf4\uc138\uc694.',
  ctaButton: '\uc870\uae08 \ub354 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30',
  tryAgain: '\ub2e4\uc2dc \ud480\uae30',
  screenshotHint: '\ud83d\udcf1 \uc2a4\ud06c\ub9b0\uc0f7\uc73c\ub85c \uacb0\uacfc\ub97c \uc800\uc7a5\ud574 \ubcf4\uc138\uc694',
  brand: 'by SuperfastSAT',
  gaugeYourScore: '\ub098',
  studyStrategyTitle: '\uc5b4\ub5bb\uac8c \uacf5\ubd80\ud574\uc57c \ud560\uae4c?',
  studyStrategies: [
    {
      tier: 'below1000',
      emoji: '\ud83c\udf31',
      title: '\uae30\ucd08\ubd80\ud130 \ud0c4\ud0c4\ud558\uac8c',
      description: '\ud575\uc2ec \ubb38\ubc95\uacfc \uae30\ubcf8 \uc218\ud559 \uac1c\ub150\ubd80\ud130 \uc7a1\uc73c\uc138\uc694. \ud55c \uc601\uc5ed\uc529 \uc9d1\uc911\ud574\uc11c \ub9e4\uc77c 30\ubd84\uc529 \uacf5\ubd80\ud558\uc138\uc694.',
    },
    {
      tier: '1000-1200',
      emoji: '\ud83d\udcda',
      title: '\uc57d\uc810 \uc9d1\uc911 \uacf5\ub7b5',
      description: '\uae30\ucd08\ub294 \uc788\uc73c\ub2c8 \uc57d\ud55c \uc601\uc5ed\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ud30c\uace0\ub4e4\uc138\uc694. \ubb38\uc81c \uc720\ud615\ubcc4\ub85c \uc2dc\uac04 \ub9de\ucdb0 \ud480\uace0, \ud2c0\ub9b0 \ubb38\uc81c\ub294 \ubc18\ub4dc\uc2dc \uc774\uc720\ub97c \ud30c\uc545\ud558\uc138\uc694.',
    },
    {
      tier: '1200-1400',
      emoji: '\ud83c\udfaf',
      title: '\uc804\ub7b5\uacfc Time Management \ud6c8\ub828',
      description: '\uc2e4\uc804\uacfc \ub611\uac19\uc740 \uc870\uac74\uc5d0\uc11c \ubaa8\uc758\uace0\uc0ac\ub97c \ud480\uc5b4\ubcf4\uc138\uc694. \uc2dc\uac04 \uad00\ub9ac\uc640 \uc2e4\uc218 \uc904\uc774\uae30\uc5d0 \uc9d1\uc911\ud558\uace0, \uac00\uc7a5 \uc57d\ud55c 2\u20133\uac00\uc9c0 \uc2a4\ud0ac\uc744 \uacf5\ub7b5\ud558\uc138\uc694.',
    },
    {
      tier: '1400-1600',
      emoji: '\ud83d\ude80',
      title: '\ub9c8\uc9c0\ub9c9 \ub9c8\ubb34\ub9ac',
      description: '\uac70\uc758 \ub2e4 \uc654\uc5b4\uc694! \uace0\ub09c\ub3c4 \ubb38\uc81c\uc640 \ud568\uc815 \uc720\ud615\uc5d0 \uc9d1\uc911\ud558\uc138\uc694. \uc5b4\ub824\uc6b4 \uc9c0\ubb38\uacfc \uc2ec\ud654 \uc218\ud559\uc744 \ubc18\ubcf5 \uc5f0\uc2b5\ud558\uba74 1\uc810\uc774\ub77c\ub3c4 \ub354 \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
    },
  ],
  sections: {
    Reading: 'Reading',
    Writing: 'Writing',
    Math: 'Math',
  },
  belowScore: '1000 \ubbf8\ub9cc',
  gapMessageTemplate: (skill, tip) =>
    `**${skill}** \u2014 ${tip}`,
  gapFallback: (skill) => `${skill} \uad00\ub828 \uac1c\ub150\uc744 \ubcf5\uc2b5\ud558\uace0 SAT \uc5f0\uc2b5 \ubb38\uc81c\ub97c \ud480\uc5b4\ubcf4\uc138\uc694.`,
  skillNames: {
    'Central Ideas and Details': '\uc911\uc2ec \ub0b4\uc6a9 \ud30c\uc545',
    'Inferences': '\ucd94\ub860',
    'Words in Context': '\ubb38\ub9e5 \uc18d \uc5b4\ud718',
    'Text Structure and Purpose': '\uae00\uc758 \uad6c\uc870\uc640 \ubaa9\uc801',
    'Cross-Text Connections': '\ubcf5\uc218 \uc9c0\ubb38 \ube44\uad50',
    'Rhetorical Synthesis': '\uc218\uc0ac\uc801 \uc885\ud569',
    'Transitions': '\uc5f0\uacb0\uc5b4',
    'Boundaries': '\ubb38\uc7a5 \uacbd\uacc4/\uad6c\ub450\uc810',
    'Form, Structure, and Sense': '\ubb38\ubc95 \uad6c\uc870',
    'Linear equations in one variable': '\uc77c\ucc28 \ubc29\uc815\uc2dd',
    'Systems of two linear equations in two variables': '\uc5f0\ub9bd \ubc29\uc815\uc2dd',
    'Nonlinear equations in one variable and systems of equations in two variables': '\uc774\ucc28/\ube44\uc120\ud615 \ubc29\uc815\uc2dd',
    'Percentages': '\ubc31\ubd84\uc728',
    'Area and volume': '\ub113\uc774\uc640 \ubd80\ud53c',
  },
  skillMessages: {
    'Central Ideas and Details': '\uac01 \ub2e8\ub77d\uc744 \uc77d\uc740 \ud6c4 "\uc774 \ub2e8\ub77d\uc758 \ud575\uc2ec\uc740 \ubb50\uc9c0?"\ub77c\uace0 \uc2a4\uc2a4\ub85c \ubb3c\uc5b4\ubcf4\uc138\uc694. \uc9c0\ubb38 \uc804\uccb4\ub97c \ud55c \ubb38\uc7a5\uc73c\ub85c \uc694\uc57d\ud558\ub294 \uc5f0\uc2b5\uc744 \ud574\ubcf4\uc138\uc694. \uc601\uc5b4 \uc2e0\ubb38 \uc0ac\uc124\uc774\ub098 \uc9e7\uc740 \uce7c\ub7fc\uc744 \uc77d\uace0 \uc8fc\uc81c\ubb38\uc744 \ucc3e\ub294 \uac83\ub3c4 \uc88b\uc740 \uc5f0\uc2b5\uc785\ub2c8\ub2e4.',
    'Inferences': '\uae00\uc5d0 \uc801\ud78c \uac83\ub9cc \uc77d\uc9c0 \ub9d0\uace0, "\uc800\uc790\uac00 \uc774\uac78 \uc65c \ub123\uc5c8\uc744\uae4c?"\ub77c\uace0 \uc0dd\uac01\ud574 \ubcf4\uc138\uc694. \ub2f5\uc740 \uac70\uc758 \ud56d\uc0c1 \uc9c0\ubb38 \uc18d \ud2b9\uc815 \ub2e8\uc5b4\ub098 \ud45c\ud604\uc5d0 \uadfc\uac70\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadfc\uac70\ub97c \ucc3e\uc544 \ubc11\uc904 \uadf8\uc73c\uba70 \ud480\uc5b4\ubcf4\uc138\uc694.',
    'Words in Context': '\ubb38\uc7a5\uc5d0\uc11c \ud574\ub2f9 \ub2e8\uc5b4\ub97c \uac00\ub9ac\uace0 \uc5b4\ub5a4 \ub9d0\uc774 \ub4e4\uc5b4\uac08\uc9c0 \uba3c\uc800 \uc608\uce21\ud574 \ubcf4\uc138\uc694. \uadf8\ub2e4\uc74c \ubcf4\uae30\ub97c \ud655\uc778\ud558\uba74 \ub429\ub2c8\ub2e4. \uac00\uc7a5 \ube60\ub974\uac8c \ub2a6\ub294 \uc601\uc5ed\uc774\ub2c8, \ub9e4\uc77c 10\ubb38\uc81c\uc529 \ud480\uc5b4\ubcf4\uc138\uc694.',
    'Text Structure and Purpose': '\ubaa8\ub4e0 \uc9c0\ubb38\uc744 \uc77d\uc744 \ub54c "\uc800\uc790\uac00 \ubb58 \ud558\ub824\ub294 \uac70\uc9c0?" (\uc124\uba85, \uc124\ub4dd, \ube44\uad50, \ubb18\uc0ac)\ub97c \uc0dd\uac01\ud558\uc138\uc694. \uc5f0\uacb0\uc5b4(however, therefore, moreover)\uc5d0 \ubc11\uc904\uc744 \uadf8\uc73c\uba74 \uae00\uc758 \uad6c\uc870\uac00 \ubcf4\uc785\ub2c8\ub2e4.',
    'Cross-Text Connections': '\uac01 \uc9c0\ubb38\uc744 \ub530\ub85c \uc77d\uace0 \ud575\uc2ec \uc8fc\uc7a5\uc744 \ud55c \ubb38\uc7a5\uc73c\ub85c \uc815\ub9ac\ud558\uc138\uc694. \uadf8\ub2e4\uc74c \ub450 \uc9c0\ubb38\uc774 \uc5b4\ub514\uc11c \uc77c\uce58\ud558\uace0, \uc5b4\ub514\uc11c \ub2e4\ub978\uc9c0 \ube44\uad50\ud558\uba74 \ub429\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \ubb38\uc81c\ub294 \ub450 \uad00\uc810 \uc0ac\uc774\uc758 \uad00\uacc4\ub97c \ubb3b\uc2b5\ub2c8\ub2e4.',
    'Rhetorical Synthesis': '\uc9c0\ubb38\uc744 \uc77d\uae30 \uc804\uc5d0 \ubb38\uc81c\uc758 \uc9c0\uc2dc\ubb38\uc744 \uba3c\uc800 \uc77d\uc73c\uc138\uc694. \ubb58 \ucc3e\uc544\uc57c \ud558\ub294\uc9c0 \uc815\ud655\ud788 \uc54c\ub824\uc90d\ub2c8\ub2e4. \uc9e7\uc740 \uae00\uc744 \uc77d\uace0 \ud2b9\uc815 \ubaa9\uc801\uc5d0 \ub9de\ub294 \ud55c \ubb38\uc7a5\uc744 \uc4f0\ub294 \uc5f0\uc2b5\uc744 \ud574\ubcf4\uc138\uc694.',
    'Transitions': '"\uc774 \ub450 \ubb38\uc7a5\uc758 \uad00\uacc4\uac00 \ubb50\uc9c0?" \ub77c\uace0 \uc0dd\uac01\ud558\uc138\uc694. \ub300\uc870(however), \ucd94\uac00(moreover), \uc778\uacfc(therefore) \uc911 \uc5b4\ub5a4 \uad00\uacc4\uc778\uc9c0 \ud310\ub2e8\ud558\uba74 \ub429\ub2c8\ub2e4. \ube48\uce78 \uc55e\ub4a4 \ubb38\uc7a5\uc744 \ud568\uaed8 \uc77d\ub294 \uac83\uc774 \ud575\uc2ec\uc785\ub2c8\ub2e4.',
    'Boundaries': '\uc138 \uac00\uc9c0 \uaddc\uce59\ub9cc \uc678\uc6b0\uba74 \ub300\ubd80\ubd84 \ub9de\ud790 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (1) \uc644\uc804\ud55c \ub450 \ubb38\uc7a5\uc740 \uc27c\ud45c\uac00 \uc544\ub2cc \ub9c8\uce68\ud45c\ub098 \uc138\ubbf8\ucf5c\ub860\uc73c\ub85c \uad6c\ubd84. (2) \ubd80\uac00 \uc815\ubcf4\ub294 \uc27c\ud45c\ub85c \uac10\uc2f8\uae30. (3) \uc8fc\uc5b4\uc640 \ub3d9\uc0ac \uc0ac\uc774\uc5d0 \uc27c\ud45c \uae08\uc9c0. \ub9e4\uc77c \ubb38\ubc95 \ubb38\uc81c\ub97c \ud480\uba70 \uc5f0\uc2b5\ud574 \ubcf4\uc138\uc694.',
    'Form, Structure, and Sense': '\ubb38\uc7a5\uc758 \uc9c4\uc9dc \uc8fc\uc5b4\ub97c \ucc3e\uc73c\uc138\uc694 \u2014 \uc8fc\uc5b4\uc640 \ub3d9\uc0ac \uc0ac\uc774\uc758 \uc218\uc2dd\uc5b4\uad6c\ub294 \ubb34\uc2dc\ud558\uc138\uc694. \ub3d9\uc0ac\uc758 \uc218\uc640 \uc2dc\uc81c\uac00 \uc8fc\uc5b4\uc640 \ub9de\ub294\uc9c0 \ud655\uc778\ud558\uace0, \uc8fc\ubcc0 \ubb38\uc7a5\uc744 \uc77d\uc5b4 \uc815\ud655\ud55c \uc2dc\uc81c\ub97c \ud310\ub2e8\ud558\uc138\uc694. \ub9e4\uc77c \uc8fc\uc5b4-\ub3d9\uc0ac \uc77c\uce58 \ubb38\uc81c 5\uac1c\uc529 \ud480\uc5b4\ubcf4\uc138\uc694.',
    'Linear equations in one variable': '\ubc29\uc815\uc2dd\uc758 \uc591\ucabd\uc5d0 \uac19\uc740 \uc5f0\uc0b0\uc744 \ud574\uc11c \ubcc0\uc218\ub97c \ubd84\ub9ac\ud558\ub294 \uc5f0\uc2b5\uc744 \ud558\uc138\uc694. \ub9e4\uc77c 10\ubb38\uc81c\uc529 \ud480\uba74 \uc790\ub3d9\uc73c\ub85c \uc190\uc774 \uc6c0\uc9c1\uc774\uac8c \ub429\ub2c8\ub2e4.',
    'Systems of two linear equations in two variables': '\ub300\uc785\ubc95(\ud55c \uc2dd\uc744 \ud480\uc5b4\uc11c \ub2e4\ub978 \uc2dd\uc5d0 \ub300\uc785)\uacfc \uc18c\uac70\ubc95(\uc2dd\uc744 \ub354\ud558\uac70\ub098 \ube7c\uc11c \ubcc0\uc218 \uc81c\uac70) \ub450 \uac00\uc9c0\ub97c \ubaa8\ub450 \uc5f0\uc2b5\ud558\uc138\uc694. \uacc4\uc218\ub97c \ubcf4\uace0 \uc5b4\ub5a4 \ubc29\ubc95\uc774 \ub354 \ube60\ub97c\uc9c0 \ud310\ub2e8\ud558\ub294 \ub208\uc744 \uae38\ub7ec\ubcf4\uc138\uc694.',
    'Nonlinear equations in one variable and systems of equations in two variables': '\uc138 \uac00\uc9c0\ub97c \ud655\uc2e4\ud788 \ud560 \uc218 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4: (1) \uac04\ub2e8\ud55c \uc774\ucc28\uc2dd \uc778\uc218\ubd84\ud574, (2) \uadfc\uc758 \uacf5\uc2dd \uc0ac\uc6a9, (3) \uc644\uc804\uc81c\uacf1\uc2dd. \uadfc\uc758 \uacf5\uc2dd x = (-b \u00b1 \u221a(b\u00b2-4ac)) / 2a\ub97c \uc678\uc6b0\uace0 \ubc18\ubcf5 \uc5f0\uc2b5\ud558\uc138\uc694.',
    'Percentages': '\ubc31\ubd84\uc728 \ubb38\uc81c\ub294 \ud56d\uc0c1 \ub2e8\uacc4\ubcc4\ub85c \uacc4\uc0b0\ud558\uc138\uc694. "30% \uc99d\uac00"\ub294 \xd71.3, "20% \uac10\uc18c"\ub294 \xd70.8\uc785\ub2c8\ub2e4. \uba38\ub9bf\uc18d\uc73c\ub85c \ud55c \ubc88\uc5d0 \uacc4\uc0b0\ud558\uc9c0 \ub9d0\uace0, \uac01 \ub2e8\uacc4\ub97c \uc2dd\uc73c\ub85c \uc368\uc11c \ud480\uc5b4\ubcf4\uc138\uc694.',
    'Area and volume': 'SAT\ub294 \ubaa8\ub4e0 \uacf5\uc2dd\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c, \uc5b8\uc81c \uc5b4\ub5a4 \uacf5\uc2dd\uc744 \uc4f0\ub294\uc9c0 \uc544\ub294 \uac83\uc774 \ud575\uc2ec\uc785\ub2c8\ub2e4. \ubaa8\ub4e0 \uae30\ud558 \ubb38\uc81c\uc5d0\uc11c \uadf8\ub9bc\uc744 \uadf8\ub9ac\uace0, \uc54c\ub824\uc9c4 \uac12\uc744 \ud45c\uc2dc\ud55c \ub4a4, \ud544\uc694\ud55c \uac12\uacfc \uc5f0\uacb0\ub418\ub294 \uacf5\uc2dd\uc744 \ucc3e\uc73c\uc138\uc694.',
  },
};

const translations: Record<Lang, ResultsTranslations> = { en, ko };

export function getTranslations(lang: Lang): ResultsTranslations {
  return translations[lang];
}
