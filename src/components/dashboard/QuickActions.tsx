import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Play, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="gradient" 
            className="h-24 flex-col gap-2"
            onClick={() => navigate("/datasets")}
          >
            <Upload className="h-6 w-6" />
            <span>Upload Dataset</span>
          </Button>
          <Button 
            variant="default" 
            className="h-24 flex-col gap-2"
            onClick={() => navigate("/new-job")}
          >
            <Play className="h-6 w-6" />
            <span>New Job</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-2"
            onClick={() => navigate("/results")}
          >
            <Eye className="h-6 w-6" />
            <span>View Results</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-2"
            onClick={() => navigate("/reports")}
          >
            <FileText className="h-6 w-6" />
            <span>Generate Report</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
