 import { Sun, GraduationCap, ShoppingCart, Smartphone, MessageSquare, Key } from "lucide-react";
 
 const UseCases = () => {
   const cases = [
     {
       icon: Sun,
       industry: "Renewable Energy",
       title: "Solar Plant Performance Monitoring",
       description:
         "Real-time data analytics from dispersed solar sites using Microsoft Fabric and Azure IoT for monitoring, maintenance, and historical archival.",
       tags: ["Microsoft Fabric", "Azure IoT", "Real-time Analytics"],
     },
     {
       icon: GraduationCap,
       industry: "Education",
       title: "AI Knowledge Box for Universities",
       description:
         "AI-driven solution for student support services, question paper automation, and administrative task streamlining using Azure OpenAI.",
       tags: ["Azure OpenAI", "Automation", "Chatbot"],
     },
     {
       icon: ShoppingCart,
       industry: "FMCG / Retail / BFSI",
       title: "Sales Force Automation Enhancement",
       description:
         "Performance and scalability improvements for SFA applications through migration to SaaS-based Microsoft Fabric.",
       tags: ["Microsoft Fabric", "SaaS", "Performance"],
     },
     {
       icon: Smartphone,
       industry: "Renewable Energy",
       title: "Real-time SCADA Mobile Analytics",
       description:
         "Mobile app BI solution with Azure Event Grid and Fabric for real-time insights and decision-making in the field.",
       tags: ["Azure Event Grid", "Mobile BI", "SCADA"],
     },
     {
       icon: MessageSquare,
       industry: "Renewable Energy",
       title: "Document Exploration Chatbot",
       description:
         "OpenAI-based chatbot for PDF and text document exploration, streamlining data gathering across departments.",
       tags: ["Azure OpenAI", "Document AI", "Chatbot"],
     },
     {
       icon: Key,
       industry: "Manufacturing",
       title: "Azure AD B2C Implementation",
       description:
         "Enterprise identity management implementation for revenue-generating products with secure authentication.",
       tags: ["Azure AD B2C", "Identity", "Security"],
     },
   ];
 
   return (
     <section id="use-cases" className="py-24 bg-secondary">
       <div className="container mx-auto px-4">
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block border-2 border-border bg-background px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-xs">
             Use Cases
           </span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Real Solutions, Real Impact
           </h2>
           <p className="text-lg text-muted-foreground">
             Explore how we've helped businesses across industries leverage Microsoft 
             technologies for tangible results.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cases.map((caseItem, index) => (
             <div
               key={index}
               className="bg-background border-2 border-border flex flex-col shadow-sm hover:shadow-md hover:translate-x-1 hover:-translate-y-1 transition-all"
             >
               <div className="p-6 border-b-2 border-border flex items-center gap-4">
                 <div className="w-10 h-10 border-2 border-border flex items-center justify-center">
                   <caseItem.icon className="w-5 h-5" />
                 </div>
                 <span className="text-sm font-mono uppercase tracking-wide text-muted-foreground">
                   {caseItem.industry}
                 </span>
               </div>
               <div className="p-6 flex-1 flex flex-col">
                 <h3 className="text-lg font-bold mb-3">{caseItem.title}</h3>
                 <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                   {caseItem.description}
                 </p>
                 <div className="flex flex-wrap gap-2 mt-4">
                   {caseItem.tags.map((tag, tagIndex) => (
                     <span
                       key={tagIndex}
                       className="text-xs font-mono px-2 py-1 border border-border bg-secondary"
                     >
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default UseCases;