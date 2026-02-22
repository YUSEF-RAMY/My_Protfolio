import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Modal from '../ui/Modal';

// تعريف الـ Type لضمان عدم وجود أخطاء في الـ State
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sports Academy Management (Swimming)",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    description: "An ongoing institutional project to digitize sports academies. It features a scalable backend to manage trainee progress, attendance, and complex training schedules for swimming modules.",
    technologies: ["PHP", "Laravel", "MySQL", "React", "Bootstrap"],
    github: "https://github.com/YUSEF-RAMY", 
    demo: "" // سيبتها فاضية لو مفيش ديمو حالياً
  },
  {
    id: 2,
    title: "AI Eye-Recognition System",
    category: "AI & Backend",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description: "Lead Back-End developer for an eye-recognition security system. Architected a robust RESTful API that handles high-concurrency requests and integrates seamlessly with AI models.",
    technologies: ["Laravel", "Python", "API Security", "Database Architecting"],
    github: "https://github.com",
    demo: ""
  },
  {
    id: 3,
    title: "Modern E-Commerce Platform",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    description: "A fully functional e-commerce solution with dynamic product management, secure checkout, and a cloud-integrated storage system.",
    technologies: ["React", "Laravel", "MySQL", "AWS S3"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

const categories = ["All", "Full-Stack", "AI & Backend"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="Real-world solutions & institutional work" />

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                filter === cat 
                  ? "bg-[#3a5a40] text-white border-[#3a5a40] shadow-lg shadow-[#3a5a40]/20 scale-105" 
                  : "bg-[#111] text-gray-400 border-gray-800 hover:border-[#5c4033] hover:text-[#8b5e3c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-[#3a5a40]/50 transition-all flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-[#5c4033]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button 
                            onClick={() => setSelectedProject(project)}
                            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#3a5a40] transition-colors"
                            title="Quick View"
                        >
                            <Eye size={24} />
                        </button>
                         <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#3a5a40] transition-colors" title="Github Repo">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <span className="w-fit text-[#3a5a40] text-[10px] font-bold px-3 py-1 bg-[#3a5a40]/10 rounded-full border border-[#3a5a40]/20 uppercase tracking-widest">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-2 text-gray-100 group-hover:text-[#8b5e3c] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map(tech => (
                             <span key={tech} className="text-[10px] font-bold text-gray-500 bg-black/50 border border-gray-800 px-2 py-1 rounded-md uppercase tracking-tighter">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
            {selectedProject && (
                <div className="bg-[#0f0f0f] rounded-3xl overflow-y-auto max-h-[90vh] border border-gray-800 scrollbar-hide">
                     <div className="h-48 md:h-80 overflow-hidden relative">
                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
                    </div>
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                             <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{selectedProject.title}</h2>
                                <span className="text-[#3a5a40] font-bold tracking-widest uppercase text-sm">{selectedProject.category}</span>
                             </div>
                             <div className="flex gap-3 w-full md:w-auto">
                                 <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-[#111] text-gray-300 border border-gray-800 rounded-full hover:border-[#5c4033] transition-all text-sm">
                                    <Github size={18} /> Code
                                </a>
                                {selectedProject.demo && (
                                     <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-[#3a5a40] text-white rounded-full hover:bg-[#2d4330] shadow-lg shadow-[#3a5a40]/20 transition-all text-sm">
                                        <ExternalLink size={18} /> Live
                                    </a>
                                )}
                             </div>
                        </div>
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                            {selectedProject.description}
                        </p>
                        <h4 className="text-sm font-bold mb-4 text-[#8b5e3c] uppercase tracking-widest">Technologies Stack</h4>
                        <div className="flex flex-wrap gap-2">
                             {selectedProject.technologies.map(tech => (
                                <span key={tech} className="px-4 py-1 bg-[#3a5a40]/5 border border-[#3a5a40]/20 text-[#3a5a40] rounded-full text-xs font-bold">
                                    {tech}
                                </span>
                             ))}
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