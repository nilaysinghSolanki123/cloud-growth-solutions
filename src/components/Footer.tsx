import { Linkedin, Twitter, Mail } from "lucide-react";
import cloudgarageLogo from "@/assets/cloudgarage-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src={cloudgarageLogo} alt="CloudGarage" className="h-10" />
            </div>
            <p className="text-background/70 mb-6 max-w-md leading-relaxed">
              Your trusted Microsoft partner for Data and AI solutions. 
              We help businesses achieve measurable ROI through technology-powered solutions.
            </p>
            
            {/* Microsoft Partner Badge */}
            <div className="inline-flex items-center gap-2 border border-background/20 px-4 py-2 rounded-lg bg-background/5">
              <div className="w-6 h-6 bg-[#00A4EF] rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-background/90">Microsoft Partner</p>
                <p className="text-background/50 text-xs">10+ Years Experience</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Use Cases', id: 'use-cases' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Connect</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 border border-background/20 flex items-center justify-center rounded-lg hover:bg-primary hover:border-primary transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-background/70 group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/20 flex items-center justify-center rounded-lg hover:bg-primary hover:border-primary transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-background/70 group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:ceo@cloudgarage.in"
                className="w-10 h-10 border border-background/20 flex items-center justify-center rounded-lg hover:bg-primary hover:border-primary transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-background/70 group-hover:text-primary-foreground" />
              </a>
            </div>
            
            <div className="text-sm text-background/50">
              <p>ceo@cloudgarage.in</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} CloudGarage. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
