import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="container py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Photo placeholder */}
        <div className="mx-auto w-full max-w-sm">
          <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border">
            <span className="text-muted-foreground text-sm">Doctor Photo</span>
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-primary mb-2 block">About the Doctor</span>
          <h1 className="text-4xl font-bold text-foreground mb-4">Dr. Ratnika Agarwal</h1>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Dr. Ratnika's Smile Up Dental Clinic is dedicated to providing modern dental care with a gentle and patient-first approach. We focus on comfort, hygiene, and delivering long-lasting results using advanced technology.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: GraduationCap, label: "BDS, MDS (Orthodontics)" },
              { icon: Award, label: "15+ Years Experience" },
              { icon: BookOpen, label: "Member, Indian Dental Association" },
              { icon: Heart, label: "5000+ Happy Patients" },
            ].map((item, i) => (
              <Card key={i} className="border-border/60">
                <CardContent className="p-4 flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-secondary rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-2">Our Mission</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To make quality dental care accessible, comfortable, and affordable for every family in Pune. 
              We believe everyone deserves a confident smile.
            </p>
          </div>

          <Button asChild size="lg">
            <Link to="/appointment">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;