import { Users } from "lucide-react";
import {
  SectionWrapper,
  PillBadge,
  SectionHeading,
} from "@/components/section-wrapper";

type Member = { name: string; role: string; photo?: string; link?: string };

// Placeholder team — swap names, roles, photos (drop images in /public) and links.
const team: Member[] = [
  { name: "Team member", role: "Founder", photo: "", link: "" },
  { name: "Team member", role: "Head of SEO", photo: "", link: "" },
  { name: "Team member", role: "Client Success", photo: "", link: "" },
];

export function TeamSection() {
  return (
    <SectionWrapper id="team" className="text-center">
      <PillBadge icon={Users}>Our team</PillBadge>
      <SectionHeading className="mt-5">Meet the team</SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {team.map((m, i) => {
          const inner = (
            <>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-foreground/10">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                    Photo
                  </div>
                )}
              </div>
              <p className="mt-4 font-semibold">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </>
          );
          return m.link ? (
            <a key={i} href={m.link} target="_blank" rel="noreferrer" className="text-left">
              {inner}
            </a>
          ) : (
            <div key={i} className="text-left">
              {inner}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
