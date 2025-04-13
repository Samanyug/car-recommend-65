
import { Badge } from "@/components/ui/badge";
import { CarType } from "@/data/carData";
import { Card } from "@/components/ui/card";
import { formatIndianRupees } from "@/utils/recommendationEngine";

interface CarCardProps {
  car: CarType;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 p-2">
          <Badge className="bg-automotive-blue">
            {car.rating} / 5
          </Badge>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {car.brand} {car.name}
            </h3>
            <p className="text-automotive-blue font-bold text-lg">
              {formatIndianRupees(car.price)}
            </p>
          </div>
          <Badge variant="outline" className="text-automotive-gray border-automotive-gray">
            {car.bodyType}
          </Badge>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{car.fuelType}</Badge>
          <Badge variant="secondary">{car.transmission}</Badge>
        </div>
        <p className="mt-3 text-sm text-gray-500 line-clamp-3">
          {car.description}
        </p>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
          <div className="mt-1 flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <Badge variant="outline" key={index} className="text-xs">
                {feature}
              </Badge>
            ))}
            {car.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{car.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
