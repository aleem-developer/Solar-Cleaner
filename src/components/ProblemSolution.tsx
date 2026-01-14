import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">The Efficiency Crisis</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Pakistan's climate presents a unique challenge for solar energy systems:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>20-57% efficiency loss</strong> due to dust and pollution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Manual cleaning is <strong>time-consuming, risky, and expensive</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Imported solutions cost <strong>5-10x more</strong> than necessary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Neglected panels lead to <strong>thousands in lost savings</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0056b3] to-[#003d82] p-8 rounded-2xl shadow-lg text-white border-l-4 border-[#FDB813]">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-[#FDB813]" size={32} />
              <h2 className="text-3xl font-bold">The Breakthrough Solution</h2>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-blue-100">
                Solar Cleaner delivers professional-grade performance at a price every Pakistani can afford:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>One-button activation</strong> — no technical expertise needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Automatic traversal</strong> across panels with zero supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>High-efficiency rotating brushes</strong> remove stubborn dust safely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FDB813] mt-1">✓</span>
                  <span><strong>Starting at PKR 15,000</strong> — affordable for everyone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
