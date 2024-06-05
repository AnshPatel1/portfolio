import React from "react";
import {Meteors} from "@/components/acernity/meteors";
import {CanvasRevealEffectDemo} from "@/components/ui/reveal";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export function Skills() {
    return (
        <>
            {/*<div className=" w-full relative justify-center">*/}

            {/*<div className="lg:mx-60 md:mx-20 mx-10">*/}
            {/*    <div*/}
            {/*        className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl"/>*/}
            {/*    <div*/}
            {/*        className="relative w-full shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-xl flex flex-col justify-end items-start">*/}
            {/*        <div*/}
            {/*            className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">*/}
            {/*            <svg*/}
            {/*                xmlns="http://www.w3.org/2000/svg"*/}
            {/*                fill="none"*/}
            {/*                viewBox="0 0 24 24"*/}
            {/*                strokeWidth="1.5"*/}
            {/*                stroke="currentColor"*/}
            {/*                className="h-2 w-2 text-gray-300"*/}
            {/*            >*/}
            {/*                <path*/}
            {/*                    strokeLinecap="round"*/}
            {/*                    strokeLinejoin="round"*/}
            {/*                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"*/}
            {/*                />*/}
            {/*            </svg>*/}
            {/*        </div>*/}

            {/*        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">*/}
            {/*            An enthusiastic coder who began constructing robots at the age of nine. I enjoy creating*/}
            {/*            solutions that automate mundane tasks and enhance workplace productivity. Holding a diploma*/}
            {/*            with expertise in over nine programming languages and frameworks, I am currently pursuing*/}
            {/*            Bachelors of Computer Science and seeking opportunities in software development.*/}
            {/*        </p>*/}

            {/*        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">*/}
            {/*            Read More*/}
            {/*        </button>*/}

            {/*        /!* Meaty part - Meteor effect *!/*/}
            {/*        <Meteors number={20}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</div>*/}
            <div className="container mt-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="font-normal text-base mb-4 relative z-50">
                    An enthusiastic coder from an early age, I started building robots when I was just nine years old.
                    My passion lies in devising innovative solutions that automate routine tasks and significantly boost
                    workplace productivity. With a robust educational background, including a diploma showcasing my
                    proficiency in over nine programming languages and frameworks, I am currently advancing my skills by
                    pursuing a Bachelor of Computer Science. As I continue to deepen my expertise, I am actively looking
                    for opportunities in software development where I can contribute to challenging projects and drive
                    technological advancements.
                </p>
                <Link href="/about"><Button>Read More</Button></Link>
                <CanvasRevealEffectDemo/>
            </div>
        </>
    );
}
