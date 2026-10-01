import Link from "next/link";
import StatsPanel from "@/components/StatsPanel";

const focusAreas = [
  {
    label: "SOC Operations",
    detail: "SIEM/EDR, alert triage, detection engineering",
  },
  {
    label: "Threat Intelligence",
    detail: "IOC enrichment, MITRE ATT&CK, OSINT",
  },
  {
    label: "Cloud Security",
    detail: "OpenStack, AWS, network segmentation, hardening",
  },
];

const featuredProjects = [
  {
    title: "SOC Lab — CHU Hassan II",
    description:
      "End-to-end SOC environment: Elastic SIEM/EDR, Suricata, Shuffle SOAR, MISP, TheHive and Cortex, with automated alert investigation and MITRE ATT&CK-mapped red-team simulations.",
    tags: ["Elastic", "Shuffle", "MISP", "TheHive", "MITRE ATT&CK"],
    href: "/projects#soc-lab",
  },
  {
    title: "Private Cloud Hardening",
    description:
      "OpenStack private cloud segmented into DMZ, database and management zones, hardened with UFW, Fail2ban, ModSecurity and Wazuh, validated through pentesting.",
    tags: ["OpenStack", "OVN", "Wazuh", "CIS Benchmark"],
    href: "/projects#cloud-hardening",
  },
  {
    title: "Cyber Threat Intelligence Platform",
    description:
      "CTI pipeline correlating CVE, VirusTotal, Shodan and OSINT sources for continuous IOC enrichment, containerized and served through a real-time dashboard.",
    tags: ["VirusTotal", "Shodan", "OSINT", "Docker"],
    href: "/projects#cti-platform",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
            Cybersecurity Engineering Student — ENSIAS
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl">
            Marouane Chtita builds systems that watch,
            <span className="text-text-muted"> detect, and respond.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted">
            Junior cybersecurity engineer focused on SOC operations, threat
            intelligence and cloud security — from designing detection
            pipelines to hardening infrastructure end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded bg-text px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded border border-panel-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-text transition-colors hover:border-sev-info"
            >
              Download CV
            </Link>
            <a
              href="https://github.com/Marouane-2005"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-panel-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:border-sev-info hover:text-text"
            >
              GitHub
            </a>
          </div>
        </div>

        <StatsPanel />
      </section>

      {/* Focus areas */}
      <section className="grid gap-px overflow-hidden rounded-lg border border-panel-border bg-panel-border sm:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.label} className="bg-panel px-6 py-6">
            <p className="font-display text-sm font-medium text-text">
              {area.label}
            </p>
            <p className="mt-1.5 text-sm text-text-muted">{area.detail}</p>
          </div>
        ))}
      </section>

      {/* Featured projects */}
      <section className="py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-text">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-text sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col rounded-lg border border-panel-border bg-panel p-6 transition-colors hover:border-sev-info"
            >
              <h3 className="font-display text-lg font-medium text-text">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-panel-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mb-24 rounded-lg border border-panel-border bg-panel px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-semibold text-text">
          Open to SOC, Threat Intelligence &amp; Cloud Security roles
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-text-muted">
          Currently completing my engineering degree at ENSIAS — available
          for internships and junior positions.
        </p>
        <a
          href="mailto:marouanechtita@gmail.com"
          className="mt-6 inline-block rounded bg-text px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}