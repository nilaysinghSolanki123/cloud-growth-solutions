import { Database, Bot, Cloud, BarChart3, Shield, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Database,
      title: "Microsoft Fabric",
      description:
        "End-to-end analytics platform for real-time data collection, processing, and visualization across your organization.",
    },
    {
      icon: Bot,
      title: "Azure AI Solutions",
      description:
        "Personalized AI chatbots and intelligent automation that deliver measurable ROI for your business operations.",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description:
        "Seamless transition to Azure cloud with minimal disruption and optimized compute consumption.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Live dashboards and BI solutions for monitoring, maintenance, and data-driven decision making.",
    },
    {
      icon: Shield,
      title: "Azure AD & Security",
      description:
        "Enterprise-grade identity management and security implementations for your products.",
    },
    {
      icon: Cpu,
      title: "IoT Integration",
      description:
        "Connect dispersed sites with real-time data streaming using Azure IoT and Event Grid.",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 border-2 border-primary/30 bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-md rounded-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Microsoft Technologies, <span className="gradient-text">Tried & Tested</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We follow Microsoft best practices and pioneer in Data and AI solutions 
            that extend beyond chatbots into measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group border-2 border-border/50 p-8 bg-card rounded-lg hover-lift transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 border-2 border-primary/30 flex items-center justify-center mb-6 rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
