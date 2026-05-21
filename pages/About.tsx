import React from 'react';
import { Target, Heart, Eye, Award, Globe, Users } from 'lucide-react';
import Button from '../components/UI/Button';
import { aboutStoryParagraphs, aboutValues, teamMembers } from './pageConstants';

const About: React.FC = () => {
  const renderValueIcon = (type: string, className: string) => {
    switch (type) {
      case 'Award': return <Award className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Eye': return <Eye className={className} />;
      default: return <Award className={className} />;
    }
  };

  return (
    <div className="pt-32 pb-20 animate-fade-in">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary-dark text-sm font-bold tracking-wide uppercase mb-4">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-font-heading font-bold text-primary-dark mb-6 leading-tight">
            To create a future where every child’s unique brilliance is recognized and nurtured.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-font-body">
            Ensuring no potential remains undiscovered, and every talent finds its path.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 animate-scale-up">
              <img 
                src="https://picsum.photos/seed/about-story/600/500" 
                alt="Child discovering something new" 
                className="rounded-3xl shadow-card rotate-3 hover-rotate-soft transition-transform duration-500 w-full object-cover"
              />
            </div>
            <div className="flex-1 animate-slide-up">
              <h2 className="text-3xl text-font-heading font-bold text-primary-dark mb-6">Our Story</h2>
              <div className="prose text-gray-600 leading-relaxed space-y-4 text-font-body">
                {aboutStoryParagraphs.map((par, i) => (
                  <p key={i}>{par}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-font-heading font-bold text-primary-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every feature we build and every parent we support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutValues.map((val) => (
              <ValueCard 
                key={val.id}
                icon={renderValueIcon(val.iconType, "w-8 h-8 text-primary-light")}
                title={val.title}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-font-heading font-bold text-primary-dark mb-4">The Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Combining deep tech expertise with child development science.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="card-premium p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shrink-0 flex items-center justify-center">
                  {member.id === 'ali' ? (
                    <div className="w-full h-full bg-primary-dark flex items-center justify-center text-white text-2xl font-bold">
                      {member.avatarText}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white text-2xl font-bold">
                      <Users className="w-8 h-8" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl text-font-heading font-bold text-primary-dark">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  {member.footnote && (
                    <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                      {member.footnote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl text-font-heading font-bold text-primary-dark mb-6">Join Our Mission</h3>
            <Button variant="primary">View Open Positions</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="card-cream-flat">
    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
      {icon}
    </div>
    <h3 className="text-lg text-font-heading font-bold text-primary-dark mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default About;
