type TimelineItem = {
  period: string;
  title: string;
  place: string;
  detail: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-panel-border pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-bg bg-sev-info"
            aria-hidden
          />
          <p className="font-mono text-[11px] uppercase tracking-widest text-text-dim">
            {item.period}
          </p>
          <p className="mt-1 font-display text-base font-medium text-text">
            {item.title}
          </p>
          <p className="text-sm text-text-muted">{item.place}</p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-text-muted">
            {item.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
