 const Footer = () => {
   return (
     <footer className="border-t-2 border-border py-12">
       <div className="container mx-auto px-4">
         <div className="grid md:grid-cols-4 gap-8 mb-12">
           <div className="md:col-span-2">
             <a href="#" className="text-2xl font-bold tracking-tight mb-4 inline-block">
               Cloud<span className="text-muted-foreground">Garage</span>
             </a>
             <p className="text-muted-foreground max-w-md leading-relaxed">
               Microsoft Partner for 10+ years. Pioneering in Data and AI Solutions 
               powered by Microsoft Fabric and Azure AI.
             </p>
           </div>
           <div>
             <h4 className="font-bold uppercase tracking-wide mb-4">Quick Links</h4>
             <ul className="space-y-2">
               <li>
                 <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                   About Us
                 </a>
               </li>
               <li>
                 <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                   Services
                 </a>
               </li>
               <li>
                 <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                   Use Cases
                 </a>
               </li>
               <li>
                 <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                   Contact
                 </a>
               </li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold uppercase tracking-wide mb-4">Technologies</h4>
             <ul className="space-y-2">
               <li className="text-muted-foreground">Microsoft Fabric</li>
               <li className="text-muted-foreground">Azure AI</li>
               <li className="text-muted-foreground">Azure OpenAI</li>
               <li className="text-muted-foreground">Azure IoT</li>
             </ul>
           </div>
         </div>
         <div className="border-t-2 border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground">
             © 2026 CloudGarage. All rights reserved.
           </p>
           <p className="text-sm text-muted-foreground">
             Microsoft Partner Network
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;