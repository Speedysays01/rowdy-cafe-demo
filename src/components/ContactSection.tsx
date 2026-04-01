import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GridGlow from "./GridGlow";
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/rowdy-logo.png";

const ContactSection = () => (
  <section id="contact" className="section-padding relative noise-bg section-dark-c grid-bg">
    <GridGlow />
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-12">
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">
            📍 Reach Out
          </span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-2">
            Get in <span className="brush-heading">Touch</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        <AnimatedSection direction="left">
          <div className="rowdy-card p-6 md:p-8 h-full">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-bold mb-3">Call Us</h3>
            <a href="tel:+919321344404" className="text-sm text-foreground/80 font-body block hover:text-primary transition-colors">
              +91 93213 44404
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="rowdy-card p-6 md:p-8 h-full">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-bold mb-3">Offices</h3>
            <p className="text-xs text-muted-foreground font-body leading-relaxed mb-3">
              <span className="text-primary font-display text-[10px] tracking-widest block mb-1">Factory</span>
              Plot No. A-144/6, Kopar Khairane Road, MIDC, Navi Mumbai 400710
            </p>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              <span className="text-primary font-display text-[10px] tracking-widest block mb-1">North India</span>
              922-B, Hemkunt Chambers, 89 Nehru Place, New Delhi 110019
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="rowdy-card p-6 md:p-8 h-full">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display font-bold mb-3">Connect</h3>
            <a href="mailto:Info@rowdycafe.com" className="text-sm text-foreground/80 font-body block hover:text-primary transition-colors mb-2">
              Info@rowdycafe.com
            </a>
            <a href="https://www.rowdycafe.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 font-body block hover:text-primary transition-colors mb-4">
              www.rowdycafe.com
            </a>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.img
          src={logo}
          alt="Rowdy Cafe"
          className="h-10"
          whileHover={{ scale: 1.05 }}
        />
        <p className="text-xs text-muted-foreground font-display tracking-wider">
          © 2026 Rowdy Cafe Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
