"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Ready to Transform Your Career?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take the first step towards your dream career. Reach out for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <Link
                href="tel:+919106546083"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                  <p className="font-semibold text-foreground">+91 9106546083</p>
                </div>
              </Link>

              <Link
                href="mailto:dhi_careerstudio@outlook.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">dhi_careerstudio@outlook.com</p>
                </div>
              </Link>

              <Link
                href="https://instagram.com/dhicareerstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Instagram className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="font-semibold text-foreground">@dhicareerstudio</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">India (Remote Services Available)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-primary-foreground/70 text-sm mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-navy-light/50 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-primary-foreground/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-navy-light/50 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-primary-foreground/70 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-navy-light/50 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-primary-foreground/70 text-sm mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-navy-light/50 border border-primary-foreground/20 rounded-lg text-primary-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="resume">ATS-Friendly Resume Writing</option>
                    <option value="linkedin">LinkedIn Optimization</option>
                    <option value="interview">Mock Interview Preparation</option>
                    <option value="jobportal">Job Portal Optimization</option>
                    <option value="recruiter">Recruiter Strategy Guidance</option>
                    <option value="career">Career Guidance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary-foreground/70 text-sm mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-navy-light/50 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your career goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-primary py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
