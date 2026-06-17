"use client";

import { useActionState } from "react";
import {
  submitApplication,
  type ApplicationResult,
} from "@/app/actions/submit-application";
import { ArrowRight } from "lucide-react";

const initial: ApplicationResult = { ok: false };

const inputClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm placeholder:text-muted-foreground outline-none focus-visible:ring-1 focus-visible:ring-ring";

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(submitApplication, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <h3 className="text-xl font-bold">Application received ✅</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks — if we think we&apos;re a good fit we&apos;ll reach back out to
          schedule a call.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input className={inputClass} name="first_name" placeholder="First name" required />
        <input className={inputClass} name="last_name" placeholder="Last name" required />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input className={inputClass} name="phone" type="tel" placeholder="Phone number" required />
        <input className={inputClass} name="email" type="email" placeholder="Email" required />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <input className={inputClass} name="industry" placeholder="Which industry are you in?" required />
        <input className={inputClass} name="marketing_spend" placeholder="Current marketing spend?" required />
      </div>
      <textarea
        className={inputClass}
        name="help"
        placeholder="What do you need help with specifically?"
        rows={5}
        required
      />

      {state.error ? (
        <p className="text-sm text-destructive">{state.error}</p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {pending ? "Submitting…" : "Submit"}
          {!pending && <ArrowRight className="size-4" />}
        </button>
      </div>
    </form>
  );
}
