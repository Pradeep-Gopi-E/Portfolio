"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const CircularImageCalibrator = () => {
    // Default values - starting near where we left off
    const [posX, setPosX] = useState(25); // X position %
    const [posY, setPosY] = useState(35); // Y position %
    const [scale, setScale] = useState(1.4); // Scale

    const [isDragging, setIsDragging] = useState(false);

    // Refs for drag calculation
    const startPos = useRef({ x: 0, y: 0 });
    const startVal = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        startPos.current = { x: e.clientX, y: e.clientY };
        startVal.current = { x: posX, y: posY };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        // Calculate movement
        const dx = e.clientX - startPos.current.x;
        const dy = e.clientY - startPos.current.y;

        // Sensitivity: Divide by 4 for smoother control
        // Note: For object-position, moving mouse right (positive dx) should DECREASE percentage
        // if we want the image content to move right.
        // However, standard intuitive drag is "drag content".
        // If I drag right, I want to see left part of image. So posX should decrease.
        const newX = Math.max(0, Math.min(100, startVal.current.x - (dx / 4)));
        const newY = Math.max(0, Math.min(100, startVal.current.y - (dy / 4)));

        setPosX(Math.round(newX));
        setPosY(Math.round(newY));
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 z-[9999] fixed inset-0">
            <h1 className="text-xl font-bold mb-2 text-[#00ADB5]">Circular Image Calibrator</h1>
            <p className="text-zinc-500 text-sm mb-6">Drag to Pan • Slider to Zoom</p>

            {/* --- PREVIEW FRAME (Circular) --- */}
            {/* 400px x 400px container to match Hero size */}
            <div
                className="relative w-[400px] h-[400px] border-2 border-[#00ADB5] rounded-full overflow-hidden cursor-move group touch-none shadow-[0_0_30px_rgba(0,173,181,0.3)]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
            >
                {/* Visual Guides */}
                <div className="absolute inset-0 bg-[#00ADB5]/10 pointer-events-none z-10 mix-blend-overlay rounded-full" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500/50 z-20 pointer-events-none" />
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-red-500/50 z-20 pointer-events-none" />

                <Image
                    src="/wes-hicks-4-EeTnaC1S4-unsplash.jpg" // Ensure this path is correct
                    alt="Calibration"
                    fill
                    className="object-cover transition-transform duration-75"
                    style={{
                        objectPosition: `${posX}% ${posY}%`,
                        transform: `scale(${scale})`
                    }}
                    draggable={false}
                />
            </div>

            {/* --- CONTROLS --- */}
            <div className="w-full max-w-[600px] mt-8 bg-zinc-900 border border-zinc-800 p-6 rounded-xl">

                {/* Scale Slider */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-zinc-400">Zoom Level</span>
                        <span className="text-[#00ADB5] font-mono">{scale.toFixed(2)}x</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="3"
                        step="0.05"
                        value={scale}
                        onChange={(e) => setScale(parseFloat(e.target.value))}
                        className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-[#00ADB5]"
                    />
                </div>

                {/* Final Code Output */}
                <div className="p-4 bg-black rounded border border-zinc-800 font-mono text-sm text-zinc-300 break-all">
                    <p className="text-zinc-500 text-xs mb-2 uppercase tracking-wider">Copy these values:</p>
                    <span className="text-purple-400">className</span>=
                    "<span className="text-green-400">object-cover</span>{' '}
                    <span className="text-yellow-400">object-[{posX}%_{posY}%]</span>{' '}
                    <span className="text-blue-400">scale-[{scale}]</span>"
                </div>
            </div>
        </div>
    );
};