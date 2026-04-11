import Hero from '../components/sections/home/Hero';
import AboutSection from '../components/sections/home/AboutSection';
import SystemsSection from '../components/sections/home/SystemsSection';
import InstitutionsSection from '../components/sections/home/InstitutionsSection';
import ModelSection from '../components/sections/home/ModelSection';
import ExcellenceSection from '../components/sections/home/ExcellenceSection';
import ArenaSection from '../components/sections/home/ArenaSection';
import BeyondSection from '../components/sections/home/BeyondSection';
import ImpactSection from '../components/sections/home/ImpactSection';
import CTASection from '../components/sections/home/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SystemsSection />
      <InstitutionsSection />
      <ModelSection />
      <ExcellenceSection />
      <ArenaSection />
      <BeyondSection />
      <ImpactSection />
      <CTASection />
    </main>
  );
}
