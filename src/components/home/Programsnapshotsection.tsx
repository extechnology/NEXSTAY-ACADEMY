import React from "react";
import { motion, type Variants } from "framer-motion";
import {
    Clock,
    GraduationCap,
    Briefcase,
    ArrowUpRight,
    BookOpen,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface DurationBreakdown {
    totalMonths: number;
    classroomDays: number;
    internshipDays: number;
    onJobDays: number;
}

interface Course {
    id: string;
    title: string;
    image: string;
    duration: DurationBreakdown;
    highlights: string[];
    featured?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Dummy content — matches the "Diploma in Hotel Management" format   */
/* ------------------------------------------------------------------ */

const COURSES: Course[] = [
    {
        id: "dip-hotel-mgmt",
        title: "Diploma in Hotel Management",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        duration: {
            totalMonths: 15,
            classroomDays: 100,
            internshipDays: 180,
            onJobDays: 180,
        },
        highlights: [
            "Front Office",
            "Housekeeping",
            "F&B Service",
            "Sales & Marketing",
            "IT",
            "HR",
            "Spoken English",
            "Grooming & Personality Development",
        ],
        featured: true,
    },
    {
        id: "dip-culinary-arts",
        title: "Diploma in Culinary Arts",
        image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
        duration: {
            totalMonths: 12,
            classroomDays: 90,
            internshipDays: 120,
            onJobDays: 150,
        },
        highlights: [
            "Culinary Foundations",
            "Bakery & Patisserie",
            "Kitchen Safety",
            "Menu Planning",
            "Food Costing",
            "Live Kitchen Practice",
        ],
    },
    {
        id: "cert-front-office",
        title: "Certificate in Front Office & Guest Relations",
        image:
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        duration: {
            totalMonths: 6,
            classroomDays: 60,
            internshipDays: 60,
            onJobDays: 60,
        },
        highlights: [
            "Guest Handling",
            "Reservation Systems",
            "Concierge Etiquette",
            "Spoken English",
            "PMS Software",
        ],
    },
];

/* ------------------------------------------------------------------ */
/*  Pill theme — unified dark navy chip with gold accent dot           */
/* ------------------------------------------------------------------ */

const PILL_THEME = {
    wrap: "bg-[#0F1F35] text-[#EAF0FA] ring-1 ring-white/[0.06]",
    dot: "bg-[#D4AF37]",
};

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.22,
            delayChildren: 0.1,
        },
    },
};

const riseIn: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
};

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

const DurationStat: React.FC<{
    icon: React.ReactNode;
    value: number;
    label: string;
}> = ({ icon, value, label }) => (
    <div className="flex flex-1 flex-col items-center gap-1.5 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071322]/[0.06] text-[#071322]">
            {icon}
        </div>
        <span className="font-heading text-xl font-semibold leading-none text-[#0F1B2D]">
            {value}
        </span>
        <span className="text-center text-[10px] font-medium uppercase tracking-wide text-slate-500">
            {label}
        </span>
    </div>
);

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative flex w-[88vw] max-w-[440px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-gray-300 bg-white shadow-[0_10px_30px_-12px_rgba(7,19,34,0.35)] ring-1 ring-black/5 sm:w-[400px] md:w-full"
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-60">
                <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/70 via-[#071322]/0 to-transparent" />

                {course.featured && (
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#071322] shadow-sm">
                        Flagship Program
                    </span>
                )}

                <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#071322] backdrop-blur-sm">
                    <Clock className="h-3 w-3" strokeWidth={2.5} />
                    {course.duration.totalMonths} Months
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-5 p-7">
                <h3 className="font-heading text-[21px] font-semibold leading-snug text-[#0F1B2D]">
                    {course.title}
                </h3>

                {/* Duration breakdown */}
                <div className="flex items-stretch justify-between rounded-2xl border border-slate-100 bg-slate-50/70 py-4">
                    <DurationStat
                        icon={<BookOpen className="h-4 w-4" strokeWidth={2} />}
                        value={course.duration.classroomDays}
                        label="Classroom"
                    />
                    <div className="w-px bg-slate-200" />
                    <DurationStat
                        icon={<GraduationCap className="h-4 w-4" strokeWidth={2} />}
                        value={course.duration.internshipDays}
                        label="Training"
                    />
                    <div className="w-px bg-slate-200" />
                    <DurationStat
                        icon={<Briefcase className="h-4 w-4" strokeWidth={2} />}
                        value={course.duration.onJobDays}
                        label="On-Job"
                    />
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                    {course.highlights.slice(0, 6).map((item) => (
                        <span
                            key={item}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${PILL_THEME.wrap}`}
                        >
                            <span
                                className={`h-1.5 w-1.5 shrink-0 rounded-full ${PILL_THEME.dot}`}
                            />
                            {item}
                        </span>
                    ))}
                    {course.highlights.length > 6 && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            +{course.highlights.length - 6} more
                        </span>
                    )}
                </div>

                {/* CTA */}
                <motion.a
                    href="#"
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.97 }}
                    className="group/cta relative mt-auto inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-[#D4AF37]/50 px-5 py-2.5 text-sm font-semibold text-[#8a6d1a]"
                >
                    <motion.span
                        variants={{
                            rest: { x: "-100%" },
                            hover: { x: "0%" },
                        }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C79A2E]"
                    />
                    <motion.span
                        variants={{
                            rest: { color: "#8a6d1a" },
                            hover: { color: "#071322" },
                        }}
                        transition={{ duration: 0.35 }}
                        className="relative z-10"
                    >
                        View Full Curriculum
                    </motion.span>
                    <motion.span
                        variants={{
                            rest: { x: 0, y: 0, color: "#8a6d1a" },
                            hover: { x: 3, y: -3, color: "#071322" },
                        }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 flex"
                    >
                        <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                </motion.a>
            </div>
        </motion.article>
    );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
const ProgramSnapshotSection: React.FC = () => {
    return (
        <section className="relative -mt-16 overflow-hidden bg-white pb-20 pt-16 sm:-mt-24 sm:pb-28 sm:pt-24 lg:-mt-50 lg:pt-60">
            {/* Diagonal brand-navy background shape, echoing the homepage hero split */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "#071322",
                    clipPath: "polygon(0 0, 68% 0, 44% 100%, 0 100%)",
                }}
            />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
                {/* Heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={containerVariants}
                    className="mb-14 max-w-2xl sm:mb-16"
                >
                    <motion.span
                        variants={riseIn}
                        className="mb-4 inline-block rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]"
                    >
                        Our Programs
                    </motion.span>

                    <motion.h2
                        variants={riseIn}
                        className="whitespace-nowrap font-heading font-bold leading-[1.05] text-white text-[clamp(1.75rem,6vw,3.75rem)]"
                    >
                        Program Snapshot
                    </motion.h2>

                    <motion.p
                        variants={riseIn}
                        className="mt-5 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base"
                    >
                        Industry-built curriculums that turn classroom hours into
                        guaranteed, 5-star international placements.
                    </motion.p>
                </motion.div>

                {/* Cards — horizontal scroll-snap on mobile, grid on desktop */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={containerVariants}
                    className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:gap-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:snap-none md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
                >
                    {COURSES.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramSnapshotSection;