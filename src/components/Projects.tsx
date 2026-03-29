"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AcademicHub",
      role: "Student Management System",
      tech: ["Python", "Django", "SQLite"],
      url: "https://github.com/sai-nikhil07/AcademicHub"
    },
    {
      title: "Finance Tracker",
      role: "Data-Driven App",
      tech: ["Python", "MySQL", "Pandas"],
      url: "https://github.com/sai-nikhil07/Personal-Finance-Tracker.git"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <h3 className="text-xl md:text-2xl font-inter text-[#737373] mb-8 tracking-widest uppercase">Select Works</h3>
      
      <div className="flex flex-col border-t border-white/10">
        {projects.map((proj, idx) => (
          <motion.a 
            key={idx} 
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
            className="group relative flex flex-col md:flex-row items-baseline justify-between py-6 md:py-8 border-b border-white/10 cursor-pointer overflow-hidden block"
          >
            <motion.div 
              variants={{
                initial: { y: "100%" },
                hover: { y: "0%" }
              }}
              transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="absolute inset-0 bg-white pointer-events-none z-0"
            />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <h4 className="text-xl md:text-3xl lg:text-4xl font-bold font-inter text-white group-hover:text-black transition-colors duration-300 tracking-tighter">
                {proj.title}
              </h4>
              <p className="text-sm md:text-base font-medium text-[#737373] group-hover:text-black/60 transition-colors duration-300">
                {proj.role}
              </p>
            </div>
            
            <div className="relative z-10 flex gap-4 mt-6 md:mt-0">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs md:text-sm tracking-widest uppercase text-white/50 group-hover:text-black/50 transition-colors duration-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
