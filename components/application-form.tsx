"use client";

import { useActionState } from "react";
import {
  submitApplication,
  type ApplicationResult,
} from "@/app/actions/submit-application";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initial: ApplicationResult = { ok: false };

const fields = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "business_name", label: "Business name", type: "text", required: true },
  { name: "website", label: "Website", type: "text", required: false },
  {
    name: "current_ranking",
    label: "Where do you rank now? (e.g. not in top 3)",
    type: "text",
    required: false,
  },
  {
    name: "monthly_revenue",
    label: "Rough monthly revenue",
    type: "text",
    required: false,
  },
] as const;

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(submitApplication, initial);

  if (state.ok) {
    return (
      <div className="border border-border bg-card p-8 text-center">
        <h3 className="text-xl font-bold">Application received ✅</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — if we think we&apos;re a good fit we&apos;ll reach back out to
          schedule a call.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col gap-1.5">
          <Label htmlFor={f.name}>
            {f.label}
            {f.required ? <span className="text-accent"> *</span> : null}
          </Label>
          <Input
            id={f.name}
            name={f.name}
            type={f.type}
            required={f.required}
            className="h-11 bg-card"
          />
        </div>
      ))}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="goals">What do you want to achieve?</Label>
        <textarea
          id="goals"
          name="goals"
          rows={4}
          className="border border-input bg-card px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>

      {state.error ? (
        <p className="text-sm text-destructive">{state.error}</p>
      ) : null}

      <Button type="submit" variant="cta" size="cta" disabled={pending}>
        {pending ? "Submitting…" : "Send my application"}
      </Button>
    </form>
  );
}
