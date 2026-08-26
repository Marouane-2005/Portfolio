type PipelineDiagramProps = {
  steps: string[];
};

export default function PipelineDiagram({ steps }: PipelineDiagramProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-panel-border bg-panel p-5">
      <div className="flex min-w-max items-center gap-2 font-mono text-xs">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="whitespace-nowrap rounded border border-panel-border bg-bg px-3 py-2 text-text">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-text-dim" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
