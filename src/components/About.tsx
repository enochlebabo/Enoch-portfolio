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
            Bachelor of Technology (Information Technology) graduate with strong foundations in Software Engineering, Cloud Computing, Enterprise Infrastructure, Networking, Information Security, Data Analytics and Artificial Intelligence. Published researcher with practical industry experience in Flutter, Django, Firebase and scalable cloud-based systems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mt-4">
            Demonstrated ability to develop real-time applications, collaborate in agile environments and solve complex technical challenges. Seeking to contribute technical expertise, innovation and leadership potential within a global technology organisation.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
