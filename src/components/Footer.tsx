export default function Footer() {
  return (
    <footer className="mt-auto border-t border-panel-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} Marouane Chtita — built with Next.js
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-text-muted">
          <a
            href="mailto:marouanechtita@gmail.com"
            className="transition-colors hover:text-text"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/marouane-chtita"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Marouane-2005"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
