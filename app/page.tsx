import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-cyan-500" />
            <span className="font-mono text-lg font-bold">DEV.PORTFOLIO</span>
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
        <section className="relative overflow-hidden py-20 md:py-32 border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,216,255,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(0,216,255,0.2),transparent_60%)]"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Hi, I'm </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Rakshit Nair
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
              Computer Engineering Student at the University of Waterloo
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-cyan-600 hover:bg-cyan-700">View Projects</Button>
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 hover:text-cyan-400">
                Contact Me
              </Button>
            </div>
            <div className="mt-12 flex gap-6">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-b border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative aspect-square w-full max-w-md mx-auto md:mx-0 overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
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
                    real-world problems. My journey in tech started when I was 15, tinkering with Arduino boards and
                    building small robots.
                  </p>
                  <p>
                    Currently pursuing my degree in Computer Engineering at Tech University, I focus on embedded
                    systems, full-stack development, and machine learning. I enjoy the intersection of hardware and
                    software, creating systems that bridge the digital and physical worlds.
                  </p>
                  <p>
                    When I'm not coding or soldering components, you can find me participating in hackathons,
                    contributing to open-source projects, or exploring the latest technologies in AI and IoT.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-lg font-medium mb-2">Education</h3>
                    <p className="text-muted-foreground">B.S. Computer Engineering</p>
                    <p className="text-muted-foreground text-sm">Tech University, 2020-2024</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h3 className="text-lg font-medium mb-2">Experience</h3>
                    <p className="text-muted-foreground">Software Engineering Intern</p>
                    <p className="text-muted-foreground text-sm">Tech Solutions Inc., 2023</p>
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
                  Other
                </TabsTrigger>
              </TabsList>

              <TabsContent value="programming" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["C/C++", "Python", "Java", "JavaScript", "TypeScript", "Rust", "MATLAB", "Assembly"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                        <Braces className="h-5 w-5 text-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="frontend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["React", "Next.js", "HTML/CSS", "Tailwind CSS", "Redux", "Angular", "Vue.js", "Figma"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                        <Layers className="h-5 w-5 text-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="backend" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Node.js", "Express", "Django", "Flask", "MongoDB", "PostgreSQL", "Firebase", "AWS"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                        <Server className="h-5 w-5 text-cyan-400" />
                        <span>{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </TabsContent>

              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Git", "Docker", "Linux", "Arduino", "Raspberry Pi", "FPGA", "PCB Design", "IoT"].map((skill) => (
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
              {/* Project 1 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Smart Home IoT System"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-cyan-600">IoT</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Smart Home IoT System</h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive IoT system for home automation using Raspberry Pi, custom PCB designs, and a React
                    dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      Raspberry Pi
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      MQTT
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      PCB Design
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Machine Learning Traffic Analysis"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-purple-600">ML</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">ML Traffic Analysis</h3>
                  <p className="text-muted-foreground mb-4">
                    A machine learning system that analyzes traffic patterns using computer vision and predicts
                    congestion.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      OpenCV
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Flask
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Paper
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Embedded Real-time OS"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-green-600">Embedded</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Embedded Real-time OS</h3>
                  <p className="text-muted-foreground mb-4">
                    A lightweight real-time operating system for ARM Cortex-M microcontrollers with task scheduling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      C
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Assembly
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      ARM
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      RTOS
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 4 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blockchain Supply Chain"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-yellow-600">Blockchain</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blockchain Supply Chain</h3>
                  <p className="text-muted-foreground mb-4">
                    A blockchain-based supply chain tracking system with smart contracts and a web dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      Solidity
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Ethereum
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Web3.js
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 5 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Autonomous Drone"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-600">Robotics</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Autonomous Drone</h3>
                  <p className="text-muted-foreground mb-4">
                    An autonomous drone system with computer vision for navigation and obstacle avoidance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      ROS
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      OpenCV
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Arduino
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 6 */}
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cybersecurity Tool"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-600">Security</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Network Security Scanner</h3>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive network security scanning tool with vulnerability assessment and reporting.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-zinc-700">
                      Python
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Rust
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      Linux
                    </Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-700 hover:bg-zinc-800 hover:text-cyan-400"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
              Education & Certifications
              <span className="text-cyan-400">/&gt;</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Academic Education</h3>

                <div className="relative pl-8 border-l border-border">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-500"></div>
                  <div className="mb-1 text-lg font-semibold">Bachelor of Science in Computer Engineering</div>
                  <div className="text-muted-foreground">Tech University</div>
                  <div className="text-muted-foreground text-sm mb-2">2020 - 2024 (Expected)</div>
                  <p className="text-foreground">
                    Focusing on embedded systems, computer architecture, and digital signal processing. Maintaining a
                    3.8/4.0 GPA.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-border">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-500"></div>
                  <div className="mb-1 text-lg font-semibold">High School Diploma</div>
                  <div className="text-muted-foreground">Science Academy</div>
                  <div className="text-muted-foreground text-sm mb-2">2016 - 2020</div>
                  <p className="text-foreground">
                    Advanced placement in Mathematics, Physics, and Computer Science. Graduated with honors.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-bold mb-6 text-cyan-400">Certifications & Courses</h3>

                <div className="relative pl-8 border-l border-border">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1 text-lg font-semibold">AWS Certified Solutions Architect</div>
                  <div className="text-muted-foreground">Amazon Web Services</div>
                  <div className="text-muted-foreground text-sm mb-2">2023</div>
                  <p className="text-foreground">Designed and deployed scalable, highly available systems on AWS.</p>
                </div>

                <div className="relative pl-8 border-l border-border">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1 text-lg font-semibold">TensorFlow Developer Certificate</div>
                  <div className="text-muted-foreground">Google</div>
                  <div className="text-muted-foreground text-sm mb-2">2022</div>
                  <p className="text-foreground">
                    Building and training neural networks for computer vision, NLP, and time series.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-border">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500"></div>
                  <div className="mb-1 text-lg font-semibold">Cisco Certified Network Associate (CCNA)</div>
                  <div className="text-muted-foreground">Cisco</div>
                  <div className="text-muted-foreground text-sm mb-2">2021</div>
                  <p className="text-foreground">Network fundamentals, security, automation and programmability.</p>
                </div>
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
                        <Mail className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div>rakshit.nair@example.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                        <Linkedin className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">LinkedIn</div>
                        <div>linkedin.com/in/rakshitnair</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                        <Github className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">GitHub</div>
                        <div>github.com/rakshitnair</div>
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
                      <p className="text-muted-foreground">
                        Looking for internships and part-time roles in software development, embedded systems, or
                        machine learning.
                      </p>
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
              <span className="font-mono text-lg font-bold">DEV.PORTFOLIO</span>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
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
