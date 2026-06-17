// Industries / niches you serve. Swap for client logos in /public later.
const industries = [
  "Dentists",
  "Law firms",
  "Contractors",
  "Med spas",
  "Roofers",
  "Realtors",
];

export function WorkingWith() {
  return (
    <div className="w-full border-y border-border/60 bg-card/40">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
        <p className="mb-5 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Working with local businesses like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {industries.map((name) => (
            <span key={name} className="text-lg font-semibold text-foreground/70">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
