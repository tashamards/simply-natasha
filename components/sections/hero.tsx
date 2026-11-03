import { ArrowDown } from 'lucide-react'

const roles = ['Digital Marketer', 'Content Creator', 'Brand Strategist', 'DJ']

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[32rem] rounded-full bg-primary/20 blur-3xl"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
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

        <h1
          id="home-title"
          className="font-serif text-6xl leading-[0.9] tracking-tight text-balance sm:text-8xl lg:text-9xl"
        >
          Simply<span className="italic text-primary">_Natasha</span>
        </h1>

        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          I create content, build digital brands and help connect businesses with audiences through
          social media and creative marketing.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work-with-me"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Work with me
          </a>
          <a
            href="#about"
            className="group flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get to know me
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
