
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Luxury Escapes",
    description: "Indulge in premium accommodations and exclusive experiences",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/destinations?category=luxury"
  },
  {
    id: 2,
    name: "Cultural Journeys",
    description: "Immerse yourself in rich traditions and authentic local experiences",
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/destinations?category=culture"
  },
  {
    id: 3,
    name: "Adventure Trails",
    description: "Thrilling experiences for the bold and adventurous",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/destinations?category=adventure"
  },
  {
    id: 4,
    name: "Family Getaways",
    description: "Create memories with experiences perfect for the whole family",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/destinations?category=family"
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-travel-white text-3xl md:text-4xl font-display font-bold mb-4">
          Discover Your Travel Style
        </h2>
        <p className="text-travel-gray max-w-2xl mx-auto">
          Explore our curated collection of experiences tailored to match your unique travel preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            to={category.link} 
            key={category.id}
            className="group relative overflow-hidden rounded-lg shadow-lg h-64 transition-all duration-500 hover:-translate-y-2"
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-travel-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-travel-gray mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {category.description}
              </p>
              <div className="flex items-center text-travel-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Explore</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
