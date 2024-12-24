// src/components/CustomCursor.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <motion.div
                className="absolute w-9 h-12 rounded-full bg-gradient-to-b from-white to-neutral-300"
                style={{
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    x: cursorPosition.x,
                    y: cursorPosition.y,
                }}
                transition={{
                    type: "spring",
                    damping: 19,
                    stiffness: 450,
                }}
            />
        </div>
    );
};

export default CustomCursor;
