import { Car, Gauge, AlertCircle, MapPin, Activity } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import TrafficZone from "@/components/TrafficZone";
import TrafficChart from "@/components/TrafficChart";
import AlertsPanel from "@/components/AlertsPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Traffic Monitor</h1>
                <p className="text-sm text-muted-foreground">Real-time urban traffic analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[hsl(var(--success))] rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-medium">Live</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Vehicles"
            value="2,847"
            change="+12% from yesterday"
            icon={Car}
            trend="up"
          />
          <MetricCard
            title="Average Speed"
            value="42 km/h"
            change="+5 km/h"
            icon={Gauge}
            trend="up"
            status="success"
          />
          <MetricCard
            title="Active Incidents"
            value="3"
            change="-2 from last hour"
            icon={AlertCircle}
            trend="down"
            status="warning"
          />
          <MetricCard
            title="Monitored Zones"
            value="12"
            icon={MapPin}
            trend="neutral"
          />
        </div>

        {/* Traffic Chart */}
        <div className="mb-8">
          <TrafficChart />
        </div>

        {/* Traffic Zones Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Traffic Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TrafficZone
              name="Downtown Junction"
              location="Main St & 5th Ave"
              status="congested"
              vehicles={342}
              avgSpeed={18}
              trend="up"
            />
            <TrafficZone
              name="Highway 101 North"
              location="Exit 23-25"
              status="moderate"
              vehicles={587}
              avgSpeed={58}
              trend="stable"
            />
            <TrafficZone
              name="Central Business District"
              location="Market District"
              status="smooth"
              vehicles={156}
              avgSpeed={45}
              trend="down"
            />
            <TrafficZone
              name="Riverside Boulevard"
              location="Bridge Section"
              status="moderate"
              vehicles={234}
              avgSpeed={35}
              trend="up"
            />
            <TrafficZone
              name="Airport Access Road"
              location="Terminal 1-3"
              status="smooth"
              vehicles={198}
              avgSpeed={62}
              trend="stable"
            />
            <TrafficZone
              name="Industrial Park"
              location="West Sector"
              status="smooth"
              vehicles={89}
              avgSpeed={48}
              trend="down"
            />
          </div>
        </div>

        {/* Alerts Panel */}
        <div>
          <AlertsPanel />
        </div>
      </main>
    </div>
  );
};

export default Index;
