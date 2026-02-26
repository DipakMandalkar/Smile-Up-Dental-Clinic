import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface ServiceData {
  title: string;
  description: string;
  whoNeeds: string[];
  benefits: string[];
  price: string;
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "teeth-cleaning": {
    title: "Teeth Cleaning",
    description: "Professional teeth cleaning (scaling and polishing) removes plaque, tartar, and surface stains that regular brushing can't reach. Our ultrasonic scaling technology ensures a comfortable, thorough cleaning experience.",
    whoNeeds: ["Anyone with plaque or tartar buildup", "People with bleeding or swollen gums", "Smokers or heavy tea/coffee drinkers", "Anyone who hasn't had a cleaning in 6+ months"],
    benefits: ["Prevents gum disease and cavities", "Removes bad breath", "Brighter, cleaner-looking teeth", "Early detection of dental issues"],
    price: "₹500 – ₹2,000",
    faqs: [
      { q: "How often should I get my teeth cleaned?", a: "We recommend professional cleaning every 6 months for most patients." },
      { q: "Does teeth cleaning hurt?", a: "No, modern ultrasonic cleaning is gentle and virtually painless." },
      { q: "How long does the procedure take?", a: "A typical cleaning session takes 30–45 minutes." },
    ],
  },
  "root-canal": {
    title: "Root Canal Treatment",
    description: "Root canal treatment saves a severely infected or damaged tooth by removing the infected pulp, cleaning and disinfecting the canal, then sealing it. With modern anesthesia and rotary instruments, the procedure is virtually painless.",
    whoNeeds: ["Patients with severe toothache", "Teeth with deep cavities reaching the nerve", "Cracked or broken teeth with nerve exposure", "Teeth with prolonged sensitivity to hot/cold"],
    benefits: ["Saves your natural tooth", "Eliminates pain and infection", "Prevents spread of infection to other teeth", "Restores normal chewing function"],
    price: "₹3,000 – ₹8,000",
    faqs: [
      { q: "Is root canal treatment painful?", a: "With modern anesthesia, root canal is no more painful than getting a filling." },
      { q: "How many visits does it take?", a: "Most root canals are completed in 1–2 visits." },
      { q: "Do I need a crown after root canal?", a: "Yes, a crown is usually recommended to protect and strengthen the treated tooth." },
    ],
  },
  "dental-implants": {
    title: "Dental Implants",
    description: "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for permanent or removable replacement teeth that are made to match your natural teeth.",
    whoNeeds: ["Patients with one or more missing teeth", "Those with ill-fitting dentures", "People who want a permanent tooth replacement", "Patients with sufficient jawbone density"],
    benefits: ["Looks and feels like natural teeth", "Lasts a lifetime with proper care", "Preserves jawbone and facial structure", "No need to modify adjacent teeth"],
    price: "₹20,000 – ₹50,000 per implant",
    faqs: [
      { q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime." },
      { q: "Is the surgery painful?", a: "The procedure is done under local anesthesia and is generally well-tolerated." },
      { q: "How long is the recovery?", a: "Initial healing takes 1–2 weeks; full integration with bone takes 3–6 months." },
    ],
  },
  "braces-aligners": {
    title: "Braces & Aligners",
    description: "We offer both traditional metal/ceramic braces and modern clear aligners to straighten misaligned teeth, correct bite issues, and improve your smile. Our orthodontic treatments are customized for each patient's unique needs.",
    whoNeeds: ["Patients with crooked or crowded teeth", "Those with overbite, underbite, or crossbite", "Teens and adults wanting a straighter smile", "Patients with gaps between teeth"],
    benefits: ["Straighter, more confident smile", "Improved bite and chewing function", "Easier oral hygiene", "Clear aligners are virtually invisible"],
    price: "₹25,000 – ₹1,50,000",
    faqs: [
      { q: "How long do I need to wear braces?", a: "Treatment typically takes 12–24 months, depending on the complexity." },
      { q: "Are clear aligners as effective as braces?", a: "For most cases, yes. Your orthodontist will recommend the best option." },
      { q: "Is there an age limit for braces?", a: "No, both teens and adults can benefit from orthodontic treatment." },
    ],
  },
  "teeth-whitening": {
    title: "Teeth Whitening",
    description: "Our professional in-office teeth whitening uses advanced LED-activated gel to safely brighten your teeth by several shades in just one session. We also offer take-home whitening kits for gradual results.",
    whoNeeds: ["People with stained or discolored teeth", "Smokers or heavy tea/coffee drinkers", "Anyone preparing for a special occasion", "Patients wanting a brighter, more confident smile"],
    benefits: ["Noticeably whiter teeth in one visit", "Safe and supervised procedure", "Long-lasting results with proper care", "Boosts confidence and self-esteem"],
    price: "₹3,000 – ₹10,000",
    faqs: [
      { q: "How long does the whitening effect last?", a: "Results typically last 6–12 months with good oral hygiene." },
      { q: "Is teeth whitening safe?", a: "Yes, professional whitening under dental supervision is completely safe." },
      { q: "Will it make my teeth sensitive?", a: "Some patients experience mild, temporary sensitivity which resolves within a day or two." },
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <Layout>
      <section className="container py-16 md:py-24">
        <Link to="/services" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-8">
          <ArrowLeft className="h-4 w-4" /> All Services
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Who Needs This?</h2>
              <ul className="space-y-2">
                {service.whoNeeds.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Approximate Cost</h3>
              <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
              <p className="text-xs text-muted-foreground mb-4">*Final cost depends on individual case. Consultation is free.</p>
              <Button asChild className="w-full" size="lg">
                <Link to="/appointment">Book Now</Link>
              </Button>
            </div>

            <div className="rounded-xl border bg-secondary p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-3">Call us for a free consultation</p>
              <a href="tel:+919876543210" className="text-primary font-semibold">+91 98765 43210</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetailPage;
