"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function MobileNav(props:any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          props.parentState(!isOpen);

        }}
        className="flex items-center justify-center p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6 text-black dark:text-white" /> : <Menu className="h-6 w-6 text-black dark:text-white" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-black">
          <nav className="flex flex-col items-center bg-white dark:bg-black gap-6 p-8">
            <Link
              href="#about"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsOpen(false);
                props.parentState(false);
              
              }}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsOpen(false);
                props.parentState(false);
              
              }}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsOpen(false);
                props.parentState(false);
              
              }}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsOpen(false);
                props.parentState(false);
              
              }}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => {
                setIsOpen(false);
                props.parentState(false);
              
              }}
            >
              Contact
            </Link>
            <div className="flex flex-col items-center gap-4 mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
