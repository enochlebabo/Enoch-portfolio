import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter Developer',
    company: 'Technoguide Infosoft Pvt. Ltd',
    location: 'Anand, India',
    period: '06/2025 - 07/2025',
    responsibilities: [
      'Developed and maintained Flutter mobile applications from concept to deployment',
      'Collaborated with UI/UX designers to translate wireframes into high-quality, responsive code',
      'Managed application state effectively using modern state management libraries',
      'Successfully integrated RESTful APIs to connect mobile applications with back-end services',
      'Contributed innovative ideas to improve application features and user experience',
    ],
  },
  {
    title: 'Django Developer Intern',
    company: 'Technoguide Infosoft Pvt. Ltd',
    location: 'Anand, India',
    period: '06/2024 - 07/2024',
    responsibilities: [
      'Assisted in the development and maintenance of Django-based web applications',
      'Participated in daily stand-ups and sprint planning sessions within an agile framework',
      'Identified and resolved performance issues to enhance application responsiveness',
      'Utilized Git for version control in a collaborative team environment',
      'Wrote and maintained technical documentation for newly developed features',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-container border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="space-y-8 mt-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-l-2 border-primary pl-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-medium mb-4">{exp.company} - {exp.location}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
