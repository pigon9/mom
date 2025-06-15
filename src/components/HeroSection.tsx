
import React from 'react';
import { Sparkles, Heart, DollarSign } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-crystal-white via-crystal-purple/20 to-crystal-sage/30"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-crystal-gold rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-crystal-purple-dark rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-crystal-gold rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-60 right-1/3 w-1 h-1 bg-crystal-purple-dark rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          Crystals for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crystal-purple-dark to-crystal-gold">
            Abundance
          </span>
          ,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crystal-gold to-crystal-purple-dark">
            Clarity
          </span>
          , and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crystal-purple-dark to-crystal-gold">
            Energy Alignment
          </span>
        </h1>
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
          Discover ethically sourced, spiritually powerful crystals to help you grow, heal, and succeed on your journey.
        </p>

        {/* Removed CTA Buttons */}

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in delay-700">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-crystal-gold to-crystal-gold-light rounded-full mx-auto mb-3 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Money Crystals</h3>
            <p className="text-sm text-gray-600">Attract abundance and prosperity</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-crystal-rose to-red-300 rounded-full mx-auto mb-3 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Love Crystals</h3>
            <p className="text-sm text-gray-600">Open your heart to love and healing</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-crystal-purple-dark to-crystal-purple rounded-full mx-auto mb-3 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Super Seven</h3>
            <p className="text-sm text-gray-600">Ultimate spiritual transformation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
