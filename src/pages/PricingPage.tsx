import Header from '@/components/Header';
import PricingCinematic from '@/components/pricing/PricingCinematic';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PricingCinematic />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
