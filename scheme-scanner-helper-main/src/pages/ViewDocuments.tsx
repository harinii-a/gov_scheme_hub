
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

const ViewDocuments = () => {
  const [currentTab, setCurrentTab] = useState("all");
  
  // Mock document data
  const documents = [
    {
      id: "doc1",
      name: "Income Certificate",
      type: "pdf",
      status: "active",
      uploadDate: "2023-05-15",
      expiryDate: "2024-05-15",
      fileSize: "1.2 MB",
    },
    {
      id: "doc2",
      name: "Address Proof",
      type: "pdf",
      status: "active",
      uploadDate: "2023-06-20",
      expiryDate: "2024-06-20",
      fileSize: "0.8 MB",
    },
    {
      id: "doc3",
      name: "Birth Certificate",
      type: "png",
      status: "active",
      uploadDate: "2022-11-10",
      expiryDate: null,
      fileSize: "1.5 MB",
    },
    {
      id: "doc4",
      name: "Previous Tax Returns",
      type: "pdf",
      status: "expiring",
      uploadDate: "2023-01-25",
      expiryDate: "2023-10-10",
      fileSize: "2.3 MB",
    },
    {
      id: "doc5",
      name: "Property Documents",
      type: "pdf",
      status: "expired",
      uploadDate: "2022-03-15",
      expiryDate: "2023-03-15",
      fileSize: "3.1 MB",
    },
  ];
  
  const filteredDocuments = currentTab === "all" 
    ? documents 
    : documents.filter(doc => doc.status === currentTab);
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return (
          <Badge className="bg-priority-high/20 text-priority-high hover:bg-priority-high/30 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Active
          </Badge>
        );
      case "expiring":
        return (
          <Badge variant="outline" className="bg-priority-medium/20 text-priority-medium hover:bg-priority-medium/30 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Expiring Soon
          </Badge>
        );
      case "expired":
        return (
          <Badge variant="outline" className="bg-priority-low/20 text-priority-low hover:bg-priority-low/30 flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Expired
          </Badge>
        );
      default:
        return null;
    }
  };
  
  return (
    <PageLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Documents</h1>
          <Button>Upload New Document</Button>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setCurrentTab}>
          <TabsList className="grid w-full grid-cols-4 md:w-auto md:inline-flex">
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
            <TabsTrigger value="expired">Expired</TabsTrigger>
          </TabsList>
          
          <TabsContent value={currentTab} className="mt-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>
                  {currentTab === "all" 
                    ? "All Documents" 
                    : currentTab === "active" 
                      ? "Active Documents" 
                      : currentTab === "expiring" 
                        ? "Expiring Documents" 
                        : "Expired Documents"
                  } ({filteredDocuments.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 py-3 px-4 text-sm font-medium text-muted-foreground border-b">
                    <div className="col-span-5">Document Name</div>
                    <div className="col-span-2 text-center">Status</div>
                    <div className="col-span-3 text-center">Upload Date</div>
                    <div className="col-span-2 text-center">Actions</div>
                  </div>
                  
                  {filteredDocuments.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                      No documents found.
                    </div>
                  ) : (
                    <div className="divide-y">
                      {filteredDocuments.map((doc) => (
                        <div key={doc.id} className="grid grid-cols-12 items-center p-4 hover:bg-muted/50 transition-colors">
                          <div className="col-span-5 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                              {doc.type === "pdf" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{doc.name}</div>
                              <div className="text-xs text-muted-foreground">{doc.fileSize} · {doc.type.toUpperCase()}</div>
                            </div>
                          </div>
                          <div className="col-span-2 text-center">
                            {getStatusBadge(doc.status)}
                          </div>
                          <div className="col-span-3 text-center text-sm">
                            <div>{new Date(doc.uploadDate).toLocaleDateString()}</div>
                            {doc.expiryDate && (
                              <div className="text-xs text-muted-foreground">
                                Expires: {new Date(doc.expiryDate).toLocaleDateString()}
                              </div>
                            )}
                          </div>
                          <div className="col-span-2 flex justify-center gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default ViewDocuments;
