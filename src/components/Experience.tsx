export default function Experience() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <h3 className="text-xl md:text-2xl font-inter text-[#737373] mb-8 tracking-widest uppercase">Experience</h3>
      
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between border-t border-white/10 pt-12">
          
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">AI & Fintech Intern</h4>
            <p className="text-[#737373] text-lg md:text-xl tracking-wider uppercase font-gendy">Uptoskills</p>
            <p className="text-white/50 mt-4 font-mono text-xs md:text-sm tracking-widest">MAY 2025 — AUG 2025</p>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-white/80 leading-relaxed text-xl md:text-3xl font-light tracking-tight">
              Hands-on exposure to AI applications within the finance sector. Focused on building LLM-based chatbot fundamentals, optimizing fintech data workflows, and developing scalable analytics solutions to drive business decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
