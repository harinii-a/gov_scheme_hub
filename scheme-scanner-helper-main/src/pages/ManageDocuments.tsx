
import { PageLayout } from "@/components/layout/PageLayout";
import { DocumentUploader } from "@/components/documents/DocumentUploader";
import { MissingDocuments } from "@/components/documents/MissingDocuments";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ManageDocuments = () => {
  return (
    <PageLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold">Manage Documents</h1>
          <p className="text-muted-foreground mt-1">
            Upload and manage your documents to discover eligible government schemes
          </p>
        </div>
        
        <Tabs defaultValue="upload">
          <TabsList>
            <TabsTrigger value="upload">Upload Documents</TabsTrigger>
            <TabsTrigger value="missing">Missing Documents</TabsTrigger>
            <TabsTrigger value="extract">Document Extraction</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Documents</CardTitle>
                <CardDescription>
                  Upload your personal and identification documents to check scheme eligibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentUploader />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="missing" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Missing Documents List</CardTitle>
                  <CardDescription>
                    Upload these documents to increase your eligibility for more schemes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MissingDocuments />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Document Benefits</CardTitle>
                  <CardDescription>
                    Schemes you could unlock by uploading missing documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-priority-high/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Farmer's Assistance Program</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Requires income certificate and land ownership documents.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-priority-high/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M22 9a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2H3a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v2h1a4 4 0 0 1 4 4Z"/><path d="M10 2v8"/><path d="M7 5h6"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Higher Education Scholarship</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Requires income certificate and educational transcripts.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-4 p-4 rounded-lg border">
                      <div className="flex-shrink-0 h-12 w-12 rounded-md bg-priority-medium/10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-medium"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Affordable Housing Scheme</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Requires residence proof and income certificate.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="extract" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Information Extraction</CardTitle>
                <CardDescription>
                  Our system automatically extracts information from your documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border p-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M7.5 14h9"/></svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">How It Works</h3>
                  <p className="text-muted-foreground mb-4">
                    When you upload documents, our AI system extracts important information like:
                  </p>
                  <ul className="space-y-2 text-left max-w-md mx-auto">
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>Personal details like name, age, and gender</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>Income and financial information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>Address and location details</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-priority-high"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>Education and qualification details</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    This information is used to automatically match you with eligible government schemes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default ManageDocuments;
