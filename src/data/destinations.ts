
export interface Destination {
  id: number;
  region: string;
  country: string;
  name: string;
  description: string;
  backgroundImage: string;
  cardImage: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    region: "Sahara Desert",
    country: "Morocco",
    name: "MARRAKECH MERZOUGA",
    description: "Explore the golden dunes of the Sahara and experience the magic of Moroccan culture. The vast desert landscape creates an unforgettable journey.",
    backgroundImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    region: "Japan Alps",
    country: "Japan",
    name: "NAGANO PREFECTURE",
    description: "Majestic mountains rise up amid serene Japanese landscapes. Discover zen and the pristine natural beauty which enchants visitors from around the world.",
    backgroundImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    region: "Yosemite",
    country: "United States",
    name: "NATIONAL PARK",
    description: "Breathtaking valleys, majestic waterfalls, and ancient sequoias await in America's most iconic national park. Discover natural wonders at every turn.",
    backgroundImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    region: "Tarifa",
    country: "Spain",
    name: "LOS LANCES BEACH",
    description: "Known as Europe's kitesurfing capital, this coastal paradise offers perfect wind conditions and breathtaking views of the Mediterranean meeting the Atlantic.",
    backgroundImage: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    region: "Cappadocia",
    country: "Turkey",
    name: "GÖREME VALLEY",
    description: "Witness the magical spectacle of colorful hot air balloons floating over otherworldly landscapes of fairy chimneys and ancient cave dwellings.",
    backgroundImage: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    region: "Swiss",
    country: "Switzerland",
    name: "SAINT ANTÖNIEN",
    description: "Nestled in the pristine Swiss Alps, this hidden gem offers breathtaking mountain vistas, lush alpine meadows, and authentic mountain village charm.",
    backgroundImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cardImage: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];
