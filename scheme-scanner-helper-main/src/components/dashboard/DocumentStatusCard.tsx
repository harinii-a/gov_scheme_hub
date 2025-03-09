
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DocumentStatusCardProps {
  title: string;
  status: "active" | "expiring" | "expired";
  expiryDays?: number;
  onAction?: () => void;
}

export function DocumentStatusCard({ 
  title, 
  status, 
  expiryDays, 
  onAction 
}: DocumentStatusCardProps) {
  const statusStyles = {
    active: "text-priority-high",
    expiring: "text-priority-medium",
    expired: "text-priority-low"
  };
  
  const getStatusText = () => {
    switch(status) {
      case "active":
        return "Active";
      case "expiring":
        return `Expiring in ${expiryDays} days`;
      case "expired":
        return "Expired";
      default:
        return "";
    }
  };
  
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="h-6 w-6 text-muted-foreground"
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          <p className={cn("text-xs", statusStyles[status])}>
            {getStatusText()}
          </p>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm"
        onClick={onAction}
      >
        {status === "expired" ? "Renew" : "View"}
      </Button>
    </div>
  );
}
