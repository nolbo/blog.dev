import type {Metadata} from "next";
import React from "react";
import ThemeProvider from "@/components/context/ThemeProvider";
import {ProgressBar, ProgressBarProvider} from "react-transition-progress";
import {Open_Sans} from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import {metadata as _metadata} from "@/blog.config";
import "./globals.css";
import "katex/dist/katex.min.css";

export const metadata: Metadata = _metadata;

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    variable: "--font-open-sans"
});

const pretendard = localFont({
    src: "../public/fonts/PretendardVariable.woff2",
    variable: "--font-pretendard"
});

const cascadia_mono_nf = localFont({
    src: [
        {
            path: "../public/fonts/CascadiaMonoNF.woff2",
            style: "normal"
        },
        {
            path: "../public/fonts/CascadiaMonoNFItalic.woff2",
            style: "italic"
        }
    ],
    variable: "--font-cascadia-mono-nf"
});

const cascadia_code_nf = localFont({
    src: [
        {
            path: "../public/fonts/CascadiaCodeNF.woff2",
            style: "normal"
        },
        {
            path: "../public/fonts/CascadiaCodeNFItalic.woff2",
            style: "italic"
        }
    ],
    variable: "--font-cascadia-code-nf"
});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html suppressHydrationWarning>
        <body
            className={`${open_sans.variable} ${pretendard.variable} ${cascadia_code_nf.variable} ${cascadia_mono_nf.variable}`}>
            <ThemeProvider>
                <ProgressBarProvider>
                    <ProgressBar className={"fixed top-0 z-[3] h-[2px] bg-[theme(borderColor.emphasis)]"}/>
                    <Header/>
                    {children}
                </ProgressBarProvider>
            </ThemeProvider>
        </body>
        </html>
    );
}
