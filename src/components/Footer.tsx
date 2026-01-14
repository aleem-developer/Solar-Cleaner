import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FDB813] to-[#0056b3] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <span className="text-xl font-bold">Solar Cleaner</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionizing solar maintenance in Pakistan with affordable, reliable, and user-friendly solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDB813] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-[#FDB813] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('product')} className="text-gray-400 hover:text-[#FDB813] transition">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculator')} className="text-gray-400 hover:text-[#FDB813] transition">
                  ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#FDB813] transition">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDB813] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Cleaning</li>
              <li>Commercial Solutions</li>
              <li>Industrial Systems</li>
              <li>Solar Farm Management</li>
              <li>Installation & Support</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#FDB813] mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FDB813] hover:text-gray-900 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FDB813] hover:text-gray-900 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FDB813] hover:text-gray-900 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-[#FDB813] hover:text-gray-900 transition">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Based in Lahore, Pakistan<br />
              Serving solar owners nationwide
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2024 Solar Cleaner. All rights reserved. Founded by Muhammad Aleem Naveed.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FDB813] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#FDB813] transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
