import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteBackdrop from "@/components/SiteBackdrop";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import WelcomeScreen from "@/components/WelcomeScreen";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Full-screen HELLO welcome — scroll past it to see the portfolio */}
      <WelcomeScreen />

      {/* Actual portfolio starts here */}
      <SiteBackdrop />
      <ScrollProgress />
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
