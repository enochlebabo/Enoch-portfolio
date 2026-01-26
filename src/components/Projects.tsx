import { motion } from 'framer-motion';
import { ExternalLink, Brain, Users, Radio, Smartphone, Database } from 'lucide-react';

const projects = [
  {
    title: 'Retinal-AI',
    subtitle: 'Integrated Platform for Automated Retinal Disease Diagnosis',
    description: 'A comprehensive AI-driven healthcare platform designed to assist clinicians in early detection and diagnosis of retinal diseases. Features AI model for classification, admin-controlled training, and real-time diagnostic scoring.',
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Deep Learning', 'React'],
    icon: Brain,
    role: 'Full-Stack Development Lead',
  },
  {
    title: 'Smart HR Management System',
    subtitle: 'Digital HR Platform',
    description: 'A digital HR platform designed to automate and optimize human resource operations including employee records, attendance tracking, and performance management.',
    tech: ['Django', 'PostgreSQL', 'REST APIs'],
    icon: Users,
    role: 'Full-Stack Developer',
  },
  {
    title: 'Live Broadcasting Platform',
    subtitle: 'Real-Time Audio & Video Streaming',
    description: 'A web-based live broadcasting system with privacy-first architecture, enabling real-time audio/video streaming with no data storage.',
    tech: ['Web Streaming Protocols', 'Backend APIs'],
    icon: Radio,
    role: 'Backend Developer',
  },
  {
    title: 'Flutter Mobile Applications',
    subtitle: 'Weather & Utility Apps',
    description: 'Cross-platform mobile applications including iOS-styled weather app with OpenWeather API integration, and food/utility apps with Firebase authentication and Google Maps.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'OpenWeather API'],
    icon: Smartphone,
    role: 'Mobile Developer',
  },
  {
    title: 'Big Data Projects',
    subtitle: 'Distributed Systems & Analytics',
    description: 'Implementation of Hadoop/HDFS architecture, Spark-based data analysis workflows, and OLAP-oriented analytics systems for large-scale data processing.',
    tech: ['Hadoop', 'HDFS', 'Apache Spark', 'OLAP'],
    icon: Database,
    role: 'Data Engineer',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-wide">PORTFOLIO</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Major <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`project-card group ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/80 text-sm mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
