import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
//import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}