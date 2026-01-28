import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const certifications = [
  'Fullstack Development (Udemy)',
  'Information Security Fundamentals (Udemy)',
  'Advanced Flutter Development (Udemy)',
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Sotho/Zulu', level: 'Native / First Language' },
  { name: 'Hindi', level: 'B1 (Intermediate)' },
  { name: 'Gujarati', level: 'B1 (Intermediate)' },
];

export const Education = () => {
  return (
    <section id="education" className="section-container border-t border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Education</h2>

        <div className="mt-6 sm:mt-8 mb-8 sm:mb-12">
          <div className="card-professional flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 sm:gap-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground">
                  Bachelor of Technology: Information Technology (2022-2026)
                </h3>
                <span className="text-xs sm:text-sm text-muted-foreground">Expected: 08/2026</span>
              </div>
              <p className="text-primary mt-1 text-sm sm:text-base">
                BVM ENGINEERING COLLEGE (Affiliated to GTU) - Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="card-professional"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-foreground text-sm sm:text-base">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card-professional"
          >
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Languages</h3>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-xs sm:text-sm">
                  <span className="font-medium text-foreground">{lang.name}:</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
