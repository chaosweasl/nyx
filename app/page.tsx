import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Journey from '@/components/Journey'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
