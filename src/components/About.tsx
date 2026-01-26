import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Target, Sparkles } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Origin',
      description: 'Lesotho / South Africa',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech IT at BVM Engineering College, GTU India',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Scalable, impactful digital systems',
    },
    {
      icon: Sparkles,
      title: 'Vision',
      description: 'Technology leader & entrepreneur',
    },
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-wide">ABOUT ME</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          Professional <span className="text-gradient">Background</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an Information Technology Engineer with a strong academic foundation and hands-on experience in modern software engineering, full-stack development, cloud-based systems, data engineering, and applied artificial intelligence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My professional journey is driven by a deep interest in building scalable, impactful, and intelligent digital systems that address real-world problems in sectors such as healthcare, finance, agriculture, public safety, and enterprise operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I combine technical depth with strategic thinking, aiming not only to build software, but to design products, platforms, and businesses that are sustainable and globally competitive.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="skill-card"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
