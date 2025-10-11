import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Play, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <Card className="shadow-soft hover:shadow-medium transition-smooth">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="gradient" 
            className="h-24 flex-col gap-2 hover:scale-105 transition-smooth group"
            onClick={() => navigate("/datasets")}
          >
            <Upload className="h-6 w-6 group-hover:scale-110 transition-smooth" />
            <span>Upload Dataset</span>
          </Button>
          <Button 
            variant="default" 
            className="h-24 flex-col gap-2 hover:scale-105 transition-smooth group"
            onClick={() => navigate("/new-job")}
          >
            <Play className="h-6 w-6 group-hover:scale-110 transition-smooth" />
            <span>New Job</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-2 hover:scale-105 transition-smooth group"
            onClick={() => navigate("/results")}
          >
            <Eye className="h-6 w-6 group-hover:scale-110 transition-smooth" />
            <span>View Results</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-24 flex-col gap-2 hover:scale-105 transition-smooth group"
            onClick={() => navigate("/reports")}
          >
            <FileText className="h-6 w-6 group-hover:scale-110 transition-smooth" />
            <span>Generate Report</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
