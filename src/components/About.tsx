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

        <div className="max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Highly motivated Software Engineer and Python/Flutter Developer with comprehensive expertise spanning the entire technological pipeline—from designing robust mobile and web applications to optimizing organizational IT infrastructure, networks, and databases.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mt-4">
            Backed by practical internships and complex academic projects, I possess a strong foundation in API integration and user-centric UI/UX design. A collaborative, innovative team player, I am committed to leveraging agile methodologies to build high-quality, impactful software solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
