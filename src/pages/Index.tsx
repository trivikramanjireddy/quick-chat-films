import Header from '@/components/Header';
import CinematicHero from '@/components/CinematicHero';
import Audience from '@/components/Audience';
import Clients from '@/components/Clients';
import WhyChoose from '@/components/WhyChoose';
import ProjectForm from '@/components/ProjectForm';
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
        <Audience />
        <ProjectForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;