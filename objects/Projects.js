import { Badge } from "@/components/ui/badge"
const projects = [
    {
        id: 1,
        img: "/Project_Images/TimeSeries.png",
        domain: <Badge className="bg-cyan-600">DSA</Badge>,
        title: <h3 className="text-xl font-bold mb-2">Global Time Series Analyzer</h3>,
        description: <p className="text-muted-foreground mb-4">
                A program that analyzes the World Bank Group Data Bank annual time series data from 512 countries around the world to identify 
                trends.
                  </p>,
        skills: [<p>C++</p>, <p>Data Structures and Algorithms</p>, <p>ADTs</p>],
        github: "https://github.com/Rak256/Global-Time-Series-Analyzer"
    },
    {
        id: 2,
        img: "/Project_Images/AI_spam_filter.png",
        domain: <Badge className="bg-purple-600">AI</Badge>,
        title: <h3 className="text-xl font-bold mb-2">AI spam filter</h3>,
        description: <p className="text-muted-foreground mb-4">
                An AI spam filter prototype that reads text messages to detect fraudulent texts and protect the elderly.
                  </p>,
        skills: [<p>Python</p>, <p>Pandas</p>, <p>Numpy</p>, <p>Logistic Regression</p>, <p>Microsoft Azure</p>, <p>Microsoft Office</p>],
        github:"https://github.com/Rak256/AI-Spam-Filter"
    },
    {
        id: 3,
        img: "/Project_Images/Kind_of_Hyperbola.png",
        domain: <Badge className="bg-green-600">Windows API</Badge>,
        title: <h3 className="text-xl font-bold mb-2">RGB function Visaulizer</h3>,
        description: <p className="text-muted-foreground mb-4">
                A Windows API program that takes mathematical function as an input and outputs a bitmap color graph
                  </p>,
        skills: [<p>Windows API</p>, <p>C++</p>],
        github:"https://github.com/Rak256/RGB-Function-Visaulizer"
    },

    {
        id: 4,
        img: "/Project_Images/RISC-V.jpg",
        domain: <Badge className="bg-yellow-600">Hardware</Badge>,
        title: <h3 className="text-xl font-bold mb-2">RISC-V Interrupt-Controller</h3>,
        description: <p className="text-muted-foreground mb-4">
                RISC V interrupt controller project created with Sparkfun RED-V Thing Plus board.
                  </p>,
        skills: [<p>RISC-V</p>, <p>Assembly</p>, <p>Hardware interrupts</p>],
        github:"https://github.com/Rak256/Interrupt-Controller"
    },

    {
        id: 5,
        img: "/Project_Images/Calc.jpg",
        domain: <Badge className="bg-red-600">Computing</Badge>,
        title: <h3 className="text-xl font-bold mb-2">Sig Fig calculator</h3>,
        description: <p className="text-muted-foreground mb-4">
               Computes division, returning the right number of significant digits without floating point error
                  </p>,
        skills: [<p>C++</p>],
        github:"https://github.com/Rak256/Interrupt-Controller"
    },
]

export default projects;