 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Mail, MapPin, Phone } from "lucide-react";
 
 const Contact = () => {
   return (
     <section id="contact" className="py-24">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12">
           <div>
             <span className="inline-block border-2 border-border px-4 py-2 mb-6 text-sm font-mono uppercase tracking-wider shadow-xs">
               Contact Us
             </span>
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Let's Build Something Together
             </h2>
             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
               Ready to transform your business with Microsoft technologies? 
               We're here to help you find the right solution for your challenges.
             </p>
 
             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 border-2 border-border flex items-center justify-center flex-shrink-0">
                   <Mail className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="font-bold">Email</p>
                    <p className="text-muted-foreground">nilay@cloudgarage.in</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 border-2 border-border flex items-center justify-center flex-shrink-0">
                   <Phone className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="font-bold">Phone</p>
                    <p className="text-muted-foreground">+91 9971144155</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 border-2 border-border flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="font-bold">Location</p>
                   <p className="text-muted-foreground">Microsoft Partner Network</p>
                 </div>
               </div>
             </div>
           </div>
 
           <div className="border-2 border-border p-8 shadow-md">
             <form className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-4">
                 <div>
                   <label className="text-sm font-bold uppercase tracking-wide mb-2 block">
                     Name
                   </label>
                   <Input
                     placeholder="Your name"
                     className="border-2 shadow-xs focus:shadow-sm transition-shadow"
                   />
                 </div>
                 <div>
                   <label className="text-sm font-bold uppercase tracking-wide mb-2 block">
                     Email
                   </label>
                   <Input
                     type="email"
                     placeholder="your@email.com"
                     className="border-2 shadow-xs focus:shadow-sm transition-shadow"
                   />
                 </div>
               </div>
               <div>
                 <label className="text-sm font-bold uppercase tracking-wide mb-2 block">
                   Company
                 </label>
                 <Input
                   placeholder="Your company"
                   className="border-2 shadow-xs focus:shadow-sm transition-shadow"
                 />
               </div>
               <div>
                 <label className="text-sm font-bold uppercase tracking-wide mb-2 block">
                   Message
                 </label>
                 <Textarea
                   placeholder="Tell us about your challenges..."
                   rows={5}
                   className="border-2 shadow-xs focus:shadow-sm transition-shadow resize-none"
                 />
               </div>
               <Button
                 type="submit"
                 className="w-full shadow-md hover:shadow-lg hover:translate-x-1 hover:-translate-y-1 transition-all"
               >
                 Send Message
               </Button>
             </form>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;