
export interface CarType {
  id: number;
  name: string;
  brand: string;
  price: number; // Price in rupees
  bodyType: string;
  fuelType: string;
  transmission: string;
  imageUrl: string;
  description: string;
  features: string[];
  rating: number;
}

export const cars: CarType[] = [
  {
    id: 1,
    name: "Model 3",
    brand: "Tesla",
    price: 3500000, // ₹35 lakh
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
    description: "The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 450 km and the Long Range versions deliver 568 km.",
    features: ["Autopilot", "15\" Touchscreen", "Glass Roof", "Wireless Charging"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Civic",
    brand: "Honda",
    price: 1900000, // ₹19 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "CVT",
    imageUrl: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2070&auto=format&fit=crop",
    description: "The Honda Civic is a line of cars manufactured by Honda. The Civic is known for its reliability, fuel efficiency, and practicality, making it a popular choice among Indian consumers.",
    features: ["Honda Sensing", "Apple CarPlay Integration", "Android Auto Integration", "Multi-Angle Rearview Camera"],
    rating: 4.5
  },
  {
    id: 3,
    name: "Fortuner",
    brand: "Toyota",
    price: 3200000, // ₹32 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1633876841479-48e5cc0f2d6c?q=80&w=1974&auto=format&fit=crop",
    description: "The Toyota Fortuner is a mid-size SUV manufactured by Toyota. It features a spacious interior, powerful engine options, and Toyota's renowned reliability that's perfect for Indian roads.",
    features: ["Toyota Safety Sense", "All-Wheel Drive", "Multi-terrain Select", "7\" Multi-Information Display"],
    rating: 4.6
  },
  {
    id: 4,
    name: "Thar",
    brand: "Mahindra",
    price: 1600000, // ₹16 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5f82d24c9?q=80&w=2070&auto=format&fit=crop",
    description: "The Mahindra Thar is an off-road SUV manufactured by Mahindra & Mahindra. The Thar is built for adventure and offers excellent off-road capabilities with a distinctive rugged design.",
    features: ["4x4 Drivetrain", "Adventure Statistics Display", "Drizzle-resistant Touchscreen", "Roof-mounted Speakers"],
    rating: 4.7
  },
  {
    id: 5,
    name: "XUV700",
    brand: "Mahindra",
    price: 1300000, // ₹13 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1651901668235-939356352428?q=80&w=2233&auto=format&fit=crop",
    description: "The Mahindra XUV700 is a mid-size SUV manufactured by Mahindra. It offers premium features, advanced technology, and powerful performance at a competitive price point.",
    features: ["AdrenoX Connected Car Technology", "Skyroof", "Driver Drowsiness Detection", "Sony 3D Sound System"],
    rating: 4.4
  },
  {
    id: 6,
    name: "Swift",
    brand: "Maruti Suzuki",
    price: 600000, // ₹6 lakh
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "The Maruti Suzuki Swift is a popular hatchback manufactured by Maruti Suzuki. It offers a perfect balance of style, performance, and fuel efficiency, making it one of India's best-selling cars.",
    features: ["DualJet Engine", "Cruise Control", "SmartPlay Studio", "Auto-Folding Mirrors"],
    rating: 4.3
  },
  {
    id: 7,
    name: "S-Class",
    brand: "Mercedes-Benz",
    price: 16000000, // ₹1.6 crore
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
    description: "The Mercedes-Benz S-Class is a luxury sedan that represents the pinnacle of automotive technology and comfort. It offers unparalleled luxury, cutting-edge technology, and superior performance.",
    features: ["MBUX", "Burmester® High-End 4D Surround Sound", "E-ACTIVE BODY CONTROL", "ENERGIZING Comfort"],
    rating: 4.9
  },
  {
    id: 8,
    name: "Scorpio",
    brand: "Mahindra",
    price: 1200000, // ₹12 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1624861691149-bb424ecb09fa?q=80&w=2070&auto=format&fit=crop",
    description: "The Mahindra Scorpio is a mid-size SUV manufactured by Mahindra. It's known for its rugged build, powerful performance, and ability to handle Indian road conditions with ease.",
    features: ["Multi-function Steering Wheel", "Micro Hybrid Technology", "6-inch Touchscreen Infotainment", "Cruise Control"],
    rating: 4.5
  },
  {
    id: 9,
    name: "City",
    brand: "Honda",
    price: 1100000, // ₹11 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "CVT",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2028&auto=format&fit=crop",
    description: "The Honda City is a subcompact sedan manufactured by Honda. It combines style, comfort, and reliability, making it one of the most popular sedans in the Indian market.",
    features: ["Honda Connect", "One-Touch Electric Sunroof", "8-inch Advanced Touchscreen", "Lane Watch Camera"],
    rating: 4.7
  },
  {
    id: 10,
    name: "Nexon",
    brand: "Tata",
    price: 750000, // ₹7.5 lakh
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-d68f7d9fb762?q=80&w=1780&auto=format&fit=crop",
    description: "The Tata Nexon is a subcompact SUV manufactured by Tata Motors. It offers a perfect blend of style, safety, and performance, and was India's first car to achieve a 5-star Global NCAP safety rating.",
    features: ["iRA Connected Car Technology", "Electronic Stability Program", "Wearable Key", "Air Purifier"],
    rating: 4.8
  }
];
