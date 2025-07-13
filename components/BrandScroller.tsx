'use client';

import { motion } from 'framer-motion';

const BrandScroller = () => {
  const brands = [
    { name: 'Adoredly', logo: '/Adoredly.png' },
    { name: 'Donomio', logo: '/Donomio.png' },
    { name: 'Omamans', logo: '/Omamans.png' },
    { name: 'Sakoch', logo: '/Sakoch.png' },
    { name: 'Soodfa', logo: '/Soodfa.png' },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-black/50 overflow-hidden mt-0 pb-16">
      <div /*className="max-w-7xl mx-auto px-2"*/ className="min-w-[320px] h-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-6 mb-4">
            Trusted by Growing Brands
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto"></div>
        </motion.div>

        <div className="relative">
           <div className="flex space-x-12 marquee">
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.15 }}
                className="flex-shrink-0 min-w-[320px] h-[200px] group cursor-pointer flex items-center justify-center"
                //className="flex-shrink-0 glass-effect rounded-xl p-12 min-w-[320px] h-[160px] group cursor-pointer flex items-center justify-center"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter brightness-95 group-hover:brightness-110 transition-all duration-150 group-hover:scale-105"
                  style={{ 
                    maxWidth: '2400px',
                    maxHeight: '800px'
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default BrandScroller;