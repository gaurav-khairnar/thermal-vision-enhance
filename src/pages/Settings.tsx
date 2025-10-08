import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Settings = () => {
  return (
    <div className="p-8 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Configure your application preferences
        </p>
      </div>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input defaultValue="Dr. Sarah Chen" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" defaultValue="s.chen@research.edu" />
          </div>
          <div className="space-y-2">
            <Label>Role</Label>
            <RadioGroup defaultValue="scientist">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scientist" id="scientist" />
                <Label htmlFor="scientist">Remote Sensing Scientist</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="planner" id="planner" />
                <Label htmlFor="planner">Urban/Wildfire Planner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analyst" id="analyst" />
                <Label htmlFor="analyst">Agricultural Analyst</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Temperature Units</Label>
            <RadioGroup defaultValue="kelvin">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="kelvin" id="kelvin" />
                <Label htmlFor="kelvin">Kelvin (K)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="celsius" id="celsius" />
                <Label htmlFor="celsius">Celsius (°C)</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button variant="default">Save Changes</Button>
      </div>
    </div>
  );
};

export default Settings;
