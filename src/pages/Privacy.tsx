import Layout from "@/components/layout/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl prose prose-sm">
        <h1 className="text-4xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-4">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Information We Collect</h2>
            <p>We collect personal information you provide when booking appointments, including your name, phone number, email address, and preferred appointment dates. We do not collect sensitive health information through this website.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. How We Use Your Information</h2>
            <p>Your information is used solely to schedule and confirm appointments, provide dental care services, send appointment reminders, and communicate important clinic updates.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal data against unauthorized access, alteration, or disclosure. Your data is stored securely and accessed only by authorized clinic staff.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Third-Party Services</h2>
            <p>This website uses Google Maps for location services. We do not share your personal data with any third parties for marketing purposes.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at info@smilecarepune.com or call +91 98765 43210.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Contact</h2>
            <p>For questions about this privacy policy, contact SmileCare Dental Clinic at 123, MG Road, Shivaji Nagar, Pune, Maharashtra 411005.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
