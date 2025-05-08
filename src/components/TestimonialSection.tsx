
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    location: "London, UK",
    quote: "The luxury retreat in Bali exceeded all my expectations. The personalized service and attention to detail made us feel like royalty. We'll definitely be booking with Getaway Xpeditions again!",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Raj Patel",
    location: "Mumbai, India",
    quote: "The adventure tour in Costa Rica was absolutely thrilling! From zip-lining through the rainforest to white water rafting, every moment was packed with excitement. The guides were knowledgeable and made us feel safe.",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Chen",
    location: "Toronto, Canada",
    quote: "Our team building retreat was a huge success thanks to Getaway Xpeditions. The activities were engaging, the accommodations were comfortable, and the staff was extremely helpful throughout our stay.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 md:px-12 bg-travel-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-travel-white text-3xl md:text-4xl font-display font-bold mb-4">
            Traveler Experiences
          </h2>
          <p className="text-travel-gray max-w-2xl mx-auto">
            Don't just take our word for it—hear what our travelers have to say about their unforgettable journeys
          </p>
        </div>
        
        <div className="relative bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img 
                src={currentTestimonial.avatar} 
                alt={currentTestimonial.name}
                className="w-full h-full rounded-full object-cover border-4 border-travel-primary"
              />
            </div>
            
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-travel-primary text-travel-primary" />
                ))}
              </div>
              
              <blockquote className="text-travel-white text-lg md:text-xl italic mb-4">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <cite className="text-travel-primary font-medium not-italic">
                {currentTestimonial.name}, {currentTestimonial.location}
              </cite>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end gap-2 mt-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-travel-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-travel-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
          
          <div className="text-center mt-4">
            <span className="text-white text-sm">
              {currentIndex + 1}/{testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
