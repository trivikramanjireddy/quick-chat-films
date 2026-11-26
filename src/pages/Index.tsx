import Header from '@/components/Header';
import CinematicHero from '@/components/CinematicHero';
import Audience from '@/components/Audience';
import Clients from '@/components/Clients';
import WhyChoose from '@/components/WhyChoose';
import Contact from '@/components/Contact';
import Founders from '@/components/Founders';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CinematicHero />
        <Clients />
        <WhyChoose />
        <Audience />
        <Contact />
        <Founders />
      </main>
      <Footer />
    </div>
  );
};

export default Index;