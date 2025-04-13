
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RecommendationForm from "@/components/RecommendationForm";
import RecommendationResults from "@/components/RecommendationResults";
import Footer from "@/components/Footer";
import { getRecommendations, UserPreferences } from "@/utils/recommendationEngine";
import { CarType } from "@/data/carData";

const Index = () => {
  const [recommendations, setRecommendations] = useState<CarType[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (preferences: UserPreferences) => {
    const results = getRecommendations(preferences);
    setRecommendations(results);
    setShowResults(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById("recommendations")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <RecommendationForm onSubmit={handleSubmit} />
      <RecommendationResults
        recommendations={recommendations}
        isVisible={showResults}
      />
      <Footer />
    </div>
  );
};

export default Index;
