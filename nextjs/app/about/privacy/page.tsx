export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground text-lg">
          Last updated: May 7, 2024
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {/* Introduction */}
        <section className="mb-8">
          <p>
            At Lyrics Pinyin, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our website.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>
            We collect minimal information to provide and improve our services:
          </p>
          <ul>
            <li>Usage Data: How you interact with our website</li>
            <li>Browser Data: Type of browser and device you use</li>
            <li>Cookies: To enhance your browsing experience</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Analyze usage patterns</li>
            <li>Detect and prevent technical issues</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2>Cookies</h2>
          <p>
            We use cookies to enhance your experience. You can control cookies
            through your browser settings. Disabling cookies may affect some
            features of our website.
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services that collect information to help us
            analyze and improve our service. These third parties have their own
            privacy policies.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2>Children's Privacy</h2>
          <p>
            Our service is not intended for users under the age of 13. We do not
            knowingly collect personal information from children.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="mb-8">
          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:meetqy@icloud.com"
              className="text-primary hover:underline"
            >
              meetqy@icloud.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
