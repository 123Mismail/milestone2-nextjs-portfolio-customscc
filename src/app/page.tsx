import AboutPage from "./about/page";
import HeroSection from "./components/HeroSection";
import ContactSection from "./contact/page";
import SkillsPage from "./skills/page";

 
 

export default function Home() {
  return (
   <div>
     <HeroSection />
      <AboutPage/>
      <SkillsPage/>
      <ContactSection/>
   </div>
  );
}
