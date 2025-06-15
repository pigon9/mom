
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Shield, Globe } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Ethically Sourced',
      description: 'Every crystal is carefully selected from trusted suppliers who share our commitment to ethical mining and fair trade practices.'
    },
    {
      icon: Sparkles,
      title: 'Spiritually Cleansed',
      description: 'All crystals are cleansed and charged under the full moon using sage, palo santo, and sound healing before reaching you.'
    },
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'We guarantee the authenticity of every crystal. Each piece is personally inspected for quality and energetic resonance.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join thousands of spiritual seekers worldwide who trust Crystal Bless for their healing and transformation journey.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-crystal-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main about content */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Crystal Bless
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Crystal Bless, we source ethically and spiritually powerful crystals to help you grow, heal, and succeed.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by spiritual practitioners who understand the profound impact of crystal energy, 
              we've dedicated ourselves to bringing you only the highest quality stones. Each crystal 
              in our collection is chosen not just for its beauty, but for its unique vibrational 
              frequency and healing properties.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-crystal-purple-dark to-crystal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-crystal-purple/10 to-crystal-gold/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To bridge the ancient wisdom of crystals with modern spiritual practice, 
              creating a sacred space where seekers can find the perfect stones to support 
              their journey of growth, healing, and enlightenment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
