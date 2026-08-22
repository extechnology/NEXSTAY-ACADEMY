import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const videoList = [
  {
    url: "https://assets.mixkit.co/videos/31412/31412-720.mp4",
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
  },
  {
    url: "https://assets.mixkit.co/videos/42823/42823-720.mp4",
    poster: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    url: "https://assets.mixkit.co/videos/34487/34487-720.mp4",
    poster: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  }
];

export const HeroSection: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto transition to next video every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex flex-col justify-between">

      {/* 1. RIGHT / BACKGROUND AUTO-SLIDING VIDEO */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              src={videoList[currentVideoIndex].url}
              poster={videoList[currentVideoIndex].poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. LEFT WHITE ANGULAR SECTION (Exact diagonal cut as reference) */}
      <motion.div 
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="hero-white-split absolute inset-y-0 left-0 w-full lg:w-[50%] xl:w-[48%] 2xl:w-[46%] bg-white z-10 flex flex-col justify-between pt-28 pb-10 px-6 sm:px-12 lg:pl-14 lg:pr-16 shadow-2xl lg:shadow-none overflow-hidden"
      >
        {/* Soft Luxury Animated Ambient Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#c59b27]/10 via-[#c59b27]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />

        {/* Top Spacer */}
        <div />

        {/* Center Main Content */}
        <div className="max-w-lg my-auto relative">

          {/* Main Headline with slow smooth reveal fading in to the right */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.3, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <h1 className="font-['Bebas_Neue','Outfit',sans-serif] text-6xl sm:text-7xl xl:text-8xl tracking-tight text-[#1e293b] leading-[0.92] uppercase select-none">
              BUILD YOUR CAREER<br />IN HOSPITALITY
            </h1>
          </motion.div>

          {/* Subtitle / Description (Left aligned at the start with slow smooth fade-in-to-right) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.3, 
              delay: 0.25, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mt-6 sm:mt-8 max-w-sm sm:max-w-md"
          >
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              A 15-month Diploma in Hotel Management from Nexstay Academy, backed by Nexstay Hotels &amp; Resorts, with on-the-job training, a monthly stipend, and 100% placement assistance in India and abroad.
            </p>
          </motion.div>
        </div>

        {/* Bottom Left Info Bar (Left aligned with slow smooth fade-in-to-right) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.3, 
            delay: 0.45, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="pt-8 flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 lg:gap-7 text-xs w-full max-w-lg"
        >
          {/* Col 1 */}
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-extrabold uppercase tracking-wider text-[#0a192f] text-[11px]">
              ADMISSIONS OPEN
            </span>
            <span className="text-slate-500 font-medium text-[11px] mt-0.5">
              Batch 2025-26
            </span>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-slate-300 flex-shrink-0" />

          {/* Col 2 */}
          <div className="flex flex-col whitespace-nowrap">
            <span className="font-extrabold uppercase tracking-wider text-[#0a192f] text-[11px]">
              Parayancheri, Calicut
            </span>
            <span className="text-slate-500 font-medium text-[11px] mt-0.5">
              6th Floor, V-Zone Building
            </span>
          </div>

          <div className="hidden sm:block h-7 w-[1px] bg-slate-300 flex-shrink-0" />

          {/* Col 3: Plan Your Visit */}
          <div className="whitespace-nowrap">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#8b1525] hover:text-[#c59b27] transition-colors text-[11px]"
            >
              <span>PLAN YOUR VISIT</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default HeroSection;
