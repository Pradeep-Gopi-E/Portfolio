"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { experience } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";

export const Experience = () => {
    const t = useTranslations("Experience");
    // Track which card is expanded (by index). Null means none.
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative" id="experience">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        {t('title')}
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {experience.map((job, idx) => {
                        const isExpanded = expandedIndex === idx;
                        // Dynamic Translation Keys
                        const role = t(`jobs.${job.id}.role`);
                        const summary = t(`jobs.${job.id}.summary`);
                        const achievements = job.achievements.map((_, i) => t(`jobs.${job.id}.achievements.${i}`));

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => toggleExpand(idx)}
                                className={`
                                    group relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer
                                    ${isExpanded
                                        ? "bg-zinc-900/80 border-blue-500/30 shadow-2xl shadow-blue-500/10"
                                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
                                    }
                                `}
                            >
                                {/* The 'Overview' State (Collapsed) */}
                                <div className="p-8">
                                    <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">

                                        {/* Header & Logo */}
                                        <div className="flex items-start gap-6">
                                            <div className="relative w-16 h-16 flex-shrink-0 bg-white/10 rounded-2xl p-2 flex items-center justify-center border border-white/10">
                                                <Image
                                                    src={job.logo}
                                                    alt={job.company}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-contain invert hue-rotate-180 opacity-90"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                                    {role}
                                                </h3>
                                                <div className="text-lg text-blue-400 font-medium mb-2">
                                                    {job.company}
                                                </div>

                                                {/* Quick Info (Date & Location) */}
                                                <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-medium uppercase tracking-wider mb-4">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar size={14} />
                                                        {job.period}
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin size={14} />
                                                        {job.location}
                                                    </div>
                                                </div>

                                                {/* The Hook: Summary */}
                                                {summary && (
                                                    <p className="text-zinc-400 leading-relaxed max-w-2xl mb-6">
                                                        {summary}
                                                    </p>
                                                )}

                                                {/* Tech Badges (Visible always) */}
                                                {job.skills && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {job.skills.map(skill => (
                                                            <span
                                                                key={skill}
                                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Icon */}
                                        <div className="flex-shrink-0 self-start md:self-center mt-4 md:mt-0">
                                            <div className={`
                                                p-3 rounded-full border transition-all duration-300
                                                ${isExpanded
                                                    ? "bg-blue-500 text-white border-blue-500 rotate-180"
                                                    : "bg-white/5 text-zinc-400 border-white/10 group-hover:bg-white/20 group-hover:text-white"
                                                }
                                            `}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* The 'Detailed' State (Expanded) */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden border-t border-white/5 bg-black/20"
                                        >
                                            <div className="p-8 pt-6 pl-8 md:pl-[6.5rem]"> {/* Indent to align with text above */}

                                                {/* Key Achievements */}
                                                <div className="mb-8">
                                                    <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                                                        <Briefcase size={16} /> Key Achievements
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {achievements.map((achievement, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-zinc-300">
                                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                                <span className="leading-relaxed">{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Full Tech Stack */}
                                                {job.technologies && (
                                                    <div>
                                                        <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                                                            Technologies Used
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {job.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1.5 rounded-lg text-sm bg-zinc-800 text-zinc-300 border border-white/5 hover:border-white/20 transition-colors"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};
