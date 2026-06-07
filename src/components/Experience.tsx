import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Flutter Developer (Industry Project Collaboration)',
    company: 'Venom Technologies Pvt. Ltd.',
    location: 'Anand, India',
    period: '12/2025 - 05/2026',
    responsibilities: [
      'Developed a scalable, real-time food delivery ecosystem on a Flutter monorepo architecture',
      'Built synchronized User, Driver, Restaurant and Admin applications with Firebase backend services',
      'Integrated Firebase Authentication, Cloud Firestore and Firebase Cloud Messaging',
      'Implemented Google Maps APIs and live GPS tracking for orders and drivers',
      'Engineered real-time order synchronization and analytics dashboards for operational insights',
      'Contributed to architecture supporting 10,000+ concurrent users within an Agile process',
    ],
  },
  {
    title: 'Flutter Developer Intern',
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6 sm:mt-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-professional border-l-4 border-l-primary"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.title}</h3>
                <span className="text-xs sm:text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {exp.company} - {exp.location}
              </p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
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
