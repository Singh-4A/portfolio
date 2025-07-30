import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS"],
      color: "bg-primary"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
      color: "bg-accent"
    },
    {
      title: "State Management & Tools",
      skills: ["Redux", "Redux Saga", "Git", "Webpack", "Vite", "npm/yarn"],
      color: "bg-secondary"
    }
  ];

  const expertiseLevel = [
    { skill: "React.js", level: 95 },
    { skill: "JavaScript", level: 90 },
    { skill: "CSS/HTML", level: 95 },
    { skill: "Node.js", level: 50 },
    { skill: "Redux", level: 80 },
    { skill: "Express.js", level: 60 },
    { skill: "Bootstrap", level: 90 },
    { skill: "Material ui", level: 90 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl font-bold text-white">{category.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Expertise Level</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseLevel.map((item, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;