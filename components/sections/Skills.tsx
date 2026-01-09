"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { skillsData } from "@/lib/data";
import { Code2, Cpu, Database, Globe, Server } from "lucide-react";

// Icon Renderer Component
function SimpleIcon({ icon, className }: { icon: any, className?: string }) {
    return (
        <div className={className}>
            <svg
                role="img"
                viewBox="0 0 24 24"
                fill={`#${icon.hex}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={icon.path} />
            </svg>
        </div>
    );
}

function SkillCard({ category, items, icon: CatIcon }: { category: string, items: any[], icon: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/30 border border-white/5 rounded-2xl p-4 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group h-full flex flex-col"
        >
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <CatIcon size={20} />
                </div>
                <h3 className="text-lg font-bold text-zinc-100">{category}</h3>
            </div>

            <div className="space-y-1.5 flex-grow pl-3">
                {items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between group/item px-2 py-1 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-zinc-800/80 flex items-center justify-center ring-1 ring-white/5 group-hover/item:ring-primary/50 transition-all shrink-0">
                                {item.icon.type === 'lucide' ? (
                                    <item.icon.component className="w-4 h-4 text-zinc-300" />
                                ) : (
                                    <SimpleIcon icon={item.icon} className="w-4 h-4 p-0.5" />
                                )}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-zinc-200 leading-tight">{item.name}</div>
                                {item.desc && <div className="text-[10px] text-zinc-500 hidden xl:block leading-tight mt-0.5">{item.desc}</div>}
                            </div>
                        </div>
                        <div className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-zinc-800 border border-white/5 text-primary/80 group-hover/item:text-primary group-hover/item:bg-primary/10 transition-colors shrink-0">
                            {item.level}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export function Skills() {
    const t = useTranslations("Skills");

    return (
        <Section id="skills" className="bg-background min-h-screen flex flex-col justify-center py-8">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{t('title')}</h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-sm">
                    Technologies I&apos;ve worked with in real-world projects and professional environments
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="lg:col-span-2">
                    <SkillCard category="Programming Languages" items={skillsData.languages} icon={Code2} />
                </div>
                <div className="lg:col-span-2">
                    <SkillCard category="AI/ML Technologies" items={skillsData.aiml} icon={Cpu} />
                </div>
                <div className="lg:col-span-2">
                    <SkillCard category="Cloud & Databases" items={skillsData.cloud} icon={Database} />
                </div>

                <div className="lg:col-span-3">
                    <SkillCard category="Frontend Development" items={skillsData.frontend} icon={Globe} />
                </div>
                <div className="lg:col-span-3">
                    <SkillCard category="Backend Development" items={skillsData.backend} icon={Server} />
                </div>
            </div>
        </Section>
    );
}
