import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Users, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import CollapsibleCard from '@/components/CollapsibleCard';

interface Package {
  id: number;
  title: string;
  destination: string;
  location: string;
  image: string;
  description: string;
  price: number;
  duration: string;
  groupSize: string;
  rating: number;
  includes: string[];
  featured: boolean;
  category: string;
}

const packageData: Package[] = [
  {
    id: 1,
    title: "Ultimate Bali Luxury Retreat",
    destination: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience the perfect blend of luxury, culture, and natural beauty in this exclusive Bali retreat package.",
    price: 2899,
    duration: "8 Days / 7 Nights",
    groupSize: "2-10 People",
    rating: 4.9,
    includes: ["5-star accommodations", "Private villa with pool", "Cultural tours", "Spa treatments", "Chef-prepared meals"],
    featured: true,
    category: "luxury"
  },
  {
    id: 2,
    title: "Machu Picchu Explorer",
    destination: "Cusco",
    location: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Discover the ancient wonders of the Incan civilization with our comprehensive guided tour package.",
    price: 1899,
    duration: "10 Days / 9 Nights",
    groupSize: "4-12 People",
    rating: 4.8,
    includes: ["Guided tours", "Train to Machu Picchu", "Accommodations", "Selected meals", "Cultural experiences"],
    featured: true,
    category: "culture"
  },
  {
    id: 3,
    title: "African Safari Adventure",
    destination: "Serengeti",
    location: "Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Witness the magnificent wildlife of Africa in their natural habitat with our premium safari package.",
    price: 3499,
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    rating: 4.9,
    includes: ["Safari drives", "Luxury tented camps", "All meals", "Expert guides", "National park fees"],
    featured: false,
    category: "adventure"
  },
  {
    id: 4,
    title: "Greek Islands Cruise",
    destination: "Santorini & Mykonos",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Island hop through the stunning Greek islands with crystal blue waters and iconic whitewashed buildings.",
    price: 2599,
    duration: "9 Days / 8 Nights",
    groupSize: "Up to 24 People",
    rating: 4.7,
    includes: ["Luxury cruise", "Island excursions", "All meals", "Entertainment", "Port transfers"],
    featured: true,
    category: "luxury"
  },
  {
    id: 5,
    title: "Japan Cherry Blossom Tour",
    destination: "Tokyo to Kyoto",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience the magical cherry blossom season while exploring Japan's rich cultural heritage.",
    price: 3299,
    duration: "12 Days / 11 Nights",
    groupSize: "6-16 People",
    rating: 4.8,
    includes: ["4-star accommodations", "Bullet train passes", "Cultural activities", "Selected meals", "Expert guides"],
    featured: false,
    category: "culture"
  },
  {
    id: 6,
    title: "Costa Rica Eco Adventure",
    destination: "Multiple Locations",
    location: "Costa Rica",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Explore rainforests, volcanoes, and beaches in this action-packed sustainable adventure package.",
    price: 1999,
    duration: "8 Days / 7 Nights",
    groupSize: "4-14 People",
    rating: 4.9,
    includes: ["Eco-friendly lodging", "Adventure activities", "Wildlife excursions", "Most meals", "Transfers"],
    featured: true,
    category: "adventure"
  },
];

const Packages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Packages" },
    { id: "luxury", label: "Luxury" },
    { id: "adventure", label: "Adventure" },
    { id: "culture", label: "Cultural" },
  ];
  
  const filteredPackages = activeCategory === "all" 
    ? packageData
    : packageData.filter(pkg => pkg.category === activeCategory);
  
  const featuredPackages = filteredPackages.filter(pkg => pkg.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Travel Packages
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Carefully crafted experiences to create memories that last a lifetime
          </p>
        </div>
      </div>
      
      {/* Package Categories */}
      <div className="bg-white shadow-md py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-travel-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Featured Packages */}
      {featuredPackages.length > 0 && (
        <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-travel-secondary mb-2">
              Featured Packages
            </h2>
            <p className="text-gray-600">
              Our most popular and highly rated travel experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPackages.slice(0, 2).map(pkg => (
              <CollapsibleCard
                key={pkg.id}
                image={pkg.image}
                title={pkg.title}
                subtitle={`${pkg.destination}, ${pkg.location}`}
                stats={[
                  { label: "PRICE", value: `$${pkg.price}` },
                  { label: "DURATION", value: pkg.duration.split(' ')[0] },
                  { label: "RATING", value: pkg.rating.toString() }
                ]}
              >
                <p>{pkg.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium text-travel-secondary mb-2">Package Includes:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-travel-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="px-6 py-3 bg-travel-primary hover:bg-travel-primary/90 text-white font-medium rounded-md transition-colors">
                    View Details
                  </button>
                </div>
              </CollapsibleCard>
            ))}
          </div>
        </div>
      )}
      
      {/* All Packages Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-travel-secondary mb-2">
            {activeCategory === "all" ? "All Packages" : `${categories.find(c => c.id === activeCategory)?.label} Packages`}
          </h2>
          <p className="text-gray-600">
            Exceptional travel experiences tailored to your preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pkg => (
            <CollapsibleCard
              key={pkg.id}
              image={pkg.image}
              title={pkg.title}
              subtitle={`${pkg.destination}, ${pkg.location}`}
              stats={[
                { label: "PRICE", value: `$${pkg.price}` },
                { label: "DURATION", value: pkg.duration.split(' ')[0] },
                { label: "GROUP", value: pkg.groupSize }
              ]}
            >
              <p>{pkg.description}</p>
              <div className="flex justify-center mt-4">
                <button className="flex items-center justify-center px-4 py-2 bg-travel-primary hover:bg-travel-primary/90 text-white rounded transition-colors">
                  <span>View Package</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </CollapsibleCard>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Packages;
