import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [

    {
      title: "Portfolio ",
      description: "I'm a passionate frontend developer with a strong foundation in modern web technologies. With experience in React.js, Node.js, and the complete JavaScript ecosystem, I love creating intuitive and performant user experiences.",
      technologies: ["React", "Redux Saga", " Node.js", "express.js", "mongodb", " HTML5", "CSS3", "Next.js"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://portfolio-five-sandy-27.vercel.app",
      githubUrl: "#"
    },

    {
      title: "Chatbot ",
      description: "Designed campaign module UI to allow users to create and edit campaigns, manage schedules, and configure templates—cutting setup time and improving team efficiency. Developed a theme builder to apply reusable templates, cutting UI development time by 40–67% per module. Enhanced performance by enabling code splitting and lazy loading, improving initial load speed.",
      technologies: ["React", "Redux Saga", " Node.js", "express.js", "mongodb", " HTML5", "CSS3", "Next.js"],
      image: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://chatbot.marktine.com",
      githubUrl: "#"
    },
    {
      title: "Whatsapp Campaign ",
      description: "Designed end-to-end campaign tools, including a template editor and live preview—helping marketing teams configure and visualize campaigns in real time.",
      technologies: ["React", "Redux Saga", " Node.js", "express.js", "mongodb", " HTML5", "CSS3", "Next.js"],
      image: "https://images.unsplash.com/photo-1642724978334-218b27d2c472?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: " https://whatsapp.marktine.com",
      githubUrl: "#"
    },

    {
      title: "candidate portal",
      description: "Crafted a user‑friendly candidate portal, streamlining login and job application flows—allowing seamless account access and job submissions within minutes, improving onboarding and reducing drop‑off rates by ~30%.",
      technologies: ["React", "Css", "Html", "material ui", "Redux"],
      image: "https://plus.unsplash.com/premium_photo-1664476775076-0db9b0856bcb?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://vriti.ai",
      githubUrl: "#"
    },
    {
      title: "Recruiter  portal",
      description: "Created job-posting UIs, secured authentication flows, and optimized candidate tracking—enhancing recruiter efficiency and ensuring accurate data capture",
      technologies: ["React", "Redux Saga", "Socket.io", " HTML5", "CSS3", "Next.js"],
      image: "https://images.unsplash.com/photo-1698047682091-782b1e5c6536?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://recruiter.vriti.ai",
      githubUrl: "#"
    },


    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using modern APIs.",
      technologies: ["React", "HTML5", "CSS3", "Weather API", "Chart.js", "Typescript"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://weather-tan-two.vercel.app/",
      githubUrl: "#"
    },

    {
      title: "FullStack App",
      description: "That is a solid modern MERN‑stack architecture with thoughtfully layered improvements like lazy loading, error handling, and state orchestration.",
      technologies: ["Node.js with Express.j", "HTML5", "MongoDB", "CSS3", "React (with React Hooks)", "Tailwind CSS", " Material-UI", "Redux with Redux-Saga", "React Router DOM", "Lazy loading", "Suspense", "Error boundaries implemented"],
      image: "https://plus.unsplash.com/premium_photo-1725985758251-b49c6b581d17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveUrl: "https://testing-git-main-singh-4as-projects.vercel.app",
      githubUrl: "#"
    }
  ];

  let gotoWebSite = (url) => {
    if (!url) return

    if (url) window.open(url)
  }


  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button onClick={() => gotoWebSite(project.liveUrl)} variant="outline" size="sm" className="flex-1">

                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  {/* <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button> */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;