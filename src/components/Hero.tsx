import { Github, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-background pt-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            SEABATA ENOCH LEBABO
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            Curriculum Vitae
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              Anand, INDIA 388120
            </span>
            <a href="mailto:enochlebabo@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={16} />
              enochlebabo@gmail.com
            </a>
            <a href="tel:+916359289443" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone size={16} />
              +916359289443
            </a>
            <a href="https://in.linkedin.com/in/enoch-lebabo-04b651266" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://github.com/enochlebabo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Github size={16} />
              GitHub
            </a>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href="/Seabata_Enoch_Lebabo_CV.html"
              download="Seabata_Enoch_Lebabo_CV.html"
              className="btn-outline flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
