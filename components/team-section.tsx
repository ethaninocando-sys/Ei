import { SectionWrapper, Eyebrow, SectionHeading } from "@/components/section-wrapper";

type Member = { name: string; role: string; photo?: string; link?: string };

// Placeholder team — swap names, roles, photos (drop images in /public) and links.
const team: Member[] = [
  { name: "Founder name", role: "Founder", photo: "", link: "" },
  { name: "Team member", role: "Head of SEO", photo: "", link: "" },
  { name: "Team member", role: "Client Success", photo: "", link: "" },
];

export function TeamSection() {
  return (
    <SectionWrapper id="team">
      <Eyebrow>Our team</Eyebrow>
      <SectionHeading>Meet the people behind your rankings</SectionHeading>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {team.map((m, i) => {
          const card = (
            <div className="group h-full border border-border bg-card p-5">
              <div className="mb-4 aspect-square w-full overflow-hidden bg-muted">
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
              <p className="font-bold">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          );
          return m.link ? (
            <a key={i} href={m.link} target="_blank" rel="noreferrer">
              {card}
            </a>
          ) : (
            <div key={i}>{card}</div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
