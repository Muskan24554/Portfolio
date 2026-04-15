import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Search, Calendar, PenTool, BarChart3, CheckCircle2, Wrench } from "lucide-react";
import { processSteps } from "../data/processSteps";
import { useEffect } from "react";

const iconMap = {
  Search: Search,
  Calendar: Calendar,
  PenTool: PenTool,
  BarChart3: BarChart3,
};

export default function ProcessDetailPage() {
  const { slug } = useParams();
  const step = processSteps.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!step) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-black uppercase mb-6">Process Step Not Found</h1>
        <Link to="/" className="px-8 py-3 bg-brand-black text-white rounded-full font-bold uppercase tracking-widest text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = iconMap[step.iconName];

  return (
    <div className="min-h-screen bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-8 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 rounded-full bg-brand-accent text-brand-black flex items-center justify-center shadow-soft"
            >
              <Icon size={48} />
            </motion.div>
            <div className="space-y-4">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs block">
                Step {step.id}
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                {step.title}
              </h1>
              <p className="text-2xl font-light opacity-60 max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
          {step.insights.map((insight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-brand-grey dark:bg-zinc-900 rounded-medium shadow-soft border-l-4 border-brand-accent"
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">{insight.title}</h3>
              <p className="text-lg font-light leading-relaxed opacity-80">
                {insight.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools & Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-brand-black text-brand-white dark:bg-white dark:text-brand-black rounded-medium shadow-soft"
          >
            <div className="flex items-center gap-4 mb-8">
              <Wrench className="text-brand-accent" size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Tools I Use</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {step.tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/10 dark:bg-black/10 rounded-full text-xs font-bold uppercase tracking-widest">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-brand-accent text-brand-black rounded-medium shadow-soft"
          >
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 size={32} />
              <h2 className="text-3xl font-black uppercase tracking-tighter">The Outcome</h2>
            </div>
            <p className="text-xl font-bold leading-tight italic">
              "{step.outcome}"
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
