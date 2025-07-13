'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShoppingCart, Palette, TrendingUp } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'EcoTech Store',
      category: 'Shopify Development',
      description: 'Complete ecommerce solution for sustainable tech products with custom theme and integrated payment systems.',
      longDescription: 'A comprehensive Shopify store built from the ground up for EcoTech, featuring a custom theme designed for sustainable technology products. The project included advanced filtering systems, integrated payment gateways, and a customer review system that increased conversion rates by 45%.',
      image: 'https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Shopify', 'Custom Theme', 'Payment Integration'],
      results: '45% increase in conversion rate',
      icon: ShoppingCart,
      color: '#00D4FF'
    },
    {
      id: 2,
      title: 'LuxeBrand Identity',
      category: 'Branding & Design',
      description: 'Complete brand identity and visual system for a luxury fashion brand including logo, guidelines, and marketing materials.',
      longDescription: 'Developed a sophisticated brand identity for LuxeBrand, a high-end fashion retailer. The project encompassed logo design, brand guidelines, packaging design, and a complete visual system that positioned the brand as a premium player in the luxury market.',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      results: '200% increase in brand recognition',
      icon: Palette,
      color: '#8B5CF6'
    },
    {
      id: 3,
      title: 'GrowthLab Campaigns',
      category: 'Meta Ads',
      description: 'High-performing Facebook and Instagram ad campaigns that generated 300% ROI for a fitness supplement brand.',
      longDescription: 'Designed and managed comprehensive Meta advertising campaigns for GrowthLab, a fitness supplement company. Through advanced targeting, creative testing, and optimization strategies, we achieved a 300% return on ad spend while scaling their customer acquisition.',
      image: 'https://images.pexels.com/photos/7887804/pexels-photo-7887804.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Facebook Ads', 'Instagram Ads', 'ROI Optimization'],
      results: '300% return on ad spend',
      icon: TrendingUp,
      color: '#00FF88'
    },
    {
      id: 4,
      title: 'StyleCraft Dropshipping',
      category: 'Dropshipping Setup',
      description: 'End-to-end dropshipping business setup with product research, supplier connections, and automated fulfillment.',
      longDescription: 'Built a complete dropshipping operation for StyleCraft, including market research, winning product identification, supplier negotiation, and automated order fulfillment systems. The business reached $50K monthly revenue within 6 months.',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Product Research', 'Supplier Network', 'Automation'],
      results: '$50K monthly revenue in 6 months',
      icon: ShoppingCart,
      color: '#FF0080'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
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
            Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped brands achieve remarkable growth through 
            strategic digital solutions and innovative approaches.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: `0 20px 40px ${project.color}20`
                }}
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <IconComponent 
                      size={24} 
                      style={{ color: project.color }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span 
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {project.results}
                    </span>
                    <ExternalLink 
                      size={16} 
                      className="text-gray-400 group-hover:text-white transition-colors duration-200"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <selectedProject.icon 
                    size={24} 
                    style={{ color: selectedProject.color }}
                  />
                  <span 
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color }}
                  >
                    {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Results:</h4>
                  <p className="text-[#00FF88]">{selectedProject.results}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;