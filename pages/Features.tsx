import React from 'react';
import { Gamepad2, ScanEye, Lightbulb, Route, Lock, Zap, Smartphone, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
          The Science of Play
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We translate hours of joyful play into a precise map of your child's cognitive strengths.
        </p>
      </section>

      {/* Feature 1: Immersive Games */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/feature-games/600/400" 
                alt="Immersive Games Interface" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">Play Immersive Games</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Children explore our scientifically designed digital worlds. No stressful tests, just fun challenges that engage their natural curiosity. Our games are designed to trigger specific cognitive responses without the child ever feeling "evaluated."
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Non-intrusive assessment
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Age-adaptive difficulty
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Rich, colorful environments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Behavioral Capture */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <ScanEye className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">Capture Behavioral Data</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We guide you to observe specific reactions and decisions during gameplay. The app prompts you to notice things like: Does your child hesitate before acting? Do they prefer patterns or chaos? Do they persist after failure?
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Guided observation prompts
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Simple "Yes/No" inputs
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Captures nuance tests miss
                </li>
              </ul>
            </div>
             <div className="flex-1">
              <img 
                src="https://picsum.photos/seed/feature-observation/600/400" 
                alt="Parent Observation App" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: AI Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <img 
                src="https://picsum.photos/seed/feature-ai/600/400" 
                alt="AI Analysis Dashboard" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">AI Analysis & Insights</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our engine decodes gameplay patterns into cognitive and emotional insights. We look for the "Why" behind the "What." It's not just about getting the right answer; it's about the thinking process used to get there.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Proprietary Talent DNA algorithm
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Comparative benchmarks
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Strengths-based reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Personalized Path */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <Route className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">Personalized Path</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Receive a tailored roadmap for extracurriculars and learning styles. We stop the guesswork by recommending activities that align with your child's natural inclinations, saving time and money.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Curated activity lists
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Local resource finder
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-accent" /> Long-term growth tracking
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://picsum.photos/seed/feature-path/600/400" 
                alt="Personalized Roadmap" 
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Grid */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Lock className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Privacy First</h3>
              <p className="text-sm text-gray-300">Your child's data is encrypted and anonymized. We never sell personal information.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Zap className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Instant Feedback</h3>
              <p className="text-sm text-gray-300">Get initial insights immediately after the first session. No waiting weeks for results.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Smartphone className="w-8 h-8 text-primary-light mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Any Device</h3>
              <p className="text-sm text-gray-300">PlayLens works on tablets and desktops, making it easy to access anywhere.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/pricing">
                <Button variant="accent" size="lg">See Plans & Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
