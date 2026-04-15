import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Briefcase, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-black uppercase mb-6">Project Not Found</h1>
        <Link to="/portfolio" className="px-8 py-3 bg-brand-black text-white rounded-full font-bold uppercase tracking-widest text-sm">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <div className="min-h-screen bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Gallery
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-32">
          <div className="lg:col-span-8 space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs block"
            >
              {project.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85]"
            >
              {project.title}
            </motion.h1>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                <Calendar size={12} /> Year
              </div>
              <div className="font-bold">{project.year}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                <User size={12} /> Client
              </div>
              <div className="font-bold">{project.client}</div>
            </div>
            <div className="space-y-1 col-span-2">
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40 flex items-center gap-2">
                <Briefcase size={12} /> Role
              </div>
              <div className="font-bold">{project.role}</div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-[16/9] rounded-medium overflow-hidden mb-32 shadow-soft"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Description & Details */}
        <div className="max-w-4xl mx-auto mb-32 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-brand-accent">The Vision</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                {project.description}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-brand-accent">The Challenge</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                {project.challenge}
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-brand-accent">The Approach</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                {project.approach}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-brand-accent">The Impact</h2>
              <p className="text-xl font-light leading-relaxed opacity-80">
                {project.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {project.gallery.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-medium overflow-hidden shadow-soft ${i % 3 === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
            >
              <img 
                src={img} 
                alt={`${project.title} gallery ${i}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Next Project CTA */}
        <div className="border-t border-black/10 dark:border-white/10 pt-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">Next Project</p>
          <Link 
            to={`/portfolio/${nextProject.id}`}
            className="group inline-block"
          >
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter group-hover:text-brand-accent transition-colors">
              {nextProject.title}
            </h3>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-300">
                <ArrowRight size={32} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
