"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseX: number;
    baseY: number;
    axis: "x" | "y";
    color: string;
    size: number;
    direction: number; // 1 or -1, to remember which way it flows along the line
}

export const NeuralBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // --- Configuration ---
        const config = {
            particleCount: 80, // Reduced count slightly for cleaner look
            connectionRadius: 150,
            mouseRange: 250,
            baseSpeed: 0.8,
            fastSpeed: 6.0,       // Speed when mouse is near
            // Darker/dimmer colors for better text contrast
            colors: ["#00ADB5", "#9D00FF", "#555555"],
        };

        let particles: Particle[] = [];
        let animationFrameId: number;
        let scrollPercent = 0;

        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const count = window.innerWidth < 768 ? 40 : config.particleCount;

            const cols = Math.floor(Math.sqrt(count * (canvas.width / canvas.height)));
            const rows = Math.ceil(count / cols);
            const cellWidth = canvas.width / cols;
            const cellHeight = canvas.height / rows;

            for (let i = 0; i < count; i++) {
                const axis = i % 2 === 0 ? "x" : "y";
                const col = i % cols;
                const row = Math.floor(i / cols);

                const baseX = col * cellWidth + cellWidth / 2;
                const baseY = row * cellHeight + cellHeight / 2;

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * config.baseSpeed,
                    vy: (Math.random() - 0.5) * config.baseSpeed,
                    baseX,
                    baseY,
                    axis,
                    color: config.colors[Math.floor(Math.random() * config.colors.length)],
                    size: Math.random() * 1.5 + 1, // Smaller particles (1px - 2.5px)
                    direction: Math.random() > 0.5 ? 1 : -1, // Random flow direction
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // --- Scroll Calculations ---

            // Act 1: Fade In (0% - 20%)
            let globalAlpha = Math.min(1, Math.max(0, (scrollPercent - 0.1) / 0.2));

            // Act 2: Structure/Grid (40% - 80%)
            let structureFactor = 0;
            if (scrollPercent >= 0.40) {
                structureFactor = Math.min(1, (scrollPercent - 0.40) / 0.20);
            }

            // Act 3: Explosion (80%+)
            let explosionFactor = 0;
            if (scrollPercent >= 0.80) {
                explosionFactor = Math.min(1, (scrollPercent - 0.80) / 0.15);
            }

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            particles.forEach((p) => {

                // --- MOUSE SPEED CALCULATION (No Repulsion, Just Speed) ---
                const dxM = p.x - mouse.x;
                const dyM = p.y - mouse.y;
                const distM = Math.sqrt(dxM * dxM + dyM * dyM);

                let currentSpeed = config.baseSpeed;

                // If mouse is near, ramp up speed smoothly
                if (distM < config.mouseRange) {
                    const boost = 1 - (distM / config.mouseRange); // 0 to 1
                    currentSpeed += (config.fastSpeed - config.baseSpeed) * boost;
                }

                // ============================================
                // MOVEMENT LOGIC
                // ============================================

                // 1. EXPLOSION PHASE
                if (explosionFactor > 0) {
                    const dx = p.baseX - centerX;
                    const dy = p.baseY - centerY;
                    let angle = Math.atan2(dy, dx);
                    if (dx === 0 && dy === 0) angle = Math.random() * Math.PI * 2;

                    const maxDist = Math.max(canvas.width, canvas.height) * 1.5;
                    const blastDist = maxDist * (explosionFactor * explosionFactor);

                    // Strictly map position to scroll percent to ensure smooth reverse scrolling
                    p.x = p.baseX + Math.cos(angle) * blastDist;
                    p.y = p.baseY + Math.sin(angle) * blastDist;

                    // Add slight jitter for realism
                    p.x += (Math.random() - 0.5) * 20 * explosionFactor;
                    p.y += (Math.random() - 0.5) * 20 * explosionFactor;
                }

                // 2. GRID / LINE FOLLOWING PHASE
                else if (structureFactor > 0) {
                    // Logic: Magnetic snap to ONE axis, free movement on the other.

                    if (p.axis === "x") {
                        // Snap Y to grid
                        p.y += (p.baseY - p.y) * 0.1 * structureFactor;

                        // Move X continuously along the line
                        // Direction ensures they don't just jitter back and forth
                        p.x += currentSpeed * p.direction;
                    } else {
                        // Snap X to grid
                        p.x += (p.baseX - p.x) * 0.1 * structureFactor;

                        // Move Y continuously along the line
                        p.y += currentSpeed * p.direction;
                    }

                    // Screen Wrap (Infinite Flow Effect)
                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;
                }

                // 3. CHAOS PHASE
                else {
                    // Re-Ignition: If velocity died out, give it a kick
                    if (Math.abs(p.vx) < 0.1) p.vx = (Math.random() - 0.5) * config.baseSpeed;
                    if (Math.abs(p.vy) < 0.1) p.vy = (Math.random() - 0.5) * config.baseSpeed;

                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                }

                // ============================================
                // DRAWING
                // ============================================

                const activeAlpha = globalAlpha * (1 - explosionFactor);

                if (activeAlpha > 0) {
                    particles.forEach((p2) => {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distSq = dx * dx + dy * dy;

                        if (distSq < config.connectionRadius * config.connectionRadius) {
                            const dist = Math.sqrt(distSq);
                            let lineAlpha = (1 - dist / config.connectionRadius) * activeAlpha;

                            // Dim the lines for readability!
                            // Max opacity is 0.15 (very subtle) instead of 1.0
                            lineAlpha *= 0.15;

                            if (lineAlpha > 0.01) {
                                ctx.beginPath();
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.strokeStyle = p.color; // Use particle color for lines
                                ctx.lineWidth = 0.5;
                                ctx.globalAlpha = lineAlpha;
                                ctx.stroke();
                            }
                        }
                    });
                }

                // Draw Particle
                ctx.beginPath();
                const size = p.size * (1 + explosionFactor * 3);
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);

                if (explosionFactor > 0.1) {
                    ctx.fillStyle = "#FFFFFF";
                } else {
                    ctx.fillStyle = p.color;
                }

                // DIM OPACITY FOR READABILITY
                // Base opacity is 0.3 (instead of 1.0)
                // Fades out further during explosion
                ctx.globalAlpha = 0.3 * (1 - explosionFactor * 0.5);

                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const winHeight = docHeight > 0 ? docHeight : 1;
            scrollPercent = Math.min(1, Math.max(0, scrollTop / winHeight));
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    );
};
