import * as React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {Skills} from "@/components/skill_card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  Terminal,
  Cpu,
  Server,
  Layers,
  Braces,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import Hero from "@/components/Hero"
import icons from "@/objects/Icons"
import ProjectCard from "@/components/projectCard"
import projects from "@/objects/Projects"
import {Education, Certifications, Work} from "@/objects/Experience"
import { Experience } from '@/components/Experience'
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
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
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400">
              Resume
            </Button>
          </div>
          <MobileNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <Hero/>
        {/* About Section */}
        <section id="about" className="py-20 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src="/Profile/linkedinProfile.jpg"
                    alt="Rakshit Nair"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-cyan-400">&lt;</span>
                  About Me
                  <span className="text-cyan-400">/&gt;</span>
                </h2>
                <div className="space-y-4 text-foreground">
                  <p>
                    I'm a Computer Engineering student passionate about building innovative solutions that solve
                    real-world problems. 
                    </p>
                    <p>
                      One day, I hope to gather enough skills, work with a variety of talented and ambitious peers, and contribute to pioneering the society of tomorrow! 🚀
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    <p className="text-muted-foreground">Working towards B.ASc Computer Engineering</p>
                    <p className="text-muted-foreground text-sm">University of Waterloo</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-lg font-medium mb-2">Recent Experience</h3>
                    <p className="text-muted-foreground">Software Engineering Intern</p>
                    <p className="text-muted-foreground text-sm">RIA Advisory LLC.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <span className="text-cyan-400">&lt;</span>
              Technical Skills
              <span className="text-cyan-400">/&gt;</span>
            </h2>

            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted">
                <TabsTrigger
                  value="programming"
                  className="data-[state=active]:bg-background data-[state=active]:text-cyan-400"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Programming
                </TabsTrigger>
                <TabsTrigger
                  value="frontend"
                  className="data-[state=active]:bg-background data-[state=active]:text-cyan-400"
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Frontend
                </TabsTrigger>
                <TabsTrigger
                  value="backend"
                  className="data-[state=active]:bg-background data-[state=active]:text-cyan-400"
                >
                  <Server className="mr-2 h-4 w-4" />
                  Backend
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className="data-[state=active]:bg-background data-[state=active]:text-cyan-400"
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Hardware
                </TabsTrigger>
              </TabsList>

              {/*List out all skills*/}
              {icons.map((skill) => (
                <Skills key = {skill.id} name = {skill.name} lang = {skill.languages}/>           
              ))}

              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Linux", "FPGA", "PCB Design"].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                      <Terminal className="h-5 w-5 text-cyan-400" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <span className="text-cyan-400">&lt;</span>
              Featured Projects
              <span className="text-cyan-400">/&gt;</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
              <ProjectCard 
              key = {project.id}
              img = {project.img} 
              domain = {project.domain} 
              title = {project.title} 
              description = {project.description} 
              skills = {project.skills}
              github = {project.github}
              />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-zinc-800 hover:bg-zinc-700">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 border-b border-border">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
              <span className="text-cyan-400">&lt;</span>
              Certifications
              <span className="text-cyan-400">/&gt;</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Academic Education</h3>
                {Education.map((xp) => (
                  <Experience
                  key = {xp.id}
                  id = {xp.id} 
                  color = {xp.color} 
                  title = {xp.title} 
                  location = {xp.location}
                  duration = {xp.duration}
                  description = {xp.description} />
                ))}
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Work Experience</h3>
                {Work.map((xp) => (
                  <Experience 
                  key = {xp.id} 
                  color = {xp.color} 
                  title = {xp.title} 
                  location = {xp.location}
                  duration = {xp.duration}
                  description = {xp.description} />
                ))}
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Certifications & Courses</h3>
                {Certifications.map((xp) => (
                  <Experience 
                  key = {xp.id} 
                  color = {xp.color} 
                  title = {xp.title} 
                  location = {xp.location}
                  duration = {xp.duration}
                  description = {xp.description} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
                <span className="text-cyan-400">&lt;</span>
                Get In Touch
                <span className="text-cyan-400">/&gt;</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                        <a href = "www.linkedin.com/in/rakshit-nair-125667291">
                        <Linkedin className="h-5 w-5 text-cyan-400" />
                        </a>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">LinkedIn</div>
                        <div>linkedin.com/in/rakshit-nair-125667291</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                        <a href = "https://github.com/Rak256">
                        <Github className="h-5 w-5 text-cyan-400" />
                        </a>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">GitHub</div>
                        <div>github.com/Rak256</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Current Status</h3>
                    <div className="rounded-lg border border-border bg-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="font-medium">Available for opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                        placeholder="Your message..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Cpu className="h-6 w-6 text-cyan-500" />
              <span className="font-mono text-lg font-bold">PORTFOLIO</span>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="https://github.com/Rak256" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/rakshit-nair-125667291" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Rakshit Nair. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
