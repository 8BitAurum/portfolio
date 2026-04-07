"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent to-[var(--background)] pt-20"
    >
      {/* Dynamic abstract background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,_var(--accent-primary)_0%,_transparent_50%)] opacity-10 blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,_var(--accent-secondary)_0%,_transparent_50%)] opacity-10 blur-[120px] mix-blend-screen"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBINDBWMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTM5LjUgMzkuNVYwTTM5LjUgMzkuNUgwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNikiIGZpbGw9Im5vbmUiLz4KPC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm font-mono text-[var(--accent-primary)] mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Multidisciplinary Creator</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[var(--foreground)] leading-[1.1]">
            <span className="block">Hi! I'm Siva.</span>
          </h1>

          <div className="text-2xl md:text-4xl lg:text-5xl font-medium text-[var(--foreground)]/60 flex flex-col md:flex-row items-center justify-center gap-3">
            <span>Crafting</span>
            <span className="font-mono text-[var(--accent-primary)] drop-shadow-[0_0_15px_rgba(99,102,241,0.4)] min-h-[40px] md:min-h-0 flex items-center">
              <TypeAnimation
                sequence={[
                  "digital products.",
                  3000,
                  "immersive UI.",
                  3000,
                  "cinematic cuts.",
                  3000,
                  "scalable code.",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            I like to blur the line between design and engineering to build
            premium web applications, telling stories through code and visual
            media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center pt-8 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--primary-foreground)] font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore My Work</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--foreground)] font-semibold text-lg hover:border-[var(--accent-primary)]/50 backdrop-blur-md transition-all duration-300 hover:bg-[var(--accent-primary)]/5"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--foreground)]/40 font-mono">
          Scroll
        </span>
        <a
          href="#about"
          aria-label="Scroll down"
          className="animate-bounce mt-2"
        >
          <ArrowDown className="text-[var(--accent-primary)] w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>

      {/* Decorative gradient floor */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[var(--background)] to-transparent z-0 pointer-events-none"></div>
    </section>
  );
}
