import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import { PricingPlan, PricingTier } from '../types';

const Pricing: React.FC = () => {
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

  const faqs = [
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

  return (
    <div className="pt-32 pb-20 bg-secondary/20 min-h-screen">
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary-dark mb-6">
            Unlock Their World
          </h1>
          <p className="text-xl text-gray-600">
             Invest in a future that fits them perfectly. Less than the cost of one wasted piano lesson.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mb-20">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col h-full ${
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

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                className="w-full mt-auto"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-heading font-bold text-primary-dark">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="flex items-center gap-2 font-bold text-dark mb-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
