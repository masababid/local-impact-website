import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                <span className="text-lg font-bold">SW</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading">Social Welfare</h3>
                <p className="text-xs text-primary-foreground/70">Department</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Dedicated to empowering communities and building an inclusive society where every individual has access to opportunities and support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Our Services
            </h4>
            <nav className="flex flex-col gap-2">
              {["Disability Support", "Education Programs", "Health Camps", "Women Empowerment", "Elder Care"].map((item) => (
                <span key={item} className="text-sm text-primary-foreground/80">{item}</span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <span className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                123 Welfare Road, City Center
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                +92333-8404334
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                realmasababid@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© 2025 Social Welfare Department. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-secondary" /> for the community
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
