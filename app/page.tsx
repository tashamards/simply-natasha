import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Dj } from '@/components/sections/dj'
import { CreativeProjects } from '@/components/sections/creative-projects'
import { WorkWithMe } from '@/components/sections/work-with-me'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <Hero />
        <About />
        <Dj />
        <CreativeProjects />
        <WorkWithMe />
        <Contact />
      </main>
    </>
  )
}
