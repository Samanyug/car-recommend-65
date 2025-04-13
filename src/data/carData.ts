
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
    name: "Swift",
    brand: "Maruti Suzuki",
    price: 650000, // ₹6.5 lakh
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    description: "The Maruti Suzuki Swift is a popular hatchback that offers excellent fuel efficiency, peppy performance, and low maintenance costs, making it one of India's best-selling cars.",
    features: ["Touchscreen Infotainment", "Auto Folding Mirrors", "Engine Push Start", "LED DRLs"],
    rating: 4.5
  },
  {
    id: 2,
    name: "Creta",
    brand: "Hyundai",
    price: 1120000, // ₹11.2 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
    description: "The Hyundai Creta is a compact SUV that combines style, comfort, and technology. With its powerful engine options and feature-rich cabin, it's one of India's most popular SUVs.",
    features: ["Panoramic Sunroof", "Ventilated Seats", "BlueLink Connected Car", "Bose Sound System"],
    rating: 4.6
  },
  {
    id: 3,
    name: "Nexon EV",
    brand: "Tata",
    price: 1450000, // ₹14.5 lakh
    bodyType: "SUV",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-d68f7d9fb762?q=80&w=1780&auto=format&fit=crop",
    description: "The Tata Nexon EV is India's popular electric SUV offering a range of up to 465 km on a single charge. It combines sustainability with the robust build quality that Tata is known for.",
    features: ["Range up to 465 km", "Ziptron Technology", "7-inch Touchscreen", "Connected Car Tech"],
    rating: 4.7
  },
  {
    id: 4,
    name: "City",
    brand: "Honda",
    price: 1200000, // ₹12.0 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "CVT",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2028&auto=format&fit=crop",
    description: "The Honda City is a premium sedan that has been a favorite in India for decades. Known for its refinement, reliability, and spacious interior, it offers a perfect balance of comfort and performance.",
    features: ["Sunroof", "Honda Connect", "Lane Watch Camera", "8-inch Touchscreen"],
    rating: 4.8
  },
  {
    id: 5,
    name: "Innova Hycross",
    brand: "Toyota",
    price: 1990000, // ₹19.9 lakh
    bodyType: "MPV",
    fuelType: "Hybrid",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1633876841479-48e5cc0f2d6c?q=80&w=1974&auto=format&fit=crop",
    description: "The Toyota Innova Hycross is a premium MPV with a strong hybrid system that delivers excellent fuel efficiency. With its spacious cabin and Toyota's legendary reliability, it's perfect for family travel.",
    features: ["Strong Hybrid", "Captain Seats", "Panoramic Sunroof", "ADAS Safety Features"],
    rating: 4.7
  },
  {
    id: 6,
    name: "Kwid",
    brand: "Renault",
    price: 450000, // ₹4.5 lakh
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "AMT",
    imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    description: "The Renault Kwid is an entry-level hatchback with SUV-inspired styling. Despite its compact dimensions, it offers good ground clearance and a surprisingly spacious interior, making it ideal for city driving.",
    features: ["8-inch Touchscreen", "Rear Parking Camera", "Digital Instrument Cluster", "Smart Access Card"],
    rating: 4.2
  },
  {
    id: 7,
    name: "Thar",
    brand: "Mahindra",
    price: 1350000, // ₹13.5 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1584345604476-8ec5f82d24c9?q=80&w=2070&auto=format&fit=crop",
    description: "The Mahindra Thar is an iconic off-road SUV that combines rugged capability with modern amenities. With its 4x4 drivetrain and high ground clearance, it's built for adventure on any terrain.",
    features: ["4x4 Drivetrain", "Convertible Top", "Adventure Statistics", "Drizzle-resistant Display"],
    rating: 4.8
  },
  {
    id: 8,
    name: "Seltos",
    brand: "Kia",
    price: 1000000, // ₹10.0 lakh
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "DCT",
    imageUrl: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1935&auto=format&fit=crop",
    description: "The Kia Seltos is a feature-packed compact SUV that offers premium experience at competitive price. With multiple engine and transmission options, it caters to a wide range of preferences.",
    features: ["10.25-inch Touchscreen", "UVO Connected Car", "Bose Sound System", "Ventilated Seats"],
    rating: 4.6
  },
  {
    id: 9,
    name: "ZS EV",
    brand: "MG",
    price: 2300000, // ₹23.0 lakh
    bodyType: "SUV",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=1854&auto=format&fit=crop",
    description: "The MG ZS EV is a feature-rich electric SUV with a spacious cabin and a claimed range of up to 461 km. It offers a compelling package of technology, comfort, and eco-friendly mobility.",
    features: ["i-SMART Connected Car", "PM 2.5 Air Filter", "Panoramic Sunroof", "461 km Range"],
    rating: 4.5
  },
  {
    id: 10,
    name: "Octavia",
    brand: "Skoda",
    price: 2700000, // ₹27.0 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1624861691149-bb424ecb09fa?q=80&w=2070&auto=format&fit=crop",
    description: "The Skoda Octavia is a premium sedan that offers European build quality, refined driving dynamics, and sophisticated design. Its turbocharged engine delivers exhilarating performance.",
    features: ["Virtual Cockpit", "Canton Sound System", "Adaptive LED Headlights", "2.0 TSI Engine"],
    rating: 4.7
  },
  {
    id: 11,
    name: "Verna",
    brand: "Hyundai",
    price: 950000, // ₹9.5 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1669893221919-aefb56874b9e?q=80&w=2070&auto=format&fit=crop",
    description: "The Hyundai Verna is a stylish sedan that combines dynamic design with advanced features. Its refined powertrains offer a balance of performance and efficiency for the modern Indian driver.",
    features: ["Ventilated Seats", "BlueLink Connected Car", "Bose Premium Sound", "Drive Mode Select"],
    rating: 4.4
  },
  {
    id: 12,
    name: "Altroz CNG",
    brand: "Tata",
    price: 750000, // ₹7.5 lakh
    bodyType: "Hatchback",
    fuelType: "CNG",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1581465447705-d5f8c35678fa?q=80&w=1974&auto=format&fit=crop",
    description: "The Tata Altroz CNG offers the perfect balance between economy and performance with its factory-fitted CNG kit. It maintains Altroz's 5-star safety rating while delivering excellent fuel efficiency.",
    features: ["Twin Cylinder CNG", "5-Star Safety", "7-inch Touchscreen", "Projector Headlamps"],
    rating: 4.3
  },
  {
    id: 13,
    name: "Wagon R",
    brand: "Maruti Suzuki",
    price: 550000, // ₹5.5 lakh
    bodyType: "Hatchback",
    fuelType: "CNG",
    transmission: "AMT",
    imageUrl: "https://images.unsplash.com/photo-1566985633704-0da67c6dbf97?q=80&w=2070&auto=format&fit=crop",
    description: "The Maruti Suzuki Wagon R is a practical and spacious hatchback that's perfect for Indian families. Its tall-boy design offers excellent headroom, and the S-CNG variant delivers exceptional fuel economy.",
    features: ["S-CNG Technology", "SmartPlay Studio", "Auto Gear Shift", "Dual Airbags"],
    rating: 4.2
  },
  {
    id: 14,
    name: "XUV700",
    brand: "Mahindra",
    price: 1600000, // ₹16.0 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1651901668235-939356352428?q=80&w=2233&auto=format&fit=crop",
    description: "The Mahindra XUV700 is a feature-packed SUV with ADAS technology, panoramic sunroof, and powerful engine options. It offers 5+2 seating and cutting-edge technology at competitive prices.",
    features: ["ADAS", "AdrenoX Connected Car", "Skyroof", "Flush Door Handles"],
    rating: 4.7
  },
  {
    id: 15,
    name: "Amaze",
    brand: "Honda",
    price: 700000, // ₹7.0 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2070&auto=format&fit=crop",
    description: "The Honda Amaze is a compact sedan that offers Honda's legendary reliability in a compact package. With its spacious cabin and refined engine, it delivers comfort and efficiency for daily commutes.",
    features: ["Cruise Control", "Paddle Shifters", "Digipad 2.0", "Multi-angle Rearview Camera"],
    rating: 4.3
  },
  {
    id: 16,
    name: "Carens",
    brand: "Kia",
    price: 960000, // ₹9.6 lakh
    bodyType: "MPV",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1651901380158-d7f9e2d9ed68?q=80&w=2071&auto=format&fit=crop",
    description: "The Kia Carens is a stylish MPV that offers premium features and comfortable seating for up to 7 people. It combines SUV-like styling with the practicality of an MPV for Indian families.",
    features: ["Ventilated Seats", "One Touch Tumble", "10.25-inch Display", "64-color Ambient Lighting"],
    rating: 4.5
  },
  {
    id: 17,
    name: "i20",
    brand: "Hyundai",
    price: 820000, // ₹8.2 lakh
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "CVT",
    imageUrl: "https://images.unsplash.com/photo-1669893221919-aefb56874b9e?q=80&w=2070&auto=format&fit=crop",
    description: "The Hyundai i20 is a premium hatchback that offers European styling and a feature-loaded cabin. It stands out with its striking design, refined ride quality, and advanced technology features.",
    features: ["Sunroof", "BlueLink Connected Car", "Bose Premium Sound", "Air Purifier"],
    rating: 4.4
  },
  {
    id: 18,
    name: "Tiago EV",
    brand: "Tata",
    price: 870000, // ₹8.7 lakh
    bodyType: "Hatchback",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1594920886827-a4c06537680c?q=80&w=1854&auto=format&fit=crop",
    description: "The Tata Tiago EV is one of India's most affordable electric cars, offering zero-emission mobility without compromising on features. It delivers a practical range for urban commutes with low running costs.",
    features: ["Multi-Mode Regen", "Ziptron Technology", "7-inch Touchscreen", "Connected Car Tech"],
    rating: 4.3
  },
  {
    id: 19,
    name: "Baleno",
    brand: "Maruti Suzuki",
    price: 730000, // ₹7.3 lakh
    bodyType: "Hatchback",
    fuelType: "Petrol",
    transmission: "AMT",
    imageUrl: "https://images.unsplash.com/photo-1566985633704-0da67c6dbf97?q=80&w=2070&auto=format&fit=crop",
    description: "The Maruti Suzuki Baleno is a premium hatchback that offers spacious interiors, refined performance, and modern features. Its high fuel efficiency and low maintenance make it a practical choice.",
    features: ["Heads-up Display", "360-View Camera", "SmartPlay Pro+", "6 Airbags"],
    rating: 4.4
  },
  {
    id: 20,
    name: "Fortuner",
    brand: "Toyota",
    price: 3250000, // ₹32.5 lakh
    bodyType: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1633876841479-48e5cc0f2d6c?q=80&w=1974&auto=format&fit=crop",
    description: "The Toyota Fortuner is a robust and powerful SUV that commands respect on Indian roads. Known for its reliability, off-road capability, and strong resale value, it's the premium SUV of choice.",
    features: ["4x4 Capability", "Toyota Safety Sense", "JBL Audio System", "Kick Sensor Tailgate"],
    rating: 4.8
  },
  {
    id: 21,
    name: "Punch",
    brand: "Tata",
    price: 600000, // ₹6.0 lakh
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "AMT",
    imageUrl: "https://images.unsplash.com/photo-1687186735445-d68f7d9fb762?q=80&w=1780&auto=format&fit=crop",
    description: "The Tata Punch is a micro SUV that packs a punch with its robust build quality and 5-star safety rating. It offers the practicality of a hatchback with the commanding position of an SUV.",
    features: ["5-Star Safety Rating", "Terrain Response Modes", "iRA Connected Car", "Harman Audio"],
    rating: 4.5
  },
  {
    id: 22,
    name: "Venue",
    brand: "Hyundai",
    price: 750000, // ₹7.5 lakh
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "DCT",
    imageUrl: "https://images.unsplash.com/photo-1621248861879-e5a6eb073996?q=80&w=2070&auto=format&fit=crop",
    description: "The Hyundai Venue is a compact SUV that packs premium features in a small footprint. With its turbocharged engine option and modern connectivity features, it's perfect for urban adventures.",
    features: ["BlueLink Connected Car", "Air Purifier", "Drive Modes", "Wireless Charging"],
    rating: 4.3
  },
  {
    id: 23,
    name: "Slavia",
    brand: "Skoda",
    price: 1100000, // ₹11.0 lakh
    bodyType: "Sedan",
    fuelType: "Petrol",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop",
    description: "The Skoda Slavia is a premium mid-size sedan with European build quality and sophisticated design. It offers powerful turbocharged engines and a spacious cabin with upmarket features.",
    features: ["Ventilated Seats", "Electric Sunroof", "10.1-inch Touchscreen", "6 Airbags"],
    rating: 4.5
  },
  {
    id: 24,
    name: "XUV400 EV",
    brand: "Mahindra",
    price: 1590000, // ₹15.9 lakh
    bodyType: "SUV",
    fuelType: "Electric",
    transmission: "Automatic",
    imageUrl: "https://images.unsplash.com/photo-1651901668235-939356352428?q=80&w=2233&auto=format&fit=crop",
    description: "The Mahindra XUV400 EV is a compact electric SUV that offers a range of up to 456 km on a single charge. With fast charging capability and spacious interiors, it's a practical electric option.",
    features: ["456 km Range", "Fast Charging", "BlueSense Plus App", "IP67 Battery Protection"],
    rating: 4.4
  },
  {
    id: 25,
    name: "Jimny",
    brand: "Maruti Suzuki",
    price: 1250000, // ₹12.5 lakh
    bodyType: "SUV",
    fuelType: "Petrol",
    transmission: "Manual",
    imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
    description: "The Maruti Suzuki Jimny is a compact 4x4 SUV built for adventure. With its legendary off-road capability, retro styling, and practical size, it's perfect for both urban commutes and weekend getaways.",
    features: ["AllGrip Pro 4x4", "9-inch SmartPlay Pro+", "Hill Hold & Descent Control", "3-link Rigid Axle"],
    rating: 4.6
  }
];
