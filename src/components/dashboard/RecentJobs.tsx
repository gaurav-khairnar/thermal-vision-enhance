import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MoreVertical } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const jobs = [
  {
    id: "JOB-2024-001",
    dataset: "Landsat-8 Urban Heat Island",
    status: "completed",
    progress: 100,
    startTime: "2024-01-15 14:30",
    metrics: { psnr: 32.4, ssim: 0.91, rmse: 1.2 },
  },
  {
    id: "JOB-2024-002",
    dataset: "Wildfire Risk Assessment - CA",
    status: "processing",
    progress: 67,
    startTime: "2024-01-15 15:45",
    eta: "~12 min",
  },
  {
    id: "JOB-2024-003",
    dataset: "Agricultural Field Analysis",
    status: "queued",
    progress: 0,
    startTime: "2024-01-15 16:10",
    eta: "~30 min",
  },
];

const statusVariant = {
  completed: "success" as const,
  processing: "processing" as const,
  queued: "secondary" as const,
  failed: "destructive" as const,
};

export const RecentJobs = () => {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Recent Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-smooth">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono font-medium">{job.id}</span>
                  <Badge variant={statusVariant[job.status]}>
                    {job.status}
                  </Badge>
                </div>
                <p className="text-sm text-foreground font-medium mb-1">{job.dataset}</p>
                <p className="text-xs text-muted-foreground">Started: {job.startTime}</p>
                {job.status === "processing" && job.eta && (
                  <p className="text-xs text-muted-foreground">ETA: {job.eta}</p>
                )}
                {job.status === "completed" && job.metrics && (
                  <div className="flex gap-3 mt-2">
                    <span className="text-xs text-muted-foreground">PSNR: {job.metrics.psnr} dB</span>
                    <span className="text-xs text-muted-foreground">SSIM: {job.metrics.ssim}</span>
                    <span className="text-xs text-muted-foreground">RMSE: {job.metrics.rmse} K</span>
                  </div>
                )}
                {job.progress > 0 && job.progress < 100 && (
                  <Progress value={job.progress} className="h-2 mt-2" />
                )}
              </div>
              <div className="flex items-center gap-2 ml-4">
                {job.status === "completed" && (
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                )}
                <Button size="sm" variant="ghost">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
