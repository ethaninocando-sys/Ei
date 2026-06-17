// Greyscale placeholder "client logos". Swap for real logos in /public later.
const PLACEHOLDER_LOGOS = 6;

export function WorkingWith() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <p className="mb-6 text-sm text-muted-foreground">Working with…</p>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-60">
        {Array.from({ length: PLACEHOLDER_LOGOS }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-foreground/15" />
            <div className="h-3 w-20 rounded bg-foreground/15" />
          </div>
        ))}
      </div>
    </div>
  );
}
