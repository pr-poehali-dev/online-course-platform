
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import WhyItWorks from "@/components/sections/WhyItWorks";
import Science from "@/components/sections/Science";
import TargetAudience from "@/components/sections/TargetAudience";
import Benefits from "@/components/sections/Benefits";
import MethodExplanation from "@/components/sections/MethodExplanation";
import TrainerDevice from "@/components/sections/TrainerDevice";
import MethodComparison from "@/components/sections/MethodComparison";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <WhyItWorks />
        <TrainerDevice />
        <MethodComparison />
        <Science />
        <Benefits />
        <TargetAudience />
        <MethodExplanation />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
