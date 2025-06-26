import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card relative border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm text-muted-foreground text-center md:text-left">
        &copy; {new Date().getFullYear()} Karan Kumar. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Scroll to top"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
