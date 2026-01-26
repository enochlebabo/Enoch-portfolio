import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="section-container border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed text-lg">
            A highly motivated and proficient Python and Flutter Developer with a strong foundation in mobile application development, API integration, and user experience design. Possesses hands-on experience in both mobile and web development through practical internships and complex academic projects.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mt-4">
            Committed to leveraging a robust technical skill set and a passion for innovation to build high-quality, user-centric software solutions. A collaborative team player with excellent problem-solving abilities and experience in agile development environments.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
