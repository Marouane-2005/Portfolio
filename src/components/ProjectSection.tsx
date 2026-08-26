import type { ReactNode } from "react";

type Status = "completed" | "in-progress";

const statusLabel: Record<Status, string> = {
  completed: "Completed",
  "in-progress": "In progress",
};

const statusColor: Record<Status, string> = {
  completed: "text-sev-low border-sev-low/40",
  "in-progress": "text-sev-medium border-sev-medium/40",
};

export function ProjectSection({
  id,
  title,
  period,
  status,
  role,
  children,
}: {
  id: string;
  title: string;
  period: string;
  status: Status;
  role: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-panel-border py-16 first:pt-0 last:border-b-0"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-widest ${statusColor[status]}`}
        >
          {statusLabel[status]}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          {period}
        </span>
      </div>
      <h2 className="mt-3 font-display text-2xl font-semibold text-text sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1 font-mono text-xs text-text-muted">{role}</p>
      <div className="mt-8 space-y-8">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-widest text-text-dim">
      {children}
    </p>
  );
}

export function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded border border-panel-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ResultsGrid({
  results,
}: {
  results: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-panel-border bg-panel-border sm:grid-cols-3">
      {results.map((r) => (
        <div key={r.label} className="bg-panel px-5 py-5">
          <p className="font-display text-2xl font-semibold text-text">
            {r.value}
          </p>
          <p className="mt-1 text-xs text-text-muted">{r.label}</p>
        </div>
      ))}
    </div>
  );
}

type Callout = {
  challenge: string;
  decision: string;
};

export function ChallengesList({ items }: { items: Callout[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg border border-panel-border bg-panel p-4"
        >
          <p className="text-sm text-text">
            <span className="font-mono text-[10px] uppercase tracking-widest text-sev-high">
              Challenge —{" "}
            </span>
            {item.challenge}
          </p>
          <p className="mt-2 text-sm text-text-muted">
            <span className="font-mono text-[10px] uppercase tracking-widest text-sev-low">
              Decision —{" "}
            </span>
            {item.decision}
          </p>
        </div>
      ))}
    </div>
  );
}

export function LearningsList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-text-muted">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sev-info" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LinkRow({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-panel-border px-3.5 py-2 font-mono text-[11px] uppercase tracking-widest text-text-muted transition-colors hover:border-sev-info hover:text-text"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}