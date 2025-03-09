
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  userName?: string;
}

export function Header({ userName = "John" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search schemes by name, category, or eligibility..."
            className="w-full bg-background pl-8 focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          className="relative" 
          size="icon"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            1
          </span>
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Welcome, {userName}</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="text-xs bg-primary text-primary-foreground">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
