
import { User, ChildProfile, AssessmentResult, Recommendation, PricingTier, BlogPost, Conversation, Message, GameModule, Badge, InventoryItem } from '../types';
import React from 'react';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Sarah Parent',
    email: 'parent@playlens.com',
    role: 'parent',
    plan: PricingTier.OPTIMIZER,
    avatarUrl: 'https://ui-avatars.com/api/?name=Sarah+Parent&background=4A7C64&color=fff',
    childrenIds: ['c1', 'c2']
  },
  {
    id: 'u7',
    name: 'John Parent',
    email: 'john@playlens.com',
    role: 'parent',
    plan: PricingTier.OPTIMIZER,
    avatarUrl: 'https://ui-avatars.com/api/?name=John+Parent&background=335948&color=fff',
    childrenIds: ['c1'] // John is also Leo's parent
  },
  {
    id: 'u2',
    name: 'Coach Mike',
    email: 'coach@playlens.com',
    role: 'coach',
    plan: PricingTier.ADVOCATE,
    specialty: 'Robotics & STEM',
    avatarUrl: 'https://ui-avatars.com/api/?name=Coach+Mike&background=E09F7D&color=fff',
    teamId: 't1'
  },
  {
    id: 'u6',
    name: 'Coach Sarah',
    email: 'sarah.coach@playlens.com',
    role: 'coach',
    plan: PricingTier.ADVOCATE,
    specialty: 'Visual Arts',
    avatarUrl: 'https://ui-avatars.com/api/?name=Coach+Sarah&background=FF6B6B&color=fff',
    teamId: 't2'
  },
  {
    id: 'u3',
    name: 'Leo Kid',
    email: 'kid@playlens.com',
    role: 'child',
    plan: PricingTier.FREE,
    avatarUrl: 'https://ui-avatars.com/api/?name=Leo+Kid&background=FFB347&color=fff',
    childProfileId: 'c1' // Link to profile
  },
  {
    id: 'u4',
    name: 'Sam Parent',
    email: 'sam.p@example.com',
    role: 'parent',
    plan: PricingTier.OPTIMIZER,
    avatarUrl: 'https://ui-avatars.com/api/?name=Sam+Parent&background=random&color=fff',
    childrenIds: ['c3']
  },
  {
    id: 'u5',
    name: 'Alex Parent',
    email: 'alex.p@example.com',
    role: 'parent',
    plan: PricingTier.OPTIMIZER,
    avatarUrl: 'https://ui-avatars.com/api/?name=Alex+Parent&background=random&color=fff',
    childrenIds: ['c4']
  },
  {
    id: 'admin1',
    name: 'Super Admin',
    email: 'admin@playlens.com',
    role: 'admin',
    plan: PricingTier.ADVOCATE,
    avatarUrl: 'https://ui-avatars.com/api/?name=Super+Admin&background=333&color=fff'
  }
];

export const MOCK_GAMES: GameModule[] = [
  {
    id: 'g1',
    title: 'Space Maze 3D',
    description: 'Navigate complex 3D environments to test spatial reasoning and mental rotation skills.',
    thumbnail: 'https://picsum.photos/seed/game1/600/400',
    category: 'Spatial',
    difficulty: 'Intermediate',
    duration: '10-15 min',
    skills: ['Mental Rotation', 'Pathfinding', '3D Visualization'],
    recommendedAge: [6, 9],
    type: 'digital',
    observationQuestions: [
      { id: 'q1', text: 'Did the child rotate the map frequently?', type: 'boolean' },
      { id: 'q2', text: 'Frustration level when stuck', type: 'scale' }
    ]
  },
  {
    id: 'g2',
    title: 'Pattern Jungle',
    description: 'Identify and complete complex sequences of shapes and colors in a vibrant jungle setting.',
    thumbnail: 'https://picsum.photos/seed/game2/600/400',
    category: 'Logic',
    difficulty: 'Beginner',
    duration: '5-10 min',
    skills: ['Pattern Recognition', 'Inductive Reasoning'],
    recommendedAge: [4, 7],
    type: 'digital',
    observationQuestions: [
      { id: 'q1', text: 'Did they recognize the pattern immediately?', type: 'boolean' },
      { id: 'q2', text: 'Focus level during the task', type: 'scale' }
    ]
  },
  {
    id: 'g3',
    title: 'Story Builder',
    description: 'Construct narratives from random elements to assess verbal fluency and creativity.',
    thumbnail: 'https://picsum.photos/seed/game3/600/400',
    category: 'Verbal',
    difficulty: 'Advanced',
    duration: '15-20 min',
    skills: ['Vocabulary', 'Narrative Structure', 'Imagination'],
    recommendedAge: [7, 10],
    type: 'digital',
    observationQuestions: [
      { id: 'q1', text: 'Did they ask for help with vocabulary?', type: 'boolean' },
      { id: 'q2', text: 'Creativity of the story', type: 'scale' }
    ]
  },
  {
    id: 'g4',
    title: 'Emotion Mirror',
    description: 'Identify micro-expressions and social cues in characters faces.',
    thumbnail: 'https://picsum.photos/seed/game4/600/400',
    category: 'EQ',
    difficulty: 'Beginner',
    duration: '5-8 min',
    skills: ['Empathy', 'Facial Recognition', 'Social Cues'],
    recommendedAge: [4, 8],
    type: 'digital'
  },
  {
    id: 'g5',
    title: 'Memory Match Extreme',
    description: 'A high-speed working memory challenge with auditory and visual distractors.',
    thumbnail: 'https://picsum.photos/seed/game5/600/400',
    category: 'Memory',
    difficulty: 'Advanced',
    duration: '10 min',
    skills: ['Working Memory', 'Focus', 'Inhibition Control'],
    recommendedAge: [8, 12],
    type: 'digital'
  },
  // NEW PHYSICAL GAME
  {
    id: 'g6',
    title: 'The Tower Builder',
    description: 'The Tower Builder is a physical assessment designed to evaluate fine motor skills, understanding of physics (gravity/balance), and emotional resilience in the face of failure.',
    thumbnail: 'https://picsum.photos/seed/blocks/600/400',
    category: 'Spatial',
    difficulty: 'Beginner',
    duration: '10 min',
    skills: ['Fine Motor Skills', 'Physics Intuition', 'Patience', 'Hand-Eye Coordination'],
    recommendedAge: [4, 7],
    type: 'physical',
    materials: ['10 Wooden Blocks', '1 Flat Surface', 'Stopwatch (Optional)'],
    setupInstructions: [
      'Clear a flat table surface.',
      'Place all 10 wooden blocks in a pile on the left side of the child.',
      'Ensure the child is seated comfortably.'
    ],
    executionInstructions: [
      'Ask the child to build the tallest tower possible using only ONE hand.',
      'They must pick up one block at a time.',
      'If the tower falls, they should try again immediately.',
      'Continue for 3 minutes or until they use all blocks.'
    ],
    executionDescription: 'As the administrator, your role is to act as the timekeeper and silent observer. You will set the rules ("One hand only") and then step back. Do not help them balance the blocks unless they ask for help (and even then, only offer verbal encouragement).',
    observationFocus: 'Watch their fingers: Is there a tremor when placing blocks? Watch their eyes: Do they look for a stable spot? Most importantly, watch their reaction to a crash: Do they laugh and rebuild (Resilience) or get angry and quit (Frustration)?',
    observationQuestions: [
      { id: 'pq1', text: 'Which hand did they use primarily?', type: 'boolean' }, 
      { id: 'pq2', text: 'Did they test stability before letting go?', type: 'boolean' },
      { id: 'pq3', text: 'Reaction to tower falling (1=Quit, 5=Laughed/Retried)', type: 'scale' }
    ]
  }
];

const EXAMPLE_BADGES: Badge[] = [
  { id: 'b1', name: 'Focus Ninja', description: 'Completed a game without clicking outside the play area.', icon: 'Crosshair', dateEarned: '2023-10-20', category: 'Skill' },
  { id: 'b2', name: 'The Explorer', description: 'Played all 4 game types in one week.', icon: 'Compass', dateEarned: '2023-10-22', category: 'Explorer' }
];

const EXAMPLE_INVENTORY: InventoryItem[] = [
  { id: 'i1', name: 'Scientist Goggles', type: 'glasses', icon: 'Glasses', isEquipped: true },
  { id: 'i2', name: 'Space Helmet', type: 'hat', icon: 'HardHat', isEquipped: false }
];

export const MOCK_CHILDREN: ChildProfile[] = [
  {
    id: 'c1',
    parentIds: ['u1', 'u7'], 
    name: 'Leo',
    age: 7,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
    strengths: ['Spatial Reasoning', 'Strategic Planning'],
    recentActivity: 'Completed "Space Maze" module',
    coachIds: ['u2', 'u6'],
    assignments: [
      { id: 'as1', gameId: 'g2', assignedBy: 'u2', assignedDate: '2023-10-25', status: 'pending', dueDate: '2023-10-28' }
    ],
    // New Fields
    onboardingStatus: 'pending', // Set to pending to demonstrate Origins Map
    sparks: 450,
    badges: EXAMPLE_BADGES,
    inventory: EXAMPLE_INVENTORY
  },
  {
    id: 'c2',
    parentIds: ['u1'],
    name: 'Mia',
    age: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
    strengths: ['Verbal Fluency', 'Empathy'],
    recentActivity: 'Started "Story Builder"',
    coachIds: ['u6'],
    assignments: [],
    onboardingStatus: 'completed',
    sparks: 120,
    badges: [],
    inventory: []
  },
  {
    id: 'c3',
    parentIds: ['u4'],
    name: 'Sam',
    age: 6,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sam',
    strengths: ['Memory'],
    coachIds: ['u2'],
    onboardingStatus: 'completed',
    sparks: 300,
    badges: [],
    inventory: []
  },
  {
    id: 'c4',
    parentIds: ['u5'],
    name: 'Alex',
    age: 8,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    strengths: ['Focus'],
    coachIds: ['u2'],
    onboardingStatus: 'completed',
    sparks: 550,
    badges: [],
    inventory: []
  }
];

export const MOCK_ASSESSMENTS: AssessmentResult[] = [
  {
    id: 'a1',
    childId: 'c1',
    moduleId: 'm1',
    moduleName: 'Space Maze',
    date: '2023-10-24',
    score: 92,
    cognitiveArea: 'Spatial',
    insights: ['Excellent 3D rotation skills', 'Prefers visual problem solving']
  },
  {
    id: 'a2',
    childId: 'c1',
    moduleId: 'm2',
    moduleName: 'Pattern Puzzles',
    date: '2023-10-20',
    score: 88,
    cognitiveArea: 'Logic',
    insights: ['Quick pattern recognition', 'Methodical approach']
  },
  {
    id: 'a3',
    childId: 'c2',
    moduleId: 'm3',
    moduleName: 'Story Builder',
    date: '2023-10-22',
    score: 95,
    cognitiveArea: 'Verbal',
    insights: ['High vocabulary for age', 'Strong narrative structure']
  }
];

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'r1',
    title: 'Junior Robotics League',
    category: 'STEM',
    description: 'A hands-on robotics program perfect for children with strong spatial and logic skills.',
    provider: 'TechKids Academy',
    matchScore: 98,
    tags: ['Coding', 'Engineering', 'Teamwork']
  },
  {
    id: 'r2',
    title: 'Advanced LEGO Architecture',
    category: 'Creative',
    description: 'Complex building challenges that utilize spatial reasoning and planning.',
    provider: 'Bricks & Brains',
    matchScore: 94,
    tags: ['Construction', 'Design', 'Patience']
  },
  {
    id: 'r3',
    title: 'Young Storytellers Workshop',
    category: 'Arts',
    description: 'Improv and storytelling classes to channel high verbal fluency.',
    provider: 'City Theater',
    matchScore: 90,
    tags: ['Writing', 'Speaking', 'Confidence']
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Beyond the Classroom: Why Play is the Ultimate Teacher',
    excerpt: 'Standardized exams create unnecessary stress and often fail to capture natural creativity. Discover why undirected play reveals more about your child than any test.',
    date: 'Oct 15, 2023',
    readTime: '5 min read',
    author: 'Ali Soleymani',
    authorRole: 'Founder & Lead AI Architect',
    authorAvatar: 'https://ui-avatars.com/api/?name=Ali+Soleymani&background=4A7C64&color=fff',
    category: 'Child Development',
    imageUrl: 'https://picsum.photos/seed/blog1/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: 'mb-4' }, "In a world increasingly obsessed with standardized metrics, we often forget the primary language of childhood: play. It is through play that children first interact with the world, testing boundaries, experimenting with physics, and navigating social dynamics. Yet, traditional education systems largely sideline play in favor of rigid curriculum and rote memorization."),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "The Neurology of Fun"),
      React.createElement('p', { className: 'mb-4' }, "Neuroscience tells us that the brain is most plastic—most capable of learning and adapting—when a child is engaged and unstressed. Standardized testing activates cortisol, the stress hormone, which can actually inhibit higher-order thinking. Play, conversely, releases dopamine, which enhances memory retention and motivation."),
      React.createElement('p', { className: 'mb-4' }, "At PlayLens, we don't just see play as 'recess'. We see it as a data-rich environment. When a child builds a tower that keeps falling over, do they get frustrated and quit? Or do they analyze the structure and try a wider base? This isn't just 'playing with blocks'; it's a live demonstration of resilience, spatial reasoning, and engineering aptitude."),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "Moving Beyond Grades"),
      React.createElement('p', { className: 'mb-4' }, "Grades measure how well a child can recall specific information at a specific time. They do not measure curiosity, empathy, leadership, or strategic foresight. By shifting the lens to play-based assessment, we can capture these intangible yet critical life skills."),
      React.createElement('p', { className: 'mb-4' }, "Our mission is to give parents the tools to see these hidden moments of genius. Because every child is a genius at something—we just need to be looking in the right place.")
    ])
  },
  {
    id: '2',
    title: 'Identifying Hidden Talents in Neurodiverse Children',
    excerpt: 'Children with ADHD or dyslexia often possess unique cognitive strengths that go unnoticed. Learn how to spot and nurture these hidden superpowers.',
    date: 'Sep 28, 2023',
    readTime: '7 min read',
    author: 'Sarah Jenkins',
    authorRole: 'Child Psychologist',
    authorAvatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=E09F7D&color=fff',
    category: 'Neurodiversity',
    imageUrl: 'https://picsum.photos/seed/blog2/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: 'mb-4' }, "For decades, neurodivergence has been framed through a deficit model: what the child *cannot* do. The child with ADHD 'cannot sit still'. The child with dyslexia 'cannot read quickly'. This perspective is not only damaging to a child's self-esteem but also scientifically incomplete."),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "The 'Diffability' Framework"),
      React.createElement('p', { className: 'mb-4' }, "We prefer to look at these traits as different abilities. Research suggests that the 'wandering mind' associated with ADHD is actually a hyper-associative state, perfect for creative problem-solving and generating novel ideas. The dyslexic brain, while struggling with 2D text, often excels in 3D spatial visualization—a trait highly valued in architecture and engineering."),
      React.createElement('p', { className: 'mb-4' }, "Our platform is designed to bypass the traditional barriers that these children face. Because our assessments are gamified and visual, they don't rely on the linear, text-heavy formats that disadvantage neurodiverse minds."),
      React.createElement('blockquote', { className: 'border-l-4 border-accent pl-4 italic text-gray-600 my-8' }, "“When we stop asking a fish to climb a tree, we finally see how beautifully it swims.”"),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "Practical Observation Tips"),
      React.createElement('ul', { className: 'list-disc pl-6 space-y-2 mb-4' }, [
        React.createElement('li', null, "Watch for hyper-focus: What activity makes them lose track of time?"),
        React.createElement('li', null, "Look for pattern recognition: Do they notice details others miss?"),
        React.createElement('li', null, "Valuing energy: Is their 'restlessness' actually a need for kinetic learning?")
      ])
    ])
  },
  {
    id: '3',
    title: 'The Data-Driven Parent: How to Quantify Growth',
    excerpt: 'Move beyond "good job" to meaningful metrics. How longitudinal data can help you make better decisions for your child\'s extracurricular activities.',
    date: 'Sep 10, 2023',
    readTime: '4 min read',
    author: 'Dr. Emily Chen',
    authorRole: 'Data Scientist & Educator',
    authorAvatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=65947E&color=fff',
    category: 'Parenting Science',
    imageUrl: 'https://picsum.photos/seed/blog3/800/600',
    content: React.createElement(React.Fragment, null, [
      React.createElement('p', { className: 'mb-4' }, "We live in the age of the 'Quantified Self'. We track our steps, our sleep, and our calories. Yet, when it comes to our children's development—arguably the most important project of our lives—we often rely on intuition and vague feedback like 'good job'."),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "The Problem with 'Good Job'"),
      React.createElement('p', { className: 'mb-4' }, "Generic praise feels good in the moment but offers no guidance. Data-driven parenting isn't about reducing a child to a number; it's about seeing the *trend line*. Is their frustration tolerance improving? Is their vocabulary expanding? These are measurable metrics."),
      React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "Longitudinal Data vs. Snapshots"),
      React.createElement('p', { className: 'mb-4' }, "A single test score is a snapshot. It tells you how a child performed on one day, perhaps when they were tired or hungry. PlayLens focuses on longitudinal data—tracking performance over months and years. This smooths out the noise and reveals the true signal of your child's developmental trajectory."),
      React.createElement('p', { className: 'mb-4' }, "By collecting this data, you can make informed investment decisions. Instead of paying for six months of piano lessons only to find out your child hates it, our predictive models can suggest that their auditory processing strengths actually align better with coding or language learning.")
    ])
  },
  {
    id: '4',
    title: 'Screen Time: Enemy or Tool?',
    excerpt: 'Not all screen time is created equal. Learn the difference between passive consumption and active engagement, and how to choose apps that build rather than numb.',
    date: 'Aug 15, 2023',
    readTime: '6 min read',
    author: 'Dr. Emily Chen',
    authorRole: 'Data Scientist & Educator',
    authorAvatar: 'https://ui-avatars.com/api/?name=Emily+Chen&background=65947E&color=fff',
    category: 'Digital Wellness',
    imageUrl: 'https://picsum.photos/seed/blog4/800/600',
    content: React.createElement(React.Fragment, null, [
        React.createElement('p', { className: 'mb-4' }, "Parents often feel guilty about handing over an iPad, but in 2023, digital literacy is as crucial as reading. The key is distinguishing between 'zombie mode' (mindless scrolling) and 'creator mode' (interactive problem solving)."),
        React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "Active vs. Passive"),
        React.createElement('p', { className: 'mb-4' }, "Passive screen time is like eating candy—fun briefly, but offers no nutritional value. Active screen time, where a child must make choices, solve puzzles, or build structures, is like a cognitive workout."),
        React.createElement('p', { className: 'mb-4' }, "At PlayLens, we design for 'lean-in' engagement. Our modules pause if the child stops thinking, requiring active input to proceed.")
    ])
  },
  {
    id: '5',
    title: 'Building Emotional Resilience',
    excerpt: 'Why "Pretend Play" is actually a sophisticated workshop for emotional intelligence and conflict resolution.',
    date: 'Jul 22, 2023',
    readTime: '5 min read',
    author: 'Sarah Jenkins',
    authorRole: 'Child Psychologist',
    authorAvatar: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=E09F7D&color=fff',
    category: 'Child Psychology',
    imageUrl: 'https://picsum.photos/seed/blog5/800/600',
    content: React.createElement(React.Fragment, null, [
        React.createElement('p', { className: 'mb-4' }, "When children play 'house' or 'superheroes', they aren't just escaping reality; they are practicing it. Role-playing allows children to simulate complex social scenarios in a safe environment."),
        React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "The Safe Laboratory"),
        React.createElement('p', { className: 'mb-4' }, "If a child loses a game, they feel a micro-dose of failure. This is healthy! It teaches them that failure isn't fatal. It builds the grit required to handle bigger challenges later in life."),
        React.createElement('p', { className: 'mb-4' }, "We encourage parents to observe these moments. Does your child renegotiate the rules? Do they comfort a 'hurt' doll? These are signs of high EQ.")
    ])
  },
  {
    id: '6',
    title: 'The Montessori Approach to AI',
    excerpt: 'How we blend the century-old principles of Maria Montessori with cutting-edge artificial intelligence to foster independent learning.',
    date: 'Jun 10, 2023',
    readTime: '8 min read',
    author: 'Ali Soleymani',
    authorRole: 'Founder',
    authorAvatar: 'https://ui-avatars.com/api/?name=Ali+Soleymani&background=4A7C64&color=fff',
    category: 'EdTech Philosophy',
    imageUrl: 'https://picsum.photos/seed/blog6/800/600',
    content: React.createElement(React.Fragment, null, [
        React.createElement('p', { className: 'mb-4' }, "Montessori education emphasizes 'follow the child'. AI allows us to scale this philosophy to millions. Instead of a teacher observing one classroom, our AI observes the individual child, adapting the environment in real-time."),
        React.createElement('h3', { className: 'text-2xl font-bold text-primary-dark mt-8 mb-4' }, "Self-Correcting Materials"),
        React.createElement('p', { className: 'mb-4' }, "Just like physical Montessori puzzles control for error (the piece only fits one way), our digital modules provide instant, non-judgmental feedback. This allows the child to self-correct and learn mastery without relying on external validation.")
    ])
  }
];

export const MOCK_ACTIVITY_LOG = [
  { id: 1, user: 'Sarah Parent', action: 'Completed Assessment', detail: 'Space Maze (Score: 92)', time: '2 hours ago', type: 'success' },
  { id: 2, user: 'Coach Mike', action: 'Updated Roster', detail: 'Added student Alex', time: '5 hours ago', type: 'info' },
  { id: 3, user: 'New User', action: 'Sign Up', detail: 'Free Plan', time: '1 day ago', type: 'success' },
  { id: 4, user: 'Sarah Parent', action: 'Upgraded Plan', detail: 'Optimizer Tier', time: '2 days ago', type: 'warning' },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', conversationId: 'conv1', senderId: 'u2', content: 'Hi Sarah, Leo showed great progress in the Space Maze today!', timestamp: '2023-10-25T14:30:00Z', read: true },
  { id: 'm2', conversationId: 'conv1', senderId: 'u1', content: 'That is wonderful to hear! He was practicing all weekend.', timestamp: '2023-10-25T14:35:00Z', read: true },
  { id: 'm3', conversationId: 'conv1', senderId: 'u2', content: 'It shows. His spatial reasoning is well above average for his age group.', timestamp: '2023-10-25T14:36:00Z', read: false },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv1',
    participants: ['u1', 'u2'], // Sarah Parent & Coach Mike
    childId: 'c1', // Context: Leo
    lastMessage: MOCK_MESSAGES[2],
    unreadCount: 1
  }
];
