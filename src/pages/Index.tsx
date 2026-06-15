import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Bio from '@/components/site/Bio';
import Quote from '@/components/site/Quote';
import Music from '@/components/site/Music';
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
        <Quote />
        <Music />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;