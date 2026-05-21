import { CustomerSegment, FeatureStep, PricingPlan, PricingTier } from '../types';

// ==========================================
// 1. HOME PAGE CONSTANTS
// ==========================================

export const homeSegments: CustomerSegment[] = [
  {
    title: "The Extracurricular Optimizer",
    description: "Stop burning money on trial-and-error classes. Know exactly where your child will thrive before you pay tuition.",
    iconName: 'BarChart',
    needs: "Data-driven ROI for education"
  },
  {
    title: "The Hidden Genius Advocate",
    description: "Your child isn't 'difficult'—they're different. Validate their unique intelligence when standard schools fail to see it.",
    iconName: 'Brain',
    needs: "Validation & confidence"
  },
  {
    title: "The Data-Driven Millennial",
    description: "You track your sleep and health. Why guess with your child's development? Get the longitudinal data you need.",
    iconName: 'Search',
    needs: "Objective scientific metrics"
  }
];

export const homeFeatures: FeatureStep[] = [
  {
    title: "Play Immersive Games",
    description: "Children explore our scientifically designed digital worlds. No tests, just fun.",
    iconName: 'Gamepad2'
  },
  {
    title: "Capture Behavioral Data",
    description: "We guide you to observe specific reactions and decisions during gameplay.",
    iconName: 'ScanEye'
  },
  {
    title: "AI Analysis",
    description: "Our engine decodes gameplay patterns into cognitive and emotional insights.",
    iconName: 'Lightbulb'
  },
  {
    title: "Personalized Path",
    description: "Receive a tailored roadmap for extracurriculars and learning styles.",
    iconName: 'Route'
  }
];

export const homePlans: PricingPlan[] = [
  {
    id: PricingTier.FREE,
    name: "The Snapshot",
    price: "$0",
    description: "A teaser of their potential. Identify one key strength.",
    features: [
      "1 Basic Play Module",
      "Single Strength Identification",
      "Basic Profile",
      "No longitudinal tracking"
    ],
    cta: "Try for Free"
  },
  {
    id: PricingTier.OPTIMIZER,
    name: "The Optimizer",
    price: "$19.99",
    period: "/mo",
    description: "The core GPS for your child's journey. Stop guessing today.",
    features: [
      "Full Talent DNA Profile",
      "Monthly Growth Tracking",
      "Extracurricular Recommendations",
      "Deep Dive Cognitive Reports",
      "Billed annually at $179 (Save 25%)"
    ],
    cta: "Start Optimizing",
    recommended: true
  },
  {
    id: PricingTier.ADVOCATE,
    name: "The Advocate",
    price: "$39.99",
    period: "/mo",
    description: "Premium insights and community for deep developmental support.",
    features: [
      "Everything in Optimizer",
      "Priority Expert Analysis",
      "Community Access",
      "Neurodiverse-specific tools",
      "Billed annually at $359"
    ],
    cta: "Join the Community"
  }
];

// ==========================================
// 2. ABOUT PAGE CONSTANTS
// ==========================================

export interface CoreValue {
  id: string;
  iconType: 'Award' | 'Globe' | 'Heart' | 'Target' | 'Eye';
  title: string;
  description: string;
}

export const aboutStoryParagraphs = [
  "PlayLens is redefining early childhood development by dismantling the limitations of traditional, high-stress standardized testing. We address the critical need for holistic assessment through a talent discovery platform that seamlessly blends immersive gaming with analytical rigor.",
  "While children explore our engaging virtual worlds, we guide parents to capture specific behavioral data, which our proprietary AI synthesizes to diagnose hidden aptitudes and generate fully personalized training pathways. This model democratizes access to expert-level scouting, making it affordable and accessible for families globally.",
  "As we transition from parent-assisted observation to advanced computer vision, PlayLens is poised to become the definitive ecosystem for nurturing the next generation of talent, ensuring no child’s potential remains undiscovered."
];

export const aboutValues: CoreValue[] = [
  {
    id: 'uniqueness',
    iconType: 'Award',
    title: "Celebrate Uniqueness",
    description: "We reject one-size-fits-all standardization to honor and validate the distinct brilliance found in every single child."
  },
  {
    id: 'democratize',
    iconType: 'Globe',
    title: "Democratize Opportunity",
    description: "We build affordable, accessible tools that dismantle barriers, ensuring expert-level insights are available to families everywhere."
  },
  {
    id: 'joy',
    iconType: 'Heart',
    title: "Joyful Discovery",
    description: "We replace the anxiety of assessment with the engagement of play, believing that children reveal their true selves when they are having fun."
  },
  {
    id: 'science',
    iconType: 'Target',
    title: "Scientific Integrity",
    description: "We ground our AI and training pathways in rigorous data and research, prioritizing accuracy over trends to earn the trust of parents."
  },
  {
    id: 'holistic',
    iconType: 'Eye',
    title: "Holistic Vision",
    description: "We look beyond academic metrics to see the whole child, capturing the behavioral nuances and hidden aptitudes that traditional systems overlook."
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  avatarText: string;
  badge?: string;
  footnote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ali',
    name: "Ali Soleymani",
    role: "Founder & Lead AI Architect",
    avatarText: "AS",
    description: "14+ Years Experience | Ph.D. Candidate in AI (FinTech Focus). A Systems Engineer turned Data Scientist bringing 'FinTech rigor' to EdTech.",
    footnote: "'Talent DNA' algorithm main architect. Previously automated 60% of credit assessment at Sadad Informatics."
  },
  {
    id: 'advisor',
    name: "Pending Advisor",
    role: "Scientific Advisor (Child Development)",
    avatarText: "PA",
    description: "A certified psychologist/educator assisting in the validation of the aptitude assessment framework to ensure age-appropriate scientific rigor."
  }
];

// ==========================================
// 3. PRICING PAGE CONSTANTS
// ==========================================

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const pricingFaqs: PricingFAQ[] = [
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of the current billing cycle."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We offer a 14-day money-back guarantee on all annual plans if you're not satisfied with the insights provided."
  },
  {
    question: "What age range is this for?",
    answer: "PlayLens is currently optimized for children aged 4-9. We are working on modules for older and younger age groups."
  },
  {
    question: "How accurate is the AI?",
    answer: "Our 'Talent DNA' algorithm has been trained on thousands of behavioral data points. While no tool is perfect, our longitudinal tracking increases accuracy significantly over time."
  }
];
