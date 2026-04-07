"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "SypherEngine",
      description: "A robust Java-based game engine and development framework, abstracting complex backend logic to easily build 2D Tile based games with high performance.",
      techList: ["Java", "Game Engine Architecture", "OOP", "Graphics"],
      github: "https://github.com/SypherEngine/SypherEngine",
      live: "https://sypherengine.github.io/",
      gradient: "from-indigo-600/20 via-purple-600/20 to-fuchsia-600/20",
      accent: "text-indigo-400"
    },
    {
      title: "Crypt Language",
      description: "A fully custom Programming Language built on Java targeting the JVM, featuring its own lexer, parser, and interpreter for deep systems understanding.",
      techList: ["Java", "Interpreter", "Lexical Analysis", "Language Design"],
      github: "https://github.com/Crypt-Language/Crypt",
      live: "#",
      gradient: "from-blue-600/20 via-cyan-600/20 to-teal-600/20",
      accent: "text-blue-400"
    },
  ];

  return (
    <section id="projects" className="py-32 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <span className="text-[var(--accent-primary)] font-mono text-sm tracking-widest uppercase mb-4">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
          Featured Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} {...project} />
        ))}
      </div>
    </section>
  );
}
