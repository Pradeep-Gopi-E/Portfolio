"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Quote, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = () => {
    const t = useTranslations("Testimonials");

    const testimonials = [
        {
            id: "hfu",
            quote: t('hfu_quote'),
            source: "Manav Madan",
            role: t('hfu_role'),
            documentLink: "/documents/hfu-letter.pdf"
        },
        {
            id: "fzi",
            quote: t('fzi_quote'),
            source: "Dr. Ing. Ömer Sahin Tas",
            role: t('fzi_role'),
            documentLink: "/documents/fzi-letter.pdf"
        }
    ];

    return (
        <section className="py-16 relative border-t border-white/5" id="testimonials">
            <Container>
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">{t('title')}</h2>
                        <p className="text-sm text-zinc-500 max-w-2xl mx-auto">{t('subtitle')}</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <a
                                    href={item.documentLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/60 transition-all duration-300"
                                >
                                    <div className="flex gap-4 items-start">
                                        <Quote className="w-8 h-8 text-blue-500/20 shrink-0 group-hover:text-blue-500/40 transition-colors" />

                                        <div className="space-y-4">
                                            <blockquote className="text-base text-zinc-400 italic leading-relaxed">
                                                "{item.quote}"
                                            </blockquote>

                                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                <div>
                                                    <div className="font-medium text-white text-sm">{item.source}</div>
                                                    <div className="text-xs text-zinc-500">{item.role}</div>
                                                </div>
                                                <div className="text-zinc-600 group-hover:text-blue-400 transition-colors">
                                                    <FileText size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
