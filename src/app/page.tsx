import { HeroSection } from "@/components/sections/HomeSections";
import ClientPage from "@/components/wrappers/ClientPage";
import { ServicesSection } from "@/components/sections/serviceSection";
import { AboutSection } from "@/components/sections/about";
import { ChooseUsSection } from "@/components/sections/chooseUs";

export default function Home() {
  return (
    <ClientPage>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ChooseUsSection />
    </ClientPage>
  );
}
