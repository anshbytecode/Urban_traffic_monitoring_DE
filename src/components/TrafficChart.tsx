import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { time: "00:00", vehicles: 120 },
  { time: "04:00", vehicles: 80 },
  { time: "08:00", vehicles: 340 },
  { time: "12:00", vehicles: 280 },
  { time: "16:00", vehicles: 420 },
  { time: "20:00", vehicles: 300 },
  { time: "23:59", vehicles: 180 },
];

const TrafficChart = () => {
  return (
    <Card className="p-6 bg-[image:var(--gradient-card)] border-border">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Traffic Flow (24h)</h3>
          <p className="text-sm text-muted-foreground">Real-time vehicle count across all zones</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVehicles" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="vehicles" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fill="url(#colorVehicles)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TrafficChart;
