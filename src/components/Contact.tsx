import { Mail, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div ref={sectionRef} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="inline-flex items-center gap-2 border-2 border-primary/30 bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-md rounded-lg">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Partner</span> Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with Microsoft technologies? 
              We're here to help you achieve measurable ROI with sustainable solutions.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:ceo@cloudgarage.in" 
                className="flex items-center gap-4 group p-4 border-2 border-border/50 rounded-lg bg-card hover-lift transition-all"
              >
                <div className="w-12 h-12 border-2 border-primary/30 flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-bold group-hover:text-primary transition-colors">Email Us</p>
                  <p className="text-muted-foreground">ceo@cloudgarage.in</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form className="bg-card border-2 border-border/50 p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    className="border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="border-2 resize-none focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full btn-ripple" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
