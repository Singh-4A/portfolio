import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Excellent team player with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate React js with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate React js with a strong foundation in modern web technologies. 
              With experience in React.js, Node.js, and the complete JavaScript ecosystem, I love 
              creating intuitive and performant user experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in web development has led me to master technologies like Redux Saga for 
              state management, Express.js for backend development, and modern CSS frameworks for 
              creating beautiful, responsive designs.
            </p>
            
            <p className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends and best practices.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;