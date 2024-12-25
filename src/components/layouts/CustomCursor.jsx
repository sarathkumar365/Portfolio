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
                className="absolute w-9 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"

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
            >
                <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
                    alt="Beaming Face with Smiling Eyes"
                    className="w-8 h-8"
                />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
