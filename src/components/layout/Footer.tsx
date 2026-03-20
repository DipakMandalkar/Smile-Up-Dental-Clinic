import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dr Ratnika's - Smile Up Dental Clinic
          </h3>
          <p className="text-sm opacity-80 mb-3">डॉ रत्निका's - स्माइल अप डेंटल क्लिनिक</p>
          <p className="text-sm opacity-80 leading-relaxed">
            Advanced & Painless Dental Treatments. Trusted by families in Kharadi, Pune.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="opacity-70 hover:opacity-100"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="opacity-70 hover:opacity-100"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="opacity-70 hover:opacity-100"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "About Doctor", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Book Appointment", to: "/appointment" },
              { label: "FAQ", to: "/faq" },
              { label: "Privacy Policy", to: "/privacy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="opacity-80 hover:opacity-100 transition-opacity">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Shop No 109, Upper Ground Floor, Gera's Park View, near Eon Free Zone Road, Kharadi, Pune 411014</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 89997 51605</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@smileupdental.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">Clinic Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Mon – Sat: 8:00 AM – 5:00 PM</li>
            <li className="pl-6">Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-background/20 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Dr Ratnika's - Smile Up Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;