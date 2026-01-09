"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { aboutStats, howIWork } from "@/lib/data";
import { useTranslations } from "next-intl";

export const About = () => {
    const t = useTranslations("About");
    return (
        <section className="py-24 relative overflow-hidden" id="about">


            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: The Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {t('title')}
                        </h2>

                        <div className="space-y-4 text-zinc-400 leading-relaxed text-lg text-justify">
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                            <p>{t('p3')}</p>
                        </div>
                    </motion.div>

                    {/* Right Column: How I Work Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {howIWork.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            >
                                <div className="mb-4 p-3 rounded-xl bg-blue-500/10 w-fit text-blue-400 group-hover:text-blue-300 transition-colors">
                                    {/* Render the Lucide icon component if available, or fallback */}
                                    {item.icon.component ? <item.icon.component size={24} /> : null}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{t(`how_i_work.${item.id}.title`)}</h3>
                                <p className="text-sm text-zinc-400">{t(`how_i_work.${item.id}.description`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-20 pt-10 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {aboutStats.map((stat, idx) => {
                            // Map labels to translation keys:
                            // "Projects Completed" -> stats.projects
                            // "Professional Experience" -> stats.experience (updated label)
                            // "Technologies Mastered" -> stats.tech

                            let statKey = "";
                            if (stat.label.includes("Projects")) statKey = "projects";
                            else if (stat.label.includes("Experience")) statKey = "experience";
                            else if (stat.label.includes("Technologies")) statKey = "tech";

                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative inline-block">
                                        {stat.value}
                                        <span className="absolute -top-2 -right-4 w-3 h-3 bg-blue-500 rounded-full blur-[2px]" />
                                    </div>
                                    <div className="text-zinc-500 font-medium uppercase tracking-wider text-sm">
                                        {statKey ? t(`stats.${statKey}`) : stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};
