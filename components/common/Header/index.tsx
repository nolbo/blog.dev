"use client";

import { Link } from "react-transition-progress/next";
import Logo from "@/public/logo.svg";
import ThemeButton from "@/components/common/ThemeButton";

export default function Header() {
    return (
        <header className={"flex justify-center items-center fixed top-0 left-0 z-[2] w-full h-header bg-default border-b border-b-default px-screen-x-default md:px-screen-x-md"}>
            <div
                className={"flex flex-row justify-between p-none gap-[16px] box-border w-full h-full md:max-w-main-md"}>
                <div className={"flex items-center gap-[14px]"}>
                    <Link href={"/"}>
                        <Logo
                              className={"flex items-center ml-[9px] w-[28px] h-[28px] fill-logo md:w-[32px] md:h-[32px]"} />
                    </Link>
                </div>
                <div className={"flex items-center gap-[12px]"}>
                    <ThemeButton />
                </div>
            </div>
        </header>
    );
}
