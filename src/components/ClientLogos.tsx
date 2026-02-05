import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [offset, setOffset] = useState(0);

  // Technology/Partner logos as text badges (since we can't use actual logos)
  const partners = [
    "Microsoft Fabric",
    "Azure AI",
    "Azure IoT",
    "Power BI",
    "Azure OpenAI",
    "Azure AD B2C",
    "Event Grid",
    "Data Factory",
  ];

  // Duplicate for seamless loop
  const allPartners = [...partners, ...partners];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % (partners.length * 150));
    }, 30);
    return () => clearInterval(interval);
  }, [partners.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <p className={`text-center text-sm font-mono uppercase tracking-wider text-muted-foreground mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Powered by Microsoft Technologies
        </p>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div 
            className="flex gap-8 items-center"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 border-2 border-primary/20 bg-card rounded-lg hover:border-primary/40 transition-colors"
              >
                <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
