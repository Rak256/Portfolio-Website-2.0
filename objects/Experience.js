const Education =[
    {
      id: 1,
      color: "bg-cyan-400",  
      title: <div className="mb-1 text-lg font-semibold">Bachelor of Applied Science in Computer Engineering</div>,
      location: <div className="text-muted-foreground">University of Waterloo</div>,
      duration: <div className="text-muted-foreground text-sm mb-2">2023 - 2028 (Expected)</div>,
      description: <p className="text-foreground">
                    Maintaining a 3.7/4.0 GPA.
                  </p>

    },

    {
      id: 2,
      color: "bg-cyan-400",  
      title: <div className="mb-1 text-lg font-semibold">International Bacculeaurate (IB) Diploma</div>,
      location: <div className="text-muted-foreground">Halifax West High School - Halifax, Nova Scotia</div>,
      duration: <div className="text-muted-foreground text-sm mb-2">2016 - 2020</div>,
      description: <p className="text-foreground">
                    Graduated with Principal's List ({'>'}90%) grade.
                  </p>  
    }
]

const Certifications = [
    {
      id: 1,
      color: "bg-purple-400",  
      title: <div className="mb-1 text-lg font-semibold">AWS Certified Developer Associate</div>,
      location: <div className="text-muted-foreground">Amazon Web Services</div>,
      duration: <div className="text-muted-foreground text-sm mb-2">2024</div>,
      description: <p className="text-foreground">
                    Learned how to design and deploy scalable, highly available and secure systems on AWS.
                  </p>    
    },

    {
      id: 2,
      color: "bg-purple-400",  
      title: <div className="mb-1 text-lg font-semibold">Microsoft Azure Fundamentals</div>,
      location: <div className="text-muted-foreground">Microsoft Azure</div>,
      duration: <div className="text-muted-foreground text-sm mb-2">2023</div>,
      description: <p className="text-foreground">
                    Learned the basics of cloud technology in Microsoft Azure.
                  </p>  
    },

    {
      id: 3,
      color: "bg-purple-400",  
      title: <div className="mb-1 text-lg font-semibold">Microsoft Azure AI Fundamentals</div>,
      location: <div className="text-muted-foreground">Microsoft Azure</div>,
      duration: <div className="text-muted-foreground text-sm mb-2">2023</div>,
      description: <p className="text-foreground">
                    Learned the basics of AI functionality in Microsoft Azure.
                  </p>  
    }
]

const Work = [
  {
    id: 1,
    color: "bg-red-400",  
    title: <div className="mb-1 text-lg font-semibold">Front End Developer</div>,
    location: <div className="text-muted-foreground">RIA Advisory LLC.</div>,
    duration: <div className="text-muted-foreground text-sm mb-2">Fall (September - December) 2024</div>,
    description: <p className="text-foreground">
                  Worked as a solo developer and created a POC website using the Hugo framework, HTML5, CSS3, JavaScript, and Go.
                </p>
  },
  
  {
    id: 2,
    color: "bg-red-400",  
    title: <div className="mb-1 text-lg font-semibold">AI Engineer</div>,
    location: <div className="text-muted-foreground">UWaterloo/Microsoft/Avanade Project Experience</div>,
    duration: <div className="text-muted-foreground text-sm mb-2">Winter 2024 (January - April)</div>,
    description: <p className="text-foreground">
                  Worked in a group of 4 to create an AI and cloud hosted solution to combat financial fraud against the elderly. Created an AI spam filter to achieve this.
                </p>
  }
]

export {Education, Certifications, Work};