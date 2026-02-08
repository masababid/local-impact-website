import { motion } from "framer-motion";
import { HandHeart, GraduationCap, Stethoscope, Users, Baby, Home, Briefcase, Scale } from "lucide-react";
import Layout from "@/components/Layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/SectionComponents";
import { Link } from "react-router-dom";

const services = [
  {
    icon: HandHeart,
    title: "Disability Rehabilitation",
    desc: "Comprehensive rehabilitation services including physiotherapy, assistive devices, and skill-building programs for persons with disabilities.",
    features: ["Physiotherapy & Occupational Therapy", "Assistive Devices", "Inclusive Employment Support"],
  },
  {
    icon: GraduationCap,
    title: "Education & Scholarships",
    desc: "Free quality education and scholarship programs for children from underprivileged communities.",
    features: ["Free Primary & Secondary Education", "Merit-Based Scholarships", "Vocational Training"],
  },
  {
    icon: Stethoscope,
    title: "Healthcare Programs",
    desc: "Regular medical camps and healthcare facilities providing free treatment and preventive care.",
    features: ["Free Medical Camps", "Maternal & Child Health", "Mental Health Support"],
  },
  {
    icon: Users,
    title: "Women Empowerment",
    desc: "Skill development workshops, micro-finance support, and livelihood programs for women.",
    features: ["Vocational Training", "Micro-Finance Loans", "Legal Aid & Awareness"],
  },
  {
    icon: Baby,
    title: "Child Protection",
    desc: "Programs ensuring the safety, education, and well-being of vulnerable and orphaned children.",
    features: ["Orphan Care", "Child Labor Prevention", "Nutrition Programs"],
  },
  {
    icon: Home,
    title: "Elder Care",
    desc: "Residential and community-based care services for senior citizens ensuring dignity in old age.",
    features: ["Old Age Homes", "Day Care Centers", "Pension Assistance"],
  },
  {
    icon: Briefcase,
    title: "Livelihood Support",
    desc: "Income-generating programs and employment assistance for marginalized communities.",
    features: ["Skills Training", "Job Placement", "Small Business Grants"],
  },
  {
    icon: Scale,
    title: "Legal Aid",
    desc: "Free legal advice and representation for vulnerable and marginalized community members.",
    features: ["Free Legal Consultations", "Court Representation", "Rights Awareness"],
  },
];

const Services = () => {
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
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">Our Services</h1>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive welfare programs designed to uplift and empower every section of society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedCard
              key={service.title}
              delay={i * 0.08}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-elevated"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {f}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section alt>
        <div className="rounded-2xl bg-primary p-10 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Need Assistance?</h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            If you or someone you know needs support from any of our services, don't hesitate to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-flex rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
