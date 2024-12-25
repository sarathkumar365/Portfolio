"use client";
import React from "react";

import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../ui/text-reveal-card";  // Adjust path to TextRevealCard component

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-screen w-full">
            <TextRevealCard text="<Full Stack Developer/>" revealText="also a Web 3 Enthusiast">
                <TextRevealCardTitle>
                    Hi, Iam Sarath Kumar
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    Iam a,
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}

export default TextRevealCardPreview