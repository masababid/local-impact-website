import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import { Section, SectionHeader, AnimatedCard } from "@/components/SectionComponents";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { src: gallery1, alt: "Food distribution drive", caption: "Community Food Drive" },
  { src: gallery2, alt: "Rehabilitation session", caption: "Rehabilitation Services" },
  { src: gallery3, alt: "Children education program", caption: "Education Programs" },
  { src: gallery4, alt: "Health camp", caption: "Health Camp Initiative" },
  { src: gallery5, alt: "Women empowerment workshop", caption: "Women Empowerment" },
  { src: gallery6, alt: "Elder care program", caption: "Elder Care Services" },
];

const testimonials = [
  {
    name: "Saima Bibi",
    role: "Program Beneficiary",
    text: "The vocational training program changed my life. I now run my own tailoring business and support my family with dignity.",
  },
  {
    name: "Tariq Mehmood",
    role: "Parent of a PWD Child",
    text: "Thanks to the disability support program, my son received the therapy and education he deserved. We are forever grateful.",
  },
  {
    name: "Dr. Nadia Hussain",
    role: "Partner Organization",
    text: "Working with the Social Welfare Department has been incredibly rewarding. Their commitment to the community is unmatched.",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

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
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">Gallery & Testimonials</h1>
            <p className="text-lg text-primary-foreground/80">
              See the impact of our work and hear from the people whose lives we've touched.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section>
        <SectionHeader badge="Our Impact" title="Photo Gallery" description="Moments captured from our programs and initiatives across the community." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <AnimatedCard key={i} delay={i * 0.08}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-4 text-sm font-semibold text-primary-foreground">{item.caption}</p>
                </div>
              </button>
            </AnimatedCard>
          ))}
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute right-4 top-4 rounded-full bg-card p-2 text-foreground" onClick={() => setLightbox(null)}>
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="max-h-[80vh] max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <Section alt>
        <SectionHeader badge="Voices of Impact" title="What People Say" description="Hear from the individuals and partners who have experienced our programs firsthand." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedCard key={t.name} delay={i * 0.1} className="rounded-2xl bg-card p-8 shadow-card">
              <Quote className="mb-4 h-8 w-8 text-secondary/50" />
              <p className="mb-6 leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Gallery;
