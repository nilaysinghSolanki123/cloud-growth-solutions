 import { Button } from "@/components/ui/button";
 import { ArrowRight } from "lucide-react";
 import heroBg from "@/assets/hero-bg.jpg";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <img
           src={heroBg}
           alt="Technology background"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-background/90" />
       </div>
 
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl">
           <div className="inline-block border-2 border-border px-4 py-2 mb-6 shadow-xs">
             <span className="text-sm font-mono uppercase tracking-wider">
               Microsoft Partner • 10+ Years
             </span>
           </div>
 
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
             Technology Powered Solutions for{" "}
             <span className="relative inline-block">
               Your Business
               <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10" />
             </span>
           </h1>
 
           <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
             Providing your business with technology powered solutions specific to your challenges 
             however big or small they might be. We pioneer in Data and AI Solutions.
           </p>
 
           <div className="flex flex-col sm:flex-row gap-4">
             <Button
               size="lg"
               className="shadow-md hover:shadow-lg hover:translate-x-1 hover:-translate-y-1 transition-all group"
             >
               Start Your Journey
               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button
               variant="outline"
               size="lg"
               className="shadow-sm hover:shadow-md transition-shadow"
             >
               View Our Work
             </Button>
           </div>
 
           <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t-2 border-border">
             <div>
               <p className="text-3xl md:text-4xl font-bold">100+</p>
               <p className="text-sm text-muted-foreground uppercase tracking-wide">
                 Customers
               </p>
             </div>
             <div>
               <p className="text-3xl md:text-4xl font-bold">10+</p>
               <p className="text-sm text-muted-foreground uppercase tracking-wide">
                 Years Experience
               </p>
             </div>
             <div>
               <p className="text-3xl md:text-4xl font-bold">50+</p>
               <p className="text-sm text-muted-foreground uppercase tracking-wide">
                 AI Solutions
               </p>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;