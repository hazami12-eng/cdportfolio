import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TechStacks from "../components/TechStacks";
import PathToGrowth from "../components/PathToGrowth";
import PathToShowcase from "../components/PathToShowcase";
import GetInTouch from "../components/GetInTouch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <TechStacks />
        <PathToGrowth />
        <PathToShowcase />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Index;
