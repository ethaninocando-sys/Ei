"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [state, formAction, pending] = useActionState(submitLead, initial);

  useEffect(() => {
    if (state.ok) router.push("/free-analysis");
  }, [state.ok, router]);

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
