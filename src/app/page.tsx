import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import ProcessFlow from "@/components/ProcessFlow";
import SocialIcons from "@/components/SocialIcons";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <ServiceCards />
      <ProcessFlow />
      <TestimonialSlider />
      <SocialIcons subText={"Please reach out via our social channels below."} />
    </main>
  );
}