import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const subjects = [
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Software Engineering and System Design',
  'Big Data Technologies',
  'Cloud Computing',
  'Artificial Intelligence and Machine Learning',
  'Web and Mobile Application Development',
];

export const Education = () => {
  return (
    <section id="education" className="section-container bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-wide">ACADEMICS</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Educational <span className="text-gradient">Background</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="skill-card"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-primary">Information Technology</p>
              </div>
            </div>
            
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                BVM Engineering College
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Gujarat, India
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Affiliated to Gujarat Technological University (GTU)
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="skill-card"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-1">
                  Core Focus Areas
                </h3>
                <p className="text-primary">Academic Curriculum</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <motion.span
                  key={subject}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="text-sm px-4 py-2 bg-secondary rounded-lg text-foreground"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
