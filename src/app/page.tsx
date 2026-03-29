import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Platforms from "@/components/Platforms";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>

      <div className="relative z-20 bg-black">
        <Projects />
        <Experience />
        <Platforms />
        <Skills />
        <Contact />
        
        <footer className="py-32 bg-black flex flex-col items-center justify-center gap-12">
          <p className="text-white/40 font-inter text-xs tracking-[0.4em] uppercase">
            more coming soon ..
          </p>
          <div className="w-px h-16 bg-white/10" />
          <p className="text-[#777] text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Nikhil. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
