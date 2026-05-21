import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import { homePlans, pricingFaqs } from './pageConstants';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-secondary/20 min-h-screen animate-fade-in">
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-5xl text-font-heading font-bold text-primary-dark mb-6">
            Unlock Their World
          </h1>
          <p className="text-xl text-gray-600 text-font-body">
             Invest in a future that fits them perfectly. Less than the cost of one wasted piano lesson.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mb-20 animate-scale-up">
          {homePlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`card-premium relative p-8 flex flex-col h-full ${
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
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm animate-slide-up font-body">
          <div className="text-center mb-10">
            <h2 className="text-2xl text-font-heading font-bold text-primary-dark">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {pricingFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="flex items-center gap-2 font-bold text-dark mb-2">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-7 text-font-body">
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
