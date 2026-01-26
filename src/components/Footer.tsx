export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-foreground">
            Seabata Enoch Lebabo
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
