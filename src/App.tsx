import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Moon,
  Sun,
  Code,
  Shield,
  Award,
  BookOpen,
  Briefcase,
  ExternalLink,
  Trophy,
  Star,
  Brain,
  Lightbulb,
  X,
  Lock,
  FileText,
  Wine,
  KeyRound,
  Calculator,
  Network,
} from 'lucide-react';
import '@fontsource/inter';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "Python",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
          proficiency: 90
        },
        {
          name: "Java",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
          proficiency: 85
        },
        {
          name: "JavaScript",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          proficiency: 80
        }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        {
          name: "HTML",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
          proficiency: 85
        },
        {
          name: "CSS",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
          proficiency: 80
        },
        {
          name: "Streamlit",
          image: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
          proficiency: 75
        }
      ]
    },
    {
      category: "Databases",
      items: [
        {
          name: "MySQL",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
          proficiency: 85
        },
        {
          name: "SQLite3",
          image: "https://www.sqlite.org/images/sqlite370_banner.gif",
          proficiency: 80
        }
      ]
    },
    {
      category: "Networking & Security",
      items: [
        {
          name: "Cisco Packet Tracer",
          image: "https://img.icons8.com/?size=100&id=XEnbmdky0kzu&format=png&color=000000",
          proficiency: 85
        },
        {
          name: "TCP/IP",
          image: "https://cdn-icons-png.flaticon.com/512/1789/1789313.png",
          proficiency: 80
        },
        {
          name: "Ethical Hacking",
          image: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
          proficiency: 85
        },
        {
          name: "CTF",
          image: "https://cdn-icons-png.flaticon.com/512/1674/1674882.png",
          proficiency: 90
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        {
          name: "OpenAI API",
          image: "https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000",
          proficiency: 85
        },
        {
          name: "LangChain",
          image: "https://python.langchain.com/img/favicon.ico",
          proficiency: 80
        }
      ]
    },
    {
      category: "Version Control",
      items: [
        {
          name: "Git",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
          proficiency: 85
        },
        {
          name: "GitHub",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
          proficiency: 85
        }
      ]
    }
  ];

  const projects = [
    {
      title: "SecureVision",
      description: "Advanced web application vulnerability scanning and reporting tool using AI-powered Scrape Scan for real-time security flaw detection.",
      tech: ["HTML", "AI", "Web Scraping"],
      icon: <Shield className="text-primary" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/SecureVision",
      features: [
        "Real-time vulnerability detection",
        "AI-enhanced scan accuracy",
        "Comprehensive security reports"
      ]
    },
    {
      title: "Firewall Monitoring System",
      description: "Java Swing-based application for network security monitoring with user authentication and real-time log analysis.",
      tech: ["Java Swing", "MySQL"],
      icon: <Lock className="text-secondary" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Firewall-Monitoring-System",
      features: [
        "User authentication system",
        "Network log processing",
        "Visual firewall monitoring"
      ]
    },
    {
      title: "Chat-with-PDF",
      description: "Interactive chatbot using LangChain and OpenAI API for intelligent document analysis and information extraction.",
      tech: ["Python", "LangChain", "OpenAI API"],
      icon: <FileText className="text-accent" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Chat-with-PDF",
      features: [
        "PDF document interaction",
        "Natural language processing",
        "Smart information extraction"
      ]
    },
    {
      title: "Wine Quality Prediction",
      description: "Machine learning project analyzing wine characteristics to predict quality using various algorithms.",
      tech: ["Python", "ML Algorithms", "Jupyter"],
      icon: <Wine className="text-red-500" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Wine-Quality-Prediction",
      features: [
        "Dataset analysis",
        "Multiple ML algorithms",
        "Performance evaluation"
      ]
    },
    {
      title: "Password Generator",
      description: "Python-based secure password generator with customizable parameters for enhanced security.",
      tech: ["Python"],
      icon: <KeyRound className="text-yellow-500" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Password-Generator",
      features: [
        "Customizable length",
        "Complex character sets",
        "Security validation"
      ]
    },
    {
      title: "Crypto-Tools",
      description: "Python application providing encryption and decryption functionalities using various cryptographic algorithms.",
      tech: ["Python", "Cryptography"],
      icon: <Lock className="text-purple-500" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Crypto-Tools",
      features: [
        "Multiple encryption algorithms",
        "User-friendly interface",
        "Educational crypto features"
      ]
    },
    {
      title: "Basic Calculator",
      description: "Tkinter-based calculator application with a clean interface for arithmetic operations.",
      tech: ["Python", "Tkinter"],
      icon: <Calculator className="text-blue-500" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Basic-Calculator",
      features: [
        "Basic arithmetic operations",
        "User-friendly interface",
        "Real-time calculation"
      ]
    },
    {
      title: "Simple Network",
      description: "Cisco Packet Tracer network design connecting departments with efficient communication protocols.",
      tech: ["Cisco Packet Tracer"],
      icon: <Network className="text-green-500" size={24} />,
      github: "https://github.com/TechWhiz-Sarikha/Simple-Network",
      features: [
        "Department connectivity",
        "Subnetting implementation",
        "Network verification"
      ]
    }
  ];

  const achievements = [
    {
      title: "Hackers Asylum CTF – 3rd Place",
      description: "Won 3rd place at SSN College of Engineering's Hackers Asylum CTF with a cash prize of ₹3000.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
      category: "CTF",
      icon: <Trophy className="text-yellow-500" size={20} />,
      linkedin: "https://www.linkedin.com/in/sarikhas/"
    },
    {
      title: "CyberNUsoid CTF – Top 20",
      description: "Ranked in the top 20 out of 100+ participants at GLA University's CyberNUsoid CTF.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
      category: "CTF",
      icon: <Trophy className="text-yellow-500" size={20} />,
      linkedin: "https://www.linkedin.com/in/sarikhas/"
    },
    {
      title: "GPT-4o Solve-a-thon",
      description: "Made it to the finals at the National GPT-4o Hackathon hosted by IIIT Nagpur.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
      category: "Hackathon",
      icon: <Brain className="text-purple-500" size={20} />,
      linkedin: "https://www.linkedin.com/in/sarikhas/"
    },
    {
      title: "IEEE Pro Expo 24",
      description: "Organized and led the Pro Expo as IEEE CS Vice President at NEC.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
      category: "Leadership",
      icon: <Star className="text-blue-500" size={20} />,
      linkedin: "https://www.linkedin.com/in/sarikhas/"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sarikha S
            </h1>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Hello, I'm Sarikha
              </span>
            </h1>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Cybersecurity Enthusiast | Java Developer | Tech Speaker
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://drive.google.com/file/d/1mpF25ercNBROOtVxA7vrlCpfZxrDb8yv/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors"
              >
                <Download size={20} /> Download Resume
              </a>
              <a
                href="#contact"
                className={`flex items-center gap-2 px-6 py-3 ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
                } rounded-full transition-colors`}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary opacity-30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </section>

      <motion.section 
        id="about" 
        className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a third-year Computer Science student passionate about cybersecurity and Java development.
              From building automated vulnerability alert systems to participating in CTFs,
              I love pushing the boundaries of what's possible in tech.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-lg'
                } transition-all group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.icon}
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="space-y-12 max-w-6xl mx-auto">
            {skills.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className={`relative rounded-xl p-6 ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-50'
                      } hover:shadow-lg transition-all group`}
                    >
                      <div className="flex flex-col items-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform duration-300 object-contain"
                        />
                        <h4 className="text-lg font-medium mb-2 text-center">{skill.name}</h4>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                        <span className="mt-2 text-sm text-gray-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="achievements" 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden group cursor-pointer ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-sm font-medium flex items-center gap-2">
                    {achievement.icon}
                    {achievement.category}
                  </div>
                  <a
                    href={achievement.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-primary/90 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative max-w-2xl w-full rounded-2xl overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedAchievement.title}</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {selectedAchievement.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      <motion.section 
        id="contact" 
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:sarikhasp18@gmail.com"
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <Mail size={20} /> sarikhasp18@gmail.com
            </a>
            <a
              href="tel:+917010497060"
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
            >
              <Phone size={20} /> +91 7010497060
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/TechWhiz-Sarikha"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarikhas/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </motion.section>

      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Sarikha S. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
