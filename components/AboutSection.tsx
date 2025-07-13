'use client';

import { motion } from 'framer-motion';
import { MapPin, Award, Users, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Target, value: '100+', label: 'Projects Completed' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: MapPin, value: 'Tunisia', label: 'Based In' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About GenCash
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main avatar placeholder */}
              <div className="w-80 h-80 mx-auto glass-effect rounded-full flex items-center justify-center text-6xl gradient-text float-animation">
                <img src="/Khamouss.jpg" alt="" className="w-80 h-80 mx-auto glass-effect rounded-full" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full flex items-center justify-center"
              >
                <Target className="text-black" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#FF0080] rounded-full flex items-center justify-center"
              >
                <Award className="text-white" size={16} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm <span className="gradient-text">Muhammed Amine Khamessi</span>
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a Tunisian dreamer with sharp vision and a love for digital detail. 
              I specialize in helping ecommerce brands scale with purpose, creativity, 
              and a deep sense of style.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey began with a passion for transforming ideas into profitable 
              digital experiences. Today, I help ambitious entrepreneurs build brands 
              that don't just sell products—they tell stories, create connections, 
              and drive meaningful growth.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-lg p-4 text-center group cursor-pointer"
                  >
                    <IconComponent 
                      size={24} 
                      className="text-[#00D4FF] mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" 
                    />
                    <div className="text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-200">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;