'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  color: string;
}

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'E-Commerce Mastery – The Secret to Scaling an Online Store in 2025',
      excerpt: 'The e-commerce space is crowded. But the winners? They have one thing in common: an omnichannel strategy. At GenCash, we design cross-platform campaigns that convert.',
      fullContent: `The e-commerce space is crowded. But the winners? They have one thing in common: an omnichannel strategy. At GenCash, we design cross-platform campaigns that convert — combining creativity, targeting, and performance metrics.

**Why It Works:**
Customers don't live in one place. Neither should your ads.

• 72% of consumers expect consistent messaging across platforms.
• Retargeting multiplies ROI when synced across Meta, TikTok, Google, and Email.

**Real Example:**
One of our clients scaled from 10 to 200 sales/day using:
• Instagram story ads for product discovery
• TikTok creators for short-form trust
• Abandoned cart retargeting emails for final conversion

**What GenCash Delivers:**
🔥 Paid Media Strategy with platform-specific hooks
🎯 Influencer Collab Programs for social proof
💡 Conversion-Optimized Landing Pages built for sales, not just traffic`,
      author: 'Muhammed Amine',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      category: 'E-Commerce',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: '#00D4FF'
    },
    {
      id: 2,
      title: 'AI-Powered Marketing – How Smart Brands Are Using AI to 10x Their Campaigns',
      excerpt: 'In 2025, marketing without AI is like driving without GPS. Brands that understand how to integrate AI tools into their strategies are already pulling ahead.',
      fullContent: `In 2025, marketing without AI is like driving without GPS. Brands that understand how to integrate AI tools into their strategies are already pulling ahead — automating more, spending less, and converting better. But how do you actually use AI to scale?

**What's Happening Now:**
AI isn't just about ChatGPT or content creation. It's shaping:
• Predictive customer behavior
• Smart ad optimization (real-time A/B testing)
• Hyper-personalized email campaigns
• Conversational commerce (AI chatbots with sales intelligence)

**Real Example:**
Brands like Coca-Cola and Sephora are already using AI to predict what their customers want next — not just to react but to anticipate. Small businesses are doing the same, but with the right agency.

**How GenCash Helps:**
At GenCash, we integrate the best AI tools into your paid ads, funnel automation, and CRM systems. Whether you're a startup or a scaling brand, we make sure AI does the heavy lifting.

**Takeaway:**
You don't need to be an AI engineer. You need the right strategy and tools — that's what we bring. AI isn't replacing marketers, it's empowering them. Let GenCash show you how.`,
      author: 'Muhammed Amine',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
      category: 'AI Marketing',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: '#00FF88'
    },
    {
      id: 3,
      title: 'The Psychology of High-Converting Shopify Store Design',
      excerpt: 'Learn how to design Shopify stores that convert visitors into customers using proven psychological principles and data-driven insights.',
      fullContent: `Understanding the psychology behind customer behavior is crucial for creating Shopify stores that convert. Every element on your store should be strategically placed to guide visitors toward making a purchase.

**Key Psychological Principles:**
• Social Proof: Customer reviews and testimonials build trust
• Scarcity: Limited-time offers create urgency
• Authority: Expert endorsements increase credibility
• Reciprocity: Free value encourages purchases

**Design Elements That Convert:**
• Clear value propositions above the fold
• Strategic use of colors to evoke emotions
• Simplified navigation to reduce decision fatigue
• Mobile-first responsive design

**Case Study:**
We redesigned a client's Shopify store using these principles and saw:
• 67% increase in conversion rate
• 45% reduction in bounce rate
• 89% increase in average order value

**Implementation Tips:**
Start with user research, test different layouts, and always prioritize user experience over flashy design elements.`,
      author: 'Muhammed Amine',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      category: 'Shopify',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: '#8B5CF6'
    },
    {
      id: 4,
      title: 'Meta Ads Optimization: From $100 to $10K Monthly Spend',
      excerpt: 'A comprehensive guide to scaling your Facebook and Instagram ads while maintaining profitability and maximizing ROAS.',
      fullContent: `Scaling Meta ads from a small budget to significant spend requires a systematic approach. Here's how we help clients scale profitably while maintaining strong ROAS.

**The Scaling Framework:**
• Start with proven creative concepts
• Test audiences systematically
• Optimize for lifetime value, not just ROAS
• Implement proper attribution tracking

**Budget Scaling Strategy:**
Week 1-2: Test creative concepts with $10-20/day
Week 3-4: Scale winning ads to $50-100/day
Month 2: Expand to new audiences and placements
Month 3+: Implement advanced strategies like lookalikes

**Advanced Techniques:**
• Creative testing frameworks
• Audience layering strategies
• Bid cap optimization
• Cross-platform attribution

**Results We've Achieved:**
Our systematic approach has helped clients achieve:
• 300%+ ROAS consistently
• Successful scaling to $10K+ monthly spend
• Reduced cost per acquisition by 40%

**Next Steps:**
Ready to scale your Meta ads? Contact GenCash for a custom strategy session.`,
      author: 'Muhammed Amine',
      date: 'Dec 1, 2024',
      readTime: '8 min read',
      category: 'Advertising',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: '#FF0080'
    }
  ];

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <>
      <section id="blog" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00D4FF]/30 rounded-full"
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              animate={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

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
              Latest Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, proven strategies, 
              and actionable tips for scaling your ecommerce business.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D4FF] to-[#00FF88] mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  rotateX: 5,
                  rotateY: hoveredCard === post.id ? 5 : 0,
                  boxShadow: `0 20px 40px ${post.color}20`
                }}
                onHoverStart={() => setHoveredCard(post.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer transform-gpu"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <motion.div 
                    className="absolute top-4 left-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span 
                      className="text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm"
                      style={{ backgroundColor: `${post.color}20`, color: post.color }}
                    >
                      {post.category}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[#00D4FF] transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    {post.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User size={14} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={14} className="mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#00D4FF] group-hover:text-[#00FF88] transition-colors duration-200">
                      Read More
                    </span>
                    <motion.div
                      whileHover={{ x: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight 
                        size={16} 
                        className="text-gray-400 group-hover:text-white transition-colors duration-200"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#00D4FF]/25 transition-all duration-300 inline-flex items-center gap-2 transform-gpu"
            >
              View All Articles
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
            className="glass-effect rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                ×
              </motion.button>
              <div className="absolute top-4 left-4">
                <span 
                  className="text-sm px-4 py-2 rounded-full font-medium backdrop-blur-sm"
                  style={{ backgroundColor: `${selectedPost.color}20`, color: selectedPost.color }}
                >
                  {selectedPost.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <User size={16} className="mr-2" />
                <span className="mr-4">{selectedPost.author}</span>
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{selectedPost.date}</span>
                <Clock size={16} className="mr-2" />
                <span>{selectedPost.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedPost.title}
              </h1>
              
              <div className="prose prose-invert max-w-none">
                {selectedPost.fullContent.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-[#00D4FF] mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('•')) {
                    return (
                      <li key={index} className="text-gray-300 mb-2 ml-4">
                        {paragraph.substring(2)}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return <br key={index} />;
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 bg-gradient-to-r from-[#00D4FF]/10 to-[#00FF88]/10 rounded-lg border border-[#00D4FF]/20"
              >
                <h4 className="font-semibold text-white mb-3">Ready to implement these strategies?</h4>
                <p className="text-gray-300 mb-4">
                  Let GenCash help you apply these insights to your business and achieve remarkable growth.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedPost(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  Get Started Today
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default BlogSection;