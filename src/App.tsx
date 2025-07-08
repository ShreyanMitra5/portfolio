import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Code2, BookOpen, Coffee, DollarSign, Atom } from 'lucide-react';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "Clubly",
      description: "Clubly is an all-in-one platform I created to help student leaders organize, communicate, and grow their clubs with confidence. Sign up for the waitlist now 😁",
      tech: ["Python", "Pytorch", "Groq", "MongoDB", "React", "Tailwind CSS", "Supabase", "AWS", "Assembly API"],
      link: "https://www.clubly.tech/",
      status: "Testing"
    },
    {
      title: "CodeWithPurpose",
      description: "I co-founded CodeWithPurpose to provide accessible coding education via Udemy courses, reaching 900+ students globally and donating earnings to support charitable causes.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://codewp.tech/",
      status: "Live"
    },
    {
      title: "VetPy",
      description: "VetPy is a website that teaches veterans Python basics for coding jobs and offers blog posts on topics like Data Science and Game Development to keep them engaged.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://shreyanmitra5.github.io/VetPy/",
      status: "Live"
    },
    {
      title: "Grizzly Hacks",
      description: "GrizzlyHacks is a student-run hackathon, originally founded by the Python Club, that brings together passionate students to build projects, learn, and grow in a supportive community.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      link: "https://grizzlyhacks.com/",
      status: "Testing"
    },
    {
      title: "Verofy",
      description: "Chrome extension and Flask API that detects fake news headlines using a fine-tuned BERT model. Instantly spots misinformation and provides credibility scores for news articles.",
      tech: ["Python", "Flask", "BERT", "JavaScript", "Chrome Extension", "HTML", "CSS"],
      link: "https://www.verofy.us/",
      status: "Live",
      icon: "/IMG_5821.jpg" // Placeholder for screenshot icon, replace with actual if available
    },
    {
      title: "Anasa AI",
      description: "AI-powered platform that detects emotions in real-time using NLP text analysis and facial recognition, offering supportive interventions for digital wellbeing.",
      tech: ["Node.js", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "HTML", "CSS"],
      link: "https://v0-cool-website-statistics.vercel.app/",
      status: "Live"
    },
    {
      title: "Sonar",
      description: "NLP-powered solution for code detection in text, leveraging RoBERTa and DeBERTa models. Also includes a music streaming service UI and metaverse IP platform.",
      tech: ["Python", "Jupyter Notebook", "Transformers", "PyTorch", "RoBERTa", "DeBERTa-v3", "Node.js", "HTML", "Vanilla CSS"],
      link: "https://v0-recreate-ui-screenshot-eta-ten.vercel.app/",
      status: "Live"
    },
  ];

  const interests = [
    { icon: Code2, text: "Machine Learning & AI" },
    { icon: DollarSign, text: "Quantitative Finance" },
    { icon: Atom, text: "Physics & Engineering" }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className={darkMode ? "min-h-screen bg-[#18181b] text-gray-100 transition-colors" : "min-h-screen bg-white text-gray-900 transition-colors"}>
      {/* Dark/Light Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={darkMode ? "p-2 rounded-full border border-gray-700 bg-[#232326] text-gray-100 shadow hover:bg-[#232326]/80 hover:text-white transition-colors" : "p-2 rounded-full border border-gray-300 bg-white text-gray-900 shadow hover:bg-gray-100 transition-colors"}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
          )}
        </button>
      </div>
      {/* Header */}
      <header className={darkMode ? "border-b border-gray-800 bg-[#18181b] backdrop-blur" : "border-b border-gray-100 bg-white backdrop-blur"}>
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src="/IMG_5821.jpg" 
                alt="Shreyan Mitra" 
                className={darkMode ? "w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-gray-700" : "w-40 h-40 rounded-2xl object-cover shadow-md border-4 border-gray-200"}
              />
            </div>
            <div className="flex-grow">
              <h1 className={darkMode ? "text-4xl font-bold text-white mb-3" : "text-4xl font-bold text-gray-900 mb-3"}>Shreyan Mitra</h1>
              <p className={darkMode ? "text-xl text-white mb-5" : "text-xl text-gray-600 mb-5"}>Aspiring Quantitative Developer</p>
              <div className={darkMode ? "flex items-center text-white mb-5" : "flex items-center text-gray-500 mb-5"}>
                <MapPin size={18} className="mr-3" />
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
                Interested in Research Internships
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
            <p className={darkMode ? "mb-6 leading-relaxed text-white" : "mb-6 leading-relaxed"}>
              Hey there! I'm a rising junior in high school who loves to code. I am a machine learning 
              enthusiast, and I'm also really into computer engineering and physics.
            </p>
            <p className={darkMode ? "leading-relaxed text-white" : "leading-relaxed"}>
              When I'm not coding or studying, you can find me watching or playing basketball or 
              strumming my guitar. Currently, I am the founder and CEO of Clubly, built to turn student-led clubs from chaotic to organized through smart planning, communication, and leadership tools.
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
        <section className={darkMode ? "mb-20 bg-[#232326] rounded-2xl shadow-lg p-10" : "mb-20 bg-white/80 rounded-2xl shadow p-10"}>
          <h2 className={darkMode ? "text-3xl font-semibold text-gray-100 mb-10" : "text-3xl font-semibold text-gray-900 mb-10"}>Projects</h2>
          <div className="space-y-10">
            {displayedProjects.map((project, index) => {
              // Color logic for status and card accent
              let statusColor = "";
              let cardAccent = "";
              let cardBg = darkMode ? "bg-[#232326]" : "bg-white";
              if (project.status === "Live") {
                statusColor = darkMode ? "bg-green-600 text-white" : "bg-green-100 text-green-700";
                cardAccent = darkMode ? "border-l-4 border-green-500" : "border-l-4 border-green-400";
                cardBg = darkMode ? "bg-green-950/30" : "bg-green-50";
              } else if (project.status === "Complete") {
                statusColor = darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700";
                cardAccent = darkMode ? "border-l-4 border-blue-500" : "border-l-4 border-blue-400";
                cardBg = darkMode ? "bg-blue-950/30" : "bg-blue-50";
              } else if (project.status === "Testing") {
                statusColor = darkMode ? "bg-yellow-600 text-white" : "bg-yellow-100 text-yellow-800";
                cardAccent = darkMode ? "border-l-4 border-yellow-500" : "border-l-4 border-yellow-400";
                cardBg = darkMode ? "bg-yellow-950/20" : "bg-yellow-50";
              } else {
                statusColor = darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700";
                cardAccent = darkMode ? "border-l-4 border-gray-600" : "border-l-4 border-gray-300";
                cardBg = darkMode ? "bg-[#232326]" : "bg-white";
              }
              return (
                <div key={index} className={`border rounded-2xl p-8 hover:border-opacity-80 transition-colors shadow ${cardAccent} ${cardBg} ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={darkMode ? "text-2xl font-semibold text-gray-100 mb-3" : "text-2xl font-semibold text-gray-900 mb-3"}>{project.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full shadow ${statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={darkMode ? "text-gray-300 hover:text-white transition-colors mt-1" : "text-gray-400 hover:text-gray-600 transition-colors mt-1"}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className={darkMode ? "text-gray-200 mb-6 leading-relaxed text-lg" : "text-gray-700 mb-6 leading-relaxed text-lg"}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={darkMode ? "px-4 py-1 bg-[#18181b] text-gray-100 text-base rounded-md font-mono border border-gray-700" : "px-4 py-1 bg-gray-100 text-gray-700 text-base rounded-md font-mono"}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          {!showAllProjects && projects.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(true)}
                className={darkMode ? "px-6 py-2 bg-[#18181b] text-gray-100 border border-gray-700 rounded-lg font-semibold shadow hover:bg-[#232326] transition-colors" : "px-6 py-2 bg-gray-900 text-white rounded-lg font-semibold shadow hover:bg-gray-800 transition-colors"}
              >
                Load More
              </button>
            </div>
          )}
          {showAllProjects && projects.length > 3 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllProjects(false)}
                className={darkMode ? "px-6 py-2 bg-[#232326] text-gray-100 border border-gray-700 rounded-lg font-semibold shadow hover:bg-[#18181b] transition-colors" : "px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold shadow hover:bg-gray-300 transition-colors"}
              >
                Show Less
              </button>
            </div>
          )}
        </section>

        {/* Contact */}
        <section className="flex items-center justify-center py-20">
          <div className={darkMode ? "relative min-h-[350px] w-full max-w-3xl rounded-2xl shadow-lg bg-[#232326]/90" : "relative min-h-[350px] w-full max-w-3xl rounded-2xl shadow bg-gray-100"}>
            <div className="relative z-10 flex flex-col items-center justify-center p-12 min-h-[350px]">
              <h2 className={darkMode ? "text-3xl font-semibold text-white mb-6" : "text-3xl font-semibold text-gray-900 mb-6"}>Let's connect</h2>
              <p className={darkMode ? "text-gray-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed" : "text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"}>
                I'm always interested in research opportunities and cool projects. 
                Feel free to reach out if you want to talk about ML, physics, anything tech-related or if you just want to chat.
              </p>
              <a 
                href="mailto:shreyan.mitra09@gmail.com" 
                className={darkMode ? "inline-flex items-center px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors font-semibold text-lg shadow" : "inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-semibold text-lg shadow"}
              >
                <Mail size={20} className="mr-3" />
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer text overlaid on the mountain SVG, both pushed much higher */}
      <div className="relative w-full flex flex-col items-center justify-end" style={{ minHeight: '0' }}>
        <div className="absolute left-0 right-0 bottom-24 md:bottom-32 lg:bottom-48 flex justify-center pointer-events-none select-none z-10">
          <span className="text-gray-500 dark:text-gray-300 text-sm md:text-base font-medium px-4 py-2 rounded-lg bg-white/70 dark:bg-black/40 shadow-md backdrop-blur-sm" style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>© 2024 Shreyan Mitra. Made with creativity and a lot of coffee.</span>
        </div>
        {/* Enhanced Mountain SVG at the bottom of the page, now just below main content */}
        <div className="w-full overflow-hidden -mt-20 md:-mt-28 lg:-mt-36" style={{ position: 'relative', zIndex: 0 }}>
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[320px] md:h-[420px] lg:h-[600px]">
            {/* Back layer */}
            <path d="M0 600L180 500L320 540L480 480L600 520L800 420L1000 520L1200 440L1440 500V600H0Z" fill={darkMode ? '#232326' : '#a3bffa'} />
            {/* Middle layer */}
            <path d="M0 600L120 540L300 500L500 560L700 480L900 540L1100 460L1300 520L1440 560V600H0Z" fill={darkMode ? '#18181b' : '#7f9cf5'} fillOpacity="0.85" />
            {/* Front layer */}
            <path d="M0 600L80 580L200 540L400 580L600 540L800 580L1000 560L1200 580L1440 600V600H0Z" fill={darkMode ? '#34343a' : '#5a67d8'} fillOpacity="0.7" />
            {/* Extra peaks for coolness */}
            <path d="M200 600L300 520L350 540L400 500L500 580L600 520L700 560L800 500L900 580L1000 540L1100 580L1200 520L1300 580L1440 600" stroke={darkMode ? '#5a67d8' : '#4c51bf'} strokeWidth="6" fill="none" opacity="0.5" />
            <path d="M0 600L100 570L200 590L300 570L400 590L500 570L600 590L700 570L800 590L900 570L1000 590L1100 570L1200 590L1300 570L1440 600" stroke={darkMode ? '#a3bffa' : '#a3bffa'} strokeWidth="4" fill="none" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;