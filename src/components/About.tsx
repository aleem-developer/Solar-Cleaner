import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Solar Cleaner
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Based in <strong className="text-[#0056b3]">Lahore, Pakistan</strong>, Solar Cleaner is pioneering
                affordable solar maintenance solutions for the Pakistani market.
              </p>
              <p>
                Founded by <strong>Muhammad Aleem Naveed</strong>, our mission is simple: make professional-grade
                solar panel cleaning accessible to every solar owner, from residential users to industrial facilities.
              </p>
              <p>
                We understand Pakistan's unique challenges — from dust storms to pollution — and we've engineered
                our solution specifically for this climate. Our semi-automatic cleaning system delivers enterprise
                performance at a fraction of the imported cost.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="text-gray-900" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5GW+</div>
                <div className="text-sm text-gray-600">Market Size</div>
              </div>
              <div className="text-center">
                <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="text-gray-900" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">Pakistani</div>
                <div className="text-sm text-gray-600">Innovation</div>
              </div>
              <div className="text-center">
                <div className="bg-[#FDB813] w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="text-gray-900" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900">Lahore</div>
                <div className="text-sm text-gray-600">Based</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-[#FDB813]">Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#FDB813] w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Affordable Excellence</h4>
                    <p className="text-blue-100 text-sm">
                      Deliver world-class solar maintenance at prices every Pakistani can afford.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#FDB813] w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reliable Technology</h4>
                    <p className="text-blue-100 text-sm">
                      Build robust, user-friendly solutions that work in Pakistan's challenging climate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#FDB813] w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-900 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Support</h4>
                    <p className="text-blue-100 text-sm">
                      Provide exceptional customer service and technical support from our Lahore office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FDB813] rounded-2xl -z-10 opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0056b3] rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
