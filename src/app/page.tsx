import AboutSection from "./sections/about-us";
import WITSummitAgenda from "./sections/agenda-section";
import CommunityBacking from "./sections/community_backing";
import HeroFooterSection from "./sections/hero-footer";
import WomenMakingItHappen from "./sections/organisers";
import Partners from "./sections/partners";
import PricingSection from "./sections/pricing";
import Speakers from "./sections/speakers-page";
import WhyAttendSection from "./sections/why-attend-section";
import WomenInTechSummitHero from "./sections/wit_hero";
import EmpowermentSection from "./sections/women_empowerment";

export default function Home() {
  return (
    <div className="min-h-screen">
      <WomenInTechSummitHero/>
      <EmpowermentSection />
      {/* <WebsiteHero /> */}
      {/* <WhyAttend /> */}
      <WhyAttendSection/>
      <AboutSection/>
      <CommunityBacking />
      <Speakers />
      <WITSummitAgenda />
      <WomenMakingItHappen />
      <Partners />
      <PricingSection />
      <HeroFooterSection/>
    </div>
  );
}
