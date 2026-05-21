import React from 'react';
import { Gamepad2, ScanEye, Lightbulb, Route, Lock, Zap, Smartphone, CheckCircle } from 'lucide-react';
import Button from '../components/UI/Button';
import { Link } from 'react-router-dom';
import { featuresList, additionalBenefits } from './pageConstants';

const Features: React.FC = () => {
  const renderIcon = (name: string, className: string) => {
    switch(name) {
      case 'Gamepad2': return <Gamepad2 className={className} />;
      case 'ScanEye': return <ScanEye className={className} />;
      case 'Lightbulb': return <Lightbulb className={className} />;
      case 'Route': return <Route className={className} />;
      case 'Lock': return <Lock className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      default: return <Gamepad2 className={className} />;
    }
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 mb-20 text-center animate-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-font-heading font-bold text-primary-dark mb-6">
          The Science of Play
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto text-font-body">
          We translate hours of joyful play into a precise map of your child's cognitive strengths.
        </p>
      </section>

      {/* Dynamic Features List */}
      {featuresList.map((feature, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={feature.id} className={`py-16 ${isEven ? 'bg-white' : 'bg-cream'}`}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image element with order attributes based on odd/even to ensure dynamic layout pairing */}
                <div className={`flex-1 ${isEven ? 'order-2 md:order-1' : 'order-1 md:order-2'} animate-scale-up`}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="rounded-2xl shadow-card w-full object-cover max-h-[350px] transform hover-rotate-soft transition-transform duration-500"
                  />
                </div>
                <div className={`flex-grow flex-1 ${isEven ? 'order-1 md:order-2' : 'order-2 md:order-1'} animate-slide-up`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                    {renderIcon(feature.iconName, "w-6 h-6")}
                  </div>
                  <h2 className="text-3xl text-font-heading font-bold text-primary-dark mb-4">{feature.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-font-body">
                    {feature.description}
                  </p>
                  <ul className="space-y-3 font-body">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-accent" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Benefits Grid with segmented cards */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit) => (
              <div key={benefit.id} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="mb-4">
                  {renderIcon(benefit.iconName, `w-8 h-8 ${benefit.colorClassName}`)}
                </div>
                <h3 className="text-font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300 text-font-body">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center animate-slide-up">
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

