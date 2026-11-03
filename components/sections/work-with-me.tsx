import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    title: 'Social Media Marketing',
    points: ['Platform strategy', 'Content calendars', 'Audience growth'],
  },
  {
    title: 'Content Creation',
    points: ['Short-form video', 'Photo & carousel content', 'UGC for brands'],
  },
  {
    title: 'Brand Strategy',
    points: ['Brand voice & identity', 'Positioning', 'Launch campaigns'],
  },
  {
    title: 'DJ Bookings',
    points: ['Private events', 'Brand activations', 'Club & lounge sets'],
  },
]

export function WorkWithMe() {
  return (
    <section id="work-with-me" aria-labelledby="work-with-me-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          id="work-with-me-title"
          eyebrow="Services"
          title={
            <>
              Work <span className="italic text-primary">with me</span>
            </>
          }
          intro="Whether you need a brand that stands out, content that connects or a DJ who sets the mood — let's make something great together."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, points }) => (
            <li
              key={title}
              className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
            >
              <h3 className="font-serif text-2xl tracking-tight">{title}</h3>
              <ul className="flex flex-col gap-3">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="self-start rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
        >
          Start a project
        </a>
      </div>
    </section>
  )
}
