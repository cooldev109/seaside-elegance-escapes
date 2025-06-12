
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Apartments from '@/components/Apartments';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Apartments />
        <Amenities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
