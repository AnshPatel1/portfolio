import Link from "next/link"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Icons } from "./icons"
function SocialIcons() {
    return (
        <div className="flex flex-1 items-center space-x-2 justify-end">
            <nav className="flex items-center">
            <Link href="/AnshPatelResume OP.pdf" target="_blank">
                    <button className="px-3 py-1 rounded-full bg-[#1ED760] text-white tracking-widest transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                        Resume
                    </button>
                </Link>
                <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                            }),
                            "w-9 px-0"
                        )}
                    >
                        <Icons.gitHub className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                    </div>
                </Link>
                <Link
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div
                        className={cn(
                            buttonVariants({
                                variant: "ghost",
                            }),
                            "w-9 px-0"
                        )}
                    >
                        <Icons.twitter className="h-3 w-3 fill-current" />
                        <span className="sr-only">Twitter</span>
                    </div>
                </Link>
                <ModeToggle />
            </nav>
        </div>
    )
}

export default SocialIcons