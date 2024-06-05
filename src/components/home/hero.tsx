"use client";
import {motion} from "framer-motion";
import {HeroHighlight, Highlight} from "@/components/acernity/hero-highlight";
import {Icons} from "../icons";
import {useState} from "react";
import Link from "next/link";

export function HeroHighlightDemo() {
    // calculate local time in India
    const [time, setTime] = useState({h: '', m: '', s: ''});
    setInterval(() => {
        const date = new Date();
        const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
        const offset = 5.5;   // IST
        const indiaTime = new Date(utc + (3600000 * offset));
        // format time with leading zero
        const formatTime = (t: number) => (t < 10 ? '0' : '') + t;
        setTime({
            h: formatTime(indiaTime.getHours()),
            m: formatTime(indiaTime.getMinutes()),
            s: formatTime(indiaTime.getSeconds()),
        });
    }, 1000);


    return (
        <div style={{height: "100vh"}}>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                    <div>
                        Hi, I am <u className="underline-offset-8 text-[#3ba8f2]">Ansh Patel</u> 👋🏻 <br/><br/>
                        {/* <div className="w-full flex justify-center">
                            <div className="w-[40rem] h-40 relative">
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            </div>
                        </div> */}
                        Full Stack & Cloud Engineer. <br/>
                        Crafting solutions that inspire success <br/>
                        <Highlight className="text-black dark:text-white">
                            Ready to join your team
                        </Highlight>
                    </div>
                    <div className="flex items-center gap-2 text-base justify-center dark:text-gray-400 mt-16">
                        <div
                            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-2 text-sm font-medium dark:bg-gray-800">
                            Based in India 🇮🇳 → {time.h}:{time.m}:{time.s}
                        </div>

                    </div>
                    <div className="mt-16">

                        <Link href="https://github.com/AnshPatel1" target="_blank">
                            <button
                                className="px-4 py-2 h-12 m-4 w-140px] rounded-md border border-neutral-300 bg-neutral-100 text-black text-sm duration-200 hover:shadow-md">
                                <div className="flex"><Icons.gitHub className="h-5 w-5 me-2"/> Github</div>
                            </button>
                        </Link>
                        <Link href="/AnshPatelResume OP.pdf" target="_blank">
                            <button
                                className="relative inline-flex rounded-md h-12 m-4 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <div className="flex"><Icons.resume className="h-5 w-5 me-2"/> Resume</div>
                            </span>
                            </button>
                        </Link>
                    </div>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
}
