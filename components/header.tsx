'use client'
import * as React from 'react'
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import {Cpu} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"


export default function Header(){
    const [Open, setState] = React.useState(false);
       function headerBgColorToggle(mobilExtensionWindowState : boolean){
        setState(mobilExtensionWindowState);
      }
    return(
      <header className={`sticky top-0 z-50 w-full border-b border-border ${Open ? 'bg-white dark:bg-black' : 'bg-none'} bg-background/80 backdrop-blur-sm`}>
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-cyan-500" />
            <span className="font-mono text-lg font-bold">PORTFOLIO</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm hover:text-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-sm hover:text-cyan-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>
          <MobileNav parentState = {headerBgColorToggle} />
        </div>
      </header>
    )
}