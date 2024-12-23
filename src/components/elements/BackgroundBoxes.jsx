// src/components/BackgroundBoxesDemo.jsx
import React from "react";
import { Boxes } from "../ui/background-boxes";  // Adjust path to Boxes component
import { cn } from "../../lib/utils";  // Adjust path to cn utility function

export function BackgroundBoxesDemo() {
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                SARATH KUMAR
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                Full Stack Developer / Web 3 Enthusiast
            </p>
        </div>

    );
}

export default BackgroundBoxesDemo; // Export the component
