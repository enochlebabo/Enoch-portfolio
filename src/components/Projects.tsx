import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Sign Language Detection System',
    description: 'Developed a model to interpret sign language gestures in real-time. Utilized TensorFlow/Keras for model training on a custom dataset of gestures, achieving high accuracy.',
    tech: ['TensorFlow', 'Keras', 'Python', 'Computer Vision'],
  },
  {
    title: 'Retinal Diagnosis using Deep Learning',
    description: 'Created deep learning models for automated disease detection from retinal scans. The system was designed to aid in the early diagnosis of common retinal conditions.',
    tech: ['Deep Learning', 'Python', 'Medical Imaging', 'CNN'],
  },
  {
    title: 'Flutter Applications',
    subtitle: 'Todo, Weather & Livestock Management',
    description: 'Built a feature-rich Todo App with persistent local storage and a Weather App that integrates with a live third-party API for up-to-date weather data based on geolocation.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Full-Stack E-Commerce System',
    subtitle: 'Python/Django Frameworks',
    description: 'Engineered a complete, functional E-Commerce platform with user authentication, product catalog, shopping cart, and a mock payment gateway integration.',
    tech: ['Django', 'Python', 'PostgreSQL', 'REST API'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-container border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Key Academic & Personal Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-professional"
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
              {project.subtitle && (
                <p className="text-sm text-primary mb-2">{project.subtitle}</p>
              )}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
