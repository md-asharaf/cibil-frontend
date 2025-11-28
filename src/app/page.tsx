import { AuthCTA } from "@/components/auth-cta";
import CustomerStats from "@/components/customer-stats";
import Header from "@/components/header";
import HeroSection from "@/components/hero-why";
import WhyHowSection from "@/components/why-how-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <HeroSection />
      <WhyHowSection />
      <CustomerStats />
      <AuthCTA />
      <Footer />
    </div>
  );
}
