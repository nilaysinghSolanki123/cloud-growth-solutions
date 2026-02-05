 import { Target, Eye, Handshake } from "lucide-react";
 
 const About = () => {
   const cards = [
     {
       icon: Target,
       title: "Our Mission",
       description:
         "To support and build alongside our customers, their workforce, and make the most out of human ability. We educate along the way on how to leverage data for the greater good.",
     },
     {
       icon: Eye,
       title: "Our Vision",
       description:
         "A world where data is leveraged by every business—big or small—to enable and empower workforce insights. Where all business processes are monitored and continuously improved.",
     },
     {
       icon: Handshake,
       title: "Our Approach",
       description:
         "We are long-term partners. We help find the root of problems, provide lasting solutions, and implement technologies that fix issues permanently—not quick fixes.",
     },
   ];
 
   return (
     <section id="about" className="py-24 bg-secondary">
       <div className="container mx-auto px-4">
         <div className="max-w-3xl mb-16">
           <span className="inline-block border-2 border-border bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-xs">
             About Us
           </span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             We Do What Your Vision Tells Us
           </h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             We do it fast. We do it the best way… the Microsoft Way. For CloudGarage, 
             relationships matter. We want to help you grow, solve your business problems, 
             and help you make money, so we can make money too.
           </p>
         </div>
 
         <div className="grid md:grid-cols-3 gap-6">
           {cards.map((card, index) => (
             <div
               key={index}
               className="bg-background border-2 border-border p-8 shadow-md hover:shadow-lg hover:translate-x-1 hover:-translate-y-1 transition-all"
             >
               <div className="w-12 h-12 border-2 border-border flex items-center justify-center mb-6 shadow-xs">
                 <card.icon className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold mb-4">{card.title}</h3>
               <p className="text-muted-foreground leading-relaxed">
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