'use client';

import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Palette, 
  Megaphone, 
  Share2, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Dropshipping Business Setup',
      description: 'Complete business model setup with winning products, supplier connections, and automated systems for maximum profitability.',
      features: ['Product Research', 'Supplier Sourcing', 'Automation Setup', 'Profit Optimization'],
      color: '#00D4FF'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Store Development',
      description: 'Custom Shopify stores that convert visitors into customers with beautiful designs and seamless user experiences.',
      features: ['Custom Design', 'Mobile Optimization', 'App Integration', 'Performance Optimization'],
      color: '#00FF88'
    },
    {
      icon: Palette,
      title: 'Branding & Visual Identity',
      description: 'Comprehensive brand development that makes your business stand out and connect with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Assets', 'Brand Strategy'],
      color: '#8B5CF6'
    },
    {
      icon: Megaphone,
      title: 'Meta Ads Management',
      description: 'Data-driven Facebook and Instagram advertising campaigns that maximize ROI and scale your business profitably.',
      features: ['Campaign Strategy', 'Ad Creation', 'Audience Targeting', 'Performance Tracking'],
      color: '#FF0080'
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Engaging content creation and management across all platforms to build your brand presence and community.',
      features: ['Content Creation', 'Community Management', 'Growth Strategy', 'Analytics & Reporting'],
      color: '#00D4FF'
    },
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-green-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to scale your ecommerce business 
            and establish a dominant market presence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: `0 20px 40px ${service.color}20`
                }}
                className="glass-effect rounded-xl p-6 group cursor-pointer relative overflow-hidden transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
                ></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent 
                      size={32} 
                      style={{ color: service.color }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <ArrowRight 
                      size={20} 
                      className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: service.color }}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;