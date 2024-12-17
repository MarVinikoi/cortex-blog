"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState} from 'react'
import { useTheme } from "next-themes"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"


export default function Nav(){
    const { theme, setTheme } = useTheme()

    return (
        <nav>
            <div className="flex bg-themeOrange dark:bg-slate-800 shadow-xl shadow-black">
                <div className="flex flex-row items-center p-3">
                    <Image 
                        src="/cortex-logo.png"
                        alt="Logo" 
                        width={100} 
                        height={100}
                        unoptimized
                        />
                    <h1 className="text-6xl font-Poppins font-ligth dark:text-white">Cortex</h1>
                    <div className="flex-auto flex-row-reverse ">
                    </div>
                </div>
            </div> 
            <div className="flex flex-row-reverse  p-4 items-center bg-themeBlue-dark dark:bg-themeOrange-dark">
                    <div className="flex flex-col ml-6 items-center space-y-1">
                        <Switch id="themeMode" onCheckedChange={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}/>
                        <Label htmlFor="themeMode">Theme {theme}</Label>
                    </div>
                    <button className="bg-themeBlue rounded-r-lg border-l dark:border-l dark:border-white py-2 px-5 text-black dark:bg-slate-800 dark:text-white dark:hover:bg-zinc-300 hover:bg-zinc-300 transition">
                        Posts
                    </button>
                    <button className="bg-themeBlue rounded-none py-2 px-5 text-black dark:bg-slate-800 dark:text-white dark:hover:bg-zinc-300 hover:bg-zinc-300 transition">
                        About
                    </button>
                    <button className=" bg-themeBlue rounded-l-lg border-r dark:border-r dark:border-white py-2 px-5 text-black dark:bg-slate-800 dark:text-white dark:hover:bg-zinc-300 hover:bg-zinc-300 transition">
                        Portifolio
                    </button>
                    <div className="flex grow">
                        <a href={"https://github.com/MarVinikoi"} target="_blank" >
                            <Image 
                                src={theme === "dark" ? "/github-mark-white.svg" : "/github-mark.svg"}
                                className=""
                                alt="Github Logo" 
                                width={40} 
                                height={40}
                                unoptimized
                                />
                        </a>
                    </div>
            </div>
        </nav>
    )
}