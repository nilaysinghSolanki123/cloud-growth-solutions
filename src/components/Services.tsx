 import { Database, Bot, Cloud, BarChart3, Shield, Cpu } from "lucide-react";
 
 const Services = () => {
   const services = [
     {
       icon: Database,
       title: "Microsoft Fabric",
       description:
         "End-to-end analytics platform for real-time data collection, processing, and visualization across your organization.",
     },
     {
       icon: Bot,
       title: "Azure AI Solutions",
       description:
         "Personalized AI chatbots and intelligent automation that deliver measurable ROI for your business operations.",
     },
     {
       icon: Cloud,
       title: "Cloud Migration",
       description:
         "Seamless transition to Azure cloud with minimal disruption and optimized compute consumption.",
     },
     {
       icon: BarChart3,
       title: "Real-time Analytics",
       description:
         "Live dashboards and BI solutions for monitoring, maintenance, and data-driven decision making.",
     },
     {
       icon: Shield,
       title: "Azure AD & Security",
       description:
         "Enterprise-grade identity management and security implementations for your products.",
     },
     {
       icon: Cpu,
       title: "IoT Integration",
       description:
         "Connect dispersed sites with real-time data streaming using Azure IoT and Event Grid.",
     },
   ];
 
   return (
     <section id="services" className="py-24">
       <div className="container mx-auto px-4">
         <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="inline-block border-2 border-border px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-xs">
             What We Do
           </span>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Microsoft Technologies, Tried & Tested
           </h2>
           <p className="text-lg text-muted-foreground">
             We follow Microsoft best practices and pioneer in Data and AI solutions 
             that extend beyond chatbots into measurable business impact.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((service, index) => (
             <div
               key={index}
               className="group border-2 border-border p-8 hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm hover:shadow-md"
             >
               <service.icon className="w-8 h-8 mb-6" />
               <h3 className="text-xl font-bold mb-4">{service.title}</h3>
               <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                 {service.description}
               </p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default Services;