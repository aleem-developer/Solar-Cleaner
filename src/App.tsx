import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import ROICalculator from './components/ROICalculator';
import MarketSegments from './components/MarketSegments';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStickyClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.title = 'Solar Cleaner | Revolutionizing Solar Maintenance in Pakistan';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolution />
      <Features />
      <ROICalculator />
      <MarketSegments />
      <About />
      <Contact />
      <Footer />

      {showSticky && (
        <button
          onClick={handleStickyClick}
          className="fixed bottom-6 right-6 bg-[#FDB813] text-gray-900 px-6 py-4 rounded-full font-semibold shadow-2xl hover:bg-[#FDB813]/90 transition transform hover:scale-110 flex items-center gap-2 z-50 animate-bounce"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <MessageCircle size={24} />
          <span className="hidden sm:inline">Book Now</span>
        </button>
      )}
    </div>
  );
}

export default App;
