import Timeline from "@/components/Timeline";
import { TagRow } from "@/components/ProjectSection";

const timeline = [
  {
    period: "2024 — Present",
    title: "Engineering Degree — Cybersecurity, Cloud & Mobile Computing",
    place: "ENSIAS, Rabat, Morocco",
    detail:
      "Specializing in cybersecurity engineering with a focus on cloud infrastructure and mobile computing, alongside hands-on SOC and threat intelligence work.",
  },
  {
    period: "2022 — 2024",
    title: "Classe Préparatoire — Math-Physics",
    place: "CPGE Moulay Driss, Fès, Morocco",
    detail:
      "Intensive preparatory program in mathematics and physics, building the analytical foundation for engineering studies.",
  },
];

const skillGroups = [
  {
    label: "SOC & Detection",
    tags: ["Elastic Security", "Wazuh", "Splunk", "SIEM", "EDR", "Detection Engineering"],
  },
  {
    label: "SOAR & Incident Response",
    tags: ["Shuffle", "TheHive", "Cortex", "Alert Triage", "Case Management"],
  },
  {
    label: "Threat Intelligence",
    tags: ["MISP", "VirusTotal", "Shodan", "OSINT", "MITRE ATT&CK", "IOC Enrichment"],
  },
  {
    label: "Network & Application Security",
    tags: ["Suricata", "pfSense", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "ModSecurity"],
  },
  {
    label: "Cloud & Infrastructure",
    tags: ["OpenStack", "AWS", "Docker", "VMware", "Linux", "Windows Server"],
  },
  {
    label: "Programming",
    tags: ["Python", "Java", "C", "JavaScript"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
        About
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
        Building the systems that stand between infrastructure and the
        people trying to break it.
      </h1>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-muted">
        I&apos;m a cybersecurity engineering student at ENSIAS, based in
        Fès, Morocco. My focus sits at the intersection of{" "}
        <span className="text-text">SOC operations</span>,{" "}
        <span className="text-text">threat intelligence</span> and{" "}
        <span className="text-text">cloud security</span> — I like
        environments where detection, automation and infrastructure hardening
        come together into one coherent defense. Outside of coursework, I
        build labs that mirror what a real SOC looks like end to end, from
        raw alerts to automated response.
      </p>

      {/* Timeline */}
      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
          Education
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text">
          Background
        </h2>
        <div className="mt-8">
          <Timeline items={timeline} />
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
          Skills
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text">
          Technical stack
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-panel-border bg-panel p-5"
            >
              <p className="font-display text-sm font-medium text-text">
                {group.label}
              </p>
              <div className="mt-3">
                <TagRow tags={group.tags} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mt-20">
        <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
          Languages
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-text">
          Communication
        </h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-panel-border bg-panel-border sm:grid-cols-3">
          {[
            { lang: "Arabic", level: "Native" },
            { lang: "French", level: "Fluent" },
            { lang: "English", level: "Fluent" },
          ].map((l) => (
            <div key={l.lang} className="bg-panel px-6 py-6">
              <p className="font-display text-base font-medium text-text">
                {l.lang}
              </p>
              <p className="mt-1 text-sm text-text-muted">{l.level}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
