import Hero from "@/components/home/Hero";
// import LogoLoopSection from "@/components/home/LogoLoopSection";
import ApproachSection from "@/components/home/ApproachSection";
import ResearchDomains from "@/components/home/ResearchDomains";
import OneStopFirmSection from "@/components/home/OneStopFirmSection";
import BharatSection from "@/components/home/BharatSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResearchUpdates from "@/components/home/ResearchUpdates";
import CountdownSection from "@/components/home/CountdownSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <LogoLoopSection /> */}
      <ApproachSection />
      <ResearchDomains />
      <OneStopFirmSection />
      <BharatSection />
      <TestimonialsSection />
      <ResearchUpdates />
      <CountdownSection />
    </>
  );
}
