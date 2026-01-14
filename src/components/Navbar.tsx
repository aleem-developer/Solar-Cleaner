import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FDB813] to-[#0056b3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Solar Cleaner</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#0056b3] transition">Home</button>
            <button onClick={() => scrollToSection('product')} className="text-gray-700 hover:text-[#0056b3] transition">Product</button>
            <button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-[#0056b3] transition">ROI Calculator</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#0056b3] transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#0056b3] transition">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#FDB813] text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-[#FDB813]/90 transition">
              Get a Quote
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-[#0056b3]">Home</button>
            <button onClick={() => scrollToSection('product')} className="block w-full text-left text-gray-700 hover:text-[#0056b3]">Product</button>
            <button onClick={() => scrollToSection('calculator')} className="block w-full text-left text-gray-700 hover:text-[#0056b3]">ROI Calculator</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-[#0056b3]">About</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-[#0056b3]">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="w-full bg-[#FDB813] text-gray-900 px-6 py-2 rounded-lg font-semibold">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
