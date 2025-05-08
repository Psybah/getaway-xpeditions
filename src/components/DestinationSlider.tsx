import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Replace the destinations data with the new categories and details
const destinations = [
  {
    id: 1,
    region: "Luxury & Relaxation",
    country: "Santorini, Greece",
    name: "SANTORINI",
    description: "Indulge in opulence and serenity at some of the world's most exclusive getaways: Iconic white villas and Aegean sunsets.",
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // Santorini
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    region: "Luxury & Relaxation",
    country: "Maldives",
    name: "MALDIVES",
    description: "Overwater villas and luxury island resorts await in the Maldives, a true paradise for relaxation.",
    backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80", // Maldives
    cardImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    region: "Luxury & Relaxation",
    country: "Dubai, UAE",
    name: "DUBAI",
    description: "Sky-high experiences and desert elegance in the heart of Dubai's luxury scene.",
    backgroundImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80", // Dubai
    cardImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    region: "Culture & History",
    country: "Cairo, Egypt",
    name: "CAIRO",
    description: "Step back in time and immerse yourself in rich traditions: Ancient wonders and Nile River adventures.",
    backgroundImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80", // Cairo
    cardImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    region: "Culture & History",
    country: "Rome, Italy",
    name: "ROME",
    description: "Timeless ruins and Italian charm in the heart of Rome.",
    backgroundImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1920&q=80", // Rome
    cardImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    region: "Culture & History",
    country: "Zanzibar, Tanzania",
    name: "ZANZIBAR",
    description: "Swahili culture and spice island history on the shores of Zanzibar.",
    backgroundImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80", // Zanzibar
    cardImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    region: "Nature & Adventure",
    country: "Cape Town, South Africa",
    name: "CAPE TOWN",
    description: "Mountains, safaris, and wine trails for the thrill-seekers and nature lovers.",
    backgroundImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80", // Cape Town
    cardImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    region: "Nature & Adventure",
    country: "Bali, Indonesia",
    name: "BALI",
    description: "Volcanic treks, waterfalls, and sacred temples in Bali's lush landscapes.",
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // Bali
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    region: "Nature & Adventure",
    country: "Costa Rica",
    name: "COSTA RICA",
    description: "Rainforests, volcanoes, and eco-adventures for the adventurous spirit.",
    backgroundImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80", // Costa Rica
    cardImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    region: "Romantic Escapes",
    country: "Paris, France",
    name: "PARIS",
    description: "Candlelit dinners and Eiffel Tower views for a romantic escape.",
    backgroundImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80", // Paris
    cardImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    region: "Romantic Escapes",
    country: "Seychelles",
    name: "SEYCHELLES",
    description: "Private beaches and luxury island life for couples in love.",
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // Seychelles
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    region: "Romantic Escapes",
    country: "Venice, Italy",
    name: "VENICE",
    description: "Gondola rides and timeless romance in the magical city of Venice.",
    backgroundImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1920&q=80", // Venice
    cardImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    region: "Budget-Friendly Getaways",
    country: "Thailand",
    name: "THAILAND",
    description: "Exotic islands and delicious street food for the budget traveler.",
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80", // Thailand
    cardImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    region: "Budget-Friendly Getaways",
    country: "Morocco",
    name: "MOROCCO",
    description: "Colorful souks, desert magic, and rich culture for less.",
    backgroundImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80", // Morocco
    cardImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    region: "Budget-Friendly Getaways",
    country: "Ghana",
    name: "GHANA",
    description: "History, heritage, and coastal beauty on a budget.",
    backgroundImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80", // Ghana
    cardImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
];

const DestinationSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const [visibleDestinations, setVisibleDestinations] = useState(destinations);
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentDestination = destinations[currentIndex];
  
  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };
  
  const handleCardClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    // Save the current destination before updating
    const previousDestination = destinations[currentIndex];
    
    // Set the clicked card as expanding
    setExpandedCardIndex(index);
    
    // After a brief delay to allow animation to start
    setTimeout(() => {
      // Set the clicked card as the new current destination
      setCurrentIndex(index);
      
      // Filter out the clicked card from the visible destinations
      const newVisibleDestinations = visibleDestinations
        .filter(dest => dest.id !== destinations[index].id)
        // Add the previous destination to the carousel
        .concat(previousDestination);
      
      setVisibleDestinations(newVisibleDestinations);
      
      // Reset expanded card state after full transition
      setTimeout(() => {
        setExpandedCardIndex(null);
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };
  
  // Initialize visible destinations, excluding the current one
  useEffect(() => {
    const initialVisible = destinations.filter(
      (_, idx) => idx !== currentIndex
    );
    setVisibleDestinations(initialVisible);
  }, []);
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const currentScroll = carouselRef.current.scrollLeft;
    
    carouselRef.current.scrollTo({
      left: direction === 'right' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${currentDestination.backgroundImage})`,
          opacity: isTransitioning ? 0.7 : 1,
          transform: isTransitioning ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Expanding card animation overlay */}
      {expandedCardIndex !== null && (
        <div 
          className="absolute inset-0 z-5 bg-cover bg-center animate-scale-up"
          style={{ 
            backgroundImage: `url(${destinations[expandedCardIndex].backgroundImage})`,
            opacity: isTransitioning ? 0.9 : 0
          }}
        />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-overlay"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full min-h-screen flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center px-6 md:px-12 py-16 animate-fade-in">
          <span className="text-travel-gray text-sm md:text-base font-light tracking-widest mb-2">
            {currentDestination.region} - {currentDestination.country}
          </span>
          
          <h1 className="text-travel-white text-4xl sm:text-5xl md:text-[clamp(2rem,5vw,4rem)] font-display font-extrabold uppercase leading-none mb-6">
            {currentDestination.name}
          </h1>
          
          <p className="text-travel-gray max-w-md mb-8">
            {currentDestination.description}
          </p>
          
          <div>
            <button className="flex items-center text-travel-white hover:text-travel-accent transition-colors group">
              <span className="circle-button mr-4 group-hover:bg-travel-accent/80">
                <ArrowRight size={20} />
              </span>
              <span className="uppercase font-medium tracking-wider">Discover Location</span>
            </button>
          </div>
        </div>
        
        {/* Right Content - Carousel */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x gap-4 px-6 md:px-12 py-8"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {visibleDestinations.map((destination, index) => {
              const isExpanding = expandedCardIndex === destinations.findIndex(d => d.id === destination.id);
              
              return (
                <div 
                  key={destination.id}
                  className={`destination-card flex-shrink-0 w-[260px] h-[360px] snap-start transition-all duration-500 ${
                    isExpanding ? 'opacity-0 scale-150' : 'opacity-100 scale-100'
                  } ${
                    currentIndex === destinations.findIndex(d => d.id === destination.id) ? 'ring-2 ring-travel-accent' : ''
                  }`}
                  onClick={() => handleCardClick(destinations.findIndex(d => d.id === destination.id))}
                >
                  <img 
                    src={destination.cardImage} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="destination-card-overlay"></div>
                  <div className="destination-card-content">
                    <div className="text-sm opacity-80 mb-1">{destination.region} - {destination.country}</div>
                    <div className="font-display font-bold uppercase text-lg">{destination.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center px-6 md:px-12 py-4">
            <div className="flex space-x-4">
              <button 
                onClick={() => scrollCarousel('left')}
                className="circle-button"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="circle-button"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="font-display text-2xl md:text-3xl font-bold text-travel-white">
              {String(currentIndex + 1).padStart(2, '0')}
              <span className="opacity-50 text-sm">/</span>
              <span className="opacity-50 text-sm">{String(destinations.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationSlider;
