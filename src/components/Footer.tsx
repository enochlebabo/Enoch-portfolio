export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold text-gradient">
            EL
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Mr. Enoch Lebabo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};
