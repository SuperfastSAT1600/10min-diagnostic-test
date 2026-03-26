import type { MiniTestQuestion } from './types';

export const questions: MiniTestQuestion[] = [
  // ═══════════════════════════════════════════
  // READING (5 questions)
  // ═══════════════════════════════════════════

  // R1: Information and Ideas — Central Ideas and Details (Easy)
  {
    id: 'r1',
    section: 'Reading',
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Easy',
    passage: `<p>In a study published in 2022, marine biologist Dr. Ayana Johnson found that coral reefs that had been exposed to moderate wave action recovered from bleaching events 40% faster than reefs in calmer waters. Johnson hypothesized that the constant water movement strengthened the corals' cellular repair mechanisms, much like how exercise strengthens human muscles. Her team observed that these "wave-trained" corals produced higher levels of heat-shock proteins, which protect cells from thermal damage.</p>`,
    question: `Which choice best states the main idea of the text?`,
    options: [
      { id: 'A', text: 'Coral reefs are being destroyed at an unprecedented rate due to ocean warming.' },
      { id: 'B', text: 'Exposure to moderate wave action may help coral reefs build resilience against bleaching.' },
      { id: 'C', text: 'Dr. Johnson\'s research methods were more rigorous than those of previous marine studies.' },
      { id: 'D', text: 'Heat-shock proteins are the primary factor determining whether corals survive bleaching events.' },
    ],
    correctAnswer: 'B',
    explanation: 'The passage centers on Johnson\'s finding that wave-exposed corals recover faster from bleaching, with the wave action strengthening their repair mechanisms. Choice B captures this main idea.',
  },

  // R2: Information and Ideas — Inferences (Medium)
  {
    id: 'r2',
    section: 'Reading',
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Medium',
    passage: `<p>The okapi, a mammal native to the Democratic Republic of Congo, was unknown to Western science until 1901. Despite being roughly the size of a horse, the okapi evaded detection due to its solitary nature and preference for dense rainforest habitat. The animal's dark, velvety coat absorbs light rather than reflecting it, making it nearly invisible in the forest understory. Even today, with modern tracking technology, researchers estimate that fewer than 50 okapis have ever been directly observed in the wild by scientists.</p>`,
    question: `Based on the text, what can most reasonably be inferred about population estimates of okapis?`,
    options: [
      { id: 'A', text: 'They are likely based on indirect evidence rather than direct counting.' },
      { id: 'B', text: 'They are considered highly accurate due to modern tracking technology.' },
      { id: 'C', text: 'They have decreased significantly since the animal was first discovered.' },
      { id: 'D', text: 'They are primarily derived from observations in captive breeding programs.' },
    ],
    correctAnswer: 'A',
    explanation: 'Since fewer than 50 okapis have ever been directly observed in the wild, scientists must rely on indirect methods (tracks, droppings, camera traps) to estimate populations. This makes A the most reasonable inference.',
  },

  // R3: Craft and Structure — Words in Context (Medium)
  {
    id: 'r3',
    section: 'Reading',
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    passage: `<p>Literary critic Michiko Kakutani argues that the rise of social media has not diminished the appetite for long-form narrative, as many predicted. Instead, she contends, it has <strong>galvanized</strong> a new generation of readers who, overwhelmed by fragmented online content, actively seek out the sustained immersion that novels provide.</p>`,
    question: `As used in the text, what does "galvanized" most nearly mean?`,
    options: [
      { id: 'A', text: 'Confused' },
      { id: 'B', text: 'Motivated' },
      { id: 'C', text: 'Coated' },
      { id: 'D', text: 'Divided' },
    ],
    correctAnswer: 'B',
    explanation: '"Galvanized" here means spurred into action or motivated. The context shows that social media has motivated (not diminished) readers to seek out novels, making B correct.',
  },

  // R4: Craft and Structure — Text Structure and Purpose (Hard)
  {
    id: 'r4',
    section: 'Reading',
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    passage: `<p>Philosopher Kwame Anthony Appiah has challenged the notion that cultural identity is fixed and inherited. In his view, cultures are not museum artifacts to be preserved under glass but living practices that gain meaning through constant reinvention. A jazz musician who incorporates West African rhythms, a Japanese architect who draws on Bauhaus principles, a Nigerian novelist who writes in English — each, Appiah argues, is not betraying a tradition but fulfilling its deepest impulse: the drive to adapt and evolve.</p>`,
    question: `Which choice best describes the function of the examples in the text (jazz musician, Japanese architect, Nigerian novelist)?`,
    options: [
      { id: 'A', text: 'To demonstrate that cultural mixing leads to the decline of traditional art forms.' },
      { id: 'B', text: 'To illustrate Appiah\'s claim that cultural evolution is itself a form of cultural authenticity.' },
      { id: 'C', text: 'To contrast different approaches to preserving cultural heritage across regions.' },
      { id: 'D', text: 'To provide evidence that Western cultural influence is dominant worldwide.' },
    ],
    correctAnswer: 'B',
    explanation: 'The examples all show cross-cultural incorporation, and Appiah frames this as "fulfilling tradition\'s deepest impulse." The examples illustrate his argument that adapting and evolving IS authentic cultural practice.',
  },

  // R5: Craft and Structure — Cross-Text Connections (Hard)
  {
    id: 'r5',
    section: 'Reading',
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    passage: `<p><strong>Text 1:</strong> Economist Ha-Joon Chang argues that free trade policies, while beneficial for already-developed nations, can devastate developing economies. He points out that every wealthy nation — including the United States and Britain — used protectionist policies (tariffs, subsidies) during its own industrialization phase before advocating free trade.</p>
<p><strong>Text 2:</strong> Economist Daron Acemoglu contends that the primary driver of national prosperity is not trade policy but institutional quality. Nations with inclusive institutions — those that protect property rights, enforce contracts, and allow broad political participation — tend to prosper regardless of their specific trade stance.</p>`,
    question: `Based on the texts, how would Acemoglu most likely respond to Chang's argument?`,
    options: [
      { id: 'A', text: 'By agreeing that developing nations should adopt protectionist policies.' },
      { id: 'B', text: 'By arguing that trade policy matters less than the quality of a nation\'s institutions.' },
      { id: 'C', text: 'By claiming that historical examples of protectionism are not well documented.' },
      { id: 'D', text: 'By suggesting that free trade is always beneficial for developing nations.' },
    ],
    correctAnswer: 'B',
    explanation: 'Acemoglu\'s position is that institutional quality, not trade policy, is the primary driver of prosperity. He would likely respond to Chang by acknowledging the trade policy debate but arguing it misses the more fundamental factor: institutions.',
  },

  // ═══════════════════════════════════════════
  // WRITING (5 questions)
  // ═══════════════════════════════════════════

  // W1: Expression of Ideas — Rhetorical Synthesis (Easy)
  {
    id: 'w1',
    section: 'Writing',
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Easy',
    passage: `<p>A student is writing a research paper about urban green spaces. The student wants to emphasize the health benefits of parks for city residents.</p>
<ul>
<li>A 2019 study found that residents living within a 10-minute walk of a park had 20% lower rates of depression.</li>
<li>Urban parks reduce surrounding air temperatures by up to 5°F through tree canopy effects.</li>
<li>City parks serve as habitats for over 300 bird species in North America.</li>
</ul>`,
    question: `Which choice most effectively uses relevant information from the notes to accomplish the student's goal?`,
    options: [
      { id: 'A', text: 'Urban parks support biodiversity, providing habitats for over 300 bird species across North America.' },
      { id: 'B', text: 'Research shows that living near a park is associated with significantly lower rates of depression, highlighting the mental health benefits of urban green spaces.' },
      { id: 'C', text: 'Parks have multiple functions in cities, from cooling temperatures to supporting wildlife.' },
      { id: 'D', text: 'A 2019 study examined various aspects of urban parks, including their effects on temperature and wildlife.' },
    ],
    correctAnswer: 'B',
    explanation: 'The student wants to emphasize health benefits. Only B focuses on the health-related finding (lower depression rates). The other options focus on environmental or biodiversity aspects.',
  },

  // W2: Expression of Ideas — Transitions (Medium)
  {
    id: 'w2',
    section: 'Writing',
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Medium',
    passage: `<p>The Voyager 1 spacecraft, launched in 1977, has traveled farther from Earth than any human-made object. _______ its original mission was to study Jupiter and Saturn, the probe has continued transmitting data for over four decades, providing invaluable information about the boundary between our solar system and interstellar space.</p>`,
    question: `Which choice completes the text with the most logical transition?`,
    options: [
      { id: 'A', text: 'Because' },
      { id: 'B', text: 'Although' },
      { id: 'C', text: 'Similarly,' },
      { id: 'D', text: 'For instance,' },
    ],
    correctAnswer: 'B',
    explanation: 'The sentence contrasts the original limited mission (Jupiter and Saturn) with the unexpected outcome (four decades of data). "Although" signals this contrast between expectation and result.',
  },

  // W3: Standard English Conventions — Boundaries (Medium)
  {
    id: 'w3',
    section: 'Writing',
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Medium',
    question: `<p>Researchers at MIT have developed a new type of concrete that can actually absorb carbon dioxide from the _______ could help reduce the construction industry's massive carbon footprint.</p>`,
    options: [
      { id: 'A', text: 'atmosphere, which' },
      { id: 'B', text: 'atmosphere which,' },
      { id: 'C', text: 'atmosphere. Which' },
      { id: 'D', text: 'atmosphere; which,' },
    ],
    correctAnswer: 'A',
    explanation: '"Which" introduces a nonrestrictive relative clause describing the concrete. A comma before "which" is correct for nonrestrictive clauses. Choice A properly places the comma before "which."',
  },

  // W4: Standard English Conventions — Boundaries (Hard)
  {
    id: 'w4',
    section: 'Writing',
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Hard',
    question: `<p>The James Webb Space Telescope, which orbits the Sun at a point about 1 million miles from _______ captured images of galaxies that formed less than 400 million years after the Big Bang.</p>`,
    options: [
      { id: 'A', text: 'Earth; has' },
      { id: 'B', text: 'Earth has' },
      { id: 'C', text: 'Earth, has' },
      { id: 'D', text: 'Earth: has' },
    ],
    correctAnswer: 'C',
    explanation: 'The clause "which orbits the Sun at a point about 1 million miles from Earth" is a nonrestrictive clause set off by commas. The second comma after "Earth" closes this clause before the main verb "has captured."',
  },

  // W5: Standard English Conventions — Form, Structure, and Sense (Hard)
  {
    id: 'w5',
    section: 'Writing',
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense',
    difficulty: 'Hard',
    question: `<p>Neither the director nor the lead _______ willing to compromise on the film's ending, which the studio executives had criticized as too ambiguous for mainstream audiences.</p>`,
    options: [
      { id: 'A', text: 'actors were' },
      { id: 'B', text: 'actors was' },
      { id: 'C', text: 'actor were' },
      { id: 'D', text: 'actor was' },
    ],
    correctAnswer: 'D',
    explanation: 'With "neither...nor," the verb agrees with the noun closest to it. "The lead actor" is singular, so the verb must be singular: "was." Choice D is correct.',
  },

  // ═══════════════════════════════════════════
  // MATH (5 questions)
  // ═══════════════════════════════════════════

  // M1: Algebra — Linear equations in one variable (Easy)
  {
    id: 'm1',
    section: 'Math',
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    question: `<p>If 3<em>x</em> + 7 = 22, what is the value of <em>x</em> ?</p>`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '5' },
      { id: 'C', text: '7' },
      { id: 'D', text: '10' },
    ],
    correctAnswer: 'B',
    explanation: 'Subtract 7 from both sides: 3x = 15. Divide both sides by 3: x = 5.',
  },

  // M2: Algebra — Systems of two linear equations (Medium)
  {
    id: 'm2',
    section: 'Math',
    domain: 'Algebra',
    skill: 'Systems of two linear equations in two variables',
    difficulty: 'Medium',
    question: `<p>A coffee shop sells lattes for $5 and cappuccinos for $4. On Monday, the shop sold a total of 60 drinks and collected $275. How many lattes were sold?</p>`,
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '30' },
      { id: 'C', text: '35' },
      { id: 'D', text: '40' },
    ],
    correctAnswer: 'C',
    explanation: 'Let L = lattes and C = cappuccinos. L + C = 60 and 5L + 4C = 275. From the first equation, C = 60 − L. Substituting: 5L + 4(60 − L) = 275 → 5L + 240 − 4L = 275 → L = 35.',
  },

  // M3: Advanced Math — Nonlinear equations (Medium)
  {
    id: 'm3',
    section: 'Math',
    domain: 'Advanced Math',
    skill: 'Nonlinear equations in one variable and systems of equations in two variables',
    difficulty: 'Medium',
    question: `<p>What are the solutions to the equation <em>x</em>² − 5<em>x</em> − 14 = 0 ?</p>`,
    options: [
      { id: 'A', text: 'x = −2 and x = 7' },
      { id: 'B', text: 'x = 2 and x = −7' },
      { id: 'C', text: 'x = −2 and x = −7' },
      { id: 'D', text: 'x = 2 and x = 7' },
    ],
    correctAnswer: 'A',
    explanation: 'Factor x² − 5x − 14 = (x − 7)(x + 2) = 0. Setting each factor to zero: x = 7 or x = −2.',
  },

  // M4: Problem-Solving and Data Analysis — Percentages (Hard)
  {
    id: 'm4',
    section: 'Math',
    domain: 'Problem-Solving and Data Analysis',
    skill: 'Percentages',
    difficulty: 'Hard',
    question: `<p>A store increases the price of a jacket by 20%, then offers a 20% discount on the new price during a sale. If the original price was $80, what is the sale price?</p>`,
    options: [
      { id: 'A', text: '$76.80' },
      { id: 'B', text: '$78.00' },
      { id: 'C', text: '$80.00' },
      { id: 'D', text: '$82.40' },
    ],
    correctAnswer: 'A',
    explanation: 'After a 20% increase: $80 × 1.20 = $96. After a 20% discount on $96: $96 × 0.80 = $76.80. A 20% increase followed by a 20% decrease does NOT return to the original price.',
  },

  // M5: Geometry and Trigonometry — Area and volume (Hard)
  {
    id: 'm5',
    section: 'Math',
    domain: 'Geometry and Trigonometry',
    skill: 'Area and volume',
    difficulty: 'Hard',
    question: `<p>A cylinder has a radius of 4 cm and a height of 9 cm. A cone has the same radius and the same height. What is the volume of the cylinder minus the volume of the cone?</p>`,
    options: [
      { id: 'A', text: '48π cm³' },
      { id: 'B', text: '96π cm³' },
      { id: 'C', text: '144π cm³' },
      { id: 'D', text: '192π cm³' },
    ],
    correctAnswer: 'B',
    explanation: 'Cylinder volume = πr²h = π(16)(9) = 144π. Cone volume = (1/3)πr²h = (1/3)(144π) = 48π. Difference = 144π − 48π = 96π cm³.',
  },
];
