
export interface CarType {
  id: number;
  name: string;
  brand: string;
  price: number;
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
    price: 42990,
    bodyType: "Sedan",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop",
    description: "The Tesla Model 3 is an electric four-door sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles and the Long Range versions deliver 353 miles.",
    features: ["Autopilot", "15\" Touchscreen", "Glass Roof", "Wireless Charging"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Civic",
    brand: "Honda",
    price: 22350,
    bodyType: "Sedan",
    fuelType: "Gasoline",
    transmission: "CVT",
    imageUrl: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2070&auto=format&fit=crop",
    description: "The Honda Civic is a line of cars manufactured by Honda. The Civic is known for its reliability, fuel efficiency, and practicality, making it a popular choice among consumers.",
    features: ["Honda Sensing", "Apple CarPlay Integration", "Android Auto Integration", "Multi-Angle Rearview Camera"],
    rating: 4.5
  },
  {
    id: 3,
    name: "RAV4",
    brand: "Toyota",
    price: 26350,
    bodyType: "SUV",
    fuelType: "Hybrid",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1633876841479-48e5cc0f2d6c?q=80&w=1974&auto=format&fit=crop",
    description: "The Toyota RAV4 is a compact crossover SUV produced by the Japanese automobile manufacturer Toyota. It features a spacious interior, good fuel economy, and Toyota's renowned reliability.",
    features: ["Toyota Safety Sense", "Dynamic Torque Vectoring AWD", "Multi-terrain Select", "7\" Multi-Information Display"],
    rating: 4.6
  },
  {
    id: 4,
    name: "Mustang",
    brand: "Ford",
    price: 27205,
    bodyType: "Coupe",
    fuelType: "Gasoline",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5f82d24c9?q=80&w=2070&auto=format&fit=crop",
    description: "The Ford Mustang is an American car manufactured by Ford. The Mustang created the 'pony car' class of American muscle cars, affordable sporty coupes with long hoods and short rear decks.",
    features: ["SYNC 4", "Track Apps", "Electronic Line-Lock", "Launch Control"],
    rating: 4.7
  },
  {
    id: 5,
    name: "F-PACE",
    brand: "Jaguar",
    price: 49995,
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1651901668235-939356352428?q=80&w=2233&auto=format&fit=crop",
    description: "The Jaguar F-PACE is a compact luxury crossover SUV made by British car manufacturer Jaguar Land Rover. It offers a blend of performance, luxury, and practicality.",
    features: ["Pivi Pro", "Interactive Driver Display", "Meridian™ Sound System", "ClearSight Interior Rear View Mirror"],
    rating: 4.4
  },
  {
    id: 6,
    name: "Wrangler",
    brand: "Jeep",
    price: 28900,
    bodyType: "SUV",
    fuelType: "Gasoline",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "The Jeep Wrangler is a series of compact and mid-size four-wheel drive off-road SUVs manufactured by Jeep. It is known for its iconic design and off-road capabilities.",
    features: ["Command-Trac 4x4", "Wash-Out Interior", "Removable Top", "Rock-Trac 4x4 System"],
    rating: 4.3
  },
  {
    id: 7,
    name: "S-Class",
    brand: "Mercedes-Benz",
    price: 94250,
    bodyType: "Sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
    description: "The Mercedes-Benz S-Class is a series of full-size luxury sedans produced by the German automaker Mercedes-Benz. The S-Class is the flagship vehicle for Mercedes-Benz and has historically been the benchmark for automotive luxury and innovation.",
    features: ["MBUX", "Burmester® High-End 4D Surround Sound", "E-ACTIVE BODY CONTROL", "ENERGIZING Comfort"],
    rating: 4.9
  },
  {
    id: 8,
    name: "Tacoma",
    brand: "Toyota",
    price: 26400,
    bodyType: "Truck",
    fuelType: "Gasoline",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1624861691149-bb424ecb09fa?q=80&w=2070&auto=format&fit=crop",
    description: "The Toyota Tacoma is a mid-size pickup truck manufactured by Toyota Motor Corporation. It's known for its reliability, durability, and off-road capability.",
    features: ["Multi-terrain Monitor", "Crawl Control", "Toyota Safety Sense P", "Smart Key System"],
    rating: 4.5
  },
  {
    id: 9,
    name: "3 Series",
    brand: "BMW",
    price: 41450,
    bodyType: "Sedan",
    fuelType: "Gasoline",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2028&auto=format&fit=crop",
    description: "The BMW 3 Series is a line of compact executive cars manufactured by the German automaker BMW. It combines luxury, sportiness, and everyday usability.",
    features: ["BMW Intelligent Personal Assistant", "Live Cockpit Professional", "Driving Assistant Professional", "Parking Assistant Plus"],
    rating: 4.7
  },
  {
    id: 10,
    name: "Corvette Stingray",
    brand: "Chevrolet",
    price: 60900,
    bodyType: "Coupe",
    fuelType: "Gasoline",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-d68f7d9fb762?q=80&w=1780&auto=format&fit=crop",
    description: "The Chevrolet Corvette Stingray is a sports car manufactured by Chevrolet. The Corvette is known for its powerful performance, sleek styling, and value compared to other sports cars.",
    features: ["Performance Data Recorder", "Magnetic Ride Control", "Head-Up Display", "Brembo® Anti-Lock Brakes"],
    rating: 4.8
  }
];
