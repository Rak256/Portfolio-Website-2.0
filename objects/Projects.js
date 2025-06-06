import { Badge } from "@/components/ui/badge"
const projects = [
    {
        img: "/placeholder.svg?height=400&width=600",
        domain: <Badge className="bg-cyan-600">DSA</Badge>,
        title: <h3 className="text-xl font-bold mb-2">Global Time Series Analyzer</h3>,
        description: <p className="text-muted-foreground mb-4">
                A program that analyzes the World Bank Group Data Bank annual time series data from 512 countries around the world to identify 
                trends.
                  </p>,
        skills: [<p>C++</p>, <p>Data Structures and Algorithms</p>, <p>ADTs</p>]
    },
    {
        img: "/placeholder.svg?height=400&width=600",
        domain: <Badge className="bg-purple-600">AI</Badge>,
        title: <h3 className="text-xl font-bold mb-2">AI spam filter</h3>,
        description: <p className="text-muted-foreground mb-4">
                An AI spam filter prototype that reads text messages to detect fraudulent texts and protect the elderly.
                  </p>,
        skills: [<p>Python</p>, <p>Pandas</p>, <p>Numpy</p>, <p>Logistic Regression</p>, <p>Microsoft Azure</p>, <p>Microsoft Office</p>]
    },
    {
        img: "/placeholder.svg?height=400&width=600",
        domain: <Badge className="bg-green-600">Windows API</Badge>,
        title: <h3 className="text-xl font-bold mb-2">RGB function Analyzer</h3>,
        description: <p className="text-muted-foreground mb-4">
                A Windows API program that takes mathematical function as an input and outputs a bitmap color graph
                  </p>,
        skills: [<p>Python</p>, <p>Pandas</p>, <p>Numpy</p>, <p>Logistic Regression</p>, <p>Microsoft Azure</p>, <p>Microsoft Office</p>]
    }
]

export default projects;