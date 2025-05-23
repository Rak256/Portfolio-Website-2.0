"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-6 p-8">
            <Link
              href="#about"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#education"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-lg hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col items-center gap-4 mt-4">
              <ThemeToggle />
              <Button variant="outline" className="border-border hover:bg-muted hover:text-cyan-400">
                Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
