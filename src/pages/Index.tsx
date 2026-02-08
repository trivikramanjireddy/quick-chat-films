import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import ProjectForm from '@/components/ProjectForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <About />
        <Reviews />
        <ProjectForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
