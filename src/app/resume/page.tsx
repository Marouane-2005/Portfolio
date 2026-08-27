export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-sev-info">
            Resume
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-text sm:text-4xl">
            Marouane Chtita — CV
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
            Junior Cybersecurity Engineer — SOC, Threat Intelligence &amp;
            Cloud Security. Download the PDF or preview it below.
          </p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="shrink-0 rounded bg-text px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-bg transition-opacity hover:opacity-85"
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="mt-12 overflow-hidden rounded-lg border border-panel-border bg-panel">
        <div className="flex items-center justify-between border-b border-panel-border px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
            cv.pdf
          </span>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-text-muted transition-colors hover:text-text"
          >
            Open in new tab ↗
          </a>
        </div>
        <object
          data="/cv.pdf"
          type="application/pdf"
          className="h-[80vh] w-full"
          aria-label="Marouane Chtita CV preview"
        >
          <p className="p-6 text-sm text-text-muted">
            Your browser can&apos;t preview PDFs inline.{" "}
            <a href="/cv.pdf" className="text-sev-info underline">
              Download the CV
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
}
