import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Bio from '@/components/site/Bio';
import Music from '@/components/site/Music';
import Achievements from '@/components/site/Achievements';
import Gallery from '@/components/site/Gallery';
import Blog from '@/components/site/Blog';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Music />
        <Achievements />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
