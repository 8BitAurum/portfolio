"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, FolderGit2 } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  techList: string[];
  github?: string;
  live?: string;
  gradient: string;
  accent: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  techList,
  github,
  live,
  gradient,
  accent,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col group h-full"
    >
      <div className="relative flex flex-col h-full rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[var(--accent-primary)]/50 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] group-hover:-translate-y-1">
        {/* Visual Area (Top) */}
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-[var(--glass-border)]">
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 group-hover:opacity-100 mix-blend-screen transition-opacity duration-700`}></div>
          
          <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
             <div className="w-[85%] h-[85%] border border-white/10 rounded-2xl flex flex-col overflow-hidden bg-black/20 backdrop-blur-xl shadow-2xl">
                <div className="h-6 border-b border-white/5 flex items-center px-3 gap-1.5 bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <div className="w-3/4 h-3 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="w-1/2 h-3 bg-white/5 rounded-full animate-pulse delay-75"></div>
                  <div className="w-5/6 h-3 bg-white/5 rounded-full animate-pulse delay-150"></div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="col-span-1 h-16 bg-[var(--accent-primary)]/20 rounded-lg"></div>
                    <div className="col-span-2 h-16 bg-white/5 rounded-lg"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Content Area (Bottom) */}
        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-3 mb-4">
            <FolderGit2 className={`w-8 h-8 ${accent}`} />
            <h3 className="text-xl lg:text-2xl font-bold text-[var(--foreground)] tracking-tight">
              {title}
            </h3>
          </div>
          
          <p className="text-[var(--foreground)]/80 text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          <ul className="flex flex-wrap gap-2 font-mono text-xs text-[var(--foreground)]/60 mb-6 mt-auto">
            {techList.map((tag, idx) => (
              <li key={idx} className="px-2 py-1 rounded-full border border-[var(--glass-border)] bg-black/10">
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 items-center pt-4 border-t border-[var(--glass-border)]/50 mt-auto">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-sm hover:text-[var(--accent-primary)] transition-colors">
                <Code className="w-4 h-4" /> Source
              </a>
            )}
            {live && live !== "#" && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium text-sm hover:text-[var(--accent-secondary)] transition-colors">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
