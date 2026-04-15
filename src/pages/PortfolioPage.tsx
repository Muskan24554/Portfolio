import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Plus, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const categories = ["All", "Editorial", "Commercial", "Documentary", "Fashion", "Street", "Music Video"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
              The<br />Archive
            </h1>
            <p className="max-w-xs text-lg font-medium opacity-60 leading-tight">
              A curated selection of visual narratives across various disciplines.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-end max-w-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-brand-black text-white border-brand-black dark:bg-white dark:text-brand-black dark:border-white" 
                    : "border-black/10 dark:border-white/10 hover:border-brand-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, index) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-medium shadow-soft hover:shadow-hover transition-all duration-500 ${
                  index % 4 === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                }`}
              >
                <Link to={`/portfolio/${item.id}`} className="block w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-2">{item.category}</span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">{item.title}</h3>
                    <div className="mt-6 flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                      View Project <Plus size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
