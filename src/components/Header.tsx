 import { useState } from "react";
 import { Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
   const navLinks = [
     { href: "#about", label: "About" },
     { href: "#services", label: "Services" },
     { href: "#use-cases", label: "Use Cases" },
     { href: "#contact", label: "Contact" },
   ];
 
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-border">
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           <a href="#" className="text-2xl font-bold tracking-tight">
             Cloud<span className="text-muted-foreground">Garage</span>
           </a>
 
           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors"
               >
                 {link.label}
               </a>
             ))}
             <Button variant="default" className="shadow-sm hover:shadow-md transition-shadow">
               Get Started
             </Button>
           </nav>
 
           {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
 
         {/* Mobile Navigation */}
         {isMenuOpen && (
           <nav className="md:hidden py-4 border-t border-border">
             <div className="flex flex-col gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.href}
                   href={link.href}
                   className="text-sm font-medium uppercase tracking-wide hover:text-muted-foreground transition-colors"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {link.label}
                 </a>
               ))}
               <Button variant="default" className="w-full shadow-sm">
                 Get Started
               </Button>
             </div>
           </nav>
         )}
       </div>
     </header>
   );
 };
 
 export default Header;