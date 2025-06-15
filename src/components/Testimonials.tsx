
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'California',
      text: 'The amethyst I ordered has completely transformed my meditation practice. I feel more centered and connected to my higher self. Crystal Bless truly sources the most powerful stones!',
      rating: 5,
      crystal: 'Amethyst Cluster'
    },
    {
      name: 'Michael R.',
      location: 'New York',
      text: 'I was skeptical about money crystals, but after carrying my citrine for just two weeks, I received an unexpected promotion. The energy alignment is real!',
      rating: 5,
      crystal: 'Citrine Point'
    },
    {
      name: 'Luna K.',
      location: 'Oregon',
      text: 'The rose quartz necklace has opened my heart in ways I never imagined. My relationships have deepened and I feel so much more self-love. Absolutely magical!',
      rating: 5,
      crystal: 'Rose Quartz Necklace'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-crystal-sage/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transformative Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community about how Crystal Bless has brought positive energy and transformation into their lives
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-crystal-gold text-crystal-gold" 
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="border-t border-crystal-purple/20 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-crystal-purple-dark">
                        {testimonial.crystal}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-crystal-gold text-crystal-gold mr-1" />
              <span className="font-semibold">4.9/5</span> from 1,200+ reviews
            </div>
            <div>✨ Ethically Sourced</div>
            <div>🔮 Spiritually Cleansed</div>
            <div>📦 Fast Shipping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
