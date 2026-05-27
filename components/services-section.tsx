"use client"

import { motion } from "framer-motion"
import { FileText, Linkedin, MessageSquare, Globe, UserCheck, Compass, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: FileText,
    title: "ATS-Friendly Resume Writing",
    description: "Get a professionally crafted resume optimized for Applicant Tracking Systems that recruiters actually see and approve.",
    features: ["Keyword optimization", "Clean formatting", "Achievement-focused"],
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description: "Transform your LinkedIn profile into a powerful personal brand that attracts recruiters and opportunities.",
    features: ["Profile makeover", "Headline optimization", "Network strategy"],
  },
  {
    icon: MessageSquare,
    title: "Mock Interview Preparation",
    description: "Practice with real interview scenarios and receive feedback to boost your confidence and performance.",
    features: ["Technical rounds", "HR interviews", "Behavioral questions"],
  },
  {
    icon: Globe,
    title: "Job Portal Optimization",
    description: "Optimize your presence on Naukri, Indeed, and other job portals for maximum visibility to recruiters.",
    features: ["Profile optimization", "Keyword targeting", "Application strategy"],
  },
  {
    icon: UserCheck,
    title: "Recruiter Strategy Guidance",
    description: "Learn insider strategies on how to catch a recruiter's attention and navigate the hiring process.",
    features: ["Cold outreach tips", "Follow-up strategy", "Negotiation skills"],
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Get personalized career advice and roadmap to achieve your professional goals and aspirations.",
    features: ["Career assessment", "Goal setting", "Industry insights"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Comprehensive Career Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From resume writing to interview preparation, we provide end-to-end support for your career success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
