type Severity = "info" | "low" | "medium" | "high" | "critical";

type AlertRow = {
  time: string;
  source: string;
  technique: string;
  severity: Severity;
};

const severityColor: Record<Severity, string> = {
  info: "bg-sev-info",
  low: "bg-sev-low",
  medium: "bg-sev-medium",
  high: "bg-sev-high",
  critical: "bg-sev-critical",
};

const alerts: AlertRow[] = [
  { time: "14:02:11", source: "10.0.3.21", technique: "T1110 Brute Force", severity: "medium" },
  { time: "14:02:38", source: "10.0.1.14", technique: "T1059 PowerShell", severity: "high" },
  { time: "14:03:02", source: "10.0.4.7", technique: "T1071 C2 Beacon", severity: "critical" },
  { time: "14:03:19", source: "10.0.2.9", technique: "T1046 Port Scan", severity: "info" },
  { time: "14:03:47", source: "10.0.1.33", technique: "T1078 Valid Accounts", severity: "low" },
  { time: "14:04:05", source: "10.0.5.2", technique: "T1055 Process Injection", severity: "high" },
  { time: "14:04:29", source: "10.0.3.18", technique: "T1490 Inhibit Recovery", severity: "critical" },
  { time: "14:04:51", source: "10.0.2.44", technique: "T1018 Remote Discovery", severity: "info" },
];

function Row({ alert }: { alert: AlertRow }) {
  return (
    <div className="flex items-center gap-3 border-b border-panel-border/60 px-4 py-2.5 font-mono text-[11px]">
      <span
        className={`pulse-dot h-1.5 w-1.5 shrink-0 rounded-full ${severityColor[alert.severity]}`}
        aria-hidden
      />
      <span className="text-text-dim">{alert.time}</span>
      <span className="text-text-muted">{alert.source}</span>
      <span className="flex-1 truncate text-text">{alert.technique}</span>
      <span className="uppercase text-text-muted">{alert.severity}</span>
    </div>
  );
}

export default function AlertStream() {
  return (
    <div
      className="relative h-full overflow-hidden rounded-lg border border-panel-border bg-panel"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-panel-border px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          live_alert_stream.log
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-sev-low">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sev-low" />
          streaming
        </span>
      </div>
      <div className="h-64 overflow-hidden">
        <div className="stream-track">
          {[...alerts, ...alerts].map((alert, i) => (
            <Row alert={alert} key={i} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-panel to-transparent" />
    </div>
  );
}
