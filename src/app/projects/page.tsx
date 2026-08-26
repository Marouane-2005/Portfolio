import PipelineDiagram from "@/components/PipelineDiagram";
import {
  ProjectSection,
  SubHeading,
  TagRow,
  ResultsGrid,
} from "@/components/ProjectSection";

const projectIndex = [
  { id: "soc-lab", label: "SOC Lab — CHU Hassan II" },
  { id: "cloud-hardening", label: "Private Cloud Hardening" },
  { id: "cti-platform", label: "Cyber Threat Intelligence Platform" },
  { id: "smart-lock-zkp", label: "Smart Lock with ZKP" },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
        Selected work
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
        Detailed case studies — architecture, pipelines and results — for the
        internships and personal projects behind my CV.
      </p>

      {/* Quick index */}
      <nav className="mt-8 flex flex-wrap gap-2">
        {projectIndex.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="rounded border border-panel-border px-3 py-1.5 font-mono text-[11px] text-text-muted transition-colors hover:border-sev-info hover:text-text"
          >
            {p.label}
          </a>
        ))}
      </nav>

      <div className="mt-16">
        {/* ---------------- SOC LAB ---------------- */}
        <ProjectSection
          id="soc-lab"
          title="SOC Lab — CHU Hassan II"
          period="Jul – Aug 2026"
          status="completed"
          role="Cybersecurity Intern — IT & Security Department, Fès"
        >
          <div>
            <SubHeading>Overview</SubHeading>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text">
              Designed and deployed an end-to-end Security Operations Center
              in an isolated VMware lab: detection, enrichment, case
              management and automated response, validated against real
              attack simulations mapped to MITRE ATT&CK.
            </p>
          </div>

          <div>
            <SubHeading>Objectives</SubHeading>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
              <li>Centralize detection across network, host and web layers</li>
              <li>Automate alert triage to reduce manual analyst workload</li>
              <li>
                Validate detection coverage through red-team simulations
              </li>
            </ul>
          </div>

          <div>
            <SubHeading>Detection &amp; response pipeline</SubHeading>
            <div className="mt-3">
              <PipelineDiagram
                steps={[
                  "Attack / Traffic",
                  "pfSense + Suricata",
                  "Elastic SIEM/EDR",
                  "Shuffle (dedup + enrich)",
                  "VirusTotal / MISP",
                  "TheHive case",
                  "Cortex analysis",
                  "Analyst response",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Technologies</SubHeading>
            <div className="mt-2">
              <TagRow
                tags={[
                  "Elastic Security",
                  "Suricata",
                  "pfSense",
                  "Shuffle (SOAR)",
                  "MISP",
                  "TheHive",
                  "Cortex",
                  "ModSecurity",
                  "OWASP CRS",
                  "MITRE ATT&CK",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>What I did</SubHeading>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
              <li>
                Built the isolated VMware lab and integrated all SOC
                components end to end
              </li>
              <li>
                Automated alert extraction, deduplication, VirusTotal/MISP
                enrichment, email notification and case creation in TheHive
                via Shuffle
              </li>
              <li>
                Ran red-team simulations mapped to MITRE ATT&CK to validate
                detection and response
              </li>
              <li>
                Evaluated web attack protection with ModSecurity and OWASP
                CRS
              </li>
            </ul>
          </div>

          <div>
            <SubHeading>Results</SubHeading>
            <div className="mt-2">
              <ResultsGrid
                results={[
                  { value: "8", label: "Integrated SOC tools" },
                  { value: "1", label: "Automated triage pipeline" },
                  { value: "ATT&CK", label: "Mapped simulations" },
                ]}
              />
            </div>
          </div>
        </ProjectSection>

        {/* ---------------- CLOUD HARDENING ---------------- */}
        <ProjectSection
          id="cloud-hardening"
          title="Private Cloud Hardening"
          period="2026 — End of year project (PFA)"
          status="completed"
          role="Personal / academic project"
        >
          <div>
            <SubHeading>Overview</SubHeading>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text">
              Built and secured an OpenStack private cloud with segmented DMZ,
              database and management zones, hardened with defense-in-depth
              controls and validated through penetration testing.
            </p>
          </div>

          <div>
            <SubHeading>Architecture</SubHeading>
            <div className="mt-3">
              <PipelineDiagram
                steps={[
                  "Internet",
                  "DMZ (OVN security groups)",
                  "App tier",
                  "Database tier",
                  "Management network (isolated)",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Technologies</SubHeading>
            <div className="mt-2">
              <TagRow
                tags={[
                  "OpenStack",
                  "OVN",
                  "UFW",
                  "Fail2ban",
                  "ModSecurity",
                  "OWASP CRS",
                  "Wazuh",
                  "Kali Linux",
                  "Lynis",
                  "CIS Benchmark",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>What I did</SubHeading>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
              <li>
                Segmented the network into DMZ, database and management
                zones using OVN security groups
              </li>
              <li>
                Implemented defense-in-depth: SSH hardening, UFW, Fail2ban,
                ModSecurity/OWASP CRS and Wazuh for centralized monitoring
              </li>
              <li>
                Validated hardening through penetration testing from Kali
                Linux and benchmarked with Lynis against CIS controls
              </li>
            </ul>
          </div>
        </ProjectSection>

        {/* ---------------- CTI PLATFORM ---------------- */}
        <ProjectSection
          id="cti-platform"
          title="Cyber Threat Intelligence Platform"
          period="Jul – Aug 2025"
          status="completed"
          role="Cybersecurity Intern — Symolia Groupe, Rabat"
        >
          <div>
            <SubHeading>Overview</SubHeading>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text">
              Designed and deployed a Cyber Threat Intelligence pipeline
              correlating multiple external sources for continuous IOC
              enrichment and SOC-oriented reporting.
            </p>
          </div>

          <div>
            <SubHeading>Pipeline</SubHeading>
            <div className="mt-3">
              <PipelineDiagram
                steps={[
                  "CVE feed",
                  "VirusTotal / Shodan / OSINT",
                  "Correlation engine",
                  "MITRE ATT&CK mapping",
                  "Dashboard (Docker)",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Technologies</SubHeading>
            <div className="mt-2">
              <TagRow
                tags={[
                  "CVE data",
                  "VirusTotal",
                  "Shodan",
                  "OSINT",
                  "MITRE ATT&CK",
                  "Docker",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>What I did</SubHeading>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
              <li>
                Integrated CVE, VirusTotal, Shodan and OSINT sources into a
                single enrichment pipeline
              </li>
              <li>
                Correlated identified threats with MITRE ATT&CK for
                contextualization and prioritization
              </li>
              <li>
                Built a real-time dashboard and containerized the platform
                with Docker for scalable deployment
              </li>
            </ul>
          </div>
        </ProjectSection>

        {/* ---------------- SMART LOCK ZKP ---------------- */}
        <ProjectSection
          id="smart-lock-zkp"
          title="Smart Lock with ZKP Authentication"
          period="2025 — End of year project (PFA)"
          status="completed"
          role="Personal / academic project"
        >
          <div>
            <SubHeading>Overview</SubHeading>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text">
              A secure smart lock system authenticating users with
              Zero-Knowledge Proofs — no raw credentials ever transmitted or
              stored.
            </p>
          </div>

          <div>
            <SubHeading>Architecture</SubHeading>
            <div className="mt-3">
              <PipelineDiagram
                steps={[
                  "Android client (Java)",
                  "Challenge-response (ZKP)",
                  "Spring Boot backend",
                  "JWT session",
                  "Lock actuation",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Technologies</SubHeading>
            <div className="mt-2">
              <TagRow
                tags={[
                  "Zero-Knowledge Proofs",
                  "Asymmetric cryptography",
                  "Android (Java)",
                  "Spring Boot",
                  "Spring Security",
                  "JWT",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>What I did</SubHeading>
            <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
              <li>
                Designed a ZKP-based authentication protocol so credentials
                are never transmitted or stored in raw form
              </li>
              <li>
                Implemented asymmetric cryptography for the challenge-response
                exchange to prevent man-in-the-middle attacks
              </li>
              <li>
                Integrated an Android client with a Spring Boot backend
                secured via JWT session management
              </li>
            </ul>
          </div>
        </ProjectSection>
      </div>
    </div>
  );
}
