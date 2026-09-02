import PipelineDiagram from "@/components/PipelineDiagram";
import Gallery from "@/components/Gallery";
import {
  ProjectSection,
  SubHeading,
  TagRow,
  ResultsGrid,
  ChallengesList,
  LearningsList,
  LinkRow,
} from "@/components/ProjectSection";

type ProjectStatus = "completed" | "in-progress" | "planned";

interface ChallengeItem {
  challenge: string;
  decision: string;
}

interface ScreenshotItem {
  src: string;
  caption: string;
}

interface ResultItem {
  value: string;
  label: string;
}

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  /** Anchor id, also used for the quick-index nav */
  id: string;
  /** Short label shown in the quick-index nav */
  navLabel: string;
  title: string;
  period: string;
  status: ProjectStatus;
  role: string;
  overview: string;
  /** Only some projects (e.g. internships) list explicit objectives */
  objectives?: string[];
  pipeline?: {
    heading: string; // e.g. "Architecture", "Pipeline", "Detection & response pipeline"
    steps: string[];
  };
  screenshots?: ScreenshotItem[];
  technologies: string[];
  whatIDid: string[];
  challenges: ChallengeItem[];
  results: ResultItem[];
  learnings: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    id: "soc-lab",
    navLabel: "SOC Lab — CHU Hassan II",
    title: "SOC Lab — CHU Hassan II",
    period: "Jul – Aug 2026",
    status: "completed",
    role: "Cybersecurity Intern — IT & Security Department, Fès",
    overview:
      "Designed and deployed an end-to-end Security Operations Center in an isolated VMware lab: detection, enrichment, case management and automated response, validated against real attack simulations mapped to MITRE ATT&CK.",
    objectives: [
      "Centralize detection across network, host and web layers",
      "Automate alert triage to reduce manual analyst workload",
      "Validate detection coverage through red-team simulations",
    ],
    pipeline: {
      heading: "Detection & response pipeline",
      steps: [
        "Attack / Traffic",
        "pfSense + Suricata",
        "Elastic SIEM/EDR",
        "Shuffle (dedup + enrich)",
        "VirusTotal / MISP",
        "TheHive case",
        "Cortex analysis",
        "Analyst response",
      ],
    },
    screenshots: [
      {
        src: "/projects/soc-lab/architecture.jpg",
        caption: "Global architecture — detection, SOAR, response and threat intel",
      },
      {
        src: "/projects/soc-lab/network-topology.jpg",
        caption: "Network topology — isolated lab, VM roles and traffic flows",
      },
      {
        src: "/projects/soc-lab/kibana-rules.jpg",
        caption: "1,745 detection rules enabled in Kibana Security",
      },
      {
        src: "/projects/soc-lab/shuffle-workflow.jpg",
        caption: "Shuffle SOAR workflow — extraction, enrichment, notification",
      },
      {
        src: "/projects/soc-lab/thehive-case.jpg",
        caption: "TheHive case auto-populated with standardized investigation tasks",
      },
      {
        src: "/projects/soc-lab/cortex-responders.jpg",
        caption: "5 Cortex responders — endpoint, firewall and WAF containment",
      },
    ],
    technologies: [
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
    ],
    whatIDid: [
      "Built the isolated VMware lab and integrated all SOC components end to end",
      "Automated alert extraction, deduplication, VirusTotal/MISP enrichment, email notification and case creation in TheHive via Shuffle",
      "Ran red-team simulations mapped to MITRE ATT&CK to validate detection and response",
      "Evaluated web attack protection with ModSecurity and OWASP CRS",
    ],
    challenges: [
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
    ],
    results: [
      { value: "8", label: "Integrated SOC tools" },
      { value: "1", label: "Automated triage pipeline" },
      { value: "ATT&CK", label: "Mapped simulations" },
    ],
    learnings: [
      "A SOC's value comes from the workflow connecting tools, not from any single tool in isolation.",
      "Automating enrichment first is what actually reduces analyst workload — detection alone just moves the bottleneck downstream.",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Marouane-2005/soc-lab-chu",
      },
    ],
  },
  {
    id: "cloud-hardening",
    navLabel: "Private Cloud Hardening",
    title: "Private Cloud Hardening",
    period: "2026 — End of year project (PFA)",
    status: "completed",
    role: "Personal / academic project",
    overview:
      "Built and secured an OpenStack private cloud with segmented DMZ, database and management zones, hardened with defense-in-depth controls and validated through penetration testing.",
    pipeline: {
      heading: "Architecture",
      steps: [
        "Internet",
        "DMZ (OVN security groups)",
        "App tier",
        "Database tier",
        "Management network (isolated)",
      ],
    },
    screenshots: [
      {
        src: "/projects/cloud-hardening/network-topology.jpg",
        caption: "Network topology — pfSense, DMZ/DB/Mgmt zones, Wazuh agents",
      },
      {
        src: "/projects/cloud-hardening/security-groups.jpg",
        caption: "OpenStack security groups — per-tier network isolation",
      },
      {
        src: "/projects/cloud-hardening/pfsense-rules.jpg",
        caption: "pfSense WAN filtering rules",
      },
      {
        src: "/projects/cloud-hardening/wazuh-dashboard.jpg",
        caption: "Wazuh security events dashboard — 1,245 events, MITRE ATT&CK breakdown",
      },
      {
        src: "/projects/cloud-hardening/lynis-after.jpg",
        caption: "Lynis hardening index — 78/100 after remediation (up from 58)",
      },
      {
        src: "/projects/cloud-hardening/hydra-blocked.jpg",
        caption: "Hydra brute-force attempt blocked by Fail2ban",
      },
    ],
    technologies: [
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
    ],
    whatIDid: [
      "Segmented the network into DMZ, database and management zones using OVN security groups",
      "Implemented defense-in-depth: SSH hardening, UFW, Fail2ban, ModSecurity/OWASP CRS and Wazuh for centralized monitoring",
      "Validated hardening through penetration testing from Kali Linux and benchmarked with Lynis against CIS controls",
    ],
    challenges: [
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
    ],
    results: [
      { value: "3", label: "Segmented network zones" },
      { value: "5+", label: "Hardening controls applied" },
      { value: "CIS", label: "Benchmark-validated" },
    ],
    learnings: [
      "Network segmentation is only as strong as the security group rules enforcing it — each zone boundary needs to be tested, not assumed.",
      "Hardening and monitoring are complementary: Wazuh caught misconfigurations that static hardening alone would have missed.",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Marouane-2005/private-cloud-hardening",
      },
    ],
  },
  {
    id: "cti-platform",
    navLabel: "Cyber Threat Intelligence Platform",
    title: "Cyber Threat Intelligence Platform",
    period: "Jul – Aug 2025",
    status: "completed",
    role: "Cybersecurity Intern — Symolia Groupe, Rabat",
    overview:
      "Designed and deployed a Cyber Threat Intelligence pipeline correlating multiple external sources for continuous IOC enrichment and SOC-oriented reporting.",
    pipeline: {
      heading: "Pipeline",
      steps: [
        "CVE feed",
        "VirusTotal / Shodan / OSINT",
        "Correlation engine",
        "MITRE ATT&CK mapping",
        "Dashboard (Docker)",
      ],
    },
    screenshots: [
      {
        src: "/projects/cti-platform/pipeline.jpg",
        caption: "Collection → normalization → enrichment → analysis → storage pipeline",
      },
      {
        src: "/projects/cti-platform/dashboard.jpg",
        caption: "CTI dashboard — threat map, recent IOCs, MITRE ATT&CK heatmap",
      },
      {
        src: "/projects/cti-platform/data-model.jpg",
        caption: "Data model — indicators, CVEs, alerts and MITRE technique mapping",
      },
      {
        src: "/projects/cti-platform/docker-infra.jpg",
        caption: "Containerized infrastructure — 12 services across an isolated Docker network",
      },
    ],
    technologies: ["CVE data", "VirusTotal", "Shodan", "OSINT", "MITRE ATT&CK", "Docker"],
    whatIDid: [
      "Integrated CVE, VirusTotal, Shodan and OSINT sources into a single enrichment pipeline",
      "Correlated identified threats with MITRE ATT&CK for contextualization and prioritization",
      "Built a real-time dashboard and containerized the platform with Docker for scalable deployment",
    ],
    challenges: [
      {
        challenge:
          "CVE, VirusTotal, Shodan and OSINT sources each return data in different formats with different rate limits.",
        decision:
          "Normalized every source into a common IOC schema before correlation, and queued enrichment calls to stay under each API's rate limit.",
      },
      {
        challenge: "Raw IOC lists don't tell an analyst what to prioritize first.",
        decision:
          "Mapped correlated threats to MITRE ATT&CK techniques so the dashboard surfaces context, not just a flat list of indicators.",
      },
    ],
    results: [
      { value: "4", label: "Correlated data sources" },
      { value: "Real-time", label: "Dashboard refresh" },
      { value: "Docker", label: "Containerized deployment" },
    ],
    learnings: [
      "Correlation is what turns raw threat data into intelligence — a list of IOCs without ATT&CK context is just noise.",
      "Containerizing the pipeline early made it trivial to redeploy the platform in a clean environment for demos.",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Marouane-2005/cti-platform",
      },
    ],
  },
  {
    id: "smart-lock-zkp",
    navLabel: "Smart Lock with ZKP",
    title: "Smart Lock with ZKP Authentication",
    period: "2025 — End of year project (PFA)",
    status: "completed",
    role: "Personal / academic project",
    overview:
      "A secure smart lock system authenticating users with Zero-Knowledge Proofs — no raw credentials ever transmitted or stored.",
    pipeline: {
      heading: "Architecture",
      steps: [
        "Android client (Java)",
        "Challenge-response (ZKP)",
        "Spring Boot backend",
        "JWT session",
        "Lock actuation",
      ],
    },
    technologies: [
      "Zero-Knowledge Proofs",
      "Asymmetric cryptography",
      "Android (Java)",
      "Spring Boot",
      "Spring Security",
      "JWT",
    ],
    whatIDid: [
      "Designed a ZKP-based authentication protocol so credentials are never transmitted or stored in raw form",
      "Implemented asymmetric cryptography for the challenge-response exchange to prevent man-in-the-middle attacks",
      "Integrated an Android client with a Spring Boot backend secured via JWT session management",
    ],
    challenges: [
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
    ],
    results: [
      { value: "0", label: "Raw credentials stored" },
      { value: "ZKP", label: "Auth protocol" },
      { value: "JWT", label: "Session management" },
    ],
    learnings: [
      "Zero-Knowledge Proofs make a strong theoretical guarantee, but the surrounding transport still needs its own protection — crypto primitives don't compose safely by default.",
      "Designing the protocol before writing any Android/Spring Boot code made the client-server contract far easier to implement correctly.",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Marouane-2005/smart-lock-zkp",
      },
    ],
  },
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
      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to project">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="rounded border border-panel-border px-3 py-1.5 font-mono text-[11px] text-text-muted transition-colors hover:border-sev-info hover:text-text"
          >
            {project.navLabel}
          </a>
        ))}
      </nav>

      <div className="mt-16">
        {projects.map((project) => (
          <ProjectSection
            key={project.id}
            id={project.id}
            title={project.title}
            period={project.period}
            status={project.status}
            role={project.role}
          >
            <div>
              <SubHeading>Overview</SubHeading>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text">
                {project.overview}
              </p>
            </div>

            {project.objectives && (
              <div>
                <SubHeading>Objectives</SubHeading>
                <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
                  {project.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.pipeline && (
              <div>
                <SubHeading>{project.pipeline.heading}</SubHeading>
                <div className="mt-3">
                  <PipelineDiagram steps={project.pipeline.steps} />
                </div>
              </div>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <SubHeading>Screenshots</SubHeading>
                <div className="mt-3">
                  <Gallery images={project.screenshots} />
                </div>
              </div>
            )}

            <div>
              <SubHeading>Technologies</SubHeading>
              <div className="mt-2">
                <TagRow tags={project.technologies} />
              </div>
            </div>

            <div>
              <SubHeading>What I did</SubHeading>
              <ul className="mt-2 max-w-2xl list-disc space-y-1.5 pl-4 text-sm text-text-muted">
                {project.whatIDid.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <SubHeading>Challenges &amp; technical decisions</SubHeading>
              <div className="mt-3">
                <ChallengesList items={project.challenges} />
              </div>
            </div>

            <div>
              <SubHeading>Results</SubHeading>
              <div className="mt-2">
                <ResultsGrid results={project.results} />
              </div>
            </div>

            <div>
              <SubHeading>Key learnings</SubHeading>
              <div className="mt-2">
                <LearningsList items={project.learnings} />
              </div>
            </div>

            <div>
              <SubHeading>Links</SubHeading>
              <div className="mt-2">
                <LinkRow links={project.links} />
              </div>
            </div>
          </ProjectSection>
        ))}
      </div>
    </div>
  );
}