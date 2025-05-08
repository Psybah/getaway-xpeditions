import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CollapsibleCardProps {
  image: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  stats?: {
    label: string;
    value: string;
  }[];
}

const CollapsibleCard: React.FC<CollapsibleCardProps> = ({
  image,
  title,
  subtitle,
  children,
  stats
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="overflow-hidden bg-white rounded-3xl shadow-xl p-0 flex flex-col">
      <div className="relative w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-t-3xl"
        />
        {/* Overlay with gradient, title, subtitle, and expand/collapse button */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-4 pt-16 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-t-3xl">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-lg text-white font-bold mb-1 drop-shadow-md">{title}</h3>
              {subtitle && (
                <p className="text-white/80 text-xs drop-shadow-md">{subtitle}</p>
              )}
            </div>
            <button 
              onClick={toggleExpand}
              className="ml-2 bg-white/20 hover:bg-travel-primary/80 text-white rounded-full p-1 transition-colors shadow"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
            >
              {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </button>
          </div>
        </div>
      </div>
      {isExpanded && (
        <CardContent className="p-6 animate-accordion-down">
          {stats && stats.length > 0 && (
            <div className="flex justify-between mb-6 border-b border-gray-100 pb-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-lg text-travel-secondary">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
            {children}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default CollapsibleCard;
