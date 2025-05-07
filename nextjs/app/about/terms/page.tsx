export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground text-lg">
          Last updated: May 7, 2024
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {/* Introduction */}
        <section className="mb-8">
          <p>
            Welcome to Lyrics Pinyin. By accessing our website, you agree to
            these terms of service. Please read them carefully before using our
            services.
          </p>
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-8">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Lyrics Pinyin, you accept and agree to be
            bound by these Terms of Service. If you do not agree to these terms,
            please do not use our service.
          </p>
        </section>

        {/* Service Description */}
        <section className="mb-8">
          <h2>2. Service Description</h2>
          <p>
            Lyrics Pinyin provides Chinese song lyrics with pinyin
            transliteration. Our service includes:
          </p>
          <ul>
            <li>Online viewing of lyrics with pinyin</li>
            <li>Downloadable PDF format lyrics</li>
            <li>Printable lyric sheets</li>
            <li>Search and browsing functionality</li>
          </ul>
        </section>

        {/* User Obligations */}
        <section className="mb-8">
          <h2>3. User Obligations</h2>
          <p>Users agree to:</p>
          <ul>
            <li>Use the service for personal, non-commercial purposes</li>
            <li>Not redistribute or sell any content from the website</li>
            <li>Not attempt to circumvent any access restrictions</li>
            <li>Not engage in any activity that could harm the service</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mb-8">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on Lyrics Pinyin, including but not limited to lyrics
            translations, pinyin transcriptions, and website design, is
            protected by copyright laws. Users may not copy, modify, or
            distribute this content without explicit permission.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <h2>5. Disclaimer</h2>
          <p>
            Lyrics Pinyin provides its service "as is" without any warranties.
            We do not guarantee the accuracy of lyrics or translations. We are
            not responsible for any errors or omissions in the content.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <h2>6. Limitation of Liability</h2>
          <p>
            Lyrics Pinyin and its operators shall not be liable for any
            indirect, incidental, or consequential damages arising from your use
            of the service.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-8">
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to the website. Continued use
            of the service constitutes acceptance of modified terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2>8. Contact Information</h2>
          <p>
            For questions about these terms, please contact us at:{" "}
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
