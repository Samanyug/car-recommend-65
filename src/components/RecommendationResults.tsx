
import { CarType } from "@/data/carData";
import CarCard from "./CarCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface RecommendationResultsProps {
  recommendations: CarType[];
  isVisible: boolean;
}

const RecommendationResults = ({
  recommendations,
  isVisible,
}: RecommendationResultsProps) => {
  const [visibleCars, setVisibleCars] = useState(6);
  const { toast } = useToast();

  const handleShowMore = () => {
    setVisibleCars((prev) => prev + 6);
  };

  if (!isVisible) return null;

  return (
    <section id="recommendations" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            {recommendations.length > 0
              ? "Your Recommended Cars"
              : "No Matches Found"}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {recommendations.length > 0
              ? "Based on your preferences, here are the cars we recommend for you"
              : "Try adjusting your preferences to see more options"}
          </p>
        </div>

        {recommendations.length > 0 ? (
          <>
            <div className="mt-12 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {recommendations.slice(0, visibleCars).map((car) => (
                <div
                  key={car.id}
                  onClick={() => {
                    toast({
                      title: `${car.brand} ${car.name}`,
                      description: "Contact a dealer for more information",
                    });
                  }}
                  className="cursor-pointer"
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>

            {visibleCars < recommendations.length && (
              <div className="mt-10 text-center">
                <Button
                  onClick={handleShowMore}
                  className="bg-automotive-blue hover:bg-blue-800"
                >
                  Show More Cars
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center">
            <svg
              className="h-24 w-24 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19L5 5m0 0L19 19M5 5v14h14"
              />
            </svg>
            <p className="text-gray-500">
              Try adjusting your filters or budget to see more results.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecommendationResults;
