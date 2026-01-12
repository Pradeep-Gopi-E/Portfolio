import {
    siPython, siTypescript, siJavascript, siGnubash, siPostgresql,
    siPytorch, siTensorflow, siGooglecloud, siHuggingface, siKeras, siOpencv,
    siFastapi, siFlask,
    siReact, siNextdotjs, siTailwindcss, siHtml5,
    siDocker, siKubernetes, siLinux, siGit, siSupabase, siVercel,
    siLangchain
} from 'simple-icons/icons';
import { Server, BrainCircuit, Cloud, Code2, Lightbulb, Users, Zap } from 'lucide-react';

// Mapping for icon components involves some hydration trickery or using SVG paths directly.
// To keep it simple and performant in RSC, we'll store the SVG path/hex.
export type TechIcon = {
    type: 'simple' | 'lucide';
    title: string;
    slug?: string;
    hex?: string;
    path?: string;
    component?: any;
};

// Helper to convert SimpleIcon to our TechIcon type
const icon = (i: any): TechIcon => ({ type: 'simple', title: i.title, slug: i.slug, hex: i.hex, path: i.path });
const lucide = (Name: string, Component: any): TechIcon => ({ type: 'lucide', title: Name, component: Component });

export const skillsData = {
    languages: [
        { name: "Python", desc: "AI/ML, Automation, APIs", level: "5y+", icon: icon(siPython) },
        { name: "JavaScript", desc: "Full-stack, React", level: "1y+", icon: icon(siJavascript) },
        { name: "TypeScript", desc: "Enterprise React/Next.js", level: "1y+", icon: icon(siTypescript) },
        { name: "SQL", desc: "Database Design, Queries", level: "2y+", icon: icon(siPostgresql) },
        { name: "Bash/Shell", desc: "Scripting, Linux Auto", level: "3y+", icon: icon(siGnubash) },
    ],
    aiml: [
        { name: "PyTorch", desc: "Deep Learning, Custom Loops", level: "3y+", icon: icon(siPytorch) },
        { name: "TensorFlow", desc: "DL Models, Serving", level: "2y+", icon: icon(siTensorflow) },
        { name: "Hugging Face", desc: "Transformers, Fine-tuning", level: "1y+", icon: icon(siHuggingface) },
        { name: "LangChain", desc: "RAG Systems, AI Agents", level: "Project", icon: icon(siLangchain) },
        { name: "Google Gemini", desc: "GenAI, Structured Prompts", level: "Project", icon: icon(siGooglecloud) },
        { name: "Stable Diffusion", desc: "Generative Inpainting", level: "Project", icon: icon(siHuggingface) },
        { name: "Keras", desc: "JAX backend", level: "Project", icon: icon(siKeras) },
        { name: "OpenCV", desc: "Computer Vision", level: "Project", icon: icon(siOpencv) },
    ],
    backend: [
        { name: "FastAPI", desc: "Async APIs", level: "2y+", icon: icon(siFastapi) },
        { name: "Flask", desc: "Lightweight Services", level: "1y+", icon: icon(siFlask) },
    ],
    frontend: [
        { name: "React", desc: "Components", level: "1y+", icon: icon(siReact) },
        { name: "Next.js", desc: "App Router", level: "1y+", icon: icon(siNextdotjs) },
        { name: "Tailwind", desc: "Styles", level: "1y+", icon: icon(siTailwindcss) },
        { name: "HTML/CSS", desc: "Markup", level: "1y+", icon: icon(siHtml5) },
    ],
    cloud: [
        { name: "GKE", desc: "K8s, Autoscaling", level: "Project", icon: icon(siKubernetes) },
        { name: "AWS", desc: "IAM, S3, Networking", level: "Project", icon: lucide("AWS", Cloud) },
        { name: "EC2", desc: "Compute", level: "Project", icon: lucide("EC2", Server) },
        { name: "SageMaker", desc: "ML Ops", level: "Project", icon: lucide("SageMaker", BrainCircuit) },
        { name: "Docker", desc: "Containerization", level: "2y+", icon: icon(siDocker) },
        { name: "Cloud Build", desc: "CI/CD, Artifacts", level: "2y+", icon: icon(siGooglecloud) },
        { name: "Supabase", desc: "PostgreSQL, Auth", level: "Project", icon: icon(siSupabase) },
        { name: "GitOps", desc: "Automated Deployments", level: "Project", icon: icon(siGit) },
        { name: "Linux", desc: "SysAdmin", level: "1y+", icon: icon(siLinux) },
    ]
};

export const projects = [
    {
        id: "latent_diffusion",
        title: "Latent Diffusion Face Anonymization",
        description: "Experimental pipeline for privacy-preserving anonymization using Stable Diffusion and ControlNet.",
        tech: ["Python", "Stable Diffusion", "ControlNet", "PyTorch", "Docker"],
        category: "AI Research",
        badges: ["Featured", "Published CVPR"],
        link: "https://github.com/KIT-MRT/latent_diffusion_face_anonymization",
        stats: "2+ Languages, 8+ AI Tools"
    },
    {
        id: "packvote",
        title: "Cohere",
        description: "Prototype AI-powered group travel planner utilizing Ranked-Choice Voting and iterative chunking.",
        tech: ["Next.js", "FastAPI", "Gemini", "Supabase", "Tailwind"],
        category: "Applied ML",
        badges: ["GenAI", "Travel Tech"],
        link: "https://optigo-cohere.vercel.app",
        stats: "3+ Languages, 1+ AI Tools"
    },
    {
        id: "paligemma",
        title: "Paligemma Fine-Tuning",
        description: "Fine-tuning pipeline adapting Google's Vision-Language Model for industrial object detection.",
        tech: ["PyTorch", "Transformers", "Paligemma", "LoRA", "OpenCV"],
        category: "AI Research",
        badges: ["Open Source", "Computer Vision"],
        link: "https://github.com/Pradeep-Gopi-E/paligemma-finetune",
        stats: "1+ Languages, 5+ AI Tools"
    },
    {
        id: "gcp_gitops",
        title: "GCP GitOps Pipeline",
        description: "Reference CI/CD workflow automating deployments from code commit to production on GKE.",
        tech: ["GKE", "Cloud Build", "Docker", "Flask", "YAML"],
        category: "DevOps",
        badges: ["GitOps", "Infrastructure"],
        link: "https://github.com/Pradeep-Gopi-E/hello-cloudbuild-app",
        stats: "3+ Languages, 4+ Cloud Tools"
    },
    {
        id: "zero_shot",
        title: "Zero-Shot Anomaly Detection",
        description: "Thesis implementation utilizing VLM (CLIP, PaliGemma) for zero-shot defect detection.",
        tech: ["PyTorch", "Keras (JAX)", "CLIP", "Roboflow", "Supervision"],
        category: "AI Research",
        badges: ["Master's Thesis", "Zero-Shot"],
        link: "#",
        stats: "Multi-model Integration"
    },
    {
        id: "tf_serving",
        title: "TensorFlow Serving on GKE",
        description: "Benchmarking scalable ML serving architectures with HPA autoscaling and Locust load testing.",
        tech: ["TensorFlow Serving", "GKE", "Kpt", "Locust", "Python"],
        category: "MLOps",
        badges: ["Autoscaling", "Cloud"],
        link: "https://github.com/Pradeep-Gopi-E/tfserving-gke-autoscaling",
        stats: "3+ Languages, 4+ Cloud Tools"
    }
];

export const aboutStats = [
    { value: "10+", label: "Projects Completed" },
    { value: "2+", label: "Professional Experience" },
    { value: "20+", label: "Technologies Mastered" }
];

export const howIWork = [
    {
        id: "clean_code",
        icon: lucide("Clean Code", Code2),
        title: "Clean Code",
        description: "Maintainable, scalable, and self-documenting architectures."
    },
    {
        id: "innovation",
        icon: lucide("Innovation", Lightbulb),
        title: "Innovation",
        description: "Leveraging state-of-the-art AI to solve complex problems."
    },
    {
        id: "collaboration",
        icon: lucide("Collaboration", Users),
        title: "Collaboration",
        description: "Effective communication and teamwork in agile environments."
    },
    {
        id: "performance",
        icon: lucide("Performance", Zap),
        title: "Performance",
        description: "Optimizing algorithms and pipelines for maximum efficiency."
    }
];

export const experience = [
    {
        id: "fzi",
        company: "Forschungszentrum Informatik (FZI)",
        role: "Research Assistant",
        location: "Karlsruhe, Germany",
        period: "July 2024 – June 2025",
        achievements: [
            "Designed Deep Learning pipeline for ITS & GDPR-compliant anonymization.",
            "Achieved 19% higher mAP with Latent Diffusion Models compared to GANs.",
            "Anonymized 100% of faces (3,765) in Cityscapes with high semantic integrity.",
            "Integrated ControlNet to replace WebUI, enhancing automation."
        ],
        type: "research",
        logo: "/icons/companies/fzi.svg",
        summary: "Specialized in privacy-preserving AI for autonomous driving, focusing on Latent Diffusion Models and GDPR compliance.",
        skills: ["Deep Learning", "Generative AI", "Computer Vision"],
        technologies: ["Python", "PyTorch", "Stable Diffusion", "ControlNet", "Docker"]
    },
    {
        id: "hfu",
        company: "HFU Wirtschaftsingenieurwesen",
        role: "Research Assistant",
        location: "Furtwangen, Germany",
        period: "Sept 2023 – Jan 2024",
        achievements: [
            "Designed a closed-loop robot feedback system achieving sub-millimeter positional accuracy under real-time constraints.",
            "Implemented and optimized inverse kinematics–based motion planning, reducing trajectory error and improving repeatability across test runs.",
            "Developed embedded control logic for actuators and sensors, balancing latency, precision, and stability.",
            "Validated algorithms through iterative hardware prototyping and bench testing."
        ],
        type: "university",
        logo: "/icons/companies/hfu.svg",
        summary: "Engineered high-precision embedded systems and motion planning algorithms for robotics application.",
        skills: ["Robotics", "Embedded Systems", "Inverse Kinematics", "Control Loops", "Prototyping"],
        technologies: ["Python", "C++", "Arduino", "Inverse Kinematics"]
    }
];
