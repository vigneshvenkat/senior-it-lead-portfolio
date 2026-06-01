import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SectionDivider from '../components/SectionDivider';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}