import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground">We'd love to hear from you. Reach out anytime!</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "123, MG Road, Shivaji Nagar, Pune, Maharashtra 411005" },
            { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
            { icon: Mail, label: "Email", value: "info@smilecarepune.com", href: "mailto:info@smilecarepune.com" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-primary hover:underline">{item.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">Working Hours</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Monday – Friday", "9:00 AM – 8:00 PM"],
                  ["Saturday", "9:00 AM – 6:00 PM"],
                  ["Sunday", "10:00 AM – 2:00 PM"],
                ].map(([day, hours], i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 text-foreground font-medium">{day}</td>
                    <td className="py-2 text-muted-foreground text-right">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border shadow-sm h-full min-h-[400px]">
          <iframe
            title="SmileCare Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
