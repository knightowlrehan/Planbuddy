import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import MissionSection from './components/sections/MissionSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import CoreFeatures from './components/sections/CoreFeatures';
import HowItWorks from './components/sections/HowItWorks';
import ReasonsToLove from './components/sections/ReasonsToLove';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <WhyChooseUs/>
      <CoreFeatures/>
      <HowItWorks/>
      <ReasonsToLove/>
      <Testimonials/>
    </Layout>
  );
}

export default App
