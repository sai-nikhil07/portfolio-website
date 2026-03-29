export default function Skills() {
  const skills = [
    "Python", "MySQL", "Power BI", "Git", "Jupyter Notebook", "CodeChef (1260)", "LeetCode (63)",
    "Python", "MySQL", "Power BI", "Git", "Jupyter Notebook", "CodeChef (1260)", "LeetCode (63)",
  ];

  return (
    <section className="py-6 overflow-hidden bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-2">
        <h3 className="text-[10px] font-inter text-[#888] tracking-[0.3em] uppercase">Arsenal</h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden pt-2 pb-4">
        <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-8 pr-4 md:pr-8 items-center">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="text-sm md:text-lg lg:text-xl font-medium font-inter tracking-wider uppercase"
            >
              {skill}
              <span className="text-black/10 ml-4 md:ml-8">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
