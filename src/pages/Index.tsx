import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import WhyRowdySection from "@/components/WhyRowdySection"; // Hidden for now — can restore later
import FounderSection from "@/components/FounderSection";

import MenuSection from "@/components/MenuSection";
import InteriorSection from "@/components/InteriorSection";
import ProfitSection from "@/components/ProfitSection";
import InvestmentSection from "@/components/InvestmentSection";
import ROISection from "@/components/ROISection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import LocationsSection from "@/components/LocationsSection";
import SplashScreen from "@/components/SplashScreen";


const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FounderSection />
        <MenuSection />
        <InteriorSection />
        <InvestmentSection />
        <ProfitSection />
        <ROISection />
        <BookingSection />
        <ContactSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
