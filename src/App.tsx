import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Code2, BookOpen, Coffee } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "ML Stock Predictor",
      description: "Built a neural network that analyzes market patterns to predict stock movements. Uses technical indicators and sentiment analysis from news data.",
      tech: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API"],
      link: "#",
      status: "In Progress"
    },
    {
      title: "CodeWithPurpose",
      description: "Co-founded a nonprofit teaching coding to underserved communities. We've reached over 200 students with our interactive curriculum.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      status: "Live"
    },
    {
      title: "Physics Sim Engine",
      description: "Real-time particle physics simulator for educational demos. Includes wave mechanics, collision detection, and gravity simulations.",
      tech: ["JavaScript", "WebGL", "Three.js"],
      link: "#",
      status: "Complete"
    },
    {
      title: "Trading Algorithm",
      description: "Automated trading bot using quantitative analysis. Backtested on 5 years of market data with consistent returns.",
      tech: ["Python", "Scikit-learn", "Pandas", "Backtrader"],
      link: "#",
      status: "Testing"
    }
  ];

  const interests = [
    { icon: Code2, text: "Machine Learning & AI" },
    { icon: BookOpen, text: "Quantitative Finance" },
    { icon: Coffee, text: "Physics & Engineering" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/IMG_5821.jpg" 
                alt="Shreyan Mitra" 
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Shreyan Mitra</h1>
              <p className="text-lg text-gray-600 mb-4">Aspiring Quantitative Developer</p>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>San Ramon, CA</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ShreyanMitra5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:shreyan.mitra09@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Available for Research Internships
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-4">
              Hey there! I'm a rising junior in high school who loves to code. I am a machine learning 
              enthusiast, and I'm also really into computer engineering and physics.
            </p>
            <p>
              When I'm not coding or studying, you can find me watching or playing basketball or 
              strumming my guitar. Currently, I'm also the co-founder of CodeWithPurpose, a 
              philanthropic business.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">What I'm into</h3>
            <div className="flex flex-wrap gap-4">
              {interests.map((interest, index) => (
                <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <interest.icon size={16} className="mr-2 text-gray-600" />
                  <span className="text-gray-700">{interest.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' ? 'bg-green-100 text-green-700' :
                        project.status === 'Complete' ? 'bg-blue-100 text-blue-700' :
                        project.status === 'Testing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <a href={project.link} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let's connect</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always interested in research opportunities and cool projects. 
              Feel free to reach out if you want to chat about ML, physics, or anything tech-related.
            </p>
            <a 
              href="mailto:shreyan.mitra09@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Mail size={18} className="mr-2" />
              Get in touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-gray-500">
          <p>© 2024 Shreyan Mitra</p>
        </div>
      </footer>
    </div>
  );
}

export default App;