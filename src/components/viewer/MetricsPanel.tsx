import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  description: string;
  status: "good" | "warning" | "excellent";
}

const MetricCard = ({ label, value, unit, description, status }: MetricCardProps) => {
  const statusColor = {
    excellent: "text-success",
    good: "text-accent",
    warning: "text-warning",
  };

  return (
    <div className="p-4 rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        {status === "excellent" && <CheckCircle2 className="h-4 w-4 text-success" />}
        {status === "warning" && <AlertTriangle className="h-4 w-4 text-warning" />}
      </div>
      <div className={`text-3xl font-bold ${statusColor[status]} mb-1`}>
        {value}
        <span className="text-lg ml-1">{unit}</span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export const MetricsPanel = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Quality Metrics</span>
          <Badge variant="success">Validated</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <MetricCard
          label="PSNR"
          value={32.4}
          unit="dB"
          description="Higher is better (image fidelity)"
          status="excellent"
        />
        <MetricCard
          label="SSIM"
          value={0.91}
          unit=""
          description="Higher is better (structural similarity)"
          status="excellent"
        />
        <MetricCard
          label="RMSE"
          value={1.2}
          unit="K"
          description="Lower is better (thermal accuracy)"
          status="good"
        />
        
        <div className="pt-4 border-t border-border space-y-3">
          <h4 className="text-sm font-semibold">Physics Validation</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Alignment Quality</span>
            <Badge variant="success">Pass</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Artifact Detection</span>
            <Badge variant="success">Pass</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Thermal Consistency</span>
            <Badge variant="success">Pass</Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-success" />
            <span>+15% improvement over baseline</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
