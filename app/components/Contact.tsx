"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Briefcase,
  MessageCircle,
  Code,
  Globe,
  MessageSquare,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "This contact form is a mockup. Wiring up to your email service comes next!",
    );
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-[var(--background)]"
    >
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] flex justify-center overflow-hidden">
        <h2 className="text-[20vw] font-bold leading-none whitespace-nowrap">
          CONTACT
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Bold Header & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col text-left"
          >
            <span className="text-[var(--accent-primary)] font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--accent-primary)]"></span>
              Let's Talk
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[var(--foreground)] tracking-tight leading-[1.1]">
              Got an idea?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                Let's build it.
              </span>
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-md mb-12 leading-relaxed">
              Whether you want to discuss a new project, explore a potential
              collaboration, or simply say hello, I'd love to hear from you.
            </p>

            <a
              href="mailto:aurumbyte.dev@proton.me"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center gap-4 text-2xl font-medium group transition-colors"
            >
              <div
                className={`p-4 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-transform duration-500 ${isHovered ? "scale-110 bg-[var(--accent-primary)] text-white border-transparent" : ""}`}
              >
                <Mail className="w-6 h-6" />
              </div>
            </a>

            <div className="flex gap-6 mt-16 pb-8 border-b border-[var(--glass-border)] lg:border-none">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--accent-primary)] hover:border-transparent hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--accent-primary)] hover:border-transparent hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Briefcase className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full hover:bg-[var(--accent-primary)] hover:border-transparent hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-xl p-8 md:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Form background glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[var(--accent-primary)]/5 to-transparent pointer-events-none"></div>

              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-b border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:border-[var(--accent-primary)] py-4 transition-colors duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full bg-transparent border-b border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:border-[var(--accent-primary)] py-4 transition-colors duration-300"
                />
              </div>
              <div className="relative pt-2">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-transparent border-b border-[var(--glass-border)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/30 focus:outline-none focus:border-[var(--accent-primary)] py-4 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group w-full py-4 rounded-xl bg-[var(--foreground)] text-[var(--primary-foreground)] font-semibold text-lg overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98] mt-4 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex flex-row items-center justify-center gap-2">
                  Send Message
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
