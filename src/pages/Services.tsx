import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Shield, Heart, Star, ArrowRight } from "lucide-react";

const services = [
  { title: "Teeth Cleaning", slug: "teeth-cleaning", icon: Sparkles, desc: "Professional cleaning to remove plaque and tartar for a brighter smile.", price: "₹500 – ₹2,000" },
  { title: "Root Canal Treatment", slug: "root-canal", icon: Shield, desc: "Save your natural tooth with our painless root canal procedures.", price: "₹3,000 – ₹8,000" },
  { title: "Dental Implants", slug: "dental-implants", icon: Heart, desc: "Permanent, natural-looking replacements for missing teeth.", price: "₹20,000 – ₹50,000" },
  { title: "Braces & Aligners", slug: "braces-aligners", icon: Sparkles, desc: "Straighten your teeth with traditional braces or invisible aligners.", price: "₹25,000 – ₹1,50,000" },
  { title: "Teeth Whitening", slug: "teeth-whitening", icon: Star, desc: "Professional whitening for a dazzling smile in just one session.", price: "₹3,000 – ₹10,000" },
];

const ServicesPage = () => (
  <Layout>
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Dental Services</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprehensive dental care using the latest technology, delivered with a gentle touch.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`}>
            <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all group">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <p className="text-sm font-medium text-primary">{s.price}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary mt-3 group-hover:underline">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
