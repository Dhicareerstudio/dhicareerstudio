"use client"

import { motion } from "framer-motion"
import { Search, FileEdit, Rocket, Trophy } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery Call",
    description: "We start with a free consultation to understand your career goals, current situation, and challenges you're facing.",
  },
  {
    icon: FileEdit,
    step: "02",
    title: "Profile Analysis",
    description: "A comprehensive review of your resume, LinkedIn, and job portal profiles to identify gaps and opportunities.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Strategic Makeover",
    description: "We craft your professional story with ATS-optimized documents, compelling narratives, and recruiter-magnet profiles.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Launch & Support",
    description: "You're ready to apply with confidence. Plus, ongoing guidance for interviews and job search strategies.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">Our Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Your Journey to Career Success
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, proven process designed to transform your professional presence and unlock new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}
              
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-gold/50 hover:shadow-xl transition-all duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-2 text-6xl font-serif font-bold text-gold/10">
                  {item.step}
                </div>
                
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Ready to take the first step towards your dream career?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Book Your Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
