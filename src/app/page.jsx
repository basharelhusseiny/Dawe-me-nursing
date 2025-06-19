import HeroSection from "@/components/home-sections/HeroSection";
import AboutSection from "@/components/home-sections/AboutSection";
import GoalsSection from "@/components/home-sections/GoalsSection";
import ValuesSection from "@/components/home-sections/ValuesSection";
import ServicesSection from "@/components/home-sections/ServicesSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GoalsSection />
      <ServicesSection />
      <ValuesSection />
    </main>
  );
};

export default Home;
