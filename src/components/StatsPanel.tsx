type Stat = {
  value: string;
  label: string;
  accent?: string;
};

const stats: Stat[] = [
  { value: "4", label: "Documented projects", accent: "text-sev-info" },
  { value: "3", label: "Certifications", accent: "text-sev-low" },
  { value: "10/14", label: "MITRE ATT&CK tactics covered", accent: "text-sev-medium" },
  { value: "20+", label: "Tools & technologies", accent: "text-sev-high" },
];

export default function StatsPanel() {
  return (
    <div className="overflow-hidden rounded-lg border border-panel-border bg-panel">
      <div className="border-b border-panel-border px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          At a glance
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-panel-border">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-panel px-5 py-6">
            <p
              className={`font-display text-3xl font-semibold ${stat.accent ?? "text-text"}`}
            >
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs leading-snug text-text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}