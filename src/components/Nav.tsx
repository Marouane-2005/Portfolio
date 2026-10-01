import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/labs", label: "Labs" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-panel-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-tight text-text"
        >
          MC
          <span className="ml-1 text-text-dim">/ portfolio</span>
        </Link>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/Marouane-2005"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-panel-border px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-sev-info hover:text-text"
        >
          GitHub ↗
        </a>
      </nav>
      {/* mobile nav */}
      <ul className="flex items-center gap-5 overflow-x-auto border-t border-panel-border px-6 py-2 sm:hidden">
        {links.map((link) => (
          <li key={link.href} className="shrink-0">
            <Link
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
