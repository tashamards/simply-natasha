import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    title: 'Digital Marketing',
    text: 'Strategy that turns social media into real connection between businesses and the people they serve.',
  },
  {
    title: 'Content Creation',
    text: 'Scroll-stopping content with personality — made to be watched, shared and remembered.',
  },
  {
    title: 'Brand Strategy',
    text: 'Helping brands find their voice, sharpen their identity and show up consistently online.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="theme-light bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <SectionHeading
          id="about-title"
          eyebrow="About me"
          title={
            <>
              Hi, I&apos;m <span className="italic text-primary">Natasha</span>.
            </>
          }
          intro="I'm a digital marketer, content creator and brand strategist. I create content, build digital brands and help connect businesses with audiences through social media and creative marketing — and when the lights go down, you'll find me behind the decks."
        />

        <ul className="flex flex-col">
          {pillars.map(({ title, text }, i) => (
            <li key={title} className="group flex gap-6 border-t border-border py-7 last:border-b">
              <span className="font-serif text-2xl italic text-primary">0{i + 1}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
