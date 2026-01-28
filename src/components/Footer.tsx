export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-semibold text-foreground text-sm sm:text-base">
            Seabata Enoch Lebabo
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
