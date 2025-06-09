import React from 'react';
import StarfieldWarp from "./StarfieldWarp.jsx"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scroll } from "@/components/scroll_indicator"
import {
  Github,
  Linkedin,
  Mail
} from "lucide-react"

const Hero = () => {
    return (
        <StarfieldWarp>
           <section className="relative overflow-hidden py-20 md:py-32 border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,216,255,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,216,255,0.2),transparent_60%)]"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-white">Hi, I'm </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Rakshit Nair
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
              Computer Engineering Student at the University of Waterloo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects"> <Button className="bg-cyan-600 hover:bg-cyan-700">View Projects</Button> </a>
              
              <Button variant="outline" className="border-zinc-700 text-black dark:text-white hover:bg-zinc-800 hover:text-cyan-400">
                <a href = "#contact">Contact Me</a>
              </Button>
            </div>
            <div className="mt-12 flex gap-6">
              <Link href="https://github.com/Rak256" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/rakshit-nair-125667291" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <Scroll/>
          </div>
        </section>
        </StarfieldWarp>
    );
};

export default Hero;
