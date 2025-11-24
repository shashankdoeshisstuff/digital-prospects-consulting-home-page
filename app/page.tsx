import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HiringProcess from '@/components/HiringProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import TechnologyStack from '@/components/TechnologyStack';
import Footer from '@/components/Footer';
import TopCompaniesTrust from '@/components/TopCompaniesTrust';
import HireGuideSection from '@/components/HireGuideSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <TechnologyStack />
      <WhyChooseUs />
      <TopCompaniesTrust/>
      <HiringProcess />
      <HireGuideSection/>
      <Testimonials />
    </main>
  );
}