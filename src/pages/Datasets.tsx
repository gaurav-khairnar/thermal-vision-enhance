import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatasetCard } from "@/components/datasets/DatasetCard";
import { Upload, Search, Filter } from "lucide-react";
import { fetchAPI } from "@/lib/api"; // <-- import your fetcher

// Define the Dataset shape for TypeScript
interface Dataset {
  id: string;
  name: string;
  location: string;
  date: string;
  bands: string[];
  resolution: string;
  size: string;
  validated: boolean;
  thumbnail?: string;
}

const Datasets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data on mount
  useEffect(() => {
    fetchAPI("/datasets")
      .then(data => setDatasets(data.items)) // adjust for your API shape
      .catch(e => setError(e.message));
  }, []);

  // Filter datasets based on search query
  const filtered = datasets.filter((ds) =>
    [ds.name, ds.location, ds.date].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="p-8 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Datasets</h1>
          <p className="text-muted-foreground">
            Manage your thermal and optical imagery datasets
          </p>
        </div>
        <Button variant="gradient" className="hover:scale-105 transition-smooth group">
          <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
          Upload Dataset
        </Button>
      </div>
      <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search datasets by name, location, or date..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 transition-smooth focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <Button variant="outline" className="hover:scale-105 transition-smooth">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
        {error && <div>Error loading datasets: {error}</div>}
        {filtered.map((dataset, idx) => (
          <div key={dataset.id} className="animate-fade-in" style={{ animationDelay: `${300 + idx * 100}ms` }}>
            <DatasetCard {...dataset} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datasets;
