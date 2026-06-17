"use client";

import { useActionState } from "react";
import { submitAnalysis, type AnalysisResult } from "@/app/actions/submit-analysis";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initial: AnalysisResult = { ok: false };

const timelines = ["Today", "Tomorrow", "In a few weeks"];

export function AnalysisForm() {
  const [state, formAction, pending] = useActionState(submitAnalysis, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <h3 className="text-xl font-semibold">Request received ✅</h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll record your personalized analysis and get back to you with
          the exact steps to rank in the top 3.
        </p>
      </div>
    );
  }

  const field = (
    name: string,
    label: string,
    type = "text",
    required = false,
  ) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={name}>
        {label}
        {required ? <span> *</span> : null}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-11 rounded-lg border-border bg-card"
      />
    </div>
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {field("full_name", "Full name", "text", true)}
      {field("email", "Business email", "email", true)}
      {field("phone", "Phone number", "tel")}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {field("website", "Website")}
        {field("company_name", "Company name", "text", true)}
      </div>
      {field("google_maps_url", "Your Google Maps URL")}

      <fieldset>
        <legend className="mb-2 text-sm font-medium">
          By when do you want to solve this problem?
        </legend>
        <div className="flex flex-wrap gap-2">
          {timelines.map((t, i) => (
            <label
              key={t}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm has-[:checked]:border-foreground has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
            >
              <input
                type="radio"
                name="timeline"
                value={t}
                defaultChecked={i === 0}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      {state.error ? (
        <p className="text-sm text-destructive">{state.error}</p>
      ) : null}

      <Button type="submit" variant="cta" size="cta" disabled={pending}>
        {pending ? "Submitting…" : "Submit"}
      </Button>
    </form>
  );
}
