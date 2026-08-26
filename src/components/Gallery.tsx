type GalleryImage = {
  src: string;
  caption: string;
};

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <figure
          key={img.src}
          className="overflow-hidden rounded-lg border border-panel-border bg-panel"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.caption}
            className="w-full border-b border-panel-border"
            loading="lazy"
          />
          <figcaption className="px-3 py-2.5 font-mono text-[11px] text-text-muted">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}