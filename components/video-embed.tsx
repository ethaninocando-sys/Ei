import { PlayCircle } from "lucide-react";

/**
 * Wistia video via their lightweight iframe embed. No SDK/script needed.
 * When `mediaId` is empty it renders a labelled placeholder so the page still
 * lays out correctly before the real video exists.
 */
export function VideoEmbed({
  mediaId,
  label,
}: {
  mediaId: string;
  label: string;
}) {
  if (!mediaId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-foreground/25 bg-card text-center">
        <PlayCircle className="size-12 text-foreground/40" />
        <p className="px-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{label}</span>
          <br />
          Add the Wistia media ID in{" "}
          <code className="rounded bg-muted px-1">lib/config.ts</code>
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-soft">
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${mediaId}`}
        title={label}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
