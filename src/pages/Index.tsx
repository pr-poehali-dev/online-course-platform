
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import TrainerDevice from "@/components/sections/TrainerDevice";
import MethodComparison from "@/components/sections/MethodComparison";
import ComparativeMethods from "@/components/sections/ComparativeMethods";
import MethodExplanation from "@/components/sections/MethodExplanation";
import Science from "@/components/sections/Science";
import TargetAudience from "@/components/sections/TargetAudience";
import WhyItWorks from "@/components/sections/WhyItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Pricing from "@/components/sections/Pricing";

const Index = () => {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <TrainerDevice />
        <ComparativeMethods />
        <MethodComparison />
        <MethodExplanation />
        <Science />
        <TargetAudience />
        <WhyItWorks />
        <Testimonials />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Index;
