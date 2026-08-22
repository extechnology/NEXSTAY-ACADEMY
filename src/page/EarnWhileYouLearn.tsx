import PageHero from '@/components/common/PageHero';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EASE = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, amount: 0.15 as const };

const sV: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };
const iV: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } } };

const STIPEND = [
  { month: '4th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '5th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '6th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '7th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '8th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '9th Month',  amount: '₹8,000',  extra: '+ Food & Accommodation', phase: 'Industrial Training' },
  { month: '10th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
  { month: '11th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
  { month: '12th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
  { month: '13th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
  { month: '14th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
  { month: '15th Month', amount: '₹12,000', extra: '+ Food & Accommodation', phase: 'On-Job Training' },
];

const STEPS = [
  'Complete the first 100 days of classroom instruction.',
  'Move into industry training and on-the-job training at a Nexstay property.',
  'Receive your monthly stipend along with free food and accommodation from Month 4 onward.',
  'Stipend amount increases from Month 10 through program completion.',
];

export default function EarnWhileYouLearnPage() {
  const rm = useReducedMotion();

  return (
    <div className="w-full bg-[#f8fafc] overflow-x-hidden">


      {/* ── HERO BANNER ── */}
      <PageHero
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
        title="Earn While You Learn"
        description="A defining feature of the NAHM diploma — earn up to ₹1,20,000 as monthly stipend alongside free food and accommodation during your training."
      />

      {/* ── MAIN CONTENT ── */}
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-14 items-start">

          {/* LEFT: Stipend Table */}
          <motion.div
            variants={sV}
            initial={rm ? undefined : 'hidden'}
            whileInView="show"
            viewport={vp}
          >
            <motion.div variants={iV} className="mb-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c59b27]/40 bg-[#c59b27]/[0.07] px-3.5 py-1.5 font-['Outfit'] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6d1a]">
                Monthly Stipend Schedule
              </span>
              <h2
                className="mt-3 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-[1.05] tracking-tight text-[#0a192f]"
                style={{ fontSize: 'clamp(1.5rem, 1rem + 1.8vw, 2.8rem)' }}
              >
                Month-by-Month <span className="text-[#c59b27]">Breakdown</span>
              </h2>
            </motion.div>

            {/* Phase labels */}
            <motion.div variants={iV} className="mb-4 flex flex-wrap gap-3 text-[11px] font-['Outfit'] font-semibold">
              <span className="flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-400 inline-block" />
                Industrial Training — Months 4–9
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                On-Job Training — Months 10–15
              </span>
            </motion.div>

            <div className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-[#071322] px-4 py-3 sm:px-6">
                <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-white/60">Month</span>
                <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-white/60">Stipend</span>
                <span className="font-['Outfit'] text-[11px] font-bold uppercase tracking-wider text-white/60">Benefits</span>
              </div>

              {STIPEND.map((row) => {
                const isOJT = row.phase === 'On-Job Training';
                return (
                  <motion.div
                    key={row.month}
                    variants={iV}
                    className={`grid grid-cols-3 items-center px-4 py-3.5 sm:px-6 border-b border-gray-300 last:border-0 transition-colors duration-200 hover:bg-slate-50 ${isOJT ? 'bg-green-50/40' : ''}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ background: isOJT ? '#16a34a' : '#2563eb' }}
                      />
                      <span className="font-['Outfit'] text-sm font-medium text-[#0a192f]">{row.month}</span>
                    </div>
                    <span className="font-['Bebas_Neue'] text-lg tracking-wide" style={{ color: isOJT ? '#16a34a' : '#2563eb' }}>
                      {row.amount}
                    </span>
                    <span className="font-['Outfit'] text-[12px] text-slate-500">{row.extra}</span>
                  </motion.div>
                );
              })}

              {/* Total */}
              <div className="grid grid-cols-3 items-center bg-[#071322] px-4 py-4 sm:px-6 rounded-b-2xl">
                <span className="font-['Outfit'] text-sm font-bold text-white">Total</span>
                <span className="font-['Bebas_Neue'] text-xl text-[#c59b27]">~₹1,20,000</span>
                <span className="font-['Outfit'] text-[11px] text-white/60">+ F&A throughout</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: How it works + Image + CTA */}
          <div className="flex flex-col gap-7">

            {/* Image */}
            <motion.div
              initial={rm ? undefined : { opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 1.4, ease: EASE }}
              className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200 min-h-[240px] sm:min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
                alt="NAHM student in hotel training receiving stipend"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/80 via-[#071322]/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-['Outfit'] text-sm font-medium text-white/90 leading-snug">
                  "From classroom to kitchen — and earning every step of the way."
                </p>
              </div>
            </motion.div>

            {/* How it Works */}
            <motion.div
              variants={sV}
              initial={rm ? undefined : 'hidden'}
              whileInView="show"
              viewport={vp}
              className="rounded-2xl border border-gray-300 bg-white p-6 sm:p-7 shadow-sm"
            >
              <motion.div variants={iV} className="mb-5">
                <span className="font-['Outfit'] text-[10px] font-bold uppercase tracking-[0.22em] text-[#c59b27]">How It Works</span>
                <h3
                  className="mt-2 font-['Bebas_Neue','Outfit',sans-serif] uppercase leading-tight tracking-tight text-[#0a192f]"
                  style={{ fontSize: 'clamp(1.2rem, 0.9rem + 1.2vw, 1.8rem)' }}
                >
                  Step-by-Step <span className="text-[#c59b27]">Process</span>
                </h3>
              </motion.div>
              <div className="space-y-4">
                {STEPS.map((step, idx) => (
                  <motion.div key={idx} variants={iV} className="flex items-start gap-3.5">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#071322] font-['Bebas_Neue'] text-xs text-[#c59b27]">
                      {idx + 1}
                    </div>
                    <p className="font-['Outfit'] text-[13.5px] leading-relaxed text-slate-600 pt-0.5">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Perks card */}
            <motion.div
              variants={sV}
              initial={rm ? undefined : 'hidden'}
              whileInView="show"
              viewport={vp}
              className="rounded-2xl border border-[#c59b27]/30 bg-gradient-to-br from-[#fdf6e3] to-[#fff9ec] p-6 sm:p-7"
            >
              <motion.div variants={iV} className="mb-4">
                <h4 className="font-['Outfit'] font-bold text-[#8a6d1a] text-sm uppercase tracking-widest">In addition to your stipend</h4>
              </motion.div>
              <div className="space-y-2.5">
                {['Free food throughout the training period', 'Free accommodation at the training property', 'Free uniform kit provided on enrollment'].map((p) => (
                  <motion.div key={p} variants={iV} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#c59b27]" />
                    <span className="font-['Outfit'] text-[13px] text-slate-700">{p}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={rm ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Link
                to="/admission"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#071322] px-7 py-4 font-['Outfit'] text-sm font-extrabold uppercase tracking-wider text-white shadow-lg hover:bg-[#0f2a4a] transition-colors duration-300"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4 text-[#c59b27] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
