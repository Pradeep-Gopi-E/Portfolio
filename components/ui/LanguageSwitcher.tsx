"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { Button } from '@/components/ui/Button'; // Will create Button next

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'de' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
        >
            {locale === 'en' ? 'DE' : 'EN'}
        </button>
    );
}
