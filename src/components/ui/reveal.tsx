"use client";
import React from "react";

import {AnimatePresence, motion} from "framer-motion";
import {CanvasRevealEffect} from "@/components/acernity/canvas-reveal-effect";
import {AlignStartVertical, BriefcaseBusinessIcon, GitBranch, Star} from "lucide-react";
import Link from "next/link";


export function CanvasRevealEffectDemo() {
    return (
        <>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
                <Card title="Work Experience" link="/experience" icon={<AlignStartVertical width={44} height={44}/>}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Skills" link="/skills" icon={<Star width={46} height={46}/>}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-violet-800"
                        colors={[
                            [187, 159, 255]
                        ]}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div
                        className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90"/>
                </Card>

                <Card title="Projects" link="/projects" icon={<GitBranch width={46} height={46}/>}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </>
    );
}

const Card = ({
                  title,
                  link,
                  icon,
                  children,
              }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
        >
            <Link href={link}>
                <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
                <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            className="h-full w-full absolute inset-0"
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative z-20">
                    <div
                        className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                        {icon}
                    </div>
                    <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                        <div className="flex align-middle justify-center m-2">
                            {icon}
                        </div>
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};
