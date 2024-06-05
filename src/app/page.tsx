import {HeroHighlight} from "@/components/acernity/hero-highlight"
import {HeroHighlightDemo} from "@/components/home/hero"
import {Skills} from "@/components/home/skills"

export default function Dashboard() {
    return (
        <div>
            <HeroHighlightDemo/>
            <div className={"mt-20 mb-10"}></div>
            <Skills/>
        </div>
    )
}
