"use client"

import { motion } from "framer-motion"
import { CheckCircle, Shield, Clock, Headphones, TrendingUp, Heart } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Recruiter's Perspective",
    description: "With 12+ years in IT recruitment, I know exactly what hiring managers look for in candidates.",
  },
  {
    icon: TrendingUp,
    title: "Industry Insider Knowledge",
    description: "Deep understanding of what top companies look for - because I've hired for them myself.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality. Get your optimized profile within days, not weeks.",
  },
  {
    icon: Headphones,
    title: "Personalized Support",
    description: "One-on-one consultations tailored to your unique career goals and industry requirements.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We treat every client's career as our own priority and are invested in your success.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Service",
    description: "From resume to interview prep to job portal optimization - complete career support under one roof.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            What Sets Us Apart
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            We combine industry expertise with personalized attention to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-light/50 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:border-gold/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">{reason.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors"
          >
            Start Your Transformation Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
