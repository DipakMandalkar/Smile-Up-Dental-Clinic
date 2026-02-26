import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How often should I visit the dentist?", a: "We recommend visiting every 6 months for a check-up and professional cleaning to maintain optimal oral health." },
  { q: "Is dental treatment painful?", a: "Modern dentistry is virtually painless. We use advanced anesthesia and gentle techniques to ensure your comfort throughout every procedure." },
  { q: "Do you accept dental insurance?", a: "Yes, we accept most major dental insurance plans. Please contact our front desk for details about your specific plan." },
  { q: "What should I do in a dental emergency?", a: "Call us immediately at +91 98765 43210. We provide emergency dental services and will accommodate you as quickly as possible." },
  { q: "How can I prevent cavities?", a: "Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods, and visit your dentist regularly for check-ups and cleanings." },
  { q: "Are dental X-rays safe?", a: "Yes, dental X-rays use very low radiation levels and are completely safe. We use digital X-rays which reduce radiation exposure by up to 80%." },
  { q: "What is the best age for a child's first dental visit?", a: "We recommend bringing your child for their first visit by age 1, or within 6 months of the first tooth appearing." },
  { q: "How long does teeth whitening last?", a: "Professional teeth whitening results typically last 6–12 months, depending on your diet and oral hygiene habits." },
];

const FAQPage = () => (
  <Layout>
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Common questions about dental care and our clinic</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default FAQPage;
