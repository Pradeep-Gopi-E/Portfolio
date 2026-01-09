import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505", // Zinc-950
                surface: "#09090b",    // Zinc-900
                primary: "#3b82f6",    // Blue-500
                secondary: "#a855f7",  // Purple-500
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'fade-in': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 10px rgba(59, 130, 246, 0.6)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
