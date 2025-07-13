'use client';

import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    Services: [
      { name: 'Dropshipping Setup', href: '#services' },
      { name: 'Shopify Development', href: '#services' },
      { name: 'Branding & Design', href: '#services' },
      { name: 'Meta Ads Management', href: '#services' },
      { name: 'Social Media', href: '#services' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' },
    ],
    Resources: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Latest Insights', href: '#blog' },
      { name: 'Success Stories', href: '#portfolio' },
      { name: 'Get Started', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/gen__cash/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamed-amine-khamessi/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contactgencash@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-green-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/Gencash logo (1).png" 
                  alt="GenCash"
                  className="h-12 w-auto"
                />
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Scaling Digital Brands with Style & Strategy. We help ambitious 
                entrepreneurs build ecommerce empires that generate real results.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-3 text-[#00D4FF]" />
                  <span>Tunis, Tunisia</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-3 text-[#00D4FF]" />
                  <span>contactgencash@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-3 text-[#00D4FF]" />
                  <span>+216 55 913 370</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-200 text-left"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 border-t border-gray-800"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs who have transformed their 
              digital presence with our proven strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 GenCash. All rights reserved. Built with passion in Tunisia.
            </motion.div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 glass-effect rounded-full flex items-center justify-center group"
                    >
                      <IconComponent 
                        size={16} 
                        className="text-gray-400 group-hover:text-[#00D4FF] transition-colors duration-200"
                      />
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Scroll to top */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] rounded-full flex items-center justify-center group"
              >
                <ArrowUp size={16} className="text-black" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;