import Header from '@/components/Header';
import CinematicHero from '@/components/CinematicHero';
import Audience from '@/components/Audience';
import PricingStory from '@/components/PricingStory';
import Clients from '@/components/Clients';
import WhyChoose from '@/components/WhyChoose';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import ProjectForm from '@/components/ProjectForm';
import BookShoot from '@/components/BookShoot';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CinematicHero />
        <Clients />
        <WhyChoose />
        <Reviews />
        <BookShoot />
        <Audience />
        <PricingStory />
        <FAQ />
        <ProjectForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
