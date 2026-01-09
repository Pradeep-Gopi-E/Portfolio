"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { ExternalLink, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

const categories = ["All", "AI Research", "Applied ML", "DevOps", "MLOps"];

export function Projects() {
    const t = useTranslations("Projects");
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(p =>
        filter === "All" ? true : p.category === filter
    );



    return (
        <Section id="projects" className="bg-background min-h-screen flex flex-col">
            <div className="flex-shrink-0 text-center mb-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${filter === cat
                                ? "bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                : "bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white"
                                }`}
                        >
                            {t(cat as any)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid - Scrollable Area */}
            <div className="px-4 md:px-0 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="space-y-1">
                                            <span className="text-xs font-mono text-primary">{t(project.category as any)}</span>
                                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        {project.badges.includes("Featured") && (
                                            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#3b82f6]"></span>
                                        )}
                                    </div>

                                    <p className="text-zinc-400 text-sm mb-6 flex-grow">
                                        {t(`items.${project.id}.description`)}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.slice(0, 4).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-300">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-500">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-xs text-zinc-500">{project.stats}</span>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-medium flex items-center gap-1 text-white hover:text-primary transition-colors"
                                        >
                                            {project.id === "packvote" ? (
                                                <>
                                                    {t('launch_app')} <Rocket className="h-3 w-3" />
                                                </>
                                            ) : (
                                                <>
                                                    {t('view_code')} <ExternalLink className="h-3 w-3" />
                                                </>
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}
