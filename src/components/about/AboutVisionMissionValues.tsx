import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Eye, Target, Award, Wrench, ShieldCheck, HeartHandshake, Globe } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.15 as const };

const sV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
const iV: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } } };

const CORE_VALUES = [
  {
    icon: Award,
    title: 'Excellence in Service & Training Standards',
    desc: 'Upholding strict 5-star benchmarks across curriculum, grooming, guest interactions, and faculty delivery.',
  },
  {
    icon: Wrench,
    title: 'Hands-on, Industry-First Learning',
    desc: 'Prioritizing practical experience inside live hotel environments alongside robust classroom foundations.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity & Professionalism',
    desc: 'Instilling ethical responsibility, transparency, and top-tier work ethic in all our students and operations.',
  },
  {
    icon: HeartHandshake,
    title: 'Student-Centered Support',
    desc: 'Comprehensive guidance from initial admission and financial loan aid through to interview preparation and placement.',
  },
  {
    icon: Globe,
    title: 'Global Career Outlook',
    desc: 'Preparing trainees for career trajectories across domestic Indian luxury hotels and prestigious international destinations.',
  },
];

export default function AboutVisionMissionValues() {
  const rm = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* ── VISION & MISSION ── */}
        <motion.div
          variants={sV}
          initial={rm ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
          className="mb-16 sm:mb-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              variants={iV}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/40 bg-[#c59b27]/[0.08] px-3.5 py-1.5 font-['Outfit'] text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8a6d1a]"
            >
              Our Foundation
            </motion.span>
            <motion.h2
              variants={iV}
              className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-[#0a192f]"
              style={{ fontSize: 'clamp(1.9rem, 1.2rem + 2.5vw, 3.8rem)' }}
            >
              Vision &amp; <span className="text-[#c59b27]">Mission</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision Card */}
            <motion.div
              variants={iV}
              whileHover={rm ? undefined : { y: -6, transition: { duration: 0.3 } }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-300 bg-gradient-to-br from-white via-slate-50 to-[#fdfbf7] p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-[#c59b27]/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071322] text-[#e5be58] shadow-md shadow-black/10">
                    <Eye className="h-7 w-7" />
                  </div>
                  <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#c59b27]">
                    01 / Looking Forward
                  </span>
                </div>

                <h3 className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-4xl text-[#0a192f] uppercase tracking-wide mb-4">
                  Our <span className="text-[#c59b27]">Vision</span>
                </h3>

                <p className="font-['Outfit'] text-[15px] sm:text-base leading-relaxed text-slate-700 font-normal">
                  To be a globally recognized center of excellence in hospitality education, producing innovative leaders who redefine the standards of the service industry worldwide.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-2 text-xs font-['Outfit'] font-semibold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c59b27]" />
                <span>Global benchmark in hospitality leadership</span>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={iV}
              whileHover={rm ? undefined : { y: -6, transition: { duration: 0.3 } }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-300 bg-gradient-to-br from-[#071322] via-[#0c1e34] to-[#071322] p-8 sm:p-10 shadow-lg text-white"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c59b27]/15 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c59b27] text-[#071322] shadow-lg shadow-[#c59b27]/30">
                    <Target className="h-7 w-7" />
                  </div>
                  <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#e5be58]">
                    02 / Our Purpose
                  </span>
                </div>

                <h3 className="font-['Bebas_Neue','Outfit',sans-serif] text-3xl sm:text-4xl text-white uppercase tracking-wide mb-4">
                  Our <span className="text-[#C6A15B]">Mission</span>
                </h3>

                <p className="font-['Outfit'] text-[15px] sm:text-base leading-relaxed text-slate-300 font-light">
                  To deliver world-class academic programs that integrate management theory with hands-on practice, preparing every student for a successful, global career in hospitality.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-['Outfit'] font-semibold text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e5be58]" />
                <span>Integrated theory &amp; live operational practice</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── CORE VALUES ── */}
        <motion.div
          variants={sV}
          initial={rm ? undefined : 'hidden'}
          whileInView="show"
          viewport={vp}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <motion.span
              variants={iV}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c59b27]/40 bg-[#c59b27]/[0.08] px-3.5 py-1.5 font-['Outfit'] text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#8a6d1a]"
            >
              Our Guiding Principles
            </motion.span>
            <motion.h2
              variants={iV}
              className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-[#0a192f]"
              style={{ fontSize: 'clamp(1.9rem, 1.2rem + 2.5vw, 3.8rem)' }}
            >
              Core <span className="text-[#c59b27]">Values</span>
            </motion.h2>
            <motion.p variants={iV} className="mt-3 font-['Outfit'] text-sm text-slate-600 max-w-lg mx-auto">
              The fundamental standards that shape our academic culture, faculty guidance, and student mentorship every day.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={iV}
                  whileHover={rm ? undefined : { y: -6, transition: { duration: 0.25 } }}
                  className="group flex flex-col justify-between rounded-2xl border border-gray-300 bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#c59b27]/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071322] text-[#c59b27] group-hover:bg-[#c59b27] group-hover:text-[#071322] transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-['Bebas_Neue'] text-xl text-slate-300">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-['Outfit'] text-[16px] font-bold text-[#0a192f] mb-2 leading-snug">
                      {val.title}
                    </h4>

                    <p className="font-['Outfit'] text-[13px] leading-relaxed text-slate-600">
                      {val.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
