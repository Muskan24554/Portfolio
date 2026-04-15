/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  ArrowUpRight, 
  Instagram, 
  Twitter, 
  Youtube, 
  Plus, 
  Globe,
  Camera,
  Moon,
  Sun,
  ArrowRight,
  Mail,
  Search,
  Calendar,
  PenTool,
  BarChart3
} from "lucide-react";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProcessDetailPage from "./pages/ProcessDetailPage";

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-8 px-10 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-black/5 dark:border-white/5">
      <Link to="/" className="text-2xl font-black tracking-tighter uppercase">MS</Link>
      <div className="hidden md:flex gap-10 lowercase font-bold text-[13px] tracking-widest">
        <Link to="/" className="nav-link">Home</Link>
        {isHome ? (
          <>
            <a href="#about" className="nav-link">About</a>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
            <a href="#process" className="nav-link">Process</a>
            <a href="#contact" className="nav-link">Contact</a>
          </>
        ) : (
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
        )}
      </div>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="w-10 h-10 rounded-full border border-current flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all duration-300"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen pt-40 pb-20 px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-7 space-y-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-editorial-heading">
          Muskan<br />Sharma
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-lg mt-8 leading-tight opacity-80">
          Turning ideas into scroll-stopping content.<br />
          Blending creativity with strategy to drive real engagement.
        </p>
      </motion.div>
      
      <div className="flex flex-wrap gap-6 pt-4">
        <div className="space-y-1">
          <div className="text-4xl font-black tracking-tighter text-brand-accent">+250K</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Views Monthly</div>
        </div>
        <div className="space-y-1">
          <div className="text-4xl font-black tracking-tighter text-brand-accent">+800K</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Engagement</div>
        </div>
      </div>

      <div className="flex gap-4">
        {[Instagram, Twitter, Youtube].map((Icon, i) => (
          <button key={i} className="w-12 h-12 rounded-full border border-current flex items-center justify-center hover:bg-brand-accent hover:text-brand-black transition-all duration-300">
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>

    <div className="lg:col-span-5 relative">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="aspect-[3/4] bg-brand-grey dark:bg-zinc-900 rounded-medium overflow-hidden relative shadow-soft group"
      >
        <img 
          src="https://i.ibb.co/v4x9FLrh/1752490950837.jpg" 
          alt="Muskan Sharma" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>
      
      {/* Floating UI Element */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent text-brand-black rounded-full flex items-center justify-center shadow-soft z-10"
      >
        <Globe size={40} className="animate-spin-slow" />
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-brand-black text-brand-white py-40 px-10 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-abstract-radial pointer-events-none" />
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="relative order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <img 
            src="https://picsum.photos/seed/portrait_bw/800/1000" 
            alt="Portrait" 
            className="w-full aspect-[4/5] object-cover grayscale rounded-medium border border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-brand-accent/30 rounded-full animate-spin-slow" />
      </div>

      <div className="space-y-10 order-1 lg:order-2">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          About<br /><span className="text-brand-accent">Muskan Sharma</span>
        </h2>
        <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed opacity-80">
          <p>
            I create content that connects, inspires, and tells a story. From managing Instagram pages to crafting engaging visuals and captions, I focus on building meaningful digital experiences.
          </p>
          <p>
            Blending creativity with analytics, I use trends, audience insights, and strategy to turn ideas into impactful content that grows and engages communities.
          </p>
        </div>
        <div className="pt-8">
          <button className="group flex items-center gap-4 text-brand-accent font-bold uppercase tracking-widest text-sm">
            Discover my journey
            <div className="w-12 h-12 rounded-full border border-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-black transition-all duration-300">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioSection = () => (
  <section id="portfolio" className="py-40 px-10 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
      <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
        Work
      </h2>
      <div className="flex flex-col items-end gap-6">
        <p className="max-w-xs text-lg font-medium opacity-60 leading-tight text-right">
          A curated selection of editorial projects and visual narratives.
        </p>
        <Link 
          to="/portfolio" 
          className="group flex items-center gap-3 bg-brand-black text-white dark:bg-white dark:text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-brand-accent hover:text-brand-black transition-all duration-300"
        >
          View Full Portfolio
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Large Feature */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:col-span-8 aspect-video bg-brand-grey dark:bg-zinc-900 rounded-medium overflow-hidden relative group shadow-soft"
      >
        <Link to="/portfolio/urban-noir" className="block w-full h-full">
          <img 
            src="https://picsum.photos/seed/fashion1/1200/800" 
            alt="Work" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
            <div className="text-white">
              <h3 className="text-4xl font-black uppercase tracking-tighter">Urban Noir</h3>
              <p className="text-brand-accent font-script text-2xl mt-2">Editorial Series</p>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Accent Card */}
      <Link 
        to="/portfolio"
        className="md:col-span-4 bg-brand-accent rounded-medium p-12 flex flex-col justify-between shadow-soft group cursor-pointer"
      >
        <div className="w-16 h-16 rounded-full bg-brand-black text-brand-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
          <Plus size={32} />
        </div>
        <div>
          <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] text-brand-black">
            Bold<br />Vision
          </h3>
          <p className="text-brand-black/60 font-bold mt-4 uppercase text-[10px] tracking-widest">Featured in Vogue 2024</p>
        </div>
      </Link>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { 
      id: "01", 
      slug: "research-trends",
      title: "Research trends", 
      description: "Analyzing current viral trends and audience interests to find the perfect angle.",
      icon: <Search size={32} /> 
    },
    { 
      id: "02", 
      slug: "plan-content",
      title: "Plan content", 
      description: "Developing a strategic content calendar that ensures consistency and narrative flow.",
      icon: <Calendar size={32} /> 
    },
    { 
      id: "03", 
      slug: "design-write",
      title: "Design & write", 
      description: "Crafting high-quality visuals and compelling captions that resonate with the audience.",
      icon: <PenTool size={32} /> 
    },
    { 
      id: "04", 
      slug: "analyze-performance",
      title: "Analyze performance", 
      description: "Reviewing metrics to understand what worked and how to optimize future content.",
      icon: <BarChart3 size={32} /> 
    },
  ];

  return (
    <section id="process" className="py-40 px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          How I<br />Create <span className="text-brand-accent">Content</span>
        </h2>
        <p className="max-w-xs text-lg font-medium opacity-60 leading-tight">
          A systematic approach to building digital presence and community engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step) => (
          <Link 
            key={step.id}
            to={`/process/${step.slug}`}
            className="block group"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 p-10 bg-brand-grey dark:bg-zinc-900 rounded-medium shadow-soft hover:shadow-hover transition-all duration-500 border border-transparent hover:border-brand-accent/20 h-full"
            >
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-full bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-black transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-4xl font-black opacity-10 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-300">
                  {step.id}
                </span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium opacity-60 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Insights <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-40 px-10 max-w-7xl mx-auto text-center space-y-16">
    <div className="space-y-6">
      <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
        Let's <span className="text-brand-accent">Talk</span>
      </h2>
      <p className="text-xl md:text-2xl font-medium opacity-60 max-w-2xl mx-auto">
        Interested in a collaboration or just want to say hello?
      </p>
    </div>
    
    <div className="flex flex-col items-center gap-8">
      <a 
        href="mailto:muskansh2524@gmal.com" 
        className="text-3xl md:text-5xl font-black tracking-tighter hover:text-brand-accent transition-colors flex items-center gap-6"
      >
        <Mail size={40} className="text-brand-accent" />
        muskansh2524@gmal.com
      </a>
      
      <div className="flex gap-6">
        {["Instagram", "Twitter", "LinkedIn"].map((social) => (
          <a key={social} href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
            {social}
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-10 border-t border-black/5 dark:border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-2xl font-black tracking-tighter uppercase">Muskan Sharma</div>
      <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
        © 2024 Muskan Sharma Portfolio. All Rights Reserved.
      </div>
      <div className="flex gap-8 lowercase font-bold text-[12px] tracking-widest opacity-60">
        <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
        <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
        <Link to="/portfolio" className="hover:opacity-100 transition-opacity">Portfolio</Link>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <PortfolioSection />
    <Process />
    <Contact />
  </>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="selection:bg-brand-accent selection:text-brand-black">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/process/:slug" element={<ProcessDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
