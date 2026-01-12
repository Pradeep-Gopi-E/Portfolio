"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { FolderGit2, Ghost, Rocket } from "lucide-react";
import { Link } from "@/navigation";

export function Navbar() {
    const t = useTranslations("Nav");
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: t("home"), href: "#hero" },
        { name: t("skills"), href: "#skills" },
        { name: t("projects"), href: "#projects" },
        { name: t("experience"), href: "#experience" },
        { name: t("publications"), href: "#publications" },
        { name: t("contact"), href: "#contact" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm" : "bg-transparent"
                }`}
        >
            <Container className="h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">


                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <a
                        href="https://github.com/Pradeep-Gopi-E"
                        target="_blank"
                        rel="noreferrer"
                        className="md:hidden"
                    >
                        {/* Mobile github simplified */}
                    </a>
                </div>
            </Container>
        </motion.nav>
    );
}
