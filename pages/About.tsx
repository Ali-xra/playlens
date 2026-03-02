import React from 'react';
import { Target, Heart, Eye, Award, Globe, Users } from 'lucide-react';
import Button from '../components/UI/Button';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary-dark text-sm font-bold tracking-wide uppercase mb-4">
            Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-dark mb-6 leading-tight">
            To create a future where every child’s unique brilliance is recognized and nurtured.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Ensuring no potential remains undiscovered, and every talent finds its path.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-cream py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <img 
                src="https://picsum.photos/seed/about-story/600/500" 
                alt="Child discovering something new" 
                className="rounded-3xl shadow-card rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Our Story</h2>
              <div className="prose text-gray-600 leading-relaxed space-y-4">
                <p>
                  PlayLens is redefining early childhood development by dismantling the limitations of traditional, high-stress standardized testing. We address the critical need for holistic assessment through a talent discovery platform that seamlessly blends immersive gaming with analytical rigor.
                </p>
                <p>
                  While children explore our engaging virtual worlds, we guide parents to capture specific behavioral data, which our proprietary AI synthesizes to diagnose hidden aptitudes and generate fully personalized training pathways. This model democratizes access to expert-level scouting, making it affordable and accessible for families globally.
                </p>
                <p>
                  As we transition from parent-assisted observation to advanced computer vision, PlayLens is poised to become the definitive ecosystem for nurturing the next generation of talent, ensuring no child’s potential remains undiscovered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every feature we build and every parent we support.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Award className="w-8 h-8 text-accent" />}
              title="Celebrate Uniqueness"
              description="We reject one-size-fits-all standardization to honor and validate the distinct brilliance found in every single child."
            />
            <ValueCard 
              icon={<Globe className="w-8 h-8 text-primary" />}
              title="Democratize Opportunity"
              description="We build affordable, accessible tools that dismantle barriers, ensuring expert-level insights are available to families everywhere."
            />
            <ValueCard 
              icon={<Heart className="w-8 h-8 text-red-400" />}
              title="Joyful Discovery"
              description="We replace the anxiety of assessment with the engagement of play, believing that children reveal their true selves when they are having fun."
            />
            <ValueCard 
              icon={<Target className="w-8 h-8 text-blue-500" />}
              title="Scientific Integrity"
              description="We ground our AI and training pathways in rigorous data and research, prioritizing accuracy over trends to earn the trust of parents."
            />
            <ValueCard 
              icon={<Eye className="w-8 h-8 text-purple-500" />}
              title="Holistic Vision"
              description="We look beyond academic metrics to see the whole child, capturing the behavioral nuances and hidden aptitudes that traditional systems overlook."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">The Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Combining deep tech expertise with child development science.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-card transition-shadow">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shrink-0">
                {/* Placeholder Avatar */}
                <div className="w-full h-full bg-primary-dark flex items-center justify-center text-white text-2xl font-bold">AS</div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-primary-dark">Ali Soleymani</h3>
                <p className="text-accent font-medium text-sm mb-4">Founder & Lead AI Architect</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  14+ Years Experience | Ph.D. Candidate in AI (FinTech Focus). A Systems Engineer turned Data Scientist bringing "FinTech rigor" to EdTech.
                </p>
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                  Architect of 'Talent DNA' algorithm. Previously automated 60% of credit assessment at Sadad Informatics.
                </div>
              </div>
            </div>

            {/* Advisor (Placeholder) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-card transition-shadow opacity-90">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden shrink-0">
                 <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white text-2xl font-bold">
                    <Users className="w-8 h-8" />
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-700">[Pending Advisor]</h3>
                <p className="text-gray-500 font-medium text-sm mb-4">Scientific Advisor (Child Development)</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A certified psychologist/educator assisting in the validation of the aptitude assessment framework to ensure age-appropriate scientific rigor.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-heading font-bold text-primary-dark mb-6">Join Our Mission</h3>
            <Button variant="primary">View Open Positions</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-cream border border-secondary/50 hover:border-primary transition-colors hover:shadow-soft">
    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
      {icon}
    </div>
    <h3 className="text-lg font-heading font-bold text-primary-dark mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default About;
