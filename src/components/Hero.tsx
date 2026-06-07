import { Github, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import headshot from '@/assets/headshot.jpg';
export const Hero = () => {
  return <section className="min-h-screen flex items-center bg-background pt-16 sm:pt-20 pb-8 sm:pb-12 border-double shadow-xl">
      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Headshot Photo */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="flex-shrink-0">
            <div className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <img alt="Seabata Enoch Lebabo - Professional Headshot" className="w-full h-full object-cover" src="/lovable-uploads/b387e2cd-c3e4-4aa6-8e19-caa56666d4b3.jpg" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="flex-1 text-center lg:text-left">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-2 sm:mb-4 leading-tight">
              SEABATA ENOCH LEBABO
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
              Portfolio | Welcome 
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
              <span className="flex items-center gap-1 sm:gap-1.5">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Anand, INDIA 388120</span>
                <span className="sm:hidden">Anand, India</span>
              </span>
              <a href="mailto:enochlebabo@gmail.com" className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden md:inline">enochlebabo@gmail.com</span>
                <span className="md:hidden">Email</span>
              </a>
              <a href="tel:+916359289443" className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">+91 6359289443</span>
                <span className="sm:hidden">IN</span>
              </a>
              <a href="tel:+26659195359" className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">+266 59195359</span>
                <span className="sm:hidden">LS</span>
              </a>
              <a href="https://www.linkedin.com/in/enochlebabo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/enochlebabo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-1.5 hover:text-primary transition-colors">
                <Github size={14} className="sm:w-4 sm:h-4" />
                GitHub
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3">
              <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
                View Projects
              </a>
              <a href="/Enoch_Lebabo_Resume_2026.pdf" download="Enoch_Lebabo_Resume_2026.pdf" className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a href="/Enoch_Lebabo_Academic_CV_2026.pdf" download="Enoch_Lebabo_Academic_CV_2026.pdf" className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a href="#contact" className="btn-outline w-full sm:w-auto text-center">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
