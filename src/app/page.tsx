import BonusSection from "@/components/BonusSection";
import CtaInterSection from "@/components/CtaInterSection";
import FaqSection from "@/components/Faqsection";
import HeroSection from "@/components/HeroSection";
import Howitworkssection from "@/components/Howitworkssection ";
import SocialProofSection from "@/components/SocialProofSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <Howitworkssection  />
      <CtaInterSection />
      <SocialProofSection />
      <BonusSection />
      <FaqSection />
      <Footer />

    </>
  );
}
