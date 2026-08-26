import PipelineDiagram from "@/components/PipelineDiagram";
import {
  ProjectSection,
  SubHeading,
  TagRow,
  ResultsGrid,
  ChallengesList,
  LearningsList,
  LinkRow,
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
        Detailed case studies — architecture, technical decisions and
        results — for the internships and personal projects behind my CV.
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
            <SubHeading>Challenges &amp; technical decisions</SubHeading>
            <div className="mt-3">
              <ChallengesList
                items={[
                  {
                    challenge:
                      "Raw SIEM alerts arrived faster than they could be manually triaged, creating a backlog similar to real SOC alert fatigue.",
                    decision:
                      "Built a Shuffle workflow to auto-deduplicate alerts and enrich them with VirusTotal/MISP reputation data before they ever reached an analyst.",
                  },
                  {
                    challenge:
                      "Needed to prove detection actually worked, not just that tools were installed.",
                    decision:
                      "Ran attack simulations mapped to specific MITRE ATT&CK techniques and checked each one produced a corresponding alert end to end.",
                  },
                ]}
              />
            </div>
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

          <div>
            <SubHeading>Key learnings</SubHeading>
            <div className="mt-2">
              <LearningsList
                items={[
                  "A SOC's value comes from the workflow connecting tools, not from any single tool in isolation.",
                  "Automating enrichment first is what actually reduces analyst workload — detection alone just moves the bottleneck downstream.",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Links</SubHeading>
            <div className="mt-2">
              <LinkRow
                links={[
                  {
                    label: "GitHub Repo",
                    href: "https://github.com/Marouane-2005/soc-lab-chu",
                  },
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

          <div>
            <SubHeading>Challenges &amp; technical decisions</SubHeading>
            <div className="mt-3">
              <ChallengesList
                items={[
                  {
                    challenge:
                      "A flat network meant a single compromised host in the app tier could reach the database directly.",
                    decision:
                      "Segmented the infrastructure into DMZ, app and database zones with OVN security groups, so lateral movement requires crossing an explicit, monitored boundary.",
                  },
                  {
                    challenge:
                      "Manual hardening checklists are easy to apply inconsistently across hosts.",
                    decision:
                      "Benchmarked every host against CIS controls with Lynis after hardening, turning a checklist into a repeatable, scored audit.",
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Results</SubHeading>
            <div className="mt-2">
              <ResultsGrid
                results={[
                  { value: "3", label: "Segmented network zones" },
                  { value: "5+", label: "Hardening controls applied" },
                  { value: "CIS", label: "Benchmark-validated" },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Key learnings</SubHeading>
            <div className="mt-2">
              <LearningsList
                items={[
                  "Network segmentation is only as strong as the security group rules enforcing it — each zone boundary needs to be tested, not assumed.",
                  "Hardening and monitoring are complementary: Wazuh caught misconfigurations that static hardening alone would have missed.",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Links</SubHeading>
            <div className="mt-2">
              <LinkRow
                links={[
                  {
                    label: "GitHub Repo",
                    href: "https://github.com/Marouane-2005/private-cloud-hardening",
                  },
                ]}
              />
            </div>
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

          <div>
            <SubHeading>Challenges &amp; technical decisions</SubHeading>
            <div className="mt-3">
              <ChallengesList
                items={[
                  {
                    challenge:
                      "CVE, VirusTotal, Shodan and OSINT sources each return data in different formats with different rate limits.",
                    decision:
                      "Normalized every source into a common IOC schema before correlation, and queued enrichment calls to stay under each API's rate limit.",
                  },
                  {
                    challenge:
                      "Raw IOC lists don't tell an analyst what to prioritize first.",
                    decision:
                      "Mapped correlated threats to MITRE ATT&CK techniques so the dashboard surfaces context, not just a flat list of indicators.",
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Results</SubHeading>
            <div className="mt-2">
              <ResultsGrid
                results={[
                  { value: "4", label: "Correlated data sources" },
                  { value: "Real-time", label: "Dashboard refresh" },
                  { value: "Docker", label: "Containerized deployment" },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Key learnings</SubHeading>
            <div className="mt-2">
              <LearningsList
                items={[
                  "Correlation is what turns raw threat data into intelligence — a list of IOCs without ATT&CK context is just noise.",
                  "Containerizing the pipeline early made it trivial to redeploy the platform in a clean environment for demos.",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Links</SubHeading>
            <div className="mt-2">
              <LinkRow
                links={[
                  {
                    label: "GitHub Repo",
                    href: "https://github.com/Marouane-2005/cti-platform",
                  },
                ]}
              />
            </div>
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

          <div>
            <SubHeading>Challenges &amp; technical decisions</SubHeading>
            <div className="mt-3">
              <ChallengesList
                items={[
                  {
                    challenge:
                      "Traditional password-based auth means the backend must store something derived from the user's secret, which is itself a liability if breached.",
                    decision:
                      "Used a Zero-Knowledge Proof challenge-response scheme so the server can verify identity without ever holding a value that could be reversed into the credential.",
                  },
                  {
                    challenge:
                      "A challenge-response exchange is still vulnerable to interception if the channel itself isn't protected.",
                    decision:
                      "Layered asymmetric cryptography on top of the protocol specifically to close that man-in-the-middle gap.",
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Results</SubHeading>
            <div className="mt-2">
              <ResultsGrid
                results={[
                  { value: "0", label: "Raw credentials stored" },
                  { value: "ZKP", label: "Auth protocol" },
                  { value: "JWT", label: "Session management" },
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Key learnings</SubHeading>
            <div className="mt-2">
              <LearningsList
                items={[
                  "Zero-Knowledge Proofs make a strong theoretical guarantee, but the surrounding transport still needs its own protection — crypto primitives don't compose safely by default.",
                  "Designing the protocol before writing any Android/Spring Boot code made the client-server contract far easier to implement correctly.",
                ]}
              />
            </div>
          </div>

          <div>
            <SubHeading>Links</SubHeading>
            <div className="mt-2">
              <LinkRow
                links={[
                  {
                    label: "GitHub Repo",
                    href: "https://github.com/Marouane-2005/smart-lock-zkp",
                  },
                ]}
              />
            </div>
          </div>
        </ProjectSection>
      </div>
    </div>
  );
}