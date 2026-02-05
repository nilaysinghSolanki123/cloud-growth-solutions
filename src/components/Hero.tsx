import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const count = useCountUp({ end, duration: 2000, enabled: isVisible });

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="text-3xl md:text-4xl font-bold gradient-text">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">
        {label}
      </p>
    </div>
  );
};

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary to-accent/10 animate-gradient" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse-subtle"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div ref={heroRef} className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Microsoft Partner Badge */}
          <div className="inline-flex items-center gap-2 border-2 border-primary/30 bg-background/80 backdrop-blur-sm px-4 py-2 mb-6 shadow-md hover-glow transition-all rounded-lg">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-subtle" />
            <span className="text-sm font-mono uppercase tracking-wider text-primary">
              Microsoft Partner • 10+ Years
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Technology Powered Solutions for{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Your Business</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10 rounded" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Providing your business with technology powered solutions specific to your challenges 
            however big or small they might be. We pioneer in Data and AI Solutions with measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="shadow-lg hover-lift btn-ripple group bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('use-cases')}
              className="shadow-sm hover:shadow-md transition-all border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              Explore Use Cases
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t-2 border-border/50">
            <StatCounter end={100} suffix="+" label="Customers" />
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={50} suffix="+" label="AI Solutions" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse-subtle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
