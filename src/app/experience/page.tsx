import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Experience() {
    return (
        <div className="flex flex-col align-middle justify-center w-full h-full">
            <div>
            <p className="text-center">
                    Coming Soon! Please check resume for details.
                </p>
                <div className="flex justify-center align-middle">
                <Link href="/AnshPatelResume OP.pdf" target="_blank">
                    <button
                        className="relative inline-flex rounded-md h-12 m-4 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span
                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <div className="flex"><Icons.resume className="h-5 w-5 me-2" /> Resume</div>
                        </span>
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}
