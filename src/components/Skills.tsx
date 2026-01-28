import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Dart', 'Python', 'C#', 'C++', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Flutter', 'Django', 'OpenCV', 'TensorFlow'],
  },
  {
    title: 'Databases',
    skills: ['NoSQL (Firebase)', 'SQL (PostgreSQL, MySQL)'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Xcode', 'PyCharm'],
  },
  {
    title: 'Methodologies',
    skills: ['Agile', 'Project Management', 'UI/UX Design'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-container border-t border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Technical Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-professional"
            >
              <h3 className="font-semibold text-foreground mb-3 text-sm sm:text-base">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
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
