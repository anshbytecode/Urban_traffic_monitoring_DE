import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  status?: "success" | "warning" | "error";
}

const MetricCard = ({ title, value, change, icon: Icon, trend = "neutral", status }: MetricCardProps) => {
  const statusColors = {
    success: "text-[hsl(var(--success))]",
    warning: "text-[hsl(var(--warning))]",
    error: "text-[hsl(var(--destructive))]",
  };

  const trendColors = {
    up: "text-[hsl(var(--success))]",
    down: "text-[hsl(var(--destructive))]",
    neutral: "text-muted-foreground",
  };

  return (
    <Card className="p-6 bg-[image:var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--glow-primary)]">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className={cn("text-3xl font-bold", status && statusColors[status])}>
            {value}
          </p>
          {change && (
            <p className={cn("text-sm font-medium", trendColors[trend])}>
              {change}
            </p>
          )}
        </div>
        <div className={cn(
          "p-3 rounded-xl bg-primary/10",
          status && `bg-[hsl(var(--${status}))]/10`
        )}>
          <Icon className={cn(
            "w-6 h-6",
            status ? statusColors[status] : "text-primary"
          )} />
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;
