export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-[#FDB813] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
              Reclaim Up to 57% Lost Efficiency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionizing Solar Maintenance in Pakistan
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Combat dust and pollution with our semi-automatic solar panel cleaning solution.
            One button, maximum efficiency, minimal cost.
          </p>

          {/* Single CTA Button */}
          <button
            onClick={scrollToContact}
            className="bg-[#FDB813] text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#FDB813]/90 transition transform hover:scale-105"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
