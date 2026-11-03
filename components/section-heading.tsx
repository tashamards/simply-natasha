type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
}

export function SectionHeading({ id, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <header className="flex max-w-2xl flex-col gap-4">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {intro && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </header>
  )
}
