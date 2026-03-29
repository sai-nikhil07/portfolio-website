import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FiGithub, FiLinkedin, FiInstagram, FiFileText } from "react-icons/fi";

export default function Platforms() {
  const platforms = [
    { 
      name: "GitHub", 
      url: "https://github.com/sai-nikhil07", 
      icon: <FiGithub className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "Open Source Work",
      isCv: false
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/naikini-sai-nikhil", 
      icon: <FiLinkedin className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "Network",
      isCv: false
    },
    { 
      name: "LeetCode", 
      url: "https://leetcode.com/u/Sai_Nikhil_07/", 
      icon: <SiLeetcode className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "63+ Solved",
      isCv: false
    },
    { 
      name: "CodeChef", 
      url: "https://www.codechef.com/users/sai_nikhil_07", 
      icon: <SiCodechef className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "1260+ Rating",
      isCv: false
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/patel.sainikhil?igsh=cHVtOGVnbHZyczNx",
      icon: <FiInstagram className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "Visuals",
      isCv: false
    },
    {
      name: "Résumé",
      url: "https://drive.google.com/file/d/105y4vNMflKHIYyNGTSa0GAQFvQjQNRn-/view?usp=sharing",
      icon: <FiFileText className="w-8 h-8 md:w-10 md:h-10" />,
      desc: "Drive Link",
      isCv: false
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      <h3 className="text-sm font-bold font-inter text-[#a3a3a3] tracking-[0.3em] uppercase mb-8">Platforms</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-l border-white/5">
        {platforms.map((platform, idx) => (
          <a
            key={idx}
            href={platform.url}
            target={platform.isCv ? "_self" : "_blank"}
            download={platform.isCv}
            rel="noopener noreferrer"
            className="group flex flex-col items-start p-4 md:p-6 border-r border-b border-white/5 hover:border-white/10 transition-colors duration-300 bg-white/[0.01]"
          >
            <div className="text-[#333] group-hover:text-white transition-colors duration-300 mb-6">
              {platform.icon}
            </div>
            <h4 className="text-sm md:text-base font-medium text-white mb-1">{platform.name}</h4>
            <p className="text-[10px] md:text-xs font-mono text-[#555] group-hover:text-[#a1a1a1] transition-colors uppercase tracking-widest">{platform.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
