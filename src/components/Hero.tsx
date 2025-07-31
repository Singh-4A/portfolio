import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {


  // Create and download a text file (or JSON, etc.)
  const handleDownload = () => {
    const content = ["First line", "Second line"];
    const blob = new Blob([content.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = './arjun.resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
              Arjun Singh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer | React & Node.js | Building High‑Performance, Visual Web Experiences

          </p>


          <a
            href="mailto:singh1code@gmail.com"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="group animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>

              <a target="-" href="./arjun.resume.pdf" download="resume.pdf">
                <Button  variant="outline" size="lg" className="group animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </Button>
              </a>


            </div>
          </a>


          <div className="flex justify-center space-x-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <a
              target="_"
              href="https://github.com/Singh-4A "
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:singh1code@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail className="h-6 w-6" />
            </a>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;