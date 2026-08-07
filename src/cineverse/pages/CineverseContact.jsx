import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CineverseNavbar from '../components/CineverseNavbar';
import CineverseFooter from '../components/CineverseFooter';
import '../cineverse.css';

const CineverseContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please consent to being contacted to submit the form.");
      return;
    }
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', organisation: '', email: '', phone: '', subject: '', message: '', consent: false });
  };

  return (
    <div className="min-h-screen text-[#090706] bg-[#EAE6DF] flex flex-col font-sans">
      <CineverseNavbar />

      <main className="flex-1 w-full pb-24 bg-[#EAE6DF] contact-layout-wrapper">
        <style>{`
          .contact-layout-wrapper {
            padding-top: 140px;
            padding-bottom: 96px;
          }
          .contact-container {
            width: 100%;
            max-width: 1440px;
            margin: 0 auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          @media (min-width: 768px) {
            .contact-layout-wrapper {
              padding-top: 180px;
            }
            .contact-container {
              padding: 0 32px;
            }
          }
          @media (min-width: 1024px) {
            .contact-container {
              padding: 0 48px;
              grid-template-columns: 0.9fr 1.15fr;
              gap: 60px;
            }
          }
          @media (min-width: 1440px) {
            .contact-container {
              padding: 0 72px;
              gap: 100px;
            }
          }
          .contact-submit-btn {
            margin-top: 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #d32027;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-size: 14px;
            font-weight: bold;
            padding: 20px 48px;
            width: max-content;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease;
          }
          .contact-submit-btn:hover {
            background-color: #090706;
          }
        `}</style>
        
        <div className="contact-container">
          
          {/* LEFT COLUMN: Contact Details */}
          <section className="flex flex-col w-full max-w-[520px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[#090706] uppercase tracking-[0.2em] text-xs font-bold mb-8 block" style={{ marginBottom: '32px' }}>
                Contact Details
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#090706] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LET'S GET IN TOUCH.
              </h1>

              <p className="text-[#333] text-lg font-medium leading-relaxed mb-12 max-w-md">
                Speak directly with our team in Chennai or reach out globally for partnerships, productions, and distribution.
              </p>

              <div className="flex flex-col border-t border-[#0000001a]">
                
                {/* Phone Item */}
                <div className="flex items-start gap-6 py-8 border-b border-[#0000001a]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-medium text-[#090706] mb-1">+91 99999 99999</h3>
                    <p className="text-sm text-[#666]">Call Githesh Viswambharan</p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-6 py-8 border-b border-[#0000001a]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <a href="mailto:Cineverse@kalamaya.com" className="text-xl font-medium text-[#090706] mb-1 hover:text-brand-red transition-colors block">
                      Cineverse@kalamaya.com
                    </a>
                    <p className="text-sm text-[#666]">Email an enquiry</p>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-6 py-8 border-b border-[#0000001a]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <address className="text-lg font-medium text-[#090706] not-italic leading-relaxed mb-1">
                      8D, Sidharth heights<br/>
                      Arcot road<br/>
                      Chennai
                    </address>
                  </div>
                </div>

                {/* Social Item */}
                <div className="flex items-start gap-6 py-8 border-b border-[#0000001a]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <div>
                    <a href="#" className="text-xl font-medium text-[#090706] hover:text-brand-red transition-colors mb-2 block">
                      Kalamaya Cineverse
                    </a>
                    <a href="#" className="text-xl font-medium text-[#090706] hover:text-brand-red transition-colors block">
                      Enna Vilai Movie
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </section>

          {/* RIGHT COLUMN: Inquiry Form */}
          <section className="flex flex-col w-full max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-[#090706] uppercase tracking-[0.2em] text-xs font-bold mb-8 block" style={{ marginBottom: '32px' }}>
                Inquiry Form
              </span>
              <h2 className="text-5xl md:text-7xl uppercase text-[#090706] leading-none mb-6" style={{ fontFamily: '"Druk Condensed Super", "Druk Condensed", "Bebas Neue", sans-serif' }}>
                GENERAL ENQUIRY
              </h2>
              
              <p className="text-[#333] text-sm mb-10">Required fields are marked *</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name */}
                  <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-sm font-semibold text-[#090706]">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                    />
                  </div>

                  {/* Organisation */}
                  <div className="flex flex-col gap-4">
                    <label htmlFor="organisation" className="text-sm font-semibold text-[#090706]">Organisation</label>
                    <input 
                      type="text" 
                      id="organisation" 
                      name="organisation" 
                      value={formData.organisation}
                      onChange={handleChange}
                      className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-4">
                    <label htmlFor="phone" className="text-sm font-semibold text-[#090706]">Phone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-sm font-semibold text-[#090706]">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#090706]">Subject / Area of Interest *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="message" className="text-sm font-semibold text-[#090706]">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="bg-transparent border-b border-[#00000033] pb-2 text-[#090706] text-lg focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-center gap-3 mt-4">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent" 
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-5 h-5 accent-[#090706] cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-sm font-semibold text-[#090706] cursor-pointer">
                    I consent to being contacted about this enquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="contact-submit-btn" 
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </section>

        </div>
      </main>

      <CineverseFooter />
    </div>
  );
};

export default CineverseContact;
