
import React from 'react';
import Navbar from '@/components/Navbar';
import DestinationSlider from '@/components/DestinationSlider';
import CategorySection from '@/components/CategorySection';
import TestimonialSection from '@/components/TestimonialSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import TravelCategoriesSection from '@/components/TravelCategoriesSection';
import PopularDestinationsSection from '@/components/PopularDestinationsSection';
import { travelCategories } from '@/data/travelCategories';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Destination Slider */}
      <DestinationSlider />
      
      {/* Travel Categories Section */}
      <TravelCategoriesSection categories={travelCategories} />
      
      {/* Popular Destinations Section */}
      <PopularDestinationsSection />
      
      {/* Category Section */}
      <CategorySection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
