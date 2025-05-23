"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-6 rounded-full bg-zinc-800" />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        isDark ? "bg-cyan-600" : "bg-zinc-300"
      }`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          isDark ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
      />
      <span className="absolute inset-0 flex items-center justify-between px-1.5">
        <Moon
          className={`h-3 w-3 ${isDark ? "text-white opacity-100" : "text-zinc-600 opacity-0"} transition-opacity`}
        />
        <Sun
          className={`h-3 w-3 ${isDark ? "text-white opacity-0" : "text-zinc-600 opacity-100"} transition-opacity`}
        />
      </span>
    </button>
  )
}
