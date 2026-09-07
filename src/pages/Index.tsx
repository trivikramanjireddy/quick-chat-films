import Header from '@/components/Header';
import CinematicHero from '@/components/CinematicHero';
import Audience from '@/components/Audience';
import Services from '@/components/Services';
import ProcessTimeline from '@/components/ProcessTimeline';
import Equipment from '@/components/Equipment';
import PricingStory from '@/components/PricingStory';
import Clients from '@/components/Clients';
import About from '@/components/About';
import WhyChoose from '@/components/WhyChoose';
import Reviews from '@/components/Reviews';
import OnSets from '@/components/OnSets';
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
        <Audience />
        <Services />
        <ProcessTimeline />
        <Clients />
        <About />
        <Reviews />
        <OnSets />
        <ProjectForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
