
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-travel-secondary/70 backdrop-blur-md rounded-lg p-8 md:p-12 shadow-2xl border border-white/10">
          <div className="text-center mb-8">
            <h2 className="text-travel-white text-3xl md:text-4xl font-display font-bold mb-4">
              Join Our Adventure Community
            </h2>
            <p className="text-travel-gray max-w-2xl mx-auto">
              Subscribe to receive exclusive travel offers, insider tips, and inspiration for your next journey
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-grow px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-travel-primary"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-travel-primary hover:bg-travel-primary/90 text-white font-medium rounded-md flex items-center justify-center transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Subscribing...</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-travel-gray mt-4 text-center">
              By subscribing, you agree to our privacy policy and consent to receive updates from our team.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
