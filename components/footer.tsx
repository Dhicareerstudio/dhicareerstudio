"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary-foreground font-serif font-bold text-lg leading-tight">Dhi Career</span>
                <span className="text-gold text-xs tracking-widest uppercase">Studio</span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Expert career consulting and professional branding services to help you shape your professional future.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/dhicareerstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:dhi_careerstudio@outlook.com"
                className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+919106546083"
                className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/20 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Services", "Who We Help", "Why Us", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-primary-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Resume Writing",
                "LinkedIn Optimization",
                "Mock Interviews",
                "Job Portal Setup",
                "Recruiter Strategy",
                "Career Guidance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+919106546083"
                  className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                >
                  +91 9106546083
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:dhi_careerstudio@outlook.com"
                  className="text-primary-foreground/60 hover:text-gold text-sm transition-colors break-all"
                >
                  dhi_careerstudio@outlook.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/dhicareerstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                >
                  @dhicareerstudio
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm">
              &copy; {new Date().getFullYear()} Dhi Career Studio. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-sm">
              Empowering careers since 2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
