import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-primary font-medium mb-4 tracking-wide">GET IN TOUCH</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:contact@enochlebabo.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="skill-card flex items-center gap-4 hover:border-primary/50 cursor-pointer"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">contact@enochlebabo.com</p>
            </div>
          </motion.a>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="skill-card flex items-center gap-4"
          >
            <div className="p-3 bg-primary/10 rounded-xl">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-medium">Gujarat, India | Lesotho / South Africa</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="#"
            className="p-4 bg-card border-gradient rounded-xl hover:bg-secondary transition-colors"
          >
            <Github className="w-6 h-6 text-foreground" />
          </a>
          <a
            href="#"
            className="p-4 bg-card border-gradient rounded-xl hover:bg-secondary transition-colors"
          >
            <Linkedin className="w-6 h-6 text-foreground" />
          </a>
          <a
            href="mailto:contact@enochlebabo.com"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all glow-primary flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
