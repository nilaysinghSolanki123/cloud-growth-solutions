import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`min-h-screen bg-background ${showSplash ? "hidden" : ""}`}>
        <Header />
        <Hero />
        <About />
        <Services />
        <ClientLogos />
        <UseCases />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
