export default function Footer() {
  return (
    <footer className="w-full flex-shrink-0 border-t border-[var(--glass-border)] bg-[var(--background)] text-center py-8 transition-colors duration-300">
      <div className="font-mono text-sm text-[var(--foreground)]/60">
        <p>Built with Next.js, Framer Motion & TailwindCSS</p>
        <p className="mt-3 group cursor-default">
          Designed & Built with love by{" "}
          <span className="text-[var(--accent-primary)] group-hover:text-[var(--accent-secondary)] transition-colors cursor-pointer">
            Siva
          </span>{" "}
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
