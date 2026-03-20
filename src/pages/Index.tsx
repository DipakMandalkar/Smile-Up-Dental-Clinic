import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, Shield, Heart, ArrowRight, Phone } from "lucide-react";

const services = [
  { title: "Dental Implants", slug: "dental-implants", icon: Heart, desc: "Permanent, natural-looking replacements for missing teeth." },
  { title: "Teeth Whitening", slug: "teeth-whitening", icon: Star, desc: "Professional whitening for a dazzling smile in just one session." },
  { title: "Root Canal Treatment", slug: "root-canal", icon: Shield, desc: "Painless root canal treatment with advanced technology." },
  { title: "Smile Makeover", slug: "smile-makeover", icon: Sparkles, desc: "Complete smile transformation with cosmetic dentistry." },
  { title: "Braces & Aligners", slug: "braces-aligners", icon: Sparkles, desc: "Straighten your teeth with modern braces or clear aligners." },
];

const testimonials = [
  { name: "Amit Sharma", text: "Had a great experience at Smile Up Dental Clinic. Dr. Ratnika explained everything clearly and the treatment was completely painless.", rating: 5 },
  { name: "Sneha Patil", text: "The clinic is very clean and well maintained. I got my teeth whitening done and the results are amazing.", rating: 5 },
  { name: "Rahul Verma", text: "I was very nervous about my root canal, but the doctor made me feel comfortable throughout.", rating: 5 },
  { name: "Priya Kulkarni", text: "Modern equipment and very hygienic environment. Highly recommend.", rating: 5 },
  { name: "Karan Mehta", text: "Very professional service and friendly staff. Appointment process was smooth.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary to-accent/5">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              🦷 Dr Ratnika's - Smile Up Dental Clinic, Kharadi, Pune
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6">
              Confident Smiles<br />
              <span className="text-primary">Start Here</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Advanced, gentle, and personalized dental care you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="tel:+918999751605"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About preview */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to Smile Up Dental Clinic</h2>
          <p className="text-muted-foreground leading-relaxed">
            Dr. Ratnika's Smile Up Dental Clinic is dedicated to providing modern dental care with a gentle and patient-first approach. We focus on comfort, hygiene, and delivering long-lasting results using advanced technology.
          </p>
          <Button asChild variant="link" className="mt-4">
            <Link to="/about">Meet Our Doctor <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Services</h2>
            <p className="text-muted-foreground">Comprehensive dental care for the whole family</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-lg hover:border-primary/30 group">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">What Our Patients Say</h2>
          <p className="text-muted-foreground">4.9/5 based on patient reviews</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/60">
              <CardContent className="p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">"{t.text}"</p>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <a
              href="https://www.google.com/maps/place/Dr.+Ratnika's+-+Smile+Up+Dental+Clinic+%26+Implant+Center/@18.5535,73.9445,17z/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Before & After</h2>
            <p className="text-muted-foreground">See the transformations we've achieved</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {["Teeth Whitening", "Dental Implants", "Braces"].map((label, i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-card border">
                <div className="grid grid-cols-2">
                  <div className="bg-muted h-48 flex items-center justify-center text-muted-foreground text-sm">Before</div>
                  <div className="bg-primary/10 h-48 flex items-center justify-center text-primary text-sm font-medium">After</div>
                </div>
                <div className="p-3 text-center text-sm font-medium text-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-3">Find Us</h2>
          <p className="text-muted-foreground">Shop No 109, Gera's Park View, Kharadi, Pune 411014</p>
        </div>
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <iframe
            title="Smile Up Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.9445!3d18.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3c3c3c3c3%3A0x0!2sDr.+Ratnika's+-+Smile+Up+Dental+Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Index;