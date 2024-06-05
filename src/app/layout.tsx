import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import {cn} from "@/lib/utils"
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Ansh Patel | Developer",
    description: "A pesonal portfolio website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased justify-between flex flex-col h-screen",
            fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div>
            <SiteHeader/>
                </div>
            <div className="flex-1">
                {children}
            </div>
            <SiteFooter/>
        </ThemeProvider>

        </body>
        </html>
    );
}
