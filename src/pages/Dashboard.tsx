import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentJobs } from "@/components/dashboard/RecentJobs";
import { Database, Activity, CheckCircle2, Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Monitor your super-resolution jobs and datasets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Datasets"
          value={24}
          change="+3 this week"
          icon={Database}
          trend="up"
        />
        <StatsCard
          title="Active Jobs"
          value={3}
          change="2 processing"
          icon={Activity}
          trend="neutral"
        />
        <StatsCard
          title="Completed Jobs"
          value={156}
          change="+12 this month"
          icon={CheckCircle2}
          trend="up"
        />
        <StatsCard
          title="Avg. Processing Time"
          value="18m"
          change="-5% faster"
          icon={Clock}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <QuickActions />
        <div className="lg:col-span-2">
          <RecentJobs />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
