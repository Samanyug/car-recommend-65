
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { getAvailableOptions } from "@/utils/recommendationEngine";
import { CheckedState } from "@radix-ui/react-checkbox";

interface RecommendationFormProps {
  onSubmit: (preferences: {
    budget: number;
    bodyType: string[];
    fuelType: string[];
    transmission: string[];
  }) => void;
}

const RecommendationForm = ({ onSubmit }: RecommendationFormProps) => {
  const [budget, setBudget] = useState<number>(50000);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  
  // Options for dropdowns
  const [options, setOptions] = useState<{
    bodyTypes: string[];
    fuelTypes: string[];
    transmissionTypes: string[];
  }>({
    bodyTypes: [],
    fuelTypes: [],
    transmissionTypes: []
  });

  useEffect(() => {
    const availableOptions = getAvailableOptions();
    setOptions(availableOptions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      budget,
      bodyType: selectedBodyTypes,
      fuelType: selectedFuelTypes,
      transmission: selectedTransmissions,
    });
  };

  const handleBodyTypeChange = (checked: CheckedState, bodyType: string) => {
    if (checked) {
      setSelectedBodyTypes([...selectedBodyTypes, bodyType]);
    } else {
      setSelectedBodyTypes(selectedBodyTypes.filter((type) => type !== bodyType));
    }
  };

  const handleFuelTypeChange = (checked: CheckedState, fuelType: string) => {
    if (checked) {
      setSelectedFuelTypes([...selectedFuelTypes, fuelType]);
    } else {
      setSelectedFuelTypes(selectedFuelTypes.filter((type) => type !== fuelType));
    }
  };

  const handleTransmissionChange = (checked: CheckedState, transmission: string) => {
    if (checked) {
      setSelectedTransmissions([...selectedTransmissions, transmission]);
    } else {
      setSelectedTransmissions(selectedTransmissions.filter((type) => type !== transmission));
    }
  };

  return (
    <section id="recommendation-form" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-automotive-blue font-semibold tracking-wide uppercase">
            Car Finder
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Find Your Perfect Match
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Tell us what you're looking for, and we'll find cars that match your preferences.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Your Preferences
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Help us understand what you're looking for in a car.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <Label htmlFor="budget">Budget (Max $100,000)</Label>
                    <div className="mt-2 flex items-center">
                      <Slider 
                        id="budget"
                        defaultValue={[budget]}
                        max={100000}
                        step={1000}
                        onValueChange={(value) => setBudget(value[0])}
                        className="flex-1 mr-4"
                      />
                      <span className="text-gray-900 font-medium">
                        ${budget.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">
                        Body Type
                      </legend>
                      <div className="mt-2 space-y-2">
                        {options.bodyTypes.map((bodyType) => (
                          <div key={bodyType} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <Checkbox
                                id={`bodyType-${bodyType}`}
                                checked={selectedBodyTypes.includes(bodyType)}
                                onCheckedChange={(checked) =>
                                  handleBodyTypeChange(checked, bodyType)
                                }
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <Label
                                htmlFor={`bodyType-${bodyType}`}
                                className="font-medium text-gray-700"
                              >
                                {bodyType}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="sm:col-span-3">
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">
                        Fuel Type
                      </legend>
                      <div className="mt-2 space-y-2">
                        {options.fuelTypes.map((fuelType) => (
                          <div key={fuelType} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <Checkbox
                                id={`fuelType-${fuelType}`}
                                checked={selectedFuelTypes.includes(fuelType)}
                                onCheckedChange={(checked) =>
                                  handleFuelTypeChange(checked, fuelType)
                                }
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <Label
                                htmlFor={`fuelType-${fuelType}`}
                                className="font-medium text-gray-700"
                              >
                                {fuelType}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="sm:col-span-6">
                    <fieldset>
                      <legend className="text-base font-medium text-gray-900">
                        Transmission
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-4">
                        {options.transmissionTypes.map((transmission) => (
                          <div key={transmission} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <Checkbox
                                id={`transmission-${transmission}`}
                                checked={selectedTransmissions.includes(transmission)}
                                onCheckedChange={(checked) =>
                                  handleTransmissionChange(checked, transmission)
                                }
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <Label
                                htmlFor={`transmission-${transmission}`}
                                className="font-medium text-gray-700"
                              >
                                {transmission}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setBudget(50000);
                    setSelectedBodyTypes([]);
                    setSelectedFuelTypes([]);
                    setSelectedTransmissions([]);
                  }}
                  className="mr-3"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="bg-automotive-blue hover:bg-blue-800"
                >
                  Find Cars
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecommendationForm;
