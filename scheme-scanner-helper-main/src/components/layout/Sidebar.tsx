
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  File, 
  FolderOpen, 
  Settings, 
  User,
  Newspaper,
  Sliders
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex h-screen w-64 flex-col border-r bg-card px-3 py-4", className)}>
      <div className="mb-8 px-3">
        <h2 className="text-2xl font-semibold text-primary">GovSchemes</h2>
      </div>
      
      <nav className="space-y-1 flex-1">
        <NavItem href="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
        <NavItem href="/personal-details" icon={<User size={20} />} label="Personal Details" />
        <NavItem href="/view-documents" icon={<File size={20} />} label="View Documents" />
        <NavItem href="/manage-documents" icon={<FolderOpen size={20} />} label="Manage Documents" />
        <NavItem href="/preferences" icon={<Sliders size={20} />} label="Manage Preferences" />
        <NavItem href="/news" icon={<Newspaper size={20} />} label="News & Events" />
      </nav>
      
      <div className="mt-auto space-y-1 pt-4 border-t">
        <NavItem href="/profile" icon={<User size={20} />} label="Profile" />
        <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" />
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        )
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
