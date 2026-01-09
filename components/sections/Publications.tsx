"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Publications = () => {
    const t = useTranslations("Publications");

    const publications = [
        {
            id: "federated_learning",
            title: t('items.federated_learning.title'),
            date: "2025",
            description: t('items.federated_learning.description'),
            link: "https://medium.com/@madanmanav.1994/federated-learning-a-necessity-for-agriculture-ade9da53df57"
        },
        {
            id: "dark_luxury",
            title: t('items.dark_luxury.title'),
            date: "2026",
            description: t('items.dark_luxury.description'),
            link: "https://medium.com/@pradeepgopi99/beyond-syntax-orchestrating-a-dark-luxury-portfolio-with-antigravity-claude-cdfb9a0f0fe3"
        }
    ];

    return (
        <section className="py-24 relative bg-zinc-900/30" id="publications">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('title')}</h2>
                            <p className="text-zinc-400 mt-1">{t('subtitle')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {publications.map((pub, index) => (
                            <motion.a
                                key={pub.id}
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group block p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-800/80 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono">
                                        {pub.date}
                                    </div>
                                    <ExternalLink size={18} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {pub.title}
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {pub.description}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
