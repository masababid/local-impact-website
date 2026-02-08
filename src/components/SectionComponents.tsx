import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export const Section = ({ children, className = "", alt = false }: SectionProps) => (
  <section className={`py-16 md:py-24 ${alt ? "section-alt" : ""} ${className}`}>
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mx-auto mb-12 max-w-2xl text-center"
  >
    {badge && (
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
        {badge}
      </span>
    )}
    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {description && (
      <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
    )}
  </motion.div>
);

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ children, className = "", delay = 0 }: AnimatedCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);
