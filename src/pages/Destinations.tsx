import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, SlidersHorizontal, MapPin, Calendar, DollarSign, Star } from 'lucide-react';
import CollapsibleCard from '@/components/CollapsibleCard';

interface DestinationCard {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  category: string;
}

const destinationData: DestinationCard[] = [
  {
    id: 1,
    name: "Luxury Beachfront Villa",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience ultimate luxury in this private beachfront villa with panoramic views of the Indian Ocean.",
    price: 2500,
    duration: "7 days",
    rating: 4.9,
    category: "luxury"
  },
  {
    id: 2,
    name: "Cultural Heritage Tour",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Immerse yourself in ancient traditions and visit historic temples in the cultural heart of Japan.",
    price: 1800,
    duration: "10 days",
    rating: 4.7,
    category: "culture"
  },
  {
    id: 3,
    name: "Alpine Adventure Trek",
    location: "Swiss Alps, Switzerland",
    image: "https://images.unsplash.com/photo-1531400158697-c820e5a0d184?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Challenge yourself with an exhilarating trek through the majestic Swiss Alps with expert guides.",
    price: 2100,
    duration: "8 days",
    rating: 4.8,
    category: "adventure"
  },
  {
    id: 4,
    name: "Family Safari Experience",
    location: "Maasai Mara, Kenya",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Create lasting memories on this family-friendly safari adventure in the heart of the African savannah.",
    price: 3200,
    duration: "6 days",
    rating: 4.9,
    category: "family"
  },
  {
    id: 5,
    name: "Ancient Wonders Tour",
    location: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1568322445389-f8f9fd4e15f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Discover the mysteries of ancient Egypt with private tours of pyramids and archaeological treasures.",
    price: 1950,
    duration: "9 days",
    rating: 4.7,
    category: "culture"
  },
  {
    id: 6,
    name: "Island Paradise Retreat",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Relax in overwater bungalows and enjoy world-class service in this tropical paradise.",
    price: 3500,
    duration: "5 days",
    rating: 5.0,
    category: "luxury"
  },
];

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredDestinations = destinationData.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the perfect destination for your next unforgettable journey
          </p>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="bg-white shadow-md py-6 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-grow">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2 min-w-[180px]">
            <SlidersHorizontal size={18} className="text-gray-600" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent"
            >
              <option value="all">All Categories</option>
              <option value="luxury">Luxury</option>
              <option value="culture">Cultural</option>
              <option value="adventure">Adventure</option>
              <option value="family">Family</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Destinations Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <CollapsibleCard
              key={destination.id}
              image={destination.image}
              title={destination.name}
              subtitle={destination.location}
              stats={[
                { label: "PRICE", value: `$${destination.price}` },
                { label: "DURATION", value: destination.duration },
                { label: "RATING", value: destination.rating.toString() }
              ]}
            >
              <p>{destination.description}</p>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-travel-primary hover:bg-travel-primary/90 text-white rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </CollapsibleCard>
          ))}
        </div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No destinations found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-travel-primary hover:bg-travel-primary/90 text-white rounded-md transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Destinations;
