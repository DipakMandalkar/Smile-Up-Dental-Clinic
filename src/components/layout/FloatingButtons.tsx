import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/918999751605?text=Hello%20I%20want%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    <a
      href="tel:+918999751605"
      aria-label="Call us"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
    >
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingButtons;