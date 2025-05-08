
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-travel-secondary rounded-lg p-8">
      <h3 className="text-travel-primary font-display font-bold text-2xl mb-6">
        Contact Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={24} className="text-travel-primary mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">Our Location</h4>
            <p className="text-gray-300">123 Adventure Lane, Travel City, TC 10100</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone size={24} className="text-travel-primary mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">Call Us</h4>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-gray-300">+1 (555) 987-6543</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail size={24} className="text-travel-primary mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">Email Us</h4>
            <p className="text-gray-300">info@getawayxpeditions.com</p>
            <p className="text-gray-300">bookings@getawayxpeditions.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock size={24} className="text-travel-primary mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">Working Hours</h4>
            <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-300">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/20">
        <h4 className="text-white font-medium mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-travel-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-travel-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
          </a>
          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-travel-primary transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    travelDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        travelDate: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md">
      <h3 className="text-travel-secondary font-display font-bold text-2xl mb-6">
        Send Us a Message
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-travel-primary`}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 flex items-center text-sm">
              <AlertCircle size={14} className="mr-1" /> {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-travel-primary`}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 flex items-center text-sm">
              <AlertCircle size={14} className="mr-1" /> {errors.email}
            </p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-md border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-travel-primary`}
          />
          {errors.subject && (
            <p className="mt-1 text-red-500 flex items-center text-sm">
              <AlertCircle size={14} className="mr-1" /> {errors.subject}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="travelDate" className="block text-gray-700 mb-2">Planned Travel Date</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-travel-primary resize-none`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-red-500 flex items-center text-sm">
            <AlertCircle size={14} className="mr-1" /> {errors.message}
          </p>
        )}
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="px-6 py-3 bg-travel-primary hover:bg-travel-primary/90 text-white font-medium rounded-md flex items-center justify-center transition-colors disabled:opacity-70 w-full md:w-auto"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : (
          <>
            <span>Send Message</span>
            <Send size={16} className="ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-80 md:h-96 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or ready to plan your next adventure? We're here to help!
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-2">Interactive map would be embedded here</p>
          <p className="text-gray-400">(Requires Google Maps API integration)</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
