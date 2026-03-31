import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// import WhyRowdySection from "@/components/WhyRowdySection"; // Hidden for now — can restore later
import FounderSection from "@/components/FounderSection";
import PresenceSection from "@/components/PresenceSection";
import MenuSection from "@/components/MenuSection";
import ProfitSection from "@/components/ProfitSection";
import InvestmentSection from "@/components/InvestmentSection";
import ROISection from "@/components/ROISection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import SplashScreen from "@/components/SplashScreen";
import BrushDivider from "@/components/BrushDivider";

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
        <BrushDivider variant="flame" />
        <PresenceSection />
        <BrushDivider variant="glow-line" />
        <MenuSection />
        <BrushDivider variant="brush" />
        <ProfitSection />
        <BrushDivider variant="ember" />
        <InvestmentSection />
        <BrushDivider variant="flame" />
        <ROISection />
        <BrushDivider variant="glow-line" />
        <BookingSection />
        <BrushDivider variant="brush" />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
