import { motion } from "framer-motion";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/SectionComponents";
import aboutImage from "@/assets/about-image.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We serve with empathy and genuine care for every individual." },
  { icon: Users, title: "Inclusion", desc: "Ensuring equal opportunities regardless of ability, gender, or background." },
  { icon: Award, title: "Integrity", desc: "Maintaining transparency and accountability in all our programs." },
  { icon: BookOpen, title: "Empowerment", desc: "Building capacity and skills for long-term self-sufficiency." },
];

const team = [
  { name: "Dr. Aisha Khan", role: "Director General", initials: "AK" },
  { name: "Muhammad Ali", role: "Program Director", initials: "MA" },
  { name: "Fatima Zahra", role: "Community Lead", initials: "FZ" },
  { name: "Ahmed Raza", role: "Operations Head", initials: "AR" },
];

const About = () => {
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
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">About Us</h1>
            <p className="text-lg text-primary-foreground/80">
              Learn about our journey, mission, and the dedicated team working to transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimatedCard>
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground">35+ Years of Dedicated Service</h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Established in 1990, the Social Welfare Department has been at the forefront of community development and social protection. What started as a small initiative to support persons with disabilities has grown into a comprehensive welfare organization.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Today, we operate over 120 programs across the region, impacting more than 50,000 lives annually through education, healthcare, rehabilitation, and empowerment initiatives.
            </p>
          </AnimatedCard>
          <AnimatedCard delay={0.2}>
            <img
              src={aboutImage}
              alt="Community welfare workers in action"
              className="w-full rounded-2xl shadow-elevated object-cover aspect-square"
            />
          </AnimatedCard>
        </div>
      </Section>

      {/* Values */}
      <Section alt>
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          description="Our core values guide every program and initiative we undertake."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <AnimatedCard
              key={v.title}
              delay={i * 0.1}
              className="rounded-2xl bg-card p-6 text-center shadow-card"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeader
          badge="Leadership"
          title="Our Team"
          description="Meet the dedicated professionals leading our mission."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <AnimatedCard
              key={member.name}
              delay={i * 0.1}
              className="rounded-2xl bg-card p-6 text-center shadow-card"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
