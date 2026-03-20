import { useState } from "react";
import { format } from "date-fns";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Phone, MessageCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

const serviceOptions = [
  "Dental Implants",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Smile Makeover",
  "Braces & Aligners",
  "General Checkup",
  "Other",
];

const AppointmentPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-appointment-email", {
        body: {
          name,
          phone,
          email: email || undefined,
          service: service || undefined,
          date: date ? format(date, "PPP") : undefined,
          message: message || undefined,
        },
      });

      if (error) throw error;

      setSubmitted(true);
      toast({ title: "Appointment request submitted successfully", description: "We'll contact you shortly to confirm your appointment." });
    } catch (err) {
      console.error("Failed to send appointment:", err);
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-4">Book an Appointment</h1>
            <p className="text-muted-foreground">Schedule your visit — we'll confirm within 2 hours.</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 bg-secondary rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
              <p className="text-muted-foreground mb-4">Appointment request submitted successfully. We will contact you shortly.</p>
              <Button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setEmail(""); setService(""); setDate(undefined); setMessage(""); }} variant="outline">Book Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-xl border p-6 md:p-8 shadow-sm">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+91 89997 51605" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Any specific concerns or requests..." value={message} onChange={(e) => setMessage(e.target.value)} rows={3} />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</> : "Request Appointment"}
              </Button>
            </form>
          )}

          {/* Alternative booking */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="https://wa.me/918999751605?text=Hello%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border bg-card p-5 hover:border-primary/30 transition-colors"
            >
              <MessageCircle className="h-8 w-8 text-[hsl(142,70%,45%)]" />
              <div>
                <p className="font-semibold text-foreground text-sm">Book via WhatsApp</p>
                <p className="text-xs text-muted-foreground">Quick and easy booking</p>
              </div>
            </a>
            <a
              href="tel:+918999751605"
              className="flex items-center gap-3 rounded-xl border bg-card p-5 hover:border-primary/30 transition-colors"
            >
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground text-sm">Emergency Contact</p>
                <p className="text-xs text-muted-foreground">+91 89997 51605</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPage;