import { motion } from 'framer-motion';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const publications = [
  {
    title:
      'Smart Automated Food Delivery Ecosystem: A Scalable Monorepo-Based Architecture with Augmented Reality and Firebase Integration',
    authors: 'Seabata Enoch Lebabo',
    venue: 'International Journal of Novel Research and Development (IJNRD)',
    volume: 'Volume 11, Issue 4',
    date: 'April 2026',
    url: 'https://ijnrd.org/viewpaperforall.php?paper=IJNRD2604481',
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="section-container border-t border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Publications</h2>

        <div className="mt-6 sm:mt-8 space-y-4">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-professional border-l-4 border-l-primary"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">{pub.authors}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
                    <span className="text-primary font-medium">{pub.venue}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{pub.volume}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{pub.date}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Published Paper
                    </a>
                    <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
                      <FileText className="w-3.5 h-3.5" />
                      Peer-reviewed
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
