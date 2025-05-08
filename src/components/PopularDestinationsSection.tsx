
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface PopularDestination {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  category: string;
}

const popularDestinations: PopularDestination[] = [
  {
    id: 1,
    name: "Santorini Sunset",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,899",
    category: "luxury"
  },
  {
    id: 2,
    name: "Savanna Safari",
    location: "Kenya",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2,499",
    category: "adventure"
  },
  {
    id: 3,
    name: "Ancient Pyramids",
    location: "Egypt",
    image: "https://images.unsplash.com/photo-1568322445389-f8f9fd4e15f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$1,650",
    category: "culture"
  },
  {
    id: 4,
    name: "Tropical Paradise",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$3,250",
    category: "luxury"
  },
  {
    id: 5,
    name: "Cherry Blossoms",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2,180",
    category: "culture"
  },
  {
    id: 6,
    name: "Alpine Adventure",
    location: "Switzerland",
    image: "https://images.unsplash.com/photo-1531400158697-c820e5a0d184?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$2,350",
    category: "adventure"
  }
];

const PopularDestinationsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-travel-secondary mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most booked destinations and start planning your next adventure
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map(destination => (
            <Link to="/destinations" key={destination.id} className="group">
              <div className="relative rounded-xl overflow-hidden h-72">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-travel-primary text-white text-sm font-medium rounded-full">
                    {destination.category}
                  </span>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center text-white/80 mb-1">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold font-display">{destination.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white font-bold">{destination.price}</span>
                    <span className="text-white/80 text-sm">Per person</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/destinations" className="px-8 py-3 bg-travel-primary hover:bg-travel-primary/90 text-white font-medium rounded-md transition-colors inline-block">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationsSection;
