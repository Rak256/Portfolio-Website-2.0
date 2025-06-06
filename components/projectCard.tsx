import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
} from "lucide-react"


export default function ProjectCard(props:any)
{return (
<div>
<Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={props.img}
                    alt="Smart Home IoT System"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {props.domain}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{props.title}</h3>
                    {props.description}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/*Make badges for each skill used in the project*/}
                    {props.skills.map((skill:any) => (
                    <Badge variant="outline" className="border-zinc-700">
                     {skill}
                    </Badge>
                    ))}
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
              </div>)
}
