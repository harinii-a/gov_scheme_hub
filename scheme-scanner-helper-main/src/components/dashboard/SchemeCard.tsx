
import { BookmarkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface SchemeProps {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  category: string;
  image?: string;
}

export function SchemeCard({ 
  title, 
  description, 
  priority, 
  category, 
  image
}: SchemeProps) {
  const priorityColor = {
    high: "bg-priority-high/10 text-priority-high",
    medium: "bg-priority-medium/10 text-priority-medium",
    low: "bg-priority-low/10 text-priority-low",
  };

  const priorityLabel = {
    high: "High Priority",
    medium: "Medium Priority",
    low: "Low Priority"
  };

  return (
    <div className="scheme-card group animate-fade-in">
      <div className="flex justify-between mb-3">
        <div>
          <span className={cn("priority-badge", priorityColor[priority])}>
            {priorityLabel[priority]}
          </span>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <BookmarkIcon className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex items-start gap-4">
        {image && (
          <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded-md bg-muted">
            <img 
              src={image} 
              alt={title} 
              className="h-full w-full object-cover" 
            />
          </div>
        )}
        <div className="space-y-1 flex-1">
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
              Category: {category}
            </span>
            <Button variant="link" className="p-0 h-auto text-sm font-medium">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
