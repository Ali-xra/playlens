import React from 'react';
import { ArrowRight, Check, Search, Brain, BarChart3, Gamepad2, ScanEye, Lightbulb, Route, Sparkles } from 'lucide-react';
import Button from '../components/UI/Button';
import { homeSegments, homeFeatures, homePlans } from './pageConstants';

const Home: React.FC = () => {
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
    <div className="w-full animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-cream">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 text-primary-dark font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Real Science. Real Fun. Real Potential.</span>
              </div>
              <h1 className="title-hero text-4xl lg:text-6xl text-primary-dark mb-6">
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
            <div className="flex-1 relative w-full max-w-lg lg:max-w-none animate-scale-up">
              <div className="relative rounded-3xl overflow-hidden shadow-card transform rotate-2 hover-rotate-soft transition-transform duration-500">
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
                      <span className="text-font-heading font-bold text-primary-dark">Insight Detected</span>
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
            <h2 className="text-3xl lg:text-4xl text-font-heading font-bold text-primary-dark mb-4">
              Are You Missing Their Genius?
            </h2>
            <p className="text-gray-600 text-lg">
              Without expert guidance, parents are left guessing. We bridge the gap between confusion and clarity for every type of parent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeSegments.map((segment, index) => (
              <div key={index} className="card-cream-flat">
                <div className="w-14 h-14 bg-secondary/40 rounded-xl flex items-center justify-center text-primary-dark mb-6">
                  {renderIcon(segment.iconName, "w-7 h-7")}
                </div>
                <h3 className="text-xl text-font-heading font-bold text-primary-dark mb-3">
                  {segment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
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
            <h2 className="text-3xl lg:text-4xl text-font-heading font-bold mt-2">
              Real Answers, Through Play
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

            {homeFeatures.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="w-24 h-24 bg-primary rounded-2xl border-4 border-primary-dark flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {renderIcon(feature.iconName, "w-10 h-10 text-secondary")}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl text-font-heading font-bold mb-2">{feature.title}</h3>
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
            <h2 className="text-3xl lg:text-4xl text-font-heading font-bold text-primary-dark mb-4">
              Unlock Their World
            </h2>
            <p className="text-gray-600">
              Invest in a future that fits them perfectly. Less than the cost of one wasted piano lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {homePlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`card-premium relative p-8 ${
                  plan.recommended ? 'ring-2 ring-primary scale-105 z-10' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl text-font-heading font-bold text-primary-dark">{plan.name}</h3>
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
              <h2 className="text-3xl md:text-4xl text-font-heading font-bold text-white mb-6">
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