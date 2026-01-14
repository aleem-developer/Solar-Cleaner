import { Zap, RotateCw, Settings, Battery } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'One-Button Activation',
      description: 'Simple, intuitive operation. No technical training required. Press and go.',
    },
    {
      icon: RotateCw,
      title: 'Automatic Traversal',
      description: 'Moves seamlessly across your panels. Complete cleaning without supervision.',
    },
    {
      icon: Settings,
      title: 'High-Efficiency Rotating Brushes',
      description: 'Specially designed brushes remove stubborn dust without damaging panels.',
    },
    {
      icon: Battery,
      title: 'Standard Power Integration',
      description: 'Works with your existing solar setup. No additional power source needed.',
    },
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Features, Accessible Price
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our semi-automatic cleaning system brings enterprise-grade technology to every solar owner in Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition">
                <div className="bg-[#FDB813] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Pricing & Services</h3>
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#FDB813]">PKR 15,000</span>
                  <span className="text-xl text-blue-200">per unit</span>
                </div>
                <p className="text-lg text-blue-100">
                  Professional solar panel cleaning at a price every Pakistani can afford.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#FDB813]">What's Included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span>Solar Cleaner device with brushes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span>Custom multi-row configurations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span>Rail supply and installation services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span>1-year warranty and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
