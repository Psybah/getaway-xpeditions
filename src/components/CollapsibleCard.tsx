
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
    <Card className="overflow-hidden bg-white rounded-3xl shadow-md">
      <div className="relative rounded-t-3xl overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="font-display text-xl text-white font-bold">{title}</h3>
          {subtitle && (
            <p className="text-white/80 text-sm">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="text-center p-2">
        <button 
          onClick={toggleExpand}
          className="text-gray-500 hover:text-travel-primary transition-colors"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
        >
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
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
