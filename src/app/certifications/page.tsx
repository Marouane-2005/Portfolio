const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    detail:
      "Foundational understanding of AWS Cloud concepts, core services, security, architecture and billing.",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    detail:
      "Network fundamentals — addressing, protocols, media, and the OSI/TCP-IP models.",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    detail:
      "Configuring and troubleshooting switched and routed networks, plus wireless LAN fundamentals.",
  },
];

const inProgress = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services Training and Certification",
  },
];

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
        Credentials
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
        Certifications
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
        Cloud and networking fundamentals, with more security-focused
        certifications planned.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col rounded-lg border border-panel-border bg-panel p-6"
          >
            <span className="w-fit rounded border border-sev-low/40 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-sev-low">
              Earned
            </span>
            <h2 className="mt-4 font-display text-base font-medium text-text">
              {cert.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-text-dim">
              {cert.issuer}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
              {cert.detail}
            </p>
          </div>
        ))}

        {inProgress.map((cert) => (
          <div
            key={cert.title}
            className="flex flex-col rounded-lg border border-dashed border-panel-border p-6"
          >
            <span className="w-fit rounded border border-sev-medium/40 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-sev-medium">
              In progress
            </span>
            <h2 className="mt-4 font-display text-base font-medium text-text-muted">
              {cert.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-text-dim">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
