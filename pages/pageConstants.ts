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

// ==========================================
// 4. FEATURES & BENEFITS CONSTANTS
// ==========================================

export interface FeatureSectionItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Gamepad2' | 'ScanEye' | 'Lightbulb' | 'Route';
  image: string;
  bullets: string[];
}

export const featuresList: FeatureSectionItem[] = [
  {
    id: 'play-games',
    title: "Play Immersive Games",
    description: "Children explore our scientifically designed digital worlds. No stressful tests, just fun challenges that engage their natural curiosity. Our games are designed to trigger specific cognitive responses without the child ever feeling \"evaluated.\"",
    iconName: 'Gamepad2',
    image: "https://picsum.photos/seed/feature-games/600/400",
    bullets: [
      "Non-intrusive assessment",
      "Age-adaptive difficulty",
      "Rich, colorful environments"
    ]
  },
  {
    id: 'capture-data',
    title: "Capture Behavioral Data",
    description: "We guide you to observe specific reactions and decisions during gameplay. The app prompts you to notice things like: Does your child hesitate before acting? Do they prefer patterns or chaos? Do they persist after failure?",
    iconName: 'ScanEye',
    image: "https://picsum.photos/seed/feature-observation/600/400",
    bullets: [
      "Guided observation prompts",
      "Simple \"Yes/No\" inputs",
      "Captures nuance tests miss"
    ]
  },
  {
    id: 'ai-analysis',
    title: "AI Analysis & Insights",
    description: "Our engine decodes gameplay patterns into cognitive and emotional insights. We look for the \"Why\" behind the \"What.\" It's not just about getting the right answer; it's about the thinking process used to get there.",
    iconName: 'Lightbulb',
    image: "https://picsum.photos/seed/feature-ai/600/400",
    bullets: [
      "Proprietary Talent DNA algorithm",
      "Comparative benchmarks",
      "Strengths-based reporting"
    ]
  },
  {
    id: 'personalized-path',
    title: "Personalized Path",
    description: "Receive a tailored roadmap for extracurriculars and learning styles. We stop the guesswork by recommending activities that align with your child's natural inclinations, saving time and money.",
    iconName: 'Route',
    image: "https://picsum.photos/seed/feature-path/600/400",
    bullets: [
      "Curated activity lists",
      "Local resource finder",
      "Long-term growth tracking"
    ]
  }
];

export interface BenefitCardItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Lock' | 'Zap' | 'Smartphone';
  colorClassName: string;
}

export const additionalBenefits: BenefitCardItem[] = [
  {
    id: 'privacy',
    title: "Privacy First",
    description: "Your child's data is encrypted and anonymized. We never sell personal information.",
    iconName: 'Lock',
    colorClassName: 'text-secondary'
  },
  {
    id: 'feedback',
    title: "Instant Feedback",
    description: "Get initial insights immediately after the first session. No waiting weeks for results.",
    iconName: 'Zap',
    colorClassName: 'text-accent'
  },
  {
    id: 'device',
    title: "Any Device",
    description: "PlayLens works on tablets and desktops, making it easy to access anywhere.",
    iconName: 'Smartphone',
    colorClassName: 'text-primary-light'
  }
];

// ==========================================
// 5. CONTACT PAGE CONSTANTS
// ==========================================

export interface ContactInfoItem {
  id: string;
  title: string;
  description: string;
  value: string;
  link?: string;
  iconType: 'Mail' | 'MapPin' | 'Phone';
}

export const contactDetailsList: ContactInfoItem[] = [
  {
    id: 'email',
    title: "Email Us",
    description: "Our friendly team is here to help.",
    value: "hello@playlens.com",
    link: "mailto:hello@playlens.com",
    iconType: 'Mail'
  },
  {
    id: 'office',
    title: "Office",
    description: "Come say hello at our HQ.",
    value: "100 Innovation Drive, Tech City, CA 94000",
    iconType: 'MapPin'
  },
  {
    id: 'phone',
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    value: "+1 (555) 123-4567",
    iconType: 'Phone'
  }
];

// ==========================================
// 6. PRIVACY & TERMS CONSTANTS
// ==========================================

export interface LegalSection {
  id: string;
  title: string;
  content: string;
  points?: string[];
}

export const privacySections: LegalSection[] = [
  {
    id: 'intro',
    title: "1. Introduction",
    content: "Welcome to PlayLens. We are committed to protecting your privacy and ensuring the security of your personal information, especially regarding children's data. This Privacy Policy explains how we collect, use, and safeguard your data."
  },
  {
    id: 'collect',
    title: "2. Information We Collect",
    content: "We collect information to provide better services to all our users. This includes:",
    points: [
      "Account Information: Name, email address, and payment info when you sign up.",
      "Child Profiles: Age, interests, and performance data from gameplay.",
      "Usage Data: How you interact with our platform and services."
    ]
  },
  {
    id: 'use',
    title: "3. How We Use Information",
    content: "We use the data we collect to:",
    points: [
      "Provide personalized talent insights and reports.",
      "Improve our AI algorithms and game design.",
      "Communicate with you about updates and recommendations."
    ]
  },
  {
    id: 'security',
    title: "4. Data Security",
    content: "We implement robust security measures to protect your data. All sensitive information is encrypted in transit and at rest. We do not sell personal data to third parties."
  }
];

export const termsSections: LegalSection[] = [
  {
    id: 'accept',
    title: "1. Acceptance of Terms",
    content: "By accessing or using PlayLens, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service."
  },
  {
    id: 'license',
    title: "2. Use of License",
    content: "PlayLens grants you a limited, non-exclusive, non-transferable license to use our platform for personal, non-commercial use in accordance with these terms."
  },
  {
    id: 'accounts',
    title: "3. User Accounts",
    content: "You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password."
  },
  {
    id: 'disclaimer',
    title: "4. Disclaimer",
    content: "PlayLens provides educational insights but is not a medical diagnostic tool. Our reports should not replace professional medical or psychological advice."
  },
  {
    id: 'changes',
    title: "5. Changes",
    content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect."
  }
];

