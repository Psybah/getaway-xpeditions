import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Clock, Tag, ChevronRight } from 'lucide-react';
import CollapsibleCard from '@/components/CollapsibleCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Need to Visit",
    excerpt: "Explore these lesser-known destinations that offer authentic experiences away from the tourist crowds.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Johnson",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Destinations",
    tags: ["southeast asia", "hidden gems", "travel tips"]
  },
  {
    id: 2,
    title: "The Ultimate Guide to Safari Photography",
    excerpt: "Master the art of capturing wildlife with these essential tips from professional photographers.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Stevens",
    date: "April 28, 2023",
    readTime: "8 min read",
    category: "Photography",
    tags: ["safari", "photography", "wildlife"]
  },
  {
    id: 3,
    title: "Sustainable Travel: How to Minimize Your Environmental Impact",
    excerpt: "Simple yet effective ways to travel responsibly while still having amazing experiences.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sophia Williams",
    date: "June 02, 2023",
    readTime: "6 min read",
    category: "Sustainable Travel",
    tags: ["eco-friendly", "sustainable", "green travel"]
  },
  {
    id: 4,
    title: "Culinary Adventures: Street Food Tours Around the World",
    excerpt: "Discover the vibrant flavors and cultural significance of street food in different countries.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Chen",
    date: "March 14, 2023",
    readTime: "7 min read",
    category: "Food",
    tags: ["street food", "culinary", "foodie"]
  },
  {
    id: 5,
    title: "Digital Nomad Life: Working from Paradise",
    excerpt: "Tips and insights on balancing work and travel as a location-independent professional.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Jessica Martinez",
    date: "July 10, 2023",
    readTime: "9 min read",
    category: "Digital Nomad",
    tags: ["remote work", "digital nomad", "work-life balance"]
  },
  {
    id: 6,
    title: "Adventure Therapy: How Travel Can Heal the Mind",
    excerpt: "Exploring the psychological benefits of stepping out of your comfort zone through travel.",
    content: "Full article content here...",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Robert Taylor",
    date: "February 25, 2023",
    readTime: "10 min read",
    category: "Wellness",
    tags: ["mental health", "adventure", "personal growth"]
  },
];

const categories = ["All", "Destinations", "Photography", "Food", "Sustainable Travel", "Digital Nomad", "Wellness"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Travel Blog & Guides
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stories, tips and insider knowledge to inspire your next adventure
          </p>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white shadow-md py-4 px-6 md:px-12 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex space-x-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                activeCategory === category 
                  ? 'bg-travel-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <CollapsibleCard
              key={post.id}
              image={post.image}
              title={post.title}
              subtitle={post.category}
              stats={[
                { label: "AUTHOR", value: post.author },
                { label: "DATE", value: post.date },
                { label: "READ TIME", value: post.readTime }
              ]}
            >
              <p>{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button className="flex items-center text-travel-primary hover:text-travel-secondary transition-colors font-medium">
                  <span>Read More</span>
                  <ChevronRight size={16} className="ml-1" />
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

export default Blog;
