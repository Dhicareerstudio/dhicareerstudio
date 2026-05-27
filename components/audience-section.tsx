"use client"

import { motion } from "framer-motion"
import { GraduationCap, Briefcase, RefreshCw, Rocket } from "lucide-react"

const audiences = [
  {
    icon: GraduationCap,
    title: "Final Year Students",
    description: "Prepare yourself for campus placements and start your career journey with the right foundation.",
    benefits: ["Resume building from scratch", "Interview preparation", "Industry awareness"],
  },
  {
    icon: Rocket,
    title: "Freshers",
    description: "Stand out in the competitive job market and land your first job with confidence.",
    benefits: ["Entry-level resume optimization", "Soft skills development", "Job search strategy"],
  },
  {
    icon: Briefcase,
    title: "Experienced Professionals",
    description: "Elevate your career to the next level with advanced positioning and visibility strategies.",
    benefits: ["Senior-level resume crafting", "Executive presence building", "Career advancement strategy"],
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    description: "Successfully transition to a new industry or role with a strategic approach.",
    benefits: ["Transferable skills highlighting", "Industry transition support", "Rebranding strategy"],
  },
]

export function AudienceSection() {
  return (
    <section id="audience" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">Who We Help</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Tailored Solutions for Every Career Stage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you&apos;re just starting out or looking to make a change, we have the expertise to guide you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary rounded-2xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 group-hover:bg-primary transition-colors duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <audience.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary-foreground transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 group-hover:text-primary-foreground/70 transition-colors">
                      {audience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {audience.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground group-hover:bg-gold/20 group-hover:text-gold transition-colors"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
