import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    tag: 'Content',
    title: 'Short-form Video',
    text: 'Reels and TikToks with personality — storytelling built for the feed.',
    href: 'https://www.tiktok.com/@natasha_mards',
  },
  {
    tag: 'Social',
    title: 'Instagram Storytelling',
    text: 'Visual identity, captions and content series that grow a loyal audience.',
    href: 'https://instagram.com/simply_natash_a',
  },
  {
    tag: 'Brand',
    title: 'Brand Collaborations',
    text: 'Creative partnerships connecting businesses with the right people, authentically.',
  },
  {
    tag: 'Music',
    title: 'Sets & Mixes',
    text: 'DJ sets and mixes that bring my creative world to life through sound.',
  },
]

export function CreativeProjects() {
  return (
    <section
      id="creative-projects"
      aria-labelledby="creative-projects-title"
      className="theme-light bg-background text-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          id="creative-projects-title"
          eyebrow="Portfolio"
          title={
            <>
              Creative <span className="italic text-primary">projects</span>
            </>
          }
          intro="A look at the work I make across content, social, brand and music."
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {projects.map(({ tag, title, text, href }) => {
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{tag}</span>
                  {href && (
                    <ArrowUpRight
                      className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="font-serif text-3xl tracking-tight transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </>
            )
            const cls =
              'group flex h-full flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-secondary sm:p-10'
            return (
              <li key={title}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
