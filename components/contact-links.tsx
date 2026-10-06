import { ArrowUpRight, AtSign, Mail, Music2 } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'natashamards@gmail.com',
    href: 'mailto:natashamards@gmail.com',
    icon: Mail,
    external: false,
  },
  {
    label: 'Instagram',
    value: '@simply_natash_a',
    href: 'https://instagram.com/simply_natash_a',
    icon: AtSign,
    external: true,
  },
  {
    label: 'TikTok',
    value: '@natasha_mards',
    href: 'https://www.tiktok.com/@natasha_mards',
    icon: Music2,
    external: true,
  },
]

export function ContactLinks() {
  return (
    <ul className="flex flex-col gap-3">
      {contacts.map(({ label, value, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/40 px-4 py-3.5 transition-colors hover:border-primary hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                {label}
              </span>
              <span className="break-all font-medium text-foreground transition-colors group-hover:text-primary-foreground">
                {value}
              </span>
            </span>
            <ArrowUpRight
              className="size-5 shrink-0 text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-foreground"
              aria-hidden="true"
            />
            {external && <span className="sr-only">(opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
