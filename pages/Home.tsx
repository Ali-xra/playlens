import React from 'react';
import { ArrowRight, Check, Search, Brain, BarChart3, Gamepad2, ScanEye, Lightbulb, Route, Sparkles } from 'lucide-react';
import Button from '../components/UI/Button';
import { CustomerSegment, FeatureStep, PricingPlan, PricingTier } from '../types';

const Home: React.FC = () => {
  
  // Data Definitions
  const segments: CustomerSegment[] = [
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

  const features: FeatureStep[] = [
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

  const pricingPlans: PricingPlan[] = [
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

  const renderIcon = (name: string, className: string) => {
    switch(name) {
      case 'Search': return <Search className={className} />;
      case 'Brain': return <Brain className={className} />;
      case 'BarChart': return <BarChart3 className={className} />;
      case 'Gamepad2': return <Gamepad2 className={className} />;
      case 'ScanEye': return <ScanEye className={className} />;
      case 'Lightbulb': return <Lightbulb className={className} />;
      case 'Route': return <Route className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary-dark font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Real Science. Real Fun. Real Potential.</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary-dark leading-tight mb-6">
                Stop Guessing. <br/>
                <span className="text-primary">Discover Their Genius</span> <br/>
                Through Play.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Traditional exams often miss a child’s true potential. PlayLens is the GPS for your child's unique gifts, analyzing behavioral patterns in play to reveal hidden talents and create personalized growth paths.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start Discovery
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-card transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 {/* Placeholder for Hero Image - Highlighting the aesthetic */}
                <img 
                  src="https://picsum.photos/seed/montessori/800/600" 
                  alt="Child playing with wooden toys" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent flex items-end p-8">
                  <div className="bg-surface/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Brain className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-heading font-bold text-primary-dark">Insight Detected</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      "Naturally anticipates patterns 3 steps ahead."
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-dark mb-4">
              Are You Missing Their Genius?
            </h2>
            <p className="text-gray-600 text-lg">
              Without expert guidance, parents are left guessing. We bridge the gap between confusion and clarity for every type of parent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div key={index} className="bg-cream rounded-2xl p-8 hover:shadow-soft transition-shadow border border-transparent hover:border-secondary/50">
                <div className="w-14 h-14 bg-secondary/40 rounded-xl flex items-center justify-center text-primary-dark mb-6">
                  {renderIcon(segment.iconName, "w-7 h-7")}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {segment.description}
                </p>
                <div className="text-sm font-medium text-accent">
                  Need: {segment.needs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / How it Works */}
      <section id="solution" className="py-20 bg-primary-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-wider uppercase text-sm">The Process</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-2">
              Real Answers, Through Play
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="w-24 h-24 bg-primary rounded-2xl border-4 border-primary-dark flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {renderIcon(feature.iconName, "w-10 h-10 text-secondary")}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-dark mb-4">
              Unlock Their World
            </h2>
            <p className="text-gray-600">
              Invest in a future that fits them perfectly. Less than the cost of one wasted piano lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-white shadow-card border-2 border-primary scale-105 z-10' 
                    : 'bg-white/60 hover:bg-white border border-gray-100 hover:shadow-lg'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-primary-dark">{plan.name}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-dark">{plan.price}</span>
                    {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-500 mt-2 min-h-[40px]">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.recommended ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-cream border-t border-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-card">
            {/* Background Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent opacity-20 rounded-full translate-y-1/3 -translate-x-1/4"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Discover Their Genius?
              </h2>
              <p className="text-secondary-dark text-lg mb-8">
                Join thousands of parents illuminating their child's path.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 <div className="relative w-full max-w-md">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-6 py-4 rounded-full bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/50"
                    />
                    <div className="absolute right-2 top-2 bottom-2">
                      <Button variant="accent" size="sm" className="h-full">
                        Get Started
                      </Button>
                    </div>
                 </div>
              </div>
              <p className="text-white/60 text-xs mt-4">
                Free assessment included. No credit card required for sign up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;