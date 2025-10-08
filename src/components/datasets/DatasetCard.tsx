import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Layers, Eye } from "lucide-react";

interface DatasetCardProps {
  id: string;
  name: string;
  location: string;
  date: string;
  bands: string[];
  resolution: string;
  size: string;
  validated: boolean;
  thumbnail?: string;
}

export const DatasetCard = ({
  id,
  name,
  location,
  date,
  bands,
  resolution,
  size,
  validated,
  thumbnail,
}: DatasetCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth overflow-hidden">
      <div className="h-48 bg-gradient-data relative">
        {thumbnail ? (
          <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Layers className="h-16 w-16 text-primary/30" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={validated ? "success" : "warning"}>
            {validated ? "Validated" : "Pending"}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2">{name}</h3>
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <span>{bands.join(", ")}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>Resolution: {resolution}</span>
          <span>Size: {size}</span>
        </div>
        <Button variant="outline" className="w-full" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
