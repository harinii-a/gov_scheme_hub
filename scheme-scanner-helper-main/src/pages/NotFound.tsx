
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
      <div className="relative h-40 w-40 mb-8">
        <div className="absolute inset-0 rounded-full bg-priority-high/10 animate-pulse"></div>
        <div className="absolute inset-5 rounded-full border-2 border-primary flex items-center justify-center">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-2">Page Not Found</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      
      <Link to="/">
        <Button className="flex items-center gap-2 animate-fade-in">
          <ArrowLeft className="h-4 w-4" />
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
