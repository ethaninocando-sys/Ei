"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitLead, type LeadResult } from "@/app/actions/submit-lead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initial: LeadResult = { ok: false };

export function EmailForm({ cta = "Get 3 FREE Tips" }: { cta?: string }) {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(submitLead, initial);

  useEffect(() => {
    if (state.ok) router.push("/free-analysis");
  }, [state.ok, router]);

  return (
    <form
      action={formAction}
      className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <Input
        type="email"
        name="email"
        required
        placeholder="you@business.com"
        aria-label="Email address"
        className="h-12 flex-1 bg-card text-base"
      />
      <Button type="submit" variant="cta" size="cta" disabled={pending}>
        {pending ? "Sending…" : cta}
      </Button>
      {state.error ? (
        <p className="w-full text-sm text-destructive sm:absolute sm:mt-14">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
