"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-4 block">About the Founder</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Meet <span className="text-primary">Pranav K Mehta</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over <strong className="text-foreground">12+ years of IT Recruitment Experience</strong> in Product Based MNCs, 
              I have witnessed firsthand what makes candidates stand out and secure their dream roles.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My journey from being a recruiter to a career consultant has given me unique insights into what hiring managers 
              truly look for. Now, I&apos;m here to share that insider knowledge and help you craft a career story that gets noticed.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Briefcase, label: "MNC Experience", desc: "Product-based companies" },
                { icon: Target, label: "Hiring Insights", desc: "Recruiter perspective" },
                { icon: Users, label: "Personalized Approach", desc: "Tailored strategies" },
                { icon: Award, label: "Industry Expert", desc: "Proven methodology" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-lg" />
              
              {/* Main visual card */}
              <div className="relative bg-primary rounded-2xl p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-6xl font-serif font-bold text-gold">PK</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">Pranav K Mehta</h3>
                  <p className="text-gold font-medium mb-4">Founder & Career Consultant</p>
                  <div className="flex justify-center gap-4 text-primary-foreground/60 text-sm">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      12+ Years
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      IT Recruitment
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
                  <p className="text-primary-foreground/80 italic text-lg leading-relaxed">
                    &ldquo;Your resume is your first impression. Let&apos;s make it unforgettable.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
