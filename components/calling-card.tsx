import { ArrowUpRight } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'

const roles = ['Digital Marketer', 'Content Creator', 'Brand Strategist']

export function CallingCard() {
  return (
    <article className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-primary/10 sm:p-10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-primary" aria-hidden="true" />

      <header className="flex flex-col gap-5">
        <h1 className="font-serif text-5xl leading-none tracking-tight text-balance sm:text-6xl">
          Simply<span className="italic text-primary">_Natasha</span>
        </h1>

        <ul className="flex flex-wrap gap-2" aria-label="What I do">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-primary/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >
              {role}
            </li>
          ))}
        </ul>
      </header>

      <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
        I create content, build digital brands and help connect businesses with audiences through
        social media and creative marketing.
      </p>

      <section className="mt-10" aria-labelledby="reach-me">
        <h2 id="reach-me" className="mb-4 font-serif text-2xl italic text-foreground">
          How to reach me
        </h2>
        <ContactLinks />
      </section>

      <footer className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
        <p className="font-serif text-xl italic text-foreground">
          Let&apos;s work<span className="text-primary">.</span>
        </p>
        <a
          href="mailto:natashamards@gmail.com?subject=Let%27s%20work"
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Get in touch
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </footer>
    </article>
  )
}
