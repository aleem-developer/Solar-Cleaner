import { TrendingUp, Zap, DollarSign } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: '5GW+',
      label: 'Market Capacity',
    },
    {
      icon: Zap,
      value: 'Up to 57%',
      label: 'Efficiency Recovery',
    },
    {
      icon: DollarSign,
      value: '1-2 Years',
      label: 'Payback Period',
    },
  ];

  return (
    <div className="bg-[#0056b3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex items-center gap-4 text-white">
                <div className="bg-[#FDB813] p-3 rounded-lg">
                  <Icon size={32} className="text-gray-900" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
