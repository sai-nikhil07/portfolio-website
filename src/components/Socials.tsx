export default function Socials() {
  const links = [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "LeetCode", url: "#" },
    { name: "CodeChef", url: "#" },
    { name: "Instagram", url: "#" }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col items-center border-t border-white/10 mt-16">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {links.map((link, idx) => (
          <a 
            key={idx} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg md:text-2xl font-light text-[#737373] hover:text-white transition-colors duration-300 tracking-tight"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
}
