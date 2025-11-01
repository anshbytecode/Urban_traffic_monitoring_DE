import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrafficZoneProps {
  name: string;
  location: string;
  status: "smooth" | "moderate" | "congested";
  vehicles: number;
  avgSpeed: number;
  trend: "up" | "down" | "stable";
}

const TrafficZone = ({ name, location, status, vehicles, avgSpeed, trend }: TrafficZoneProps) => {
  const statusConfig = {
    smooth: {
      color: "text-[hsl(var(--success))]",
      bg: "bg-[hsl(var(--success))]/10",
      label: "Smooth",
      border: "border-[hsl(var(--success))]/30"
    },
    moderate: {
      color: "text-[hsl(var(--warning))]",
      bg: "bg-[hsl(var(--warning))]/10",
      label: "Moderate",
      border: "border-[hsl(var(--warning))]/30"
    },
    congested: {
      color: "text-[hsl(var(--destructive))]",
      bg: "bg-[hsl(var(--destructive))]/10",
      label: "Congested",
      border: "border-[hsl(var(--destructive))]/30"
    }
  };

  const config = statusConfig[status];

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <Card className={cn(
      "p-5 bg-[image:var(--gradient-card)] border-2 transition-all duration-300 hover:scale-[1.02]",
      config.border
    )}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <Badge className={cn(config.bg, config.color, "border-0 font-semibold")}>
            {config.label}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Vehicles</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold text-foreground">{vehicles}</p>
              <TrendIcon className={cn(
                "w-4 h-4",
                trend === "up" ? "text-[hsl(var(--destructive))]" : 
                trend === "down" ? "text-[hsl(var(--success))]" : 
                "text-muted-foreground"
              )} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Avg Speed</p>
            <p className="text-xl font-bold text-foreground">{avgSpeed} <span className="text-sm font-normal">km/h</span></p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TrafficZone;
