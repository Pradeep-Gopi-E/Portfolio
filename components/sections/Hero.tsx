"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Download, Mail, Github, Linkedin, Terminal } from "lucide-react";

export function Hero() {
    const t = useTranslations("Hero");
    const locale = useTranslations("Locale")('code'); // We'll add this to locale files

    return (
        <Section id="hero" className="flex items-center justify-center min-h-screen pt-24 md:pt-0">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl gap-12 px-4 md:px-8">

                {/* --- LEFT: TEXT CONTENT --- */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 flex-1 text-center lg:text-left z-10"
                >
                    {/* Tech Badge / Name Tag */}
                    <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ADB5] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ADB5]"></span>
                        </span>
                        <span className="font-mono text-[#00ADB5] font-medium tracking-wide">
                            &lt;Pradeep Gopi /&gt;
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        <span className="block">{t('role')}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        {t('tagline')}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                        <Button size="lg" className="rounded-full px-8 bg-[#00ADB5] hover:bg-[#008C93] text-white border-none shadow-[0_0_20px_rgba(0,173,181,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,173,181,0.5)]">
                            {t('cta_contact')}
                            <Mail className="ml-2 h-4 w-4" />
                        </Button>

                        <a
                            href={locale === 'de' ? '/CV_Pradeep_Gopi_de.pdf' : '/CV_Pradeep_Gopi_en.pdf'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-transparent border border-white/10 hover:border-[#00ADB5]/50 hover:text-[#00ADB5] hover:bg-[#00ADB5]/10 backdrop-blur-sm transition-all text-white"
                        >
                            {t('cta_resume')}
                            <Download className="ml-2 h-4 w-4" />
                        </a>
                    </div>

                    {/* Social Connectors */}
                    <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 text-zinc-500">
                        <SocialLink href="https://github.com/Pradeep-Gopi-E" icon={<Github className="w-5 h-5" />} />
                        <SocialLink href="https://www.linkedin.com/in/-pradeep-gopi-/" icon={<Linkedin className="w-5 h-5" />} />
                        <SocialLink href="https://github.com/Pradeep-Gopi-E?tab=repositories" icon={<Terminal className="w-5 h-5" />} />
                    </div>
                </motion.div>

                {/* --- RIGHT: THE NEURAL NODE (IMAGE) --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-center relative lg:-mt-12" // Lifted up to align with text block
                >
                    {/* 1. The Atmosphere (Glow behind) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-[#00ADB5]/20 to-transparent blur-3xl -z-10" />

                    {/* 2. The Tech Ring (Spinning) */}
                    {/* UPDATED SIZE: Reduced significantly for a cleaner look */}
                    <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px]">

                        {/* Outer rotating dashed ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-zinc-700/50"
                        />

                        {/* Counter-rotating inner ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-dotted border-[#00ADB5]/30"
                        />

                        {/* 3. The Image Container (Central Node) */}
                        <div className="absolute inset-8 rounded-full p-2 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/5 shadow-2xl">
                            <div className="relative w-full h-full rounded-full overflow-hidden transition-all duration-500 ease-out group">
                                <Image
                                    src="/IMG_2125.JPEG"
                                    alt="Pradeep Gopi"
                                    fill
                                    className="object-cover object-[0%_4%] scale-[1.1] group-hover:scale-[1.15] transition-transform duration-700"
                                    priority
                                />
                                {/* Cyber overlay on image */}
                                <div className="absolute inset-0 bg-[#00ADB5]/10 mix-blend-overlay pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}

// Helper for clean social icons
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="p-2 rounded-full border border-transparent hover:border-[#00ADB5]/30 hover:bg-[#00ADB5]/10 hover:text-[#00ADB5] transition-all duration-300"
        >
            {icon}
        </a>
    );
}