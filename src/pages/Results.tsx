import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { MetricsPanel } from "@/components/viewer/MetricsPanel";
import {
  Layers,
  Eye,
  Download,
  Maximize2,
  Map as MapIcon,
  Split,
} from "lucide-react";

const Results = () => {
  const [opacity, setOpacity] = useState([75]);
  const [viewMode, setViewMode] = useState<"single" | "split" | "swipe">("single");

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Results Viewer
          </h1>
          <p className="text-muted-foreground">
            JOB-2024-001 • Landsat-8 Urban Heat Island
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hover:scale-105 transition-smooth group">
            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
            Export
          </Button>
          <Button variant="default" className="hover:scale-105 transition-smooth group">
            <Maximize2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-smooth" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          {/* Map Viewer */}
          <Card className="shadow-medium hover:shadow-strong transition-smooth">
            <CardContent className="p-0">
              <div className="h-[600px] relative bg-gradient-data rounded-lg overflow-hidden group">
                {/* Map placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center animate-fade-in">
                    <MapIcon className="h-24 w-24 text-primary/30 mx-auto mb-4 group-hover:scale-110 group-hover:text-primary/50 transition-smooth" />
                    <p className="text-muted-foreground">
                      Interactive map viewer with thermal overlay
                    </p>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Button
                    size="sm"
                    variant={viewMode === "single" ? "default" : "outline"}
                    onClick={() => setViewMode("single")}
                    className="hover:scale-110 transition-smooth"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "split" ? "default" : "outline"}
                    onClick={() => setViewMode("split")}
                    className="hover:scale-110 transition-smooth"
                  >
                    <Split className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={viewMode === "swipe" ? "default" : "outline"}
                    onClick={() => setViewMode("swipe")}
                    className="hover:scale-110 transition-smooth"
                  >
                    <Layers className="h-4 w-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-medium">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-32 bg-gradient-thermal rounded"></div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                      <span>260K</span>
                      <span>280K</span>
                      <span>300K</span>
                      <span>320K</span>
                    </div>
                  </div>
                </div>

                {/* Coordinates */}
                <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-medium">
                  <p className="text-xs font-mono text-muted-foreground">
                    34.0522°N, 118.2437°W
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layer Controls */}
          <Card className="shadow-soft hover:shadow-medium transition-smooth">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Layer Controls</h3>
                <Badge variant="outline">3 layers active</Badge>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Super-Resolution Thermal
                    </label>
                    <Badge variant="success">Visible</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">
                      Opacity
                    </span>
                    <Slider
                      value={opacity}
                      onValueChange={setOpacity}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-xs text-muted-foreground w-12 text-right">
                      {opacity[0]}%
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <MetricsPanel />
        </div>
      </div>
    </div>
  );
};

export default Results;
