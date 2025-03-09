
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";

export function SchemeFilters() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    ageRange: [18, 65] as [number, number],
    incomeRange: [0, 100] as [number, number],
    priority: [] as string[]
  });
  
  const categories = [
    "Housing",
    "Education",
    "Healthcare",
    "Agriculture",
    "Employment",
    "Social Welfare",
    "Entrepreneurship"
  ];
  
  const priorities = [
    { id: "high", label: "High Priority" },
    { id: "medium", label: "Medium Priority" },
    { id: "low", label: "Low Priority" }
  ];
  
  const handleCategoryChange = (category: string) => {
    setFilters(prev => {
      if (prev.categories.includes(category)) {
        return {
          ...prev,
          categories: prev.categories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          categories: [...prev.categories, category]
        };
      }
    });
  };
  
  const handlePriorityChange = (priority: string) => {
    setFilters(prev => {
      if (prev.priority.includes(priority)) {
        return {
          ...prev,
          priority: prev.priority.filter(p => p !== priority)
        };
      } else {
        return {
          ...prev,
          priority: [...prev.priority, priority]
        };
      }
    });
  };
  
  const resetFilters = () => {
    setFilters({
      categories: [],
      ageRange: [18, 65],
      incomeRange: [0, 100],
      priority: []
    });
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <span>Advanced Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Scheme Filters</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          {/* Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <label 
                    htmlFor={`category-${category}`}
                    className="text-sm"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          {/* Age Range */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Age Eligibility</h3>
              <span className="text-xs text-muted-foreground">
                {filters.ageRange[0]} - {filters.ageRange[1]} years
              </span>
            </div>
            <Slider
              min={0}
              max={100}
              step={1}
              value={filters.ageRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, ageRange: value as [number, number] }))}
              className="py-4"
            />
          </div>
          
          {/* Income Range */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Income Range</h3>
              <span className="text-xs text-muted-foreground">
                ₹{filters.incomeRange[0]}k - ₹{filters.incomeRange[1]}k
              </span>
            </div>
            <Slider
              min={0}
              max={100}
              step={5}
              value={filters.incomeRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, incomeRange: value as [number, number] }))}
              className="py-4"
            />
          </div>
          
          {/* Priority */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Priority Level</h3>
            <div className="grid grid-cols-1 gap-2">
              {priorities.map(priority => (
                <div key={priority.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`priority-${priority.id}`}
                    checked={filters.priority.includes(priority.id)}
                    onCheckedChange={() => handlePriorityChange(priority.id)}
                  />
                  <label 
                    htmlFor={`priority-${priority.id}`}
                    className="text-sm"
                  >
                    {priority.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <SheetFooter className="sm:justify-between flex-row border-t pt-4">
          <Button variant="outline" onClick={resetFilters} className="gap-1">
            <X className="h-4 w-4" />
            <span>Reset</span>
          </Button>
          <Button type="submit">Apply Filters</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
