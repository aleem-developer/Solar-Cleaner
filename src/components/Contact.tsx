import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    systemSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm interested in Solar Cleaner.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASystem Size: ${formData.systemSize}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/923001234567?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600">
            Ready to reclaim your solar efficiency? Contact us today for a customized solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition"
                    placeholder="Muhammad Aleem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition"
                    placeholder="aleem@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Solar System Size
                  </label>
                  <select
                    name="systemSize"
                    value={formData.systemSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select system size</option>
                    <option value="5-10kW">5-10 kW (Residential)</option>
                    <option value="10-20kW">10-20 kW (Large Home)</option>
                    <option value="20-50kW">20-50 kW (Commercial)</option>
                    <option value="50-100kW">50-100 kW (Industrial)</option>
                    <option value="100kW+">100+ kW (Solar Farm)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FDB813] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your solar cleaning needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FDB813] text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FDB813]/90 transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#FDB813]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gray-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Location</h4>
                    <p className="text-blue-100">Lahore, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gray-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-100">+92 310 4909026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gray-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">aleem.developer26@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-gray-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-blue-100">Available 24/7 for instant quotes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Solar Cleaner?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Lahore-based support</strong> — Local expertise you can trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Fast installation</strong> — Up and running in days, not weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Proven ROI</strong> — 1-2 year payback period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Warranty included</strong> — Peace of mind with every purchase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
