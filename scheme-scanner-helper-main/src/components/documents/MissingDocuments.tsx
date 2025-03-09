
import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MissingDocumentProps {
  title: string;
  description: string;
  isRequired: boolean;
}

export function MissingDocuments() {
  const missingDocuments: MissingDocumentProps[] = [
    {
      title: "Income Certificate",
      description: "Needed for income-based schemes",
      isRequired: true
    },
    {
      title: "Residence Proof",
      description: "For address verification",
      isRequired: true
    },
    {
      title: "Age Certificate",
      description: "For age verification",
      isRequired: false
    }
  ];

  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Missing Documents</CardTitle>
          <Badge variant="outline" className="bg-background text-foreground">
            {missingDocuments.filter(doc => doc.isRequired).length} Required
          </Badge>
        </div>
        <CardDescription>
          Upload these documents to unlock more schemes
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-1">
        <ul className="space-y-3">
          {missingDocuments.map((doc, index) => (
            <li 
              key={index} 
              className="flex items-center justify-between rounded-md border p-3 text-sm"
            >
              <div className="space-y-1">
                <p className="font-medium">{doc.title}</p>
                <p className="text-xs text-muted-foreground">{doc.description}</p>
              </div>
              {doc.isRequired && (
                <Badge variant="destructive" className="text-[10px]">Required</Badge>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-3">
        <Button className="w-full flex items-center gap-2">
          <FileUp className="h-4 w-4" />
          <span>Upload Missing Documents</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
