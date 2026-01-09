# Pradeep Gopi | Applied Machine Learning Engineer Portfolio

A high-performance, design-forward portfolio website built with Next.js, emphasizing a "Dark Luxury" aesthetic and fluid user experience. This site showcases my work as an Applied ML & Research Engineer, acting as a bridge between experimental research and practical implementation.

## 🚀 Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) (English & German)
-   **Email Service**: [Resend](https://resend.com/)

## ✨ Features

-   **Neural Background**: A custom, performance-optimized canvas animation representing neural network activity.
-   **Internationalization (i18n)**: Full content support for English (`en`) and German (`de`) with middleware-based routing.
-   **Dynamic Assets**:
    -   Resume download automatically serves the correct language version.
    -   Programmatically generated App Icon (Favicon) using Next.js `ImageResponse`.
-   **Interactive UI**:
    -   "Dark Luxury" theme with glassmorphism and subtle gradients.
    -   Scroll-triggered animations.
    -   Compact, high-trust "Endorsements" section.
-   **Contact Form**: Functional Server Action-based contact form integrated with Resend API.

## 🛠️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env.local` file in the root directory and add your Resend API key:
    ```env
    RESEND_API_KEY=re_your_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

```
├── app/
│   ├── [locale]/          # Localized routes (en/de)
│   │   ├── page.tsx       # Main Landing Page
│   │   └── layout.tsx     # Root Layout
│   ├── api/               # API Routes (Email)
│   └── icon.tsx           # Dynamic Favicon Generator
├── components/
│   ├── sections/          # Page Sections (Hero, About, Projects, etc.)
│   ├── ui/                # Reusable UI Components
│   └── layout/            # Navbar, Footer
├── messages/              # Translation files (en.json, de.json)
└── public/                # Static assets (Images, PDFs)
```

## 📄 License
[MIT](LICENSE)
