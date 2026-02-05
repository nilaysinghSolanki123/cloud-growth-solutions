import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <ClientLogos />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
