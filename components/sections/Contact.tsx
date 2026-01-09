"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Send, Mail, Phone, MapPin, Github, Linkedin, FileText } from "lucide-react";

import { useState } from "react";
import { useTranslations } from "next-intl";

export const Contact = () => {
    const t = useTranslations("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 relative" id="contact">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: The Functional Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
                            <p className="text-zinc-400">
                                {t('subtitle')}
                            </p>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">{t('name')} <span className="text-blue-500">*</span></label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder={t('placeholder_name')}
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">{t('email')} <span className="text-blue-500">*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder={t('placeholder_email')}
                                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-zinc-300">{t('subject')} <span className="text-blue-500">*</span></label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    placeholder={t('placeholder_subject')}
                                    className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">{t('message')} <span className="text-blue-500">*</span></label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={6}
                                    placeholder={t('placeholder_message')}
                                    className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : isSuccess ? (
                                    <span className="text-green-400">Message Sent!</span>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {t('send')}
                                    </>
                                )}
                            </button>
                            {error && (
                                <p className="text-red-400 text-sm text-center mt-2">{error}</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Right Column: Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:pt-12"
                    >
                        {/* Contact Info Card */}
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-6">{t('info_title')}</h3>
                            <div className="space-y-6">
                                <a href="mailto:pradeepgopi99@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                                    <div className="p-3 rounded-lg bg-zinc-800 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-0.5">{t('email')}</div>
                                        <div className="font-medium">pradeepgopi99@gmail.com</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-zinc-400">
                                    <div className="p-3 rounded-lg bg-zinc-800 text-blue-400">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-0.5">Location</div>
                                        <div className="font-medium">Furtwangen, Germany</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Follow Me Card */}
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-6">{t('follow_title')}</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <a
                                    href="https://github.com/Pradeep-Gopi-E"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all border border-white/5 hover:border-white/10 group"
                                >
                                    <div className="p-2 rounded-lg bg-black text-white group-hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">GitHub</div>
                                        <div className="text-xs text-zinc-500">@Pradeep-Gopi-E</div>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/-pradeep-gopi-/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all border border-white/5 hover:border-white/10 group"
                                >
                                    <div className="p-2 rounded-lg bg-[#0077b5] text-white group-hover:scale-110 transition-transform">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">LinkedIn</div>
                                        <div className="text-xs text-zinc-500">/in/-pradeep-gopi-</div>
                                    </div>
                                </a>

                                <a
                                    href="https://medium.com/@pradeepgopi99"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition-all border border-white/5 hover:border-white/10 group"
                                >
                                    <div className="p-2 rounded-lg bg-white text-black group-hover:scale-110 transition-transform">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">Medium</div>
                                        <div className="text-xs text-zinc-500">@pradeepgopi99</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
