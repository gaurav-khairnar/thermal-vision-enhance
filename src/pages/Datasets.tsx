import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatasetCard } from "@/components/datasets/DatasetCard";
import { Upload, Search, Filter } from "lucide-react";

const mockDatasets = [
  {
    id: "DS-001",
    name: "Landsat-8 Urban Heat Island",
    location: "Los Angeles, CA",
    date: "2024-01-10",
    bands: ["TIR Band 10", "TIR Band 11", "RGB"],
    resolution: "30m",
    size: "2.4 GB",
    validated: true,
  },
  {
    id: "DS-002",
    name: "Wildfire Risk Assessment",
    location: "Northern California",
    date: "2024-01-12",
    bands: ["TIR Band 10", "NIR", "SWIR"],
    resolution: "30m",
    size: "3.1 GB",
    validated: true,
  },
  {
    id: "DS-003",
    name: "Agricultural Field Analysis",
    location: "Central Valley, CA",
    date: "2024-01-14",
    bands: ["TIR Band 10", "RGB", "NIR"],
    resolution: "10m",
    size: "1.8 GB",
    validated: false,
  },
];

const Datasets = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Datasets</h1>
          <p className="text-muted-foreground">
            Manage your thermal and optical imagery datasets
          </p>
        </div>
        <Button variant="gradient">
          <Upload className="mr-2 h-5 w-5" />
          Upload Dataset
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search datasets by name, location, or date..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDatasets.map((dataset) => (
          <DatasetCard key={dataset.id} {...dataset} />
        ))}
      </div>
    </div>
  );
};

export default Datasets;
