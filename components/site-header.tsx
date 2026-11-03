'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { sections, type SectionId } from '@/lib/sections'

function scrollToSection(id: SectionId) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
  }
  history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
}

function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const update = () => {
      const offset = window.innerHeight * 0.35
      let current: SectionId = 'home'
      for (const { id } of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? 'contact' : current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return active
}

export function SiteHeader() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          onClick={(e) => handleNav(e, 'home')}
          className="font-serif text-2xl leading-none tracking-tight"
        >
          Simply<span className="italic text-primary">_Natasha</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNav(e, id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative block px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200',
                    'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300',
                    isActive
                      ? 'text-primary after:scale-x-100'
                      : 'text-foreground/75 after:scale-x-0 hover:text-foreground hover:after:scale-x-50',
                  )}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden',
          open ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] opacity-0',
        )}
        inert={!open}
      >
        <ul className="overflow-hidden px-5 sm:px-8">
          {sections.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id} className="border-t border-border first:border-t-0">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNav(e, id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'flex items-center justify-between py-4 text-sm font-medium uppercase tracking-[0.18em] transition-colors',
                    isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary',
                  )}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-1.5 rounded-full bg-primary transition-opacity',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </a>
              </li>
            )
          })}
          <li className="h-4" aria-hidden="true" />
        </ul>
      </div>
    </header>
  )
}
