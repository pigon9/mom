
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
  const collections = [
    {
      name: 'Super Seven',
      description: 'The ultimate crystal for spiritual awakening and higher consciousness',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Money Crystals',
      description: 'Attract wealth, success, and financial abundance into your life',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      gradient: 'from-yellow-500 to-amber-600'
    },
    {
      name: 'Love Crystals',
      description: 'Open your heart chakra and invite love, compassion, and healing',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-crystal-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of powerful crystals, each chosen for their unique energy and spiritual properties
          </p>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.name} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-crystal-purple-dark group-hover:text-white group-hover:border-crystal-purple-dark transition-all duration-300"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link to="/shop" tabIndex={-1} className="inline-block">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-crystal-purple-dark to-crystal-gold hover:from-crystal-gold hover:to-crystal-purple-dark text-white px-8 py-3 w-full sm:w-auto"
            >
              View All Collections
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

