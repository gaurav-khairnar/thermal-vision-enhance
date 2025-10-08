import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Reports = () => {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
        <p className="text-muted-foreground">
          Generate and download processing reports
        </p>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              No reports available yet
            </p>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Generate New Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
