
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [selectedIntention, setSelectedIntention] = useState('all');

  // Generate 20 products with names "1" to "20"
  const blankImage = 'https://via.placeholder.com/400x400?text=+';
  const intentions = ['wealth', 'love', 'protection', 'clarity'];
  const products = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    name: `${i + 1}`,
    price: 10 + (i * 2),
    image: blankImage,
    intention: intentions[i % intentions.length],
    description: `Sample description for product ${i + 1}.`
  }));

  const filteredProducts = selectedIntention === 'all' 
    ? products 
    : products.filter(product => product.intention === selectedIntention);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white to-crystal-purple/5">
        {/* Header */}
        <div className="bg-gradient-to-r from-crystal-purple/10 to-crystal-gold/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Crystal Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover ethically sourced crystals for your spiritual journey
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredProducts.length} Products
            </h2>
            <Select value={selectedIntention} onValueChange={setSelectedIntention}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Filter by intention" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Intentions</SelectItem>
                <SelectItem value="wealth">Wealth & Abundance</SelectItem>
                <SelectItem value="love">Love & Relationships</SelectItem>
                <SelectItem value="protection">Protection</SelectItem>
                <SelectItem value="clarity">Clarity & Focus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-crystal-gold">
                        ${product.price}
                      </span>
                      <Button className="bg-crystal-purple-dark hover:bg-crystal-gold transition-colors w-auto min-w-0 flex-shrink-0">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
