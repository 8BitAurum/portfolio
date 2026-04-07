"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  Video,
  GraduationCap,
  Sparkles,
  Terminal,
} from "lucide-react";

export default function About() {
  const codeSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Tailwind CSS",
    "Rust",
  ];

  const designSkills = ["Figma", "UI/UX", "Prototyping", "Framer"];
  const videoSkills = ["DaVinci Resolve"];

  return (
    <section
      id="about"
      className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <span className="text-[var(--accent-primary)] font-mono text-sm tracking-widest uppercase mb-4">
          Discover
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
          My Expertise
        </h2>
      </motion.div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] gap-4 md:gap-6">
        {/* Intro Box - Spans 8 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8 row-span-2 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group backdrop-blur-md hover:border-[var(--accent-primary)]/40 transition-colors"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-secondary)] opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10 flex-grow flex flex-col justify-center">
            <Sparkles className="w-8 h-8 text-[var(--accent-primary)] mb-6 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Hello World.
            </h3>
            <p className="text-lg text-[var(--foreground)]/70 leading-relaxed max-w-2xl">
              My full name is Sivaseelan and I go by "8BitAurum" online. I am a
              largely self-taught developer with a profound appreciation for
              aesthetics. My journey aims to seamlessly blend computer science
              structure and aesthetic design. Whether it's building complex
              systems or crafting smooth cinematic sequences, I bring my best to
              every project.
            </p>
          </div>
        </motion.div>

        {/* Education Box - Spans 4 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-4 row-span-1 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 flex flex-col justify-center backdrop-blur-md hover:border-[var(--accent-tertiary)]/40 transition-colors relative overflow-hidden"
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--glass-border)] to-transparent pointer-events-none"></div>
          <GraduationCap className="w-8 h-8 text-[var(--accent-tertiary)] mb-4" />
          <h4 className="font-bold text-xl mb-1">
            B.Tech. Computer Science Engineering
          </h4>
          <p className="text-[var(--foreground)]/60 text-sm">
            Vellore Institute of Technology
          </p>
          <p className="text-[var(--foreground)]/40 text-xs font-mono mt-2">
            2024 — 2028
          </p>
        </motion.div>

        {/* Video Editing Box - Spans 4 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-4 row-span-1 rounded-3xl bg-gradient-to-br from-[var(--glass-bg)] to-[var(--glass-border)] border border-[var(--glass-border)] p-8 flex flex-col backdrop-blur-md hover:from-[var(--accent-primary)]/10 hover:to-[var(--glass-bg)] transition-colors overflow-hidden relative group"
        >
          <Video className="w-8 h-8 text-[var(--accent-primary)] mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="font-bold text-xl mb-2">Video Editing</h4>
          <div className="flex flex-wrap gap-2 mt-auto">
            {videoSkills.map((s) => (
              <span
                key={s}
                className="text-xs font-mono px-2 py-1 bg-[var(--background)]/50 rounded-md border border-[var(--glass-border)]"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Development Box - Spans 6 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 md:col-span-6 row-span-2 rounded-3xl bg-[#0a0a0f] border border-[var(--glass-border)] p-8 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--accent-primary)_0%,_transparent_60%)] opacity-5"></div>

          <div className="flex items-center justify-between mb-6">
            <Code2 className="w-8 h-8 text-white" />
            <Terminal className="w-5 h-5 text-[var(--foreground)]/30" />
          </div>
          <h4 className="font-bold text-2xl text-white mb-4">Engineering</h4>
          <p className="text-[var(--foreground)]/60 text-sm mb-6 max-w-sm">
            Building robust, scalable applications and intuitive interfaces
            using modern frontend tools and reliable backend ecosystems.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            {codeSkills.map((s) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-2 bg-white/5 text-white/90 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Design Box - Spans 6 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 md:col-span-6 row-span-2 rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 flex flex-col backdrop-blur-md relative overflow-hidden group hover:border-[var(--accent-secondary)]/30 transition-colors"
        >
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--accent-secondary)] rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-500"></div>

          <PenTool className="w-8 h-8 text-[var(--accent-secondary)] mb-6" />
          <h4 className="font-bold text-2xl mb-4">Design & UI/UX</h4>
          <p className="text-[var(--foreground)]/60 text-sm mb-6 max-w-sm">
            Crafting beautiful, accessible, and user-centric interfaces. Every
            detail and layout is planned to look premium.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {designSkills.map((s) => (
              <span
                key={s}
                className="text-sm font-medium px-4 py-2 bg-[var(--background)] rounded-full border border-[var(--glass-border)] text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
