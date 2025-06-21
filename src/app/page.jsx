import HeroSection from "@/components/home-sections/HeroSection";
import AboutSection from "@/components/home-sections/AboutSection";
import GoalsSection from "@/components/home-sections/GoalsSection";
import ValuesSection from "@/components/home-sections/ValuesSection";
import ServicesSection from "@/components/home-sections/ServicesSection";
import TestimonialsSection from "@/components/home-sections/TestimonialsSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GoalsSection />
      <ServicesSection />
      <ValuesSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
