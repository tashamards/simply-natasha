import { Disc3, Mic2, PartyPopper } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const events = [
  { icon: PartyPopper, title: 'Private Parties', text: 'Birthdays, celebrations and nights to remember.' },
  { icon: Mic2, title: 'Brand Events', text: 'Launches, activations and pop-ups with the right energy.' },
  { icon: Disc3, title: 'Club & Lounge Sets', text: 'Curated sets that read the room and keep it moving.' },
]

export function Dj() {
  return (
    <section id="dj" aria-labelledby="dj-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 size-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          id="dj-title"
          eyebrow="On the decks"
          title={
            <>
              DJ <span className="italic text-primary">Simply Natasha</span>
            </>
          }
          intro="Music is where my creativity gets loud. I bring the same eye for audience and atmosphere I use in marketing to every set — building a vibe that people feel."
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {events.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href="mailto:natashamards@gmail.com?subject=DJ%20Booking%20Enquiry"
          className="self-start rounded-full border border-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Book DJ Simply Natasha
        </a>
      </div>
    </section>
  )
}
