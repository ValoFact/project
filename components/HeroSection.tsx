'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Shopify | Branding | Dropshipping | Advertising';

  useEffect(() => {
    // Set window dimensions on client side
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    // Mouse tracking for 3D effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
            initial={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            animate={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
        
        {/* 3D floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full opacity-20"
            initial={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            animate={{
              x: mousePosition.x * 0.1 + Math.random() * 100,
              y: mousePosition.y * 0.1 + Math.random() * 100,
              rotateX: mousePosition.x * 0.1,
              rotateY: mousePosition.y * 0.1,
            }}
            transition={{
              duration: 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
          }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              rotateY: mousePosition.x * 0.01,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <span className="gradient-text">🚀 Scaling Digital Brands</span>
            <br />
            <span className="text-white">with Style & Strategy</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, z: -50 }}
            animate={{ 
              opacity: 1, 
              z: 0,
              rotateX: mousePosition.y * 0.005,
            }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="text-xl md:text-2xl text-gray-300 font-light"
          >
            <span className="typewriter">{typewriterText}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
            }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ambitious ecommerce brands into market leaders through 
            strategic digital marketing, innovative branding, and cutting-edge technology.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ duration: 0.8, delay: 1.6 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                rotateX: 5,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 flex items-center gap-2 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Sparkles size={20} />
              Let's Work Together
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                rotateX: -5,
                rotateY: -5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 border border-white/20 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-[#00D4FF] transition-colors duration-200"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;