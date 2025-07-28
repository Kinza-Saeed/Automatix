
import HeroSection from "../components/HeroSection";
import WhyUs from "../components/WhyUs";
import OurMission from "../components/OurMission";
import WorksSection from "../components/WorksSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TeamSection from "../components/TeamSection";
import FaqSection from "../components/FaqSection";
import BottomSection from "../components/BottomSection";

const Home = () => {
  return (
    <>
    <div className="bg-black text-white">
      <HeroSection />
      <WhyUs />
      <OurMission />
      <WorksSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <TeamSection />
      <FaqSection />
      <BottomSection />
      </div>
    </>
  );
};

export default Home;
