
import React from 'react';

export enum PricingTier {
  FREE = 'FREE',
  OPTIMIZER = 'OPTIMIZER',
  ADVOCATE = 'ADVOCATE'
}

export type Role = 'parent' | 'coach' | 'child' | 'admin';

export interface PricingPlan {
  id: PricingTier;
  name: string;
  price: string;
  period?: string; // e.g., "/mo"
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface CustomerSegment {
  title: string;
  description: string;
  iconName: 'Search' | 'Brain' | 'BarChart';
  needs: string;
}

export interface FeatureStep {
  title: string;
  description: string;
  iconName: 'Gamepad2' | 'ScanEye' | 'Lightbulb' | 'Route';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode; // HTML/JSX content
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  category: string;
  imageUrl: string;
}

// --- Dashboard & Auth Types ---

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: Role;
  plan: PricingTier;
  childrenIds?: string[]; // For parents
  teamId?: string; // For coaches
  specialty?: string; // For coaches (e.g., "Robotics", "Art")
  childProfileId?: string; // Link for child users to their profile data
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string | null;
}

export type GameCategory = 'Logic' | 'Memory' | 'Spatial' | 'Verbal' | 'Creative' | 'EQ';

// NEW: Classification for Assessment Flow
export type GameType = 'digital' | 'physical';

export interface ObservationQuestion {
  id: string;
  text: string;
  type: 'boolean' | 'scale'; // Yes/No or 1-5 Scale
}

export interface GameModule {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: GameCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string; // e.g. "10-15 min"
  skills: string[]; // e.g. ["Pattern Recognition", "Focus"]
  recommendedAge: [number, number];
  
  // New Fields for Assessment Classification
  type: GameType; 
  materials?: string[]; // Only for physical games (e.g., "3 Blocks")
  
  // Workflow Instructions (Physical Only)
  setupInstructions?: string[]; // Step 2: What parent does BEFORE child starts
  executionInstructions?: string[]; // Step 3: Instructions for the child to perform
  executionDescription?: string; // Step 3: Detailed explanation of the activity
  observationFocus?: string; // Step 3: Specific things to watch for
  
  observationQuestions?: ObservationQuestion[]; // For parent "Digital Clipboard" (Step 4)
}

export interface GameAssignment {
  id: string;
  gameId: string;
  assignedBy: string; // User ID
  assignedDate: string;
  status: 'pending' | 'in_progress' | 'completed';
  dueDate?: string;
}

// --- Gamification & Onboarding Types ---

export type OnboardingStatus = 'pending' | 'in_progress' | 'completed';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  dateEarned: string;
  category: 'Explorer' | 'Skill' | 'Resilience';
}

export interface InventoryItem {
  id: string;
  name: string;
  type: 'hat' | 'glasses' | 'accessory' | 'color';
  icon: string;
  isEquipped: boolean;
}

export interface ChildProfile {
  id: string;
  parentIds: string[]; 
  name: string;
  age: number;
  avatar: string;
  strengths: string[]; // e.g., "Spatial Reasoning", "Pattern Matching"
  recentActivity?: string;
  coachIds?: string[]; // IDs of coaches assigned to this child
  assignments?: GameAssignment[];
  
  // New Fields
  onboardingStatus: OnboardingStatus;
  sparks: number;
  badges: Badge[];
  inventory: InventoryItem[];
}

export interface AssessmentResult {
  id: string;
  childId: string;
  moduleId: string;
  moduleName: string;
  date: string;
  score: number; // 0-100
  insights: string[];
  cognitiveArea: 'Logic' | 'Memory' | 'Spatial' | 'Verbal' | 'Creative';
}

export interface Recommendation {
  id: string;
  title: string;
  category: string;
  description: string;
  provider: string;
  matchScore: number; // 0-100
  tags: string[];
}

// --- Messaging Types ---

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[]; // User IDs
  childId: string; // Context
  lastMessage: Message;
  unreadCount: number;
}
