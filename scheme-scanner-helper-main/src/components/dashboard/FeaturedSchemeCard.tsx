
import { Button } from "@/components/ui/button";

interface FeaturedSchemeCardProps {
  title: string;
  description: string;
  image: string;
}

export function FeaturedSchemeCard({ title, description, image }: FeaturedSchemeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border shadow-sm bg-card transition-all duration-300 hover:shadow-md hover-scale">
      <div className="flex items-center gap-4 p-4">
        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button variant="outline" size="sm" className="mt-2">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
