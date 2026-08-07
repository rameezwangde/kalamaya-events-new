import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen text-white bg-[#050505] flex flex-col">
      <CineverseNavbar />

      <main className="flex-1 flex flex-col lg:flex-row w-full mt-[80px]">
        {/* LEFT COLUMN: Contact Information (Beige) */}
        <section className="w-full lg:w-1/2 bg-[#EAE6DF] text-[#090706] relative flex items-center justify-center p-12 lg:p-24 overflow-hidden min-h-[500px]">
          <div className="relative z-10 w-full max-w-lg flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 
                className="uppercase leading-[0.9] mb-12 text-[#090706]"
                style={{ fontSize: 'clamp(56px, 8vw, 120px)', fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif', letterSpacing: '0.02em' }}
              >
                GET IN<br/>TOUCH
              </h1>

              <div className="flex flex-col gap-10">
                {/* Email */}
                <div>
                  <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">Email</span>
                  <a href="mailto:Cineverse@kalamaya.com" className="text-xl lg:text-3xl font-light hover:text-brand-red transition-colors duration-300">
                    Cineverse@kalamaya.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">Office Address</span>
                  <address className="text-lg lg:text-xl font-light not-italic leading-relaxed text-[#444]">
                    8D, Sidharth heights<br/>
                    Arcot road<br/>
                    Chennai
                  </address>
                </div>

                {/* Social Media */}
                <div>
                  <span className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-3 block">Social Media</span>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="text-lg lg:text-xl font-medium hover:text-brand-red transition-colors duration-300 w-fit relative group">
                      Kalamaya Cineverse
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="text-lg lg:text-xl font-medium hover:text-brand-red transition-colors duration-300 w-fit relative group">
                      Enna Vilai Movie
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RIGHT COLUMN: Inquiry Form (Black) */}
        <section className="w-full lg:w-1/2 bg-[#050505] text-[#EAE6DF] relative flex items-center justify-center p-12 lg:p-24 overflow-hidden min-h-[500px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-lg flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl lg:text-3xl font-light mb-10 text-white">Send an Inquiry</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#888]">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-brand-red transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#888]">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-brand-red transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#888]">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-brand-red transition-colors duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#888]">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="bg-transparent border-b border-[#333] pb-3 text-white focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="mt-4 inline-flex items-center justify-center gap-4 bg-brand-red text-white uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold hover:bg-white hover:text-brand-red transition-all duration-500 group w-fit" 
                  style={{ padding: '20px 48px' }}
                >
                  <span>SEND MESSAGE</span>
                  <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <CineverseFooter />
    </div>
  );
};

export default CineverseContact;
