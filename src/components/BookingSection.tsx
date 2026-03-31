import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { User, Phone, MapPin, IndianRupee, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const BookingSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", investment: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) { toast.error("Please enter a valid name."); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) { toast.error("Please enter a valid 10-digit phone number."); return; }
    if (form.city.trim().length < 2) { toast.error("Please enter your city."); return; }
    toast.success("Meeting request submitted! We'll contact you within 24 hours. 🔥");
    setForm({ name: "", phone: "", city: "", investment: "", message: "" });
  };

  return (
    <section id="booking" className="section-padding relative noise-bg section-dark-b overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">
              🚀 Get Started
            </span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-3">
              Start Your{" "}
              <span className="brush-heading">Rowdy Cafe</span> Journey
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg">
              Fill the form and our franchise team will reach out.{" "}
              <span className="text-primary font-bold">NO OBLIGATIONS</span>.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="rowdy-card p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
              {[
                { icon: User, name: "name", placeholder: "Full Name", type: "text", maxLength: 100 },
                { icon: Phone, name: "phone", placeholder: "Phone Number", type: "tel", maxLength: 10 },
                { icon: MapPin, name: "city", placeholder: "Your City", type: "text", maxLength: 100 },
              ].map((field) => (
                <div key={field.name} className="relative group">
                  <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    maxLength={field.maxLength}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl py-3 sm:py-3.5 pl-11 pr-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              ))}

              <div className="relative group">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <select
                  required
                  value={form.investment}
                  onChange={(e) => setForm({ ...form, investment: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl py-3 sm:py-3.5 pl-11 pr-4 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-all appearance-none"
                >
                  <option value="" disabled>Investment Budget</option>
                  <option value="8L">₹7–8 Lakh</option>
                  <option value="9L">₹8–9 Lakh</option>
                  <option value="9L+">₹9 Lakh+</option>
                </select>
              </div>
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <textarea
                placeholder="Your Message (optional)"
                maxLength={500}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-xl py-3 sm:py-3.5 pl-11 pr-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none h-20 sm:h-24"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="chunky" className="w-full" type="submit">
                🔥 Book a Franchise Meeting
              </Button>
            </motion.div>

            <p className="text-xs text-muted-foreground text-center font-body">
              Our team will contact you within 24 hours. No spam, ever.
            </p>
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
