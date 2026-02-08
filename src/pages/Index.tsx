import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, Stethoscope, HandHeart, ArrowRight, Target, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/SectionComponents";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "50,000+", label: "Lives Impacted" },
  { value: "120+", label: "Programs Running" },
  { value: "35+", label: "Years of Service" },
  { value: "200+", label: "Dedicated Staff" },
];

const services = [
  { icon: HandHeart, title: "Disability Support", desc: "Comprehensive rehabilitation and empowerment programs for persons with disabilities." },
  { icon: GraduationCap, title: "Education Programs", desc: "Free education and vocational training for underprivileged communities." },
  { icon: Stethoscope, title: "Health Camps", desc: "Regular medical camps providing free healthcare in remote and underserved areas." },
  { icon: Users, title: "Women Empowerment", desc: "Skill development workshops and livelihood programs for women." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Community members joining hands" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="container relative mx-auto px-4 py-28 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
              Building Inclusive Communities
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl text-balance">
              Empowering Lives, Strengthening Communities
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85">
              The Social Welfare Department is dedicated to creating an equitable society where every individual has access to opportunities, support, and dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="hero-gradient -mt-1">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-extrabold text-primary-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedCard className="rounded-2xl bg-primary/5 p-8 md:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="leading-relaxed text-muted-foreground">
              To ensure that all marginalized communities, including persons with disabilities, have equal access to opportunities and are an integral part of society.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={0.15} className="rounded-2xl bg-secondary/10 p-8 md:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="leading-relaxed text-muted-foreground">
              To provide sustainable social protection, rehabilitation, and empowerment programs that uplift communities and promote dignity for every individual.
            </p>
          </AnimatedCard>
        </div>
      </Section>

      {/* Services Preview */}
      <Section alt>
        <SectionHeader
          badge="What We Do"
          title="Our Core Services"
          description="We deliver comprehensive programs that address the critical needs of our communities."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <AnimatedCard
              key={service.title}
              delay={i * 0.1}
              className="group rounded-2xl bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </AnimatedCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="warm-gradient">
        <div className="container mx-auto px-4 py-16 text-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="mx-auto mb-4 h-10 w-10 text-secondary-foreground/80" />
            <h2 className="mb-4 text-3xl font-bold text-secondary-foreground md:text-4xl">
              Together, We Can Make a Difference
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-secondary-foreground/85">
              Join hands with us to create a more inclusive and equitable society. Every contribution makes a lasting impact.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-card px-8 py-3.5 font-semibold text-foreground transition-transform hover:scale-105"
            >
              Get Involved Today <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
