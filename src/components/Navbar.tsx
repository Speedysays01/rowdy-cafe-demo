import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rowdy-logo.png";

const navLinks = [
  { label: "Why Us", href: "#why" },
  { label: "Menu", href: "/menu", isRoute: true },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Rowdy Cafe" className="h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-display font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-display font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            )
          )}
          <Button variant="hero" size="sm" asChild>
            <a href="#booking">🔥 Book Meeting</a>
          </Button>
        </div>
        <button className="md:hidden text-primary" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] border-r border-border z-[999] md:hidden flex flex-col bg-background"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <img src={logo} alt="Rowdy Cafe" className="h-10 w-auto" />
                <button className="text-primary" onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col p-6 gap-6 flex-1">
                {navLinks.map((l) =>
                  l.isRoute ? (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="text-foreground/70 hover:text-primary transition-colors font-display font-medium tracking-wide text-lg"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-foreground/70 hover:text-primary transition-colors font-display font-medium tracking-wide text-lg"
                    >
                      {l.label}
                    </a>
                  )
                )}
              </div>
              <div className="p-6 border-t border-border">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href="#booking" onClick={() => setOpen(false)}>🔥 Book Meeting</a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
