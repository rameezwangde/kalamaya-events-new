import React from 'react';
import { motion } from 'framer-motion';
import '../styles/blogsInsights.css';

const blogCategories = [
  {
    title: "Corporate Events",
    articles: [
      "How to Plan a Successful Corporate Event",
      "Corporate Event Trends for 2026",
      "Measuring ROI from Business Events",
      "Employee Engagement Through Experiential Events",
      "Conference Planning Checklist for Organizations"
    ]
  },
  {
    title: "Conferences & MICE",
    articles: [
      "The Future of Hybrid Conferences",
      "Choosing the Right Venue for Business Events",
      "Delegate Experience: The Key to Successful Conferences",
      "Why MICE Events Drive Business Growth"
    ]
  },
  {
    title: "Product Launches & Brand Experiences",
    articles: [
      "Creating Impactful Product Launch Events",
      "Experiential Marketing Ideas That Work",
      "Event Technology Transforming Brand Activations"
    ]
  },
  {
    title: "Destination Weddings",
    articles: [
      "Top Destination Wedding Locations in Kerala",
      "Beach Wedding vs Backwater Wedding: Which Is Right for You?",
      "Planning a Luxury Destination Wedding in India",
      "Essential Wedding Planning Timeline"
    ]
  },
  {
    title: "Event Industry Insights",
    articles: [
      "Sustainable Event Management Practices",
      "Event Budget Planning Guide",
      "Emerging Trends in Event Production",
      "How AI and Technology Are Changing Events"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const BlogsInsights = () => {
  return (
    <section className="blogs-section">
      <div className="blogs-container">
        
        {/* Header Section */}
        <motion.div 
          className="section-title-wrapper center-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="section-title">BLOGS & INSIGHTS</h3>
          <div className="title-underline"></div>
          <h4 className="blogs-subtitle">Ideas. Trends. Experiences.</h4>
          <p className="blogs-description">
            Explore expert insights, event trends, planning tips, and industry updates from the world of corporate events, conferences, destination weddings, and experiential marketing.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="blogs-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {blogCategories.map((category, idx) => (
            <motion.div className="blog-category-card" key={idx} variants={itemVariants}>
              <h5 className="category-title">{category.title}</h5>
              <ul className="article-list">
                {category.articles.map((article, i) => (
                  <li key={i} className="article-item">
                    <a href="#" className="article-link">
                      {article}
                      <span className="arrow-icon">&#x2192;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          className="closing-statement"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            At Kalamaya, we believe great events begin with great ideas. Our insights help organizations and families stay informed, inspired, and prepared to create extraordinary experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogsInsights;
