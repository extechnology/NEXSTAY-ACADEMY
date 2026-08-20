"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const IMAGE_URL =
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop";

/* =========================================================
   HIRING PARTNERS
   Replace these dummy image URLs with real logo URLs later.
========================================================= */

const PARTNERS = [
    {
        name: "Taj",
        image:
            "https://img.magnific.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
        name: "Marriott",
        image:
            "https://placehold.co/220x90/0d1a2a/C6A15B?text=MARRIOTT",
    },
    {
        name: "Hilton",
        image:
            "https://placehold.co/220x90/0d1a2a/C6A15B?text=HILTON",
    },
    {
        name: "Hyatt",
        image:
            "https://placehold.co/220x90/0d1a2a/C6A15B?text=HYATT",
    },
    {
        name: "Accor",
        image:
            "https://placehold.co/220x90/0d1a2a/C6A15B?text=ACCOR",
    },
    {
        name: "Oberoi",
        image:
            "https://placehold.co/220x90/0d1a2a/C6A15B?text=OBEROI",
    },
];

const ACCREDITATIONS = [
    {
        name: "Accreditation 01",
        mark: "01",
    },
    {
        name: "Accreditation 02",
        mark: "02",
    },
    {
        name: "Accreditation 03",
        mark: "03",
    },
    {
        name: "Accreditation 04",
        mark: "04",
    },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PlacementsStrip() {
    const reduceMotion = useReducedMotion();

    /* =========================================================
       ANIMATIONS
    ========================================================= */

    const imageVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: reduceMotion ? 1 : 1.08,
        },

        show: {
            opacity: 1,
            scale: 1,

            transition: {
                duration: 2,
                ease: EASE,
            },
        },
    };

    const contentVariants: Variants = {
        hidden: {
            opacity: 0,
            x: reduceMotion ? 0 : 35,
        },

        show: {
            opacity: 1,
            x: 0,

            transition: {
                duration: 1.4,
                ease: EASE,
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 18,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.9,
                ease: EASE,
            },
        },
    };

    const logoVariants: Variants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 12,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.75,
                ease: EASE,
            },
        },
    };

    return (
        <section className="relative w-full overflow-hidden bg-[#071322]">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');

                .font-display {
                    font-family: 'Fraunces', ui-serif, Georgia, serif;
                }

                .font-body {
                    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
                }
            `}</style>

            {/* =========================================================
                MAIN LAYOUT
                Desktop: 50% Image / 50% Content
                Mobile: Image / Content
            ========================================================= */}

            <div className="grid min-h-[680px] w-full grid-cols-1 lg:grid-cols-2">

                {/* =====================================================
                    LEFT — IMAGE
                ===================================================== */}

                <div className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]">

                    <motion.img
                        src={IMAGE_URL}
                        alt="Hospitality graduate placement"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#071322]/80 lg:to-[#071322]" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/70 via-transparent to-transparent" />

                    {/* Bottom image label */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: reduceMotion ? 0 : 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.7,
                            ease: EASE,
                        }}
                        className="absolute bottom-7 left-7 sm:bottom-10 sm:left-10"
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-[#C6A15B]" />

                            <span className="font-body text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
                                Global Hospitality Careers
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    RIGHT — CONTENT
                ===================================================== */}

                <div className="relative flex min-h-[620px] items-center overflow-hidden bg-[#071322] lg:min-h-[680px]">

                    {/* =================================================
                        DECORATIVE BACKGROUND
                    ================================================= */}

                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-32 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.055]"
                    />

                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-8 top-1/2 h-[330px] w-[330px] -translate-y-1/2 rounded-full border border-[#C6A15B]/[0.035]"
                    />

                    <div
                        aria-hidden
                        className="pointer-events-none absolute -left-32 bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#C6A15B]/[0.025] blur-3xl"
                    />

                    {/* =================================================
                        CONTENT WRAPPER
                    ================================================= */}

                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        className="relative z-10 w-full px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-10 lg:py-16 xl:px-16 2xl:px-20"
                    >

                        {/* =================================================
                            PLACEMENT QUOTE
                        ================================================= */}

                        <motion.div
                            variants={itemVariants}
                            className="max-w-[650px]"
                        >
                            {/* Quote mark */}
                            <span
                                aria-hidden
                                className="font-display mb-4 block text-[64px] leading-[0.35] text-[#C6A15B]/20 sm:text-[72px]"
                            >
                                “
                            </span>

                            <h2 className="font-display text-[1.7rem] font-medium leading-[1.18] tracking-[-0.025em] text-white sm:text-[2rem] md:text-[2.25rem] lg:text-[2rem] xl:text-[2.35rem]">
                                <span className="text-[#C6A15B]">
                                    100% Placement Assistance
                                </span>

                                <span className="text-white/85">
                                    {" "}
                                    — India &amp; International Postings.
                                </span>
                            </h2>
                        </motion.div>

                        {/* =================================================
                            HIRING PARTNERS
                        ================================================= */}

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 sm:mt-12"
                        >
                            {/* Section title */}
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#C6A15B]/60" />

                                <span className="font-body text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                                    Hiring Partners
                                </span>
                            </div>

                            {/* Logo grid */}
                            <motion.div
                                variants={contentVariants}
                                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3"
                            >
                                {PARTNERS.map((partner) => (
                                    <motion.div
                                        key={partner.name}
                                        variants={logoVariants}
                                        whileHover={
                                            reduceMotion
                                                ? undefined
                                                : {
                                                    y: -4,
                                                    borderColor:
                                                        "rgba(198,161,91,0.45)",
                                                    backgroundColor:
                                                        "rgba(255,255,255,0.045)",
                                                }
                                        }
                                        transition={{
                                            duration: 0.4,
                                            ease: EASE,
                                        }}
                                        className="group flex h-[62px] items-center justify-center overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.025] px-3 transition-all duration-500 sm:h-[68px]"
                                    >
                                        <img
                                            src={partner.image}
                                            alt={`${partner.name} logo`}
                                            className="h-auto max-h-[38px] w-auto max-w-[130px] object-contain opacity-55 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-w-[140px]"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* =================================================
                            AFFILIATIONS
                        ================================================= */}

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 border-t border-white/[0.07] pt-6 sm:mt-9 sm:pt-7"
                        >
                            <p className="mb-4 font-body text-[9px] font-semibold uppercase tracking-[0.28em] text-white/40">
                                Proudly Affiliated &amp; Recognized.
                            </p>

                            <motion.div
                                variants={contentVariants}
                                className="flex flex-wrap items-center gap-2.5 sm:gap-3"
                            >
                                {ACCREDITATIONS.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={logoVariants}
                                        whileHover={
                                            reduceMotion
                                                ? undefined
                                                : {
                                                    y: -3,
                                                    borderColor:
                                                        "rgba(198,161,91,0.3)",
                                                }
                                        }
                                        transition={{
                                            duration: 0.4,
                                            ease: EASE,
                                        }}
                                        className="group flex h-11 min-w-[68px] flex-1 items-center justify-center rounded-sm border border-white/[0.07] bg-white/[0.02] px-3 transition-colors duration-500 sm:flex-none sm:min-w-[76px]"
                                    >
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck
                                                className="h-3.5 w-3.5 text-[#C6A15B]/45 transition-colors duration-500 group-hover:text-[#C6A15B]"
                                                strokeWidth={1.5}
                                            />

                                            <span className="font-body text-[9px] font-semibold tracking-[0.14em] text-white/35 transition-colors duration-500 group-hover:text-white/60">
                                                {item.mark}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}