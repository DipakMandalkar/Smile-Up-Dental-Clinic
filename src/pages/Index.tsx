import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Sparkles, Shield, Heart, ArrowRight } from "lucide-react";

const services = [
  { title: "Teeth Cleaning", slug: "teeth-cleaning", icon: Sparkles, desc: "Professional cleaning to keep your smile bright and healthy." },
  { title: "Root Canal", slug: "root-canal", icon: Shield, desc: "Painless root canal treatment with advanced technology." },
  { title: "Dental Implants", slug: "dental-implants", icon: Heart, desc: "Permanent tooth replacement that looks and feels natural." },
  { title: "Braces & Aligners", slug: "braces-aligners", icon: Sparkles, desc: "Straighten your teeth with modern braces and clear aligners." },
  { title: "Teeth Whitening", slug: "teeth-whitening", icon: Star, desc: "Get a dazzling white smile in just one visit." },
];

const testimonials = [
  { name: "Priya Sharma", text: "Excellent experience! Dr. [Name] is very gentle and the clinic is spotlessly clean. Highly recommended!", rating: 5 },
  { name: "Rahul Deshmukh", text: "Got my root canal done here — completely painless. The staff is warm and professional.", rating: 5 },
  { name: "Anita Kulkarni", text: "My kids love coming here. The doctor explains everything so well. Best dental clinic in Pune!", rating: 5 },
  { name: "Vikram Patil", text: "Amazing teeth whitening results. My smile has never looked better. Thank you SmileCare!", rating: 4 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary to-accent/5">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              🦷 Trusted Dental Care in Pune
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground mb-6">
              Advanced & Painless<br />
              <span className="text-primary">Dental Treatments</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              SmileCare Dental Clinic offers world-class dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base px-8">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About preview */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to SmileCare</h2>
          <p className="text-muted-foreground leading-relaxed">
            At SmileCare Dental Clinic, we combine cutting-edge technology with compassionate care.
            Our experienced team provides personalized treatments in a comfortable, hygienic environment.
            From routine check-ups to advanced procedures, we're here to give you a smile you'll love.
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
          <p className="text-muted-foreground">Real reviews from happy smiles</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="text-muted-foreground">Visit us at our conveniently located clinic in Pune</p>
        </div>
        <div className="rounded-xl overflow-hidden border shadow-sm">
          <iframe
            title="SmileCare Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
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
