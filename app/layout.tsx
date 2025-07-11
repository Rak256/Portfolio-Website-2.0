import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleCaptchaWrapper from "@/components/googleRecaptchaWrapper"

export const metadata = {
  title: "Rakshit Nair",
  description: "My Portfolio Website",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <GoogleCaptchaWrapper>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        </GoogleCaptchaWrapper>
      </body>
    </html>
  )
}
