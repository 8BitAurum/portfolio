"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300">
      <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-xl rounded-full px-6 py-3 flex justify-between items-center transition-colors duration-300">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold font-mono tracking-tighter text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
          >
            <Sparkles size={20} className="hidden sm:block" />
            <span>8BitAurum</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--foreground)]/80 hover:text-[var(--accent-primary)] transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-[var(--foreground)]/5 transition-colors text-[var(--foreground)]"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--foreground)] p-2 rounded-full hover:bg-[var(--foreground)]/5 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-3xl w-full p-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-2xl text-base font-medium text-[var(--foreground)] hover:text-white hover:bg-[var(--accent-primary)] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
