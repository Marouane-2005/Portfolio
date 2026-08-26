export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
        Coming soon
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-text">
        Security Labs
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
        Hands-on labs covering ARP poisoning, DNS spoofing, SQL/command injection, XSS, CSRF and more, each documented as Attack → Detection → Investigation → Response, mapped to MITRE ATT&CK.
      </p>
    </div>
  );
}
