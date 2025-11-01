import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Activity, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: number;
  type: "incident" | "maintenance" | "resolved";
  message: string;
  location: string;
  time: string;
}

const alerts: Alert[] = [
  { id: 1, type: "incident", message: "Heavy congestion detected", location: "Downtown Junction", time: "2 min ago" },
  { id: 2, type: "maintenance", message: "Road maintenance in progress", location: "Highway 101", time: "15 min ago" },
  { id: 3, type: "resolved", message: "Traffic flow normalized", location: "Main Street", time: "32 min ago" },
];

const AlertsPanel = () => {
  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "incident":
        return <AlertTriangle className="w-5 h-5 text-[hsl(var(--destructive))]" />;
      case "maintenance":
        return <Activity className="w-5 h-5 text-[hsl(var(--warning))]" />;
      case "resolved":
        return <CheckCircle className="w-5 h-5 text-[hsl(var(--success))]" />;
    }
  };

  const getAlertBadgeClass = (type: Alert["type"]) => {
    switch (type) {
      case "incident":
        return "bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))]";
      case "maintenance":
        return "bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]";
      case "resolved":
        return "bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]";
    }
  };

  return (
    <Card className="p-6 bg-[image:var(--gradient-card)] border-border">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Alerts</h3>
          <p className="text-sm text-muted-foreground">Live traffic incidents and updates</p>
        </div>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-foreground">{alert.message}</p>
                    <Badge className={cn("border-0 text-xs", getAlertBadgeClass(alert.type))}>
                      {alert.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.location}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AlertsPanel;
