
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Shield, Globe, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Customers' },
    { icon: Award, number: '5 Years', label: 'Expert Experience' },
    { icon: Globe, number: '50+', label: 'Countries Shipped' },
    { icon: Heart, number: '100%', label: 'Ethically Sourced' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Ethical Sourcing',
      description: 'We work directly with trusted suppliers who practice fair trade and sustainable mining. Every purchase supports responsible practices and local communities.'
    },
    {
      icon: Sparkles,
      title: 'Spiritual Cleansing',
      description: 'Each crystal is cleansed and charged using traditional methods including sage, palo santo, and sound healing under the full moon before reaching you.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We personally inspect every crystal for authenticity, quality, and energetic resonance. Your satisfaction and spiritual connection are our priority.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join a worldwide network of spiritual seekers who trust Crystal Bless for their healing journey. Share experiences and grow together.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-crystal-purple/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-crystal-purple/10 to-crystal-gold/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Crystal Bless
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Founded by spiritual practitioners who understand the profound impact of crystal energy, 
                we've dedicated ourselves to bringing you only the highest quality stones for your healing journey.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-crystal-purple-dark to-crystal-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <div className="bg-gradient-to-r from-crystal-purple/10 to-crystal-gold/10 rounded-2xl p-8 mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  At Crystal Bless, we source ethically and spiritually powerful crystals to help you grow, heal, and succeed.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every crystal carries a unique vibration that can transform lives. Our mission is to bridge 
                  the ancient wisdom of crystals with modern spiritual practice, creating a sacred space where seekers can 
                  find the perfect stones to support their journey of growth, healing, and enlightenment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-gradient-to-b from-crystal-sage/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything we do is guided by these core principles that ensure you receive the highest quality crystals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-crystal-purple-dark to-crystal-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop" 
                        alt="Founder" 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12">
                      <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                        A Message from Our Founder
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        "My journey with crystals began over a decade ago during a challenging period in my life. 
                        The transformative power of these sacred stones not only healed my spirit but also opened 
                        my eyes to their incredible potential to help others."
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        "Crystal Bless was born from a desire to share this ancient wisdom with the world, ensuring 
                        that every crystal we offer has been ethically sourced and spiritually prepared to serve 
                        your highest good."
                      </p>
                      <div className="mt-6">
                        <div className="font-semibold text-gray-900">Sarah Moonstone</div>
                        <div className="text-crystal-purple-dark">Founder & Crystal Healer</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
