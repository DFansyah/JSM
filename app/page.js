import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUs />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}