"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Download, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  downloadUrl: string;
}

const CaseStudyDownloadForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock case studies data - in a real app this would come from your data source
  const caseStudies: CaseStudy[] = [
    {
      id: "rhythm",
      title: "Rhythm - ADHD Companion App",
      description: "Complete case study on building an ADHD-focused habit tracking app during Delta Residency Challenge",
      tags: ["AI Product", "HealthTech", "User Research"],
      downloadUrl: "/case-studies/rhythm-case-study.pdf"
    },
    {
      id: "lentrust",
      title: "LenTrust - Peer Lending MVP",
      description: "Design and development of a trust-score based peer-to-peer lending platform",
      tags: ["Fintech", "MVP", "Trust Algorithm"],
      downloadUrl: "/case-studies/lentrust-case-study.pdf"
    },
    {
      id: "attendance",
      title: "5-Second Attendance App",
      description: "Rapid prototype for instantaneous classroom attendance using device proximity",
      tags: ["SaaS", "Education", "Prototype"],
      downloadUrl: "/case-studies/attendance-case-study.pdf"
    }
  ];

  const handleSubmit = async (e: React.FormEvent, caseStudyId: string) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real implementation, you would send the email to your backend
    // to store it and send the download link
    console.log(`Email submitted for case study ${caseStudyId}:`, email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setSelectedCaseStudy(caseStudyId);
    setIsLoading(false);
  };

  if (isSubmitted && selectedCaseStudy) {
    const caseStudy = caseStudies.find(cs => cs.id === selectedCaseStudy);
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-soft">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
          <CardDescription>
            Check your email at <span className="font-semibold">{email}</span> for the download link.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6">
            Your download for <span className="font-semibold">{caseStudy?.title}</span> is on its way.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false);
              setSelectedCaseStudy(null);
            }}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Download Another Case Study
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Download Case Studies</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Get detailed insights into my design and development process for each project.
          Enter your email to receive immediate access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <Card key={caseStudy.id} className="hover-lift transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
              <CardDescription>{caseStudy.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <form onSubmit={(e) => handleSubmit(e, caseStudy.id)} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Download className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download Case Study
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyDownloadForm;