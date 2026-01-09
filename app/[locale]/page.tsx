import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Publications } from "@/components/sections/Publications";
import { Footer } from "@/components/layout/Footer";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { ImageCalibrator } from "@/components/ui/ImageCalibrator";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <NeuralBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
