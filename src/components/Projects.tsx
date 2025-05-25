
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Smart Helmet Project",
      description: "Eye-tracking drowsiness detection system with GPS updates to improve rider safety. Utilizes advanced sensors and machine learning algorithms.",
      tech: ["IoT", "Machine Learning", "GPS", "Sensors", "Python"],
      category: "IoT & Safety",
      color: "orange"
    },
    {
      title: "LMS for Arrear Students",
      description: "Comprehensive learning management system designed specifically for students with academic backlogs, featuring personalized study plans.",
      tech: ["React", "Node.js", "MySQL", "Express.js"],
      category: "Web Application",
      color: "blue"
    },
    {
      title: "VK Bone and Joint Clinic Website",
      description: "Responsive full-stack website enabling appointment booking and patient information management with secure data handling.",
      tech: ["React", "Node.js", "MySQL", "Responsive Design"],
      category: "Healthcare",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange": return "bg-orange-500";
      case "blue": return "bg-blue-500";
      case "green": return "bg-green-500";
      default: return "bg-orange-500";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-8"></div>
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A showcase of my work in solving real-world problems through innovative 
          technology solutions and user-centered design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className={`h-2 ${getColorClasses(project.color)}`}></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <div className={`w-12 h-12 ${getColorClasses(project.color)} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 p-0"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button 
          size="lg" 
          variant="outline"
          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
};
