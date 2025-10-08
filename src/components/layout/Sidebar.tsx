import { NavLink } from "react-router-dom";
import { Database, Upload, Activity, BarChart3, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Activity },
  { name: "Datasets", href: "/datasets", icon: Database },
  { name: "New Job", href: "/new-job", icon: Upload },
  { name: "Results", href: "/results", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <h1 className="text-xl font-bold text-sidebar-foreground">
          ThermalSR<span className="text-sidebar-primary">Pro</span>
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-smooth",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg bg-sidebar-accent p-3">
          <p className="text-xs font-medium text-sidebar-accent-foreground">
            Role: Remote Sensing Scientist
          </p>
          <p className="text-xs text-sidebar-accent-foreground/70 mt-1">
            Advanced controls enabled
          </p>
        </div>
      </div>
    </div>
  );
};
