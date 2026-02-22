import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Eye, Lock, Mail, X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Modal from '../ui/Modal';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  isPrivate?: boolean; 
}

const allProjects: ProjectData[] = [
  {
    id: 1,
    title: "Sports Academy SaaS (Swimming)",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    description: "A professional institutional system for managing sports academies. Includes trainee tracking, attendance, and training schedules. This is a private SaaS product available for subscription.",
    technologies: ["PHP", "Laravel", "MySQL", "Livewire", "Tailwind"],
    github: "#contact", 
    isPrivate: true
  },
  {
    id: 2,
    title: "ITI Booking Book System",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop",
    description: "A specialized booking system developed during the ITI program. It manages resource reservations, user schedules, and booking confirmations.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/YUSEF-RAMY/Book-Reservation" 
  },
  {
    id: 3,
    title: "AI Eye-Recognition System",
    category: "AI & Backend",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Lead Back-End developer for an eye-recognition security system. Architected a robust RESTful API that handles high-concurrency requests.",
    technologies: ["Laravel", "Python", "API Security", "Database Architecting"],
    github: "https://github.com/YUSEF-RAMY/Eye-Recognition"
  },
  {
    id: 4,
    title: "Modern E-Commerce Platform",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    description: "A fully functional e-commerce solution with dynamic product management, secure checkout, and a cloud-integrated storage system.",
    technologies: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/YUSEF-RAMY/Fruit-Shop"
  }
];

const categories = ["All", "Full-Stack", "AI & Backend"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="Professional works & academic achievements" />

        <div className="flex justify-center flex-wrap gap-4 mb-12 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                filter === cat 
                  ? "bg-[#3a5a40] text-white border-[#3a5a40]" 
                  : "bg-[#111] text-gray-400 border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#3a5a40]/50 transition-all flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    {/* Overlay: Always visible on touch devices, hover on PC */}
                    <div className="absolute inset-0 bg-black/40 md:bg-black/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button onClick={() => setSelectedProject(project)} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#3a5a40]">
                            <Eye size={24} />
                        </button>
                        {project.isPrivate ? (
                           <a href="#contact" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#8b5e3c]">
                              <Lock size={24} />
                           </a>
                        ) : (
                           <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#3a5a40]">
                              <Github size={24} />
                           </a>
                        )}
                    </div>
                </div>

                <div className="p-6 flex flex-col grow">
                    <span className="text-[#3a5a40] text-[10px] font-bold px-3 py-1 bg-[#3a5a40]/10 rounded-full border border-[#3a5a40]/20 uppercase mb-4 w-fit">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map(tech => (
                             <span key={tech} className="text-[10px] font-bold text-gray-500 bg-black/50 border border-gray-800 px-2 py-1 rounded-md uppercase">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Fix: Scrollable on mobile, beautiful on desktop */}
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
            {selectedProject && (
                <div className="bg-[#0f0f0f] rounded-2xl md:rounded-3xl border border-gray-800 overflow-hidden max-h-[85vh] md:max-h-[90vh] flex flex-col w-full max-w-5xl mx-auto shadow-2xl relative" dir="ltr">
                    
                    {/* Close Button Mobile */}
                    <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-60 p-2 bg-black/60 backdrop-blur-md rounded-full text-white border border-white/10 md:hidden">
                        <X size={20} />
                    </button>

                    <div className="overflow-y-auto grow custom-scrollbar">
                        <div className="flex flex-col md:flex-row min-h-full">
                            {/* Image Part */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-[#0f0f0f]/10 md:from-transparent to-[#0f0f0f]" />
                            </div>

                            {/* Content Part */}
                            <div className="p-6 md:p-12 w-full md:w-1/2 flex flex-col text-left">
                                <span className="text-[#3a5a40] font-bold tracking-widest uppercase text-xs mb-2">
                                    {selectedProject.category}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white leading-tight">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-[10px] font-bold mb-3 text-[#8b5e3c] uppercase tracking-widest">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                         {selectedProject.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs">
                                                {tech}
                                            </span>
                                         ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {selectedProject.isPrivate ? (
                                        <a href="#contact" onClick={() => setSelectedProject(null)} className="flex items-center gap-2 px-6 py-3 bg-[#3a5a40] text-white rounded-xl hover:bg-[#2d4330] transition-all font-bold text-xs">
                                            <Mail size={16} /> Contact Me
                                        </a>
                                    ) : (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/5 text-gray-300 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold text-xs">
                                            <Github size={16} /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;