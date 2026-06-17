import { CalendarClock } from "lucide-react";
import { cal, isConfigured } from "@/lib/config";

/**
 * Inline Cal.com booker via iframe — no @calcom/embed-react dependency, so the
 * project installs with zero extra packages. When the booking link is empty it
 * renders a labelled placeholder.
 */
export function CalEmbed() {
  if (!isConfigured.booking) {
    return (
      <div className="flex min-h-[480px] w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-foreground/30 bg-card text-center">
        <CalendarClock className="size-12 text-foreground/40" />
        <p className="px-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Booking calendar goes here
          </span>
          <br />
          Add your Cal.com link in{" "}
          <code className="rounded bg-muted px-1">lib/config.ts</code>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-card">
      <iframe
        src={`https://cal.com/${cal.bookingLink}`}
        title="Book a strategy call"
        className="h-[680px] w-full"
      />
    </div>
  );
}
