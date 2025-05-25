
export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "React Native", "Responsive Design"],
      color: "orange"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MySQL", "API Development", "Database Design"],
      color: "blue"
    },
    {
      title: "Design & Management",
      skills: ["UI/UX Design", "Project Management", "Leadership", "Event Organization"],
      color: "green"
    },
    {
      title: "Emerging Technologies",
      skills: ["Data Science (Beginner)", "Python", "Git/GitHub", "Problem Solving"],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "blue": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "green": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "purple": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-800/30">
      <div className="text-center mb-12">
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-8"></div>
        <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies and skills that enable me to build 
          robust, scalable, and user-friendly digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-orange-500">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`px-3 py-2 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-slate-800 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
              <p className="text-gray-300">Programming Languages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
              <p className="text-gray-300">Technologies & Frameworks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">3+</div>
              <p className="text-gray-300">Major Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
