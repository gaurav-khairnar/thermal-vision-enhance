import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Play, ChevronRight, Settings2 } from "lucide-react";

const NewJob = () => {
  const [step, setStep] = useState(1);
  const [scaleFactor, setScaleFactor] = useState([2]);

  return (
    <div className="p-8 space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Create New Job
        </h1>
        <p className="text-muted-foreground">
          Configure your super-resolution processing job
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[
          { num: 1, label: "Select Inputs" },
          { num: 2, label: "Region & Scale" },
          { num: 3, label: "Parameters" },
          { num: 4, label: "Review" },
        ].map((s, idx) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s.num
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s.num}
              </div>
              <span
                className={`ml-3 font-medium ${
                  step >= s.num ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < 3 && (
              <ChevronRight className="mx-4 h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Select Input Datasets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label>Thermal Infrared Band</Label>
              <RadioGroup defaultValue="ds-001">
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                  <RadioGroupItem value="ds-001" id="ds-001" />
                  <label htmlFor="ds-001" className="flex-1 cursor-pointer">
                    <p className="font-medium">Landsat-8 Band 10 (TIR)</p>
                    <p className="text-sm text-muted-foreground">
                      Resolution: 100m • Date: 2024-01-10
                    </p>
                  </label>
                  <Badge variant="success">Validated</Badge>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label>Optical Reference Bands</Label>
              <RadioGroup defaultValue="ds-001-opt">
                <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                  <RadioGroupItem value="ds-001-opt" id="ds-001-opt" />
                  <label htmlFor="ds-001-opt" className="flex-1 cursor-pointer">
                    <p className="font-medium">Landsat-8 RGB + NIR</p>
                    <p className="text-sm text-muted-foreground">
                      Resolution: 30m • Bands: 2, 3, 4, 5
                    </p>
                  </label>
                  <Badge variant="success">Validated</Badge>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Region of Interest & Scale Factor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="h-64 bg-gradient-data rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Interactive map for ROI selection
              </p>
            </div>

            <div className="space-y-3">
              <Label>Scale Factor</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={scaleFactor}
                  onValueChange={setScaleFactor}
                  min={2}
                  max={4}
                  step={1}
                  className="flex-1"
                />
                <Badge variant="outline" className="w-12 justify-center">
                  {scaleFactor[0]}x
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Output resolution: {30 / scaleFactor[0]}m
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Processing Parameters</span>
              <Badge variant="outline">
                <Settings2 className="h-3 w-3 mr-1" />
                Advanced Mode
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Patch Size</Label>
                <Input type="number" defaultValue={256} />
              </div>
              <div className="space-y-2">
                <Label>Overlap</Label>
                <Input type="number" defaultValue={32} />
              </div>
              <div className="space-y-2">
                <Label>Denoise Strength</Label>
                <Input type="number" defaultValue={0.3} step={0.1} />
              </div>
              <div className="space-y-2">
                <Label>Physics Prior Weight</Label>
                <Input type="number" defaultValue={0.5} step={0.1} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Review & Submit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Input Dataset</span>
                <span className="font-medium">Landsat-8 Urban Heat Island</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Scale Factor</span>
                <span className="font-medium">{scaleFactor[0]}x</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Output Resolution</span>
                <span className="font-medium">{30 / scaleFactor[0]}m</span>
              </div>
              <div className="flex justify-between p-3 bg-muted rounded-lg">
                <span className="text-muted-foreground">Estimated Time</span>
                <span className="font-medium">~18 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          Previous
        </Button>
        {step < 4 ? (
          <Button onClick={() => setStep(step + 1)}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button variant="gradient">
            <Play className="mr-2 h-5 w-5" />
            Start Processing
          </Button>
        )}
      </div>
    </div>
  );
};

export default NewJob;
