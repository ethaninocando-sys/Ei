"use client";

import { useActionState } from "react";
import { submitLead, type LeadResult } from "@/app/actions/submit-lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initial: LeadResult = { ok: false };

export function EmailForm({
  cta = "Subscribe",
  align = "center",
}: {
  cta?: string;
  align?: "center" | "start";
}) {
  const [state, formAction, pending] = useActionState(submitLead, initial);

  if (state.ok) {
    return (
      <div
        className={
          align === "center"
            ? "mx-auto max-w-md rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
            : "max-w-md rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
        }
      >
        <h3 className="text-lg font-semibold">You&apos;re subscribed ✅</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Check your inbox for your 3 free tips.
        </p>
      </div>
    );
  }

  return (
    <div className={align === "center" ? "mx-auto max-w-md" : "max-w-md"}>
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          name="email"
          required
          placeholder="name@email.com"
          aria-label="Email address"
          className="h-12 flex-1 rounded-lg border-border bg-card text-base"
        />
        <Button type="submit" variant="cta" size="cta" disabled={pending}>
          {pending ? "Sending…" : cta}
        </Button>
      </form>
      {state.error ? (
        <p className="mt-2 text-sm text-destructive">{state.error}</p>
      ) : null}
    </div>
  );
}
