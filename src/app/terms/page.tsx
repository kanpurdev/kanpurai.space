import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | KanpurAI.space",
  description:
    "Terms of Service for KanpurAI.space - Community Guidelines, Usage Policy, and Legal Information.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 font-sans text-white neon-text">
        Terms of Service
      </h1>
      <p className="text-zinc-400 mb-12 text-lg">Effective Date: 18-dec-2025</p>

      <div className="space-y-12 text-zinc-300 leading-relaxed font-sans">
        {/* Intro */}
        <section>
          <p className="mb-4">
            Welcome to KanpurAI.space (“KanpurAI”, “we”, “our”, “us”). <br />
            By accessing or using our website, community platforms, events, or
            services, you agree to comply with and be bound by these Terms of
            Service. If you do not agree, please do not use our services.
          </p>
        </section>

        {/* 1. About KanpurAI */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            1. About KanpurAI
          </h2>
          <p className="mb-4">
            KanpurAI.space is a community-driven initiative focused on
            Artificial Intelligence, Machine Learning, Generative AI,
            innovation, and student-led learning. We organize events, workshops,
            meetups, learning resources, and collaborative projects.
          </p>
          <p>
            KanpurAI is not a formal educational institution and does not
            guarantee jobs, certifications, or placements unless explicitly
            stated.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
          <p className="mb-4">To use KanpurAI services, you must:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Be at least 13 years old</li>
            <li>Provide accurate and truthful information when required</li>
            <li>
              Agree to follow all applicable laws and community guidelines
            </li>
          </ul>
          <p className="mt-4">
            If you are under 18, participation should be done with parental or
            guardian consent where applicable.
          </p>
        </section>

        {/* 3. Community Conduct */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            3. Community Conduct & Acceptable Use
          </h2>
          <p className="mb-4">By joining KanpurAI, you agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Engage in harassment, abuse, discrimination, or hate speech</li>
            <li>Share misleading, harmful, illegal, or plagiarized content</li>
            <li>Promote scams, spam, or unauthorized commercial activity</li>
            <li>Violate intellectual property rights</li>
            <li>Disrupt events, discussions, or community activities</li>
          </ul>
          <p className="mt-4">
            KanpurAI reserves the right to remove content, restrict access, or
            ban users who violate these rules without prior notice.
          </p>
        </section>

        {/* 4. Events */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Events, Workshops & Programs
          </h2>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>
              Event schedules, speakers, and formats may change without notice
            </li>
            <li>Participation in events may require prior registration</li>
            <li>Some events may be paid, while others are free</li>
            <li>
              Refunds (if applicable) will follow the event-specific policy
              shared at registration
            </li>
          </ul>
          <p className="mt-4">
            KanpurAI is not responsible for personal loss, injury, or damage
            during physical or virtual events.
          </p>
        </section>

        {/* 5. Intellectual Property */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            5. Intellectual Property
          </h2>
          <p className="mb-4">All content on KanpurAI.space, including:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Logos</li>
            <li>Branding</li>
            <li>Website content</li>
            <li>Event materials (unless stated otherwise)</li>
          </ul>
          <p className="mt-4 mb-4">
            is the intellectual property of KanpurAI or its contributors.
          </p>
          <p>
            You may not copy, reproduce, or distribute content without prior
            written permission, except for personal and non-commercial use with
            proper credit.
          </p>
        </section>

        {/* 6. User-Generated Content */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            6. User-Generated Content
          </h2>
          <p className="mb-4">
            If you submit content (posts, projects, feedback, media):
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>You retain ownership of your content</li>
            <li>
              You grant KanpurAI a non-exclusive, royalty-free right to use,
              display, and promote it for community and educational purposes
            </li>
            <li>
              You confirm that your content does not violate third-party rights
            </li>
          </ul>
        </section>

        {/* 7. Third-Party Links */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Third-Party Links & Services
          </h2>
          <p className="mb-4">
            KanpurAI may include links to third-party websites, tools, or
            platforms. We are not responsible for the content, policies, or
            practices of these external services.
          </p>
          <p>Use them at your own discretion.</p>
        </section>

        {/* 8. Privacy & Data Usage */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            8. Privacy & Data Usage
          </h2>
          <p className="mb-4">
            Your use of KanpurAI is also governed by our Privacy Policy. We
            respect your privacy and aim to collect only minimal, relevant data
            necessary for community operations and communication.
          </p>
          <p className="mb-4 font-bold text-emerald-400">
            We do not sell your personal information.
          </p>
        </section>

        {/* 9. Disclaimer */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            9. Disclaimer of Warranties
          </h2>
          <p className="mb-4">
            KanpurAI services are provided on an “as is” and “as available”
            basis.
          </p>
          <p className="mb-4">We do not guarantee:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Continuous availability</li>
            <li>Error-free content</li>
            <li>
              Specific outcomes (learning, career growth, or business success)
            </li>
          </ul>
          <p className="mt-4">
            Participation is voluntary and at your own risk.
          </p>
        </section>

        {/* 10. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            10. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the maximum extent permitted by law, KanpurAI shall not be liable
            for:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Indirect or consequential damages</li>
            <li>Loss of data, reputation, or opportunities</li>
            <li>Issues arising from third-party services or user actions</li>
          </ul>
        </section>

        {/* 11. Termination */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            11. Termination
          </h2>
          <p className="mb-4">KanpurAI reserves the right to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Suspend or terminate access without notice</li>
            <li>Remove users or content violating these Terms</li>
          </ul>
          <p className="mt-4">
            Users may stop using KanpurAI services at any time.
          </p>
        </section>

        {/* 12. Modifications */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            12. Modifications to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms of Service periodically. Any changes will
            be posted on this page with an updated effective date.
          </p>
          <p>
            Continued use of KanpurAI after changes implies acceptance of the
            revised terms.
          </p>
        </section>

        {/* 13. Governing Law */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            13. Governing Law
          </h2>
          <p>
            These Terms shall be governed and interpreted in accordance with the
            laws of India, without regard to conflict of law principles.
          </p>
        </section>

        {/* 14. Contact Information */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            14. Contact Information
          </h2>
          <p className="mb-4">
            For questions or concerns regarding these Terms, contact us at:
          </p>
          <p className="mb-2">
            <span className="text-zinc-400">Email:</span>{" "}
            <a
              href="mailto:hisamarth@zohomail.in"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              hisamarth@zohomail.in
            </a>
          </p>
          <p>
            <span className="text-zinc-400">Website:</span>{" "}
            <a
              href="https://kanpurai.space"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              https://kanpurai.space
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
