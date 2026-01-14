import { Home, Building2, Factory, Warehouse } from 'lucide-react';

export default function MarketSegments() {
  const segments = [
    {
      icon: Home,
      title: 'Residential',
      subtitle: '5-15 kW Systems',
      description: 'Perfect for homeowners looking to maximize their solar investment and reduce electricity bills.',
      features: ['Easy installation', 'Low maintenance', 'Quick ROI'],
    },
    {
      icon: Building2,
      title: 'Commercial',
      subtitle: '15-50 kW Systems',
      description: 'Ideal for businesses, retail spaces, and office buildings with moderate solar capacity.',
      features: ['Scalable solution', 'Professional support', 'Energy cost reduction'],
    },
    {
      icon: Factory,
      title: 'Industrial',
      subtitle: '50-500 kW Systems',
      description: 'Designed for manufacturing facilities and large industrial complexes with extensive solar arrays.',
      features: ['Heavy-duty design', 'Custom configurations', 'Maximum efficiency'],
    },
    {
      icon: Warehouse,
      title: 'Solar Farms',
      subtitle: '500 kW+ Systems',
      description: 'Enterprise solutions for utility-scale solar installations and large-scale energy production.',
      features: ['Bulk pricing', 'Dedicated support', 'Fleet management'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions for Every Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential rooftops to utility-scale solar farms, we have the right solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                <div className="bg-[#0056b3] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={32} className="text-[#FDB813]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{segment.title}</h3>
                <p className="text-sm text-[#0056b3] font-semibold mb-3">{segment.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-[#FDB813]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
