
export interface TravelCategory {
  title: string;
  description: string;
  destinations: string[];
}

export const travelCategories: TravelCategory[] = [
  {
    title: "Luxury & Relaxation",
    description: "Indulge in opulence and serenity at some of the world's most exclusive getaways:",
    destinations: [
      "Santorini, Greece – Iconic white villas and Aegean sunsets",
      "Maldives – Overwater villas and luxury island resorts",
      "Dubai, UAE – Sky-high experiences and desert elegance"
    ]
  },
  {
    title: "Culture & History",
    description: "Step back in time and immerse yourself in rich traditions:",
    destinations: [
      "Cairo, Egypt – Ancient wonders and Nile River adventures",
      "Rome, Italy – Timeless ruins and Italian charm",
      "Zanzibar, Tanzania – Swahili culture and spice island history"
    ]
  },
  {
    title: "Nature & Adventure",
    description: "For the thrill-seekers and nature lovers:",
    destinations: [
      "Cape Town, South Africa – Mountains, safaris, and wine trails",
      "Bali, Indonesia – Volcanic treks, waterfalls, and sacred temples",
      "Costa Rica – Rainforests, volcanoes, and eco-adventures"
    ]
  },
  {
    title: "Romantic Escapes",
    description: "Escape with your special someone to destinations made for love:",
    destinations: [
      "Paris, France – Candlelit dinners and Eiffel Tower views",
      "Seychelles – Private beaches and luxury island life",
      "Venice, Italy – Gondola rides and timeless romance"
    ]
  },
  {
    title: "Budget-Friendly Getaways",
    description: "Experience more for less—without compromising on adventure:",
    destinations: [
      "Thailand – Exotic islands and delicious street food",
      "Morocco – Colorful souks, desert magic, and rich culture",
      "Ghana – History, heritage, and coastal beauty"
    ]
  }
];
