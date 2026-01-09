"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");
    return (
        <footer className="py-8 bg-black border-t border-white/5">
            <Container className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
                <div>
                    &copy; {new Date().getFullYear()} {t('rights')}
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://github.com/Pradeep-Gopi-E" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/-pradeep-gopi-/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="mailto:pradeepgopi99@gmail.com" className="hover:text-white transition-colors">Email</a>
                </div>
            </Container>
        </footer>
    );
}
