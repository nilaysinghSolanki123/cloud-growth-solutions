import { useState } from "react";
import { Sun, GraduationCap, ShoppingCart, Smartphone, FileText, Shield, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface UseCase {
  icon: typeof Sun;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  details: string[];
}

const UseCases = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);
  const { toast } = useToast();

  const cases: UseCase[] = [
    {
      icon: Sun,
      industry: "Renewable Energy",
      title: "Solar Plant Performance Monitoring",
      description:
        "Real-time data analytics from dispersed solar sites using Microsoft Fabric and Azure IoT for monitoring, maintenance, and historical archival.",
      tags: ["Microsoft Fabric", "Azure IoT", "Real-time Analytics"],
      details: [
        "Real-time SCADA data analytics via mobile app",
        "Performance monitoring and maintenance dashboards",
        "Azure OpenAI chatbot for document exploration (PDF/Text)",
        "Coverage across Operations, Procurement, Legal, HR, Supply Chain, Finance",
      ],
    },
    {
      icon: GraduationCap,
      industry: "Education",
      title: "AI Knowledge Box for Universities",
      description:
        "AI-driven solution for student support services, question paper automation, and administrative task streamlining using Azure OpenAI.",
      tags: ["Azure OpenAI", "Automation", "Chatbot"],
      details: [
        "AI-based Knowledge Box for universities",
        "Student support chatbot for enquiries",
        "Question paper automation",
        "Tender document summarization",
      ],
    },
    {
      icon: ShoppingCart,
      industry: "FMCG / Retail / BFSI",
      title: "Sales Force Automation Enhancement",
      description:
        "Performance and scalability improvements for SFA applications through migration to SaaS-based Microsoft Fabric.",
      tags: ["Microsoft Fabric", "SaaS", "Performance"],
      details: [
        "Sales Force Automation (SFA) performance enhancement",
        "Scalability solutions for growing customer bases",
        "Cross-industry implementation expertise",
        "Real-time sales analytics and reporting",
      ],
    },
    {
      icon: Smartphone,
      industry: "Cross-Industry",
      title: "Real-time Mobile Business Intelligence",
      description:
        "Mobile app BI solution with Azure Event Grid and Fabric for real-time insights and decision-making in the field.",
      tags: ["Azure Event Grid", "Mobile BI", "Streaming Analytics"],
      details: [
        "Real-time Business Intelligence on mobile",
        "Azure Event Grid + Fabric for streaming data analytics",
        "Field decision-making capabilities",
        "Cross-platform mobile compatibility",
      ],
    },
    {
      icon: FileText,
      industry: "Enterprise",
      title: "Document Exploration Chatbot",
      description:
        "OpenAI-based chatbot for PDF and text document exploration, streamlining data gathering across departments.",
      tags: ["Azure OpenAI", "Document AI", "Chatbot"],
      details: [
        "Intelligent document exploration and search",
        "Multi-format support (PDF, Text, Word)",
        "Department-wide knowledge accessibility",
        "Natural language query interface",
      ],
    },
    {
      icon: Shield,
      industry: "Manufacturing",
      title: "Azure AD B2C Implementation",
      description:
        "Enterprise identity management implementation for revenue-generating products with secure authentication.",
      tags: ["Azure AD B2C", "Identity", "Security"],
      details: [
        "Enterprise identity management implementation",
        "Secure authentication for revenue-generating products",
        "Scalable identity solutions",
        "Compliance and security best practices",
      ],
    },
  ];

  const handleCardClick = (caseItem: UseCase) => {
    // Track the click event
    const trackingData = {
      industry: caseItem.industry,
      title: caseItem.title,
      timestamp: new Date().toISOString(),
      sessionId: `session_${Date.now()}`,
    };
    
    console.log("Use case interest tracked:", trackingData);
    
    // Show toast notification
    toast({
      title: "Interest Registered",
      description: `Thank you for your interest in ${caseItem.industry} solutions. We'll be in touch soon!`,
    });
    
    // Open the details dialog
    setSelectedCase(caseItem);
  };

  const handleContactForCase = () => {
    if (selectedCase) {
      // Track conversion intent
      console.log("Contact request for:", selectedCase.industry);
      
      // Scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setSelectedCase(null);
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-accent/5 rounded-full blur-3xl translate-x-1/4" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 border-2 border-primary/30 bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-md rounded-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Solutions, <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore how we've helped businesses across industries leverage Microsoft 
            technologies for tangible results. Click any card to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(caseItem)}
              className={`text-left group bg-card border-2 border-border/50 flex flex-col shadow-md rounded-lg hover-lift cursor-pointer transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              aria-label={`Learn more about ${caseItem.title}`}
            >
              <div className="p-6 border-b-2 border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors">
                    <caseItem.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
                    {caseItem.industry}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{caseItem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {caseItem.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 border border-primary/20 bg-primary/5 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-4 mb-4">
              {selectedCase && (
                <div className="w-14 h-14 border-2 border-primary/30 flex items-center justify-center rounded-lg bg-primary/5">
                  <selectedCase.icon className="w-7 h-7 text-primary" />
                </div>
              )}
              <div>
                <p className="text-sm font-mono uppercase tracking-wide text-primary mb-1">
                  {selectedCase?.industry}
                </p>
                <DialogTitle className="text-2xl">{selectedCase?.title}</DialogTitle>
              </div>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {selectedCase?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <h4 className="font-semibold text-lg">Key Capabilities</h4>
            <ul className="space-y-3">
              {selectedCase?.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {selectedCase?.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm font-mono px-3 py-1.5 border border-primary/20 bg-primary/5 text-primary rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 mt-6 pt-4 border-t border-border">
            <Button onClick={handleContactForCase} className="flex-1 btn-ripple">
              Discuss This Solution
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" onClick={() => setSelectedCase(null)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UseCases;
