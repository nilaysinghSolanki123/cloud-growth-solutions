import { Target, Eye, Handshake, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To be long-term partners who grow alongside our customers. We identify root causes, architect sustainable solutions, and implement technologies that solve problems permanently—not quick fixes.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where every business—big or small—leverages data to empower their workforce with actionable insights. Where every effort is monitored through robust systems, and business processes continuously improve.",
    },
    {
      icon: Handshake,
      title: "Our Approach",
      description:
        "We help customers maximize human cognitive abilities, reduce biases through data-driven decision-making, and educate teams on extracting maximum value from their data. Sustainability is a natural byproduct.",
    },
    {
      icon: Heart,
      title: "Our Philosophy",
      description:
        "Relationships matter. We grow when you grow. We solve your problems using Microsoft's tried-and-tested technologies so you can increase profitability—and so can we. We're in this for the long haul.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 border-2 border-primary/30 bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-md rounded-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Do What Your <span className="gradient-text">Vision</span> Tells Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We do it fast. We do it the best way… the Microsoft Way. With 10 years of experience 
            and 100+ successful implementations, we've helped businesses achieve measurable ROI 
            with minimal implementation costs and optimized compute consumption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group bg-card border-2 border-border/50 p-8 shadow-md hover-lift rounded-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center mb-6 shadow-sm rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors">
                <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
