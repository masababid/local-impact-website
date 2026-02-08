import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Section, AnimatedCard } from "@/components/SectionComponents";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "123 Welfare Road, City Center, District HQ" },
  { icon: Phone, label: "Phone", value: "+92-XXX-XXXXXXX" },
  { icon: Mail, label: "Email", value: "info@socialwelfare.org" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 5:00 PM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80">
              We'd love to hear from you. Reach out to us for support, inquiries, or to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <AnimatedCard key={item.label} delay={i * 0.1} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Form */}
          <AnimatedCard delay={0.2} className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send a Message</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3 py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                      <input
                        required
                        type="email"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </AnimatedCard>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
