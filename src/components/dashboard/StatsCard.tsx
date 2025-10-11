import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
}

export const StatsCard = ({ title, value, change, icon: Icon, trend = "neutral" }: StatsCardProps) => {
  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth hover-scale group cursor-pointer">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
            {change && (
              <p className={`text-sm mt-2 ${
                trend === "up" ? "text-success" : 
                trend === "down" ? "text-destructive" : 
                "text-muted-foreground"
              }`}>
                {change}
              </p>
            )}
          </div>
          <div className="rounded-full bg-primary/10 group-hover:bg-primary/20 p-3 transition-smooth">
            <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
