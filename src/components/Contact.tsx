"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/sainikhilpatel07@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[var(--foreground)]/10" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        <div className="flex flex-col gap-8">
          <h3 className="text-xl md:text-2xl font-inter text-[#737373] tracking-widest uppercase">
            Initiate Connection
          </h3>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-inter tracking-tighter text-[var(--foreground)] leading-tight">
            Let&apos;s connect and build the future together.
          </p>
          <div className="mt-8">
            <a href="mailto:sainikhilpatel07@gmail.com" className="text-lg md:text-xl border-b border-[var(--foreground)]/30 pb-2 hover:border-[var(--foreground)] transition-colors duration-300 text-[var(--foreground)]">
              sainikhilpatel07@gmail.com
            </a>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-start justify-center text-left py-20">
            <p className="text-3xl font-bold font-inter tracking-tighter text-[var(--foreground)] leading-tight mb-4">
              Transmission Successful.
            </p>
            <p className="text-[#737373] text-lg max-w-sm">
              Your message has been routed to my inbox. I'll respond shortly.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-8 group" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs tracking-widest uppercase text-[#737373] font-inter">
                Identification
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="bg-transparent border-b border-[var(--foreground)]/20 py-4 text-lg focus:outline-none focus:border-[var(--foreground)] transition-colors duration-300 font-inter placeholder-[var(--foreground)]/20 rounded-none text-[var(--foreground)]"
                placeholder="YOUR NAME"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs tracking-widest uppercase text-[#737373] font-inter">
                Comm Link (Email)
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="bg-transparent border-b border-[var(--foreground)]/20 py-4 text-lg focus:outline-none focus:border-[var(--foreground)] transition-colors duration-300 font-inter placeholder-[var(--foreground)]/20 rounded-none text-[var(--foreground)]"
                placeholder="YOUR@EMAIL.COM"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs tracking-widest uppercase text-[#737373] font-inter">
                Transmission Data
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={4}
                required
                className="bg-transparent border-b border-[var(--foreground)]/20 py-4 text-lg focus:outline-none focus:border-[var(--foreground)] transition-colors duration-300 font-inter placeholder-[var(--foreground)]/20 resize-none rounded-none text-[var(--foreground)]"
                placeholder="ENTER YOUR MESSAGE..."
              />
            </div>

            <motion.button 
              whileHover={status === "loading" ? {} : { scale: 1.02 }}
              whileTap={status === "loading" ? {} : { scale: 0.98 }}
              disabled={status === "loading"}
              className={`mt-8 px-8 py-6 bg-[var(--foreground)] text-[var(--background)] font-bold tracking-widest uppercase text-sm cursor-none transition-all duration-300 ${status === "loading" ? "opacity-50" : "hover:bg-opacity-90"}`}
              type="submit"
            >
              {status === "loading" ? "Transmitting..." : "Transmit Message"}
            </motion.button>
            {status === "error" && (
               <p className="text-red-500 text-sm mt-2 tracking-widest uppercase">Transmission failed. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
