import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, Award, User, Folder, MessageSquare, Sun, Moon } from 'lucide-react';
import '../src/index.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color theme configuration
  const colors = {
    dark: {
      bg: '#000000',
      bgSecondary: '#0A0A0A',
      card: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#E5E5E5',
      textMuted: '#A0A0A0',
      gold: '#D4AF37',
      goldDark: '#B8941F',
      border: '#2A2A2A'
    },
    light: {
      bg: '#FFFFFF',
      bgSecondary: '#F8F8F8',
      card: '#FFFFFF',
      text: '#000000',
      textSecondary: '#1A1A1A',
      textMuted: '#666666',
      gold: '#C9A236',
      goldDark: '#B8941F',
      border: '#E0E0E0'
    }
  };

  const theme = isDarkMode ? colors.dark : colors.light;

  const projects = [
    {
      title: "Alumni Relations Management System",
      tech: "Spring Boot, React.js, MySQL",
      description: "Full-stack platform enabling secure interaction between students, alumni, and administrators with authentication, event management, and real-time communication.",
      github: "https://github.com/pradeepdevs140/AlumniRelationsApp_frontend",
      features: ["User Authentication", "Event Management", "Alumni Networking", "Real-time Communication"]
    },
    {
      title: "E-commerce Application",
      tech: "Java Spring Boot, React.js, MySQL",
      description: "Dynamic shopping platform with user registration, product management, cart functionality, and secure order processing.",
      github: "https://github.com/pradeepdevs140/react-e-commerce",
      features: ["User Registration/Login", "Product Listing", "Cart Management", "Order Processing"]
    },
    {
      title: "Customer Management System",
      tech: "React.js, Spring Boot, REST APIs, MongoDB",
      description: "Responsive web application with role-based access control and complete CRUD operations for efficient customer data management.",
      github: "https://github.com/pradeepdevs140/Spring-react-project",
      features: ["Admin Authentication", "CRUD Operations", "Role-based Access", "REST APIs"]
    },
    {
      title: "WebSocket Chat Application",
      tech: "Spring Boot, WebSocket, Java",
      description: "Real-time chat application leveraging WebSocket technology for instant messaging capabilities.",
      github: "https://github.com/pradeepdevs140/WebSocketJ_Springboot",
      features: ["Real-time Messaging", "WebSocket Integration", "Spring Boot Backend"]
    },
    {
      title: "Microservices Architecture",
      tech: "Spring Boot, Java, Microservices",
      description: "Scalable microservices-based architecture demonstrating distributed system design patterns.",
      github: "https://github.com/pradeepdevs140/Microservice_springboot",
      features: ["Service Discovery", "API Gateway", "Load Balancing"]
    },
    {
      title: "Financial Predictive Analytics System",
      tech: "Python, Machine Learning, HTML/CSS",
      description: "Data-driven platform analyzing financial behavior and forecasting revenue trends, profit margins, and risk factors using ML models.",
      features: ["ML Predictions", "Interactive Dashboards", "Data Analytics", "Business Intelligence"]
    },
    {
      title: "Image Search Engine",
      tech: "HTML, CSS, JavaScript",
      description: "Interactive image search engine with dynamic API integration for seamless image discovery.",
      github: "https://github.com/pradeepdevs140/imagesearch-engine",
      features: ["API Integration", "Dynamic Search", "Responsive Design"]
    }
  ];

  const experience = [
    {
      role: "Web Developer Intern",
      company: "APPBEEZ",
      period: "June - July 2024",
      responsibilities: [
        "Designed customer-facing UI screens integrated with AI scripts for interactive query handling",
        "Translated business requirements into responsive and intuitive UI designs",
        "Built and connected APIs with backend databases for dynamic data interaction",
        "Implemented and tested email functionality for application communication",
        "Demonstrated rapid learning, attention to detail, and professionalism"
      ]
    },
    {
      role: "Cybersecurity Intern",
      company: "Supraja Technologies",
      period: "Feb 2024 - July 2024",
      responsibilities: [
        "Developed File Encryption and Decryption Tool with secure data handling features",
        "Gained hands-on experience in web application security testing",
        "Identified and mitigated security vulnerabilities",
        "Worked independently to complete project deliverables on time"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["C++", "Java", "JavaScript"],
    "Frontend Technologies": ["HTML5", "CSS3", "Bootstrap", "React.js"],
    "Backend": ["Java", "Spring Boot", "RESTful APIs", "Node.js", "Express.js"],
    "Database": ["MySQL", "MongoDB"],
    "UI/UX Design": ["Figma"],
    "Version Control": ["Git", "GitHub"],
    "Other": ["Machine Learning", "Python", "Microservices", "WebSocket"]
  };

  const achievements = [
    "Participated in Hackbyte 3.0 (IIITDM Jabalpur)",
    "Smart India Hackathon participant",
    "TN Road Safety Hackathon - Round 2 participant",
    "Finalist in College ERP Project Development",
    "Department Coordinator for Maths Club and ITEA Club",
    "Active in open-source projects and business pitch meets"
  ];

  const NavBar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
         style={{ 
           backgroundColor: isScrolled ? (isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
           backdropFilter: isScrolled ? 'blur(10px)' : 'none'
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: theme.gold }}>
              Pradeep M
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-sm font-medium transition-all duration-300 hover:opacity-80"
                style={{ 
                  color: activeSection === item.toLowerCase() ? theme.gold : theme.text 
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`,
                color: theme.gold
              }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg"
              style={{ color: theme.gold }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: theme.text }}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => { setActiveSection(item.toLowerCase()); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg"
                style={{
                  color: activeSection === item.toLowerCase() ? theme.gold : theme.text,
                  backgroundColor: activeSection === item.toLowerCase() ? theme.card : 'transparent'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-medium" style={{ color: theme.gold }}>Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold" style={{ color: theme.text }}>
              Pradeep M
            </h1>
            <div className="h-1 w-20 rounded" style={{ backgroundColor: theme.gold }}></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: theme.gold }}>
            Full Stack Developer
          </h2>
          
          <p className="text-lg leading-relaxed" style={{ color: theme.textSecondary }}>
            Hands-on experience in designing responsive user interfaces and building scalable backend APIs, 
            delivering seamless end-to-end web solutions. Final year IT student with a passion for creating 
            innovative digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveSection('projects')}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: theme.gold,
                color: isDarkMode ? '#000' : '#FFF',
                boxShadow: `0 4px 20px ${theme.gold}50`
              }}
            >
              View Projects
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              style={{ 
                border: `2px solid ${theme.gold}`,
                color: theme.gold,
                backgroundColor: 'transparent'
              }}
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/pradeepdevs140" target="_blank" rel="noopener noreferrer" 
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/pradeepdevs" target="_blank" rel="noopener noreferrer"
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Linkedin size={28} />
            </a>
            <a href="mailto:pradeepkrishna140@gmail.com"
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse" 
                 style={{ backgroundColor: theme.gold }}></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
                 style={{ border: `4px solid ${theme.gold}` }}>
              <img 
                src="/Pradeep_Photo.jpg"
                alt="Pradeep M"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `data:image/svg+xml;base64,${btoa(`<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="320" fill="${theme.card}"/><text x="50%" y="50%" font-size="84" fill="${theme.gold}" font-family="Arial" text-anchor="middle" dy=".3em">PM</text></svg>`)}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
          About <span style={{ color: theme.gold }}>Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl transition-all duration-300"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.gold }}>Education</h3>
              <div className="space-y-2">
                <p className="font-medium" style={{ color: theme.text }}>Panimalar Engineering College</p>
                <p style={{ color: theme.textSecondary }}>Bachelor of Technology in Information Technology</p>
                <p style={{ color: theme.textMuted }}>Oct 2022 - July 2026 (Final Year)</p>
                <p className="font-semibold" style={{ color: theme.gold }}>CGPA: 8.10</p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl transition-all duration-300"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.gold }}>Quick Facts</h3>
              <div className="space-y-3">
                {['Based in Chennai, Tamil Nadu', 'Full Stack Developer', 'Open Source Contributor', 'Hackathon Enthusiast'].map((fact, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.gold }}></div>
                    <p style={{ color: theme.text }}>{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl transition-all duration-300"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.gold }}>Achievements & Involvement</h3>
              <div className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Award className="mt-1 flex-shrink-0" size={20} style={{ color: theme.gold }} />
                    <p style={{ color: theme.text }}>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-xl transition-all duration-300"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: theme.gold }}>Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {["Coding", "Designing", "Tech Blogging", "Cycling", "Gaming"].map((hobby, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full transition-all duration-300"
                        style={{ 
                          backgroundColor: isDarkMode ? `${theme.gold}20` : `${theme.gold}15`,
                          border: `1px solid ${theme.gold}50`,
                          color: theme.text
                        }}>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
          Technical <span style={{ color: theme.gold }}>Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: theme.gold }}>{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    className="px-4 py-2 rounded-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: isDarkMode ? `${theme.gold}20` : `${theme.gold}15`,
                      border: `1px solid ${theme.gold}50`,
                      color: theme.text
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-xl transition-all duration-300"
             style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
          <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.gold }}>Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { skill: "Critical Thinking", icon: "🧠" },
              { skill: "Data-driven Decision Making", icon: "📊" },
              { skill: "Team Leadership", icon: "👥" },
              { skill: "Problem Solving", icon: "💡" },
              { skill: "Communication", icon: "💬" },
              { skill: "Attention to Detail", icon: "🔍" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-lg"
                   style={{ backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10` }}>
                <span className="text-3xl">{item.icon}</span>
                <p className="font-medium" style={{ color: theme.text }}>{item.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
          Featured <span style={{ color: theme.gold }}>Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 rounded-xl transition-all duration-300 hover:scale-105 flex flex-col"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <div className="flex items-start justify-between mb-4">
                <Folder size={32} style={{ color: theme.gold }} />
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="transition-colors hover:opacity-80"
                     style={{ color: theme.textMuted }}>
                    <Github size={24} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.text }}>{project.title}</h3>
              <p className="text-sm mb-3" style={{ color: theme.gold }}>{project.tech}</p>
              <p className="text-sm mb-4 flex-grow" style={{ color: theme.textSecondary }}>{project.description}</p>
              
              <div className="space-y-2">
                {project.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.gold }}></div>
                    <p className="text-xs" style={{ color: theme.textMuted }}>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
          Work <span style={{ color: theme.gold }}>Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="p-8 rounded-xl transition-all duration-300"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1" style={{ color: theme.text }}>{exp.role}</h3>
                  <p className="font-medium" style={{ color: theme.gold }}>{exp.company}</p>
                </div>
                <span className="px-4 py-2 rounded-full text-sm"
                      style={{ 
                        backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10`,
                        border: `1px solid ${theme.gold}50`,
                        color: theme.text
                      }}>
                  {exp.period}
                </span>
              </div>
              
              <div className="space-y-3 mt-6">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" 
                         style={{ backgroundColor: theme.gold }}></div>
                    <p style={{ color: theme.text }}>{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: theme.text }}>
          Get In <span style={{ color: theme.gold }}>Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.gold }}>Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:pradeepkrishna140@gmail.com" 
                   className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                   style={{ backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10` }}>
                  <Mail size={24} style={{ color: theme.gold }} />
                  <div>
                    <p className="text-sm" style={{ color: theme.textMuted }}>Email</p>
                    <p style={{ color: theme.text }}>pradeepkrishna140@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+919176052237"
                   className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                   style={{ backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10` }}>
                  <Phone size={24} style={{ color: theme.gold }} />
                  <div>
                    <p className="text-sm" style={{ color: theme.textMuted }}>Phone</p>
                    <p style={{ color: theme.text }}>+91 9176052237</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="p-6 rounded-xl"
                 style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.gold }}>Social Links</h3>
              
              <div className="space-y-4">
                <a href="https://linkedin.com/in/pradeepdevs" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                   style={{ backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10` }}>
                  <Linkedin size={24} style={{ color: theme.gold }} />
                  <div>
                    <p className="text-sm" style={{ color: theme.textMuted }}>LinkedIn</p>
                    <p style={{ color: theme.text }}>linkedin.com/in/pradeepdevs</p>
                  </div>
                </a>
                
                <a href="https://github.com/pradeepdevs140" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 p-4 rounded-lg transition-all duration-300"
                   style={{ backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10` }}>
                  <Github size={24} style={{ color: theme.gold }} />
                  <div>
                    <p className="text-sm" style={{ color: theme.textMuted }}>GitHub</p>
                    <p style={{ color: theme.text }}>github.com/pradeepdevs140</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-xl"
               style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: theme.gold }}>Let's Connect</h3>
            <p className="mb-6" style={{ color: theme.text }}>
              I'm always interested in hearing about new opportunities, collaborations, or just chatting about technology and development. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg"
                   style={{ 
                     backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10`,
                     border: `1px solid ${theme.gold}50`
                   }}>
                <p className="text-sm mb-2" style={{ color: theme.textMuted }}>Open to:</p>
                <div className="flex flex-wrap gap-2">
                  {["Full-time roles", "Internships", "Freelance", "Collaboration"].map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: isDarkMode ? `${theme.gold}30` : `${theme.gold}20`,
                            color: theme.gold
                          }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg"
                   style={{ 
                     backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10`,
                     border: `1px solid ${theme.gold}50`
                   }}>
                <p className="text-sm mb-2" style={{ color: theme.textMuted }}>Location:</p>
                <p style={{ color: theme.text }}>Chennai, Tamil Nadu, India</p>
              </div>
              
              <div className="p-4 rounded-lg"
                   style={{ 
                     backgroundColor: isDarkMode ? `${theme.gold}15` : `${theme.gold}10`,
                     border: `1px solid ${theme.gold}50`
                   }}>
                <p className="text-sm mb-2" style={{ color: theme.textMuted }}>Availability:</p>
                <p className="font-medium" style={{ color: theme.gold }}>Available for opportunities starting July 2026</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block p-8 rounded-xl"
               style={{ backgroundColor: theme.card, border: `1px solid ${theme.border}` }}>
            <MessageSquare className="mx-auto mb-4" size={48} style={{ color: theme.gold }} />
            <h3 className="text-2xl font-semibold mb-2" style={{ color: theme.text }}>Let's Build Something Amazing</h3>
            <p className="mb-6" style={{ color: theme.text }}>
              I'm passionate about creating innovative solutions and always eager to take on new challenges.
            </p>
            <a 
              href="mailto:pradeepkrishna140@gmail.com"
              className="inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: theme.gold,
                color: isDarkMode ? '#000' : '#FFF',
                boxShadow: `0 4px 20px ${theme.gold}50`
              }}
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
      <div className="fixed inset-0 pointer-events-none" 
           style={{ 
             background: isDarkMode 
               ? `radial-gradient(ellipse at top right, ${theme.gold}10, transparent, ${theme.gold}05)`
               : `radial-gradient(ellipse at top right, ${theme.gold}08, transparent, ${theme.gold}03)`
           }}></div>
      
      <NavBar />
      
      <div className="relative">
        {activeSection === 'home' && <HomePage />}
        {activeSection === 'about' && <AboutPage />}
        {activeSection === 'skills' && <SkillsPage />}
        {activeSection === 'projects' && <ProjectsPage />}
        {activeSection === 'experience' && <ExperiencePage />}
        {activeSection === 'contact' && <ContactPage />}
      </div>
      
      <footer className="relative py-8 mt-12 transition-colors duration-300"
              style={{ 
                backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(248, 248, 248, 0.5)',
                backdropFilter: 'blur(10px)',
                borderTop: `1px solid ${theme.border}`
              }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4" style={{ color: theme.textMuted }}>
            Designed & Built by <span className="font-semibold" style={{ color: theme.gold }}>Pradeep M</span>
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/pradeepdevs140" target="_blank" rel="noopener noreferrer" 
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/pradeepdevs" target="_blank" rel="noopener noreferrer"
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:pradeepkrishna140@gmail.com"
               className="transition-colors hover:opacity-80"
               style={{ color: theme.textMuted }}>
              <Mail size={24} />
            </a>
          </div>
          <p className="text-sm" style={{ color: theme.textMuted, opacity: 0.6 }}>
            © 2025 Pradeep M. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;