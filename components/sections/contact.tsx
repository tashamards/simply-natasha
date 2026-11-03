import { ContactLinks } from '@/components/contact-links'
import { SectionHeading } from '@/components/section-heading'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="theme-light bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-2 lg:gap-20">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s work<span className="text-primary">.</span>
            </>
          }
          intro="For collaborations, bookings or just to say hello — here's how to reach me."
        />
        <ContactLinks />
      </div>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <p className="font-serif text-xl text-foreground">
            Simply<span className="italic text-primary">_Natasha</span>
          </p>
          <p>Digital Marketer · Content Creator · Brand Strategist · DJ</p>
        </div>
      </footer>
    </section>
  )
}
