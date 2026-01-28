import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { name, email, message },
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-divider" />
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle max-w-xl text-sm sm:text-base">
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-professional space-y-3 sm:space-y-4"
          >
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Send a Message</h3>
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border text-sm sm:text-base"
                maxLength={100}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border text-sm sm:text-base"
                maxLength={255}
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background border-border min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                maxLength={1000}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            <motion.a
              href="mailto:enochlebabo@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-professional flex items-center gap-3 sm:gap-4 hover:border-primary cursor-pointer"
            >
              <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium text-sm sm:text-base truncate">enochlebabo@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+916359289443"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-professional flex items-center gap-3 sm:gap-4 hover:border-primary cursor-pointer"
            >
              <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium text-sm sm:text-base">+91 6359289443</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-professional flex items-center gap-3 sm:gap-4"
            >
              <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium text-sm sm:text-base">Anand, Gujarat, India</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card-professional flex items-center justify-center sm:justify-start gap-4 sm:gap-6"
            >
              <a
                href="https://github.com/enochlebabo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://in.linkedin.com/in/enoch-lebabo-04b651266"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
