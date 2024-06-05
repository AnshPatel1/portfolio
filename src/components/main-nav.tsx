"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import SocialIcons from "./social-icons"

const MainNav = () => {
    const pathname = usePathname()
    return (
        <div className="mr-4 hidden md:flex py-20 w-full">
            <Link href="/" className="mr-6 flex flex-1 md:justify-start space-x-2">
                <Image
                    src="/final-ansh.png" alt={""}
                    width={40}
                    height={40}
                ></Image>
            </Link>
            <div className="flex flex-1 md:justify-center flex align-center">
                <nav className="flex items-center gap-4 text-sm lg:gap-6">
                    <Link
                        href="/"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/skills"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/docs/components")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Skills
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/themes")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/experience"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/examples")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Experience
                    </Link>
                    <Link
                        href="/certifications"
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname?.startsWith("/blocks")
                                ? "text-foreground"
                                : "text-foreground/60"
                        )}
                    >
                        Certifications
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                        )}
                    >
                        About
                    </Link>
                </nav>
            </div>
            <SocialIcons />
        </div>
    )

}


export default MainNav