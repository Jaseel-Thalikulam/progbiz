import PortfolioSection from "@ui/portfolioSection";
import HeroSection from "@ui/heroSection";
import NavBar from "@ui/navbar";
import HowItWorks from "@ui/howItWorks";
import FounderSection from "@ui/founderSection";
import AsSeenInSection from "@ui/asSeenIn";

import "./globals.css";

import ServicesSection from "@ui/servicesSection";

import BenefitsSections from "@ui/benefitsSections";
import PricingSection from "@ui/pricingSection";
import InsightsSection from "@ui/insightsSection";
import TestimonialsSection from "@ui/testimonialsSection";
import Footer from "@ui/footer";
// import FAQ from "@ui/FAQSection";
// import Accordion from "@ui/accordion";
export default function Home() {
  return (
    <div className="w-full h-screen">

      {/* navbar */}
      <NavBar />

      {/* hero */}
      <HeroSection />

      {/* Founder/CEO Part */}
      <FounderSection />

      {/* asSeenAndLoved Section */}
      <AsSeenInSection />

      {/* how it works */}
      <HowItWorks />
      {/* Portfolio */}
      <PortfolioSection />

      {/* Benefits */}
      <BenefitsSections />

      {/* Services */}
      <ServicesSection />

      {/* Pricing */}
      <PricingSection />

      {/* Insights */}
      <InsightsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* footer */}
      <Footer />

    </div>
  );
}
