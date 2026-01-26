import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Dart', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 88 },
      { name: 'Rust', level: 40, note: 'Learning' },
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      { name: 'Django & DRF', level: 92 },
      { name: 'REST API Design', level: 90 },
      { name: 'Authentication Systems', level: 88 },
      { name: 'Payment Integration', level: 75 },
    ],
  },
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'Flutter', level: 88 },
      { name: 'React', level: 82 },
      { name: 'UI/UX Design', level: 78 },
    ],
  },
  {
    title: 'Databases & Data',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'Big Data (Hadoop, Spark)', level: 75 },
      { name: 'ETL Pipelines', level: 72 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (S3, Glue, Athena)', level: 78 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Git', level: 90 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Deep Learning (CNNs)', level: 80 },
      { name: 'Computer Vision', level: 78 },
      { name: 'Model Training', level: 75 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-wide">EXPERTISE</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="skill-card"
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">
                        {skill.name}
                        {skill.note && (
                          <span className="ml-2 text-xs text-muted-foreground">
                            ({skill.note})
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
