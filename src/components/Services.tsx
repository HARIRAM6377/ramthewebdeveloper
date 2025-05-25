
export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Responsive, full-stack web applications using modern technologies like React, Node.js, and MySQL.",
      features: ["Responsive Design", "Full-Stack Development", "Database Integration", "API Development"],
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that prioritize usability, accessibility, and aesthetic appeal.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      icon: "🎨"
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely delivery and quality outcomes.",
      features: ["Team Leadership", "Timeline Management", "Quality Assurance", "Client Communication"],
      icon: "📋"
    },
    {
      title: "Technical Consultation",
      description: "Strategic guidance on technology choices, architecture, and implementation best practices.",
      features: ["Technology Assessment", "Architecture Planning", "Code Review", "Performance Optimization"],
      icon: "🔧"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-800/30">
      <div className="text-center mb-12">
        <div className="w-12 h-1 bg-orange-500 mx-auto mb-8"></div>
        <h2 className="text-4xl font-bold mb-6">Services</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your needs, from concept to deployment 
          and beyond. Let's build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            
            <div className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-800 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you need a complete web application, UI/UX design, or technical consultation, 
          I'm here to help bring your ideas to life with cutting-edge technology and thoughtful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </button>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
