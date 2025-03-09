
import { PageLayout } from "@/components/layout/PageLayout";
import { SchemeCard } from "@/components/dashboard/SchemeCard";
import { FeaturedSchemeCard } from "@/components/dashboard/FeaturedSchemeCard";
import { DocumentStatusCard } from "@/components/dashboard/DocumentStatusCard";
import { MissingDocuments } from "@/components/documents/MissingDocuments";
import { SchemeFilters } from "@/components/filters/SchemeFilters";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  // Mock data for featured schemes
  const featuredSchemes = [
    {
      id: "scheme-1",
      title: "Rural Housing Scheme",
      description: "Financial assistance for construction of houses for rural families below poverty line.",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-2",
      title: "Education Scholarship",
      description: "Merit-based scholarships for higher education students from low-income families.",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
  ];
  
  // Mock data for document status
  const documentStatus = [
    {
      id: "doc-1",
      title: "Income Certificate",
      status: "expiring" as const,
      expiryDays: 30,
    },
    {
      id: "doc-2",
      title: "Address Proof",
      status: "active" as const,
    },
  ];
  
  // Mock data for recommended schemes
  const recommendedSchemes = [
    {
      id: "scheme-3",
      title: "Rural Housing Scheme",
      description: "Financial assistance for rural house construction. Supports low-income families with grants up to ₹1.5 lakh.",
      priority: "high" as const,
      category: "Housing",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-4",
      title: "Education Grant",
      description: "Scholarship for higher education. Covers tuition fees and provides monthly stipend for eligible students.",
      priority: "medium" as const,
      category: "Education",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-5",
      title: "Senior Citizen Pension",
      description: "Monthly pension for citizens above 60 years. Additional healthcare benefits included.",
      priority: "high" as const,
      category: "Social Welfare",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-6",
      title: "Skill Development Program",
      description: "Free vocational training in various sectors with job placement assistance after completion.",
      priority: "medium" as const,
      category: "Employment",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-7",
      title: "Agricultural Subsidy",
      description: "Financial support for farmers on seeds, fertilizers, and equipment. Priority for small and marginal farmers.",
      priority: "low" as const,
      category: "Agriculture",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
    {
      id: "scheme-8",
      title: "Women Entrepreneurship Fund",
      description: "Low-interest loans and mentorship for women starting small businesses or expanding existing ones.",
      priority: "medium" as const,
      category: "Entrepreneurship",
      image: "/lovable-uploads/304f18ca-3457-4d52-9101-afe8b054ac7d.png",
    },
  ];

  return (
    <PageLayout>
      <div className="space-y-8 animate-fade-in">
        {/* Featured Schemes */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSchemes.map((scheme) => (
              <FeaturedSchemeCard
                key={scheme.id}
                title={scheme.title}
                description={scheme.description}
                image={scheme.image}
              />
            ))}
          </div>
        </section>
        
        {/* Document Status Overview */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Document Status Overview</h2>
            <Button variant="outline" size="sm">View All Documents</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 text-center flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-priority-high">12</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </Card>
            
            <Card className="p-4 text-center flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-priority-medium">3</div>
              <div className="text-sm text-muted-foreground">Expiring Soon</div>
            </Card>
            
            <Card className="p-4 text-center flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-muted-foreground">2</div>
              <div className="text-sm text-muted-foreground">Expired</div>
            </Card>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {documentStatus.map((doc) => (
              <DocumentStatusCard
                key={doc.id}
                title={doc.title}
                status={doc.status}
                expiryDays={doc.expiryDays}
              />
            ))}
          </div>
        </section>
        
        {/* Recommended Schemes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Recommended Schemes</h2>
              <p className="text-sm text-muted-foreground">
                Based on your profile and documents
              </p>
            </div>
            <SchemeFilters />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                id={scheme.id}
                title={scheme.title}
                description={scheme.description}
                priority={scheme.priority}
                category={scheme.category}
                image={scheme.image}
              />
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;
