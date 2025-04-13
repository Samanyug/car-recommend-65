
import { cars, CarType } from '../data/carData';

export interface UserPreferences {
  budget: number; // Budget in rupees
  bodyType: string[];
  fuelType: string[];
  transmission: string[];
}

// Simple recommendation algorithm based on user preferences
export const getRecommendations = (preferences: UserPreferences): CarType[] => {
  // Filter cars based on preferences
  let recommendations = cars.filter(car => {
    // Budget check (allow some flexibility, 10% over budget)
    const budgetMatch = car.price <= preferences.budget * 1.1;
    
    // Body type check
    const bodyTypeMatch = preferences.bodyType.length === 0 || 
                          preferences.bodyType.includes(car.bodyType);
    
    // Fuel type check
    const fuelTypeMatch = preferences.fuelType.length === 0 || 
                          preferences.fuelType.includes(car.fuelType);
    
    // Transmission check
    const transmissionMatch = preferences.transmission.length === 0 || 
                              preferences.transmission.includes(car.transmission);
    
    return budgetMatch && bodyTypeMatch && fuelTypeMatch && transmissionMatch;
  });

  // Sort by closeness to budget (prioritizing cars that are within budget but close to max)
  recommendations.sort((a, b) => {
    // If both are under budget, prefer the one closer to budget
    if (a.price <= preferences.budget && b.price <= preferences.budget) {
      return b.price - a.price;
    }
    // If only one is under budget, prefer that one
    if (a.price <= preferences.budget) return -1;
    if (b.price <= preferences.budget) return 1;
    // If both are over budget, prefer the cheaper one
    return a.price - b.price;
  });

  return recommendations;
};

// Get available options for form dropdowns
export const getAvailableOptions = () => {
  const bodyTypes = Array.from(new Set(cars.map(car => car.bodyType)));
  const fuelTypes = Array.from(new Set(cars.map(car => car.fuelType)));
  const transmissionTypes = Array.from(new Set(cars.map(car => car.transmission)));
  
  return {
    bodyTypes,
    fuelTypes,
    transmissionTypes
  };
};

// Format price in Indian rupees with appropriate suffixes
export const formatIndianRupees = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} Lakh`;
  } else if (price >= 1000) {
    return `₹${(price / 1000).toFixed(2)} K`;
  } else {
    return `₹${price}`;
  }
};
