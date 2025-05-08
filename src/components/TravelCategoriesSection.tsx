
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryItem {
  title: string;
  description: string;
  destinations: string[];
}

interface TravelCategoriesSectionProps {
  categories: CategoryItem[];
}

const TravelCategoriesSection: React.FC<TravelCategoriesSectionProps> = ({ categories }) => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-travel-secondary mb-4">
            Explore by Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've carefully curated collections of destinations to match your travel style and interests
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-travel-secondary mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {category.destinations.map((destination, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-travel-primary rounded-full mr-2"></span>
                      {destination}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link to="/destinations" className="inline-flex items-center text-travel-primary hover:text-travel-secondary transition-colors font-medium">
                    <span>Browse Destinations</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className={`relative rounded-2xl overflow-hidden h-64 md:h-auto ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                {index === 0 && (
                  <img 
                    src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Luxury & Relaxation"
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Culture & History"
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Nature & Adventure"
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 3 && (
                  <img 
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Romantic Escapes"
                    className="w-full h-full object-cover"
                  />
                )}
                {index === 4 && (
                  <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Budget-Friendly Getaways"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategoriesSection;
