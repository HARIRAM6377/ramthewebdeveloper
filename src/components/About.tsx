
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-1 bg-orange-500 mb-8"></div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I'm a resourceful and driven IT student at Sathyabama Institute of Science and Technology, 
            currently pursuing my B.Tech in Information Technology (2023–2027). I'm also enhancing my 
            skills with a Diploma in Python Full Stack Development from CSC (2025–2026).
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            My passion lies in developing smart digital solutions that solve real-world technology challenges. 
            I specialize in web development, UI/UX design, and project management, with proven leadership 
            and collaboration skills in technical projects.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I believe in creating efficient, user-centric solutions that make a meaningful impact. 
            My dedication to continuous learning and problem-solving drives me to stay updated with 
            the latest technologies and best practices in software development.
          </p>
        </div>
        
        <div className="bg-slate-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6">Education & Training</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-500 font-semibold">B.Tech Information Technology</h4>
              <p className="text-gray-300">Sathyabama Institute of Science and Technology</p>
              <p className="text-gray-400 text-sm">2023 - 2027</p>
            </div>
            <div>
              <h4 className="text-orange-500 font-semibold">Diploma in Python Full Stack Development</h4>
              <p className="text-gray-300">CSC (Computer Society of India)</p>
              <p className="text-gray-400 text-sm">2025 - 2026</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-300">• Project Management</div>
              <div className="text-gray-300">• Leadership</div>
              <div className="text-gray-300">• Problem Solving</div>
              <div className="text-gray-300">• Team Collaboration</div>
              <div className="text-gray-300">• Event Organization</div>
              <div className="text-gray-300">• Technical Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
