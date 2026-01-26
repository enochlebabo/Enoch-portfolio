import { motion } from 'framer-motion';
import { Rocket, Globe, Users, Lightbulb, Music, BookOpen, Cpu } from 'lucide-react';

const professionalSkills = [
  { icon: Lightbulb, name: 'Strategic Thinking & Product Vision' },
  { icon: Users, name: 'Leadership & Team Collaboration' },
  { icon: Globe, name: 'Communication & Stakeholder Interaction' },
  { icon: Rocket, name: 'Entrepreneurial Mindset' },
];

const interests = [
  { icon: Music, name: 'Music & Keyboard Performance' },
  { icon: BookOpen, name: 'Reading on Leadership & Strategy' },
  { icon: Cpu, name: 'Continuous Learning in Tech' },
];

export const Vision = () => {
  return (
    <section id="vision" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary font-medium mb-4 tracking-wide">ASPIRATIONS</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
          Vision & <span className="text-gradient">Goals</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="skill-card mb-8">
              <h3 className="font-display text-2xl font-bold mb-4 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-primary" />
                Career Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My professional objective is to grow into a <span className="text-foreground font-medium">technology leader and entrepreneur</span>, capable of designing large-scale systems, leading high-performance teams, and founding innovative technology companies.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I aim to bridge the gap between <span className="text-foreground font-medium">advanced engineering</span> and <span className="text-foreground font-medium">real-world impact</span>, particularly within African and global emerging markets.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-display text-lg font-semibold text-primary">
                Professional Competencies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {professionalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <skill.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="skill-card h-full">
              <h3 className="font-display text-2xl font-bold mb-6">
                Personal Interests
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-foreground">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-xl border border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "I possess a strong eye for detail, a structured engineering mindset, and a growing leadership orientation. My long-term vision is to evolve into a technology manager, product owner, and founder."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
