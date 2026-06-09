import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | KanpurAI.space",
  description:
    "Privacy Policy for KanpurAI.space - How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 font-sans text-white neon-text">
        Privacy Policy
      </h1>
      <p className="text-zinc-400 mb-12 text-lg">
        Last updated: October 5, 2024
      </p>

      <div className="space-y-12 text-zinc-300 leading-relaxed font-sans">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            1. Introduction
          </h2>
          <p className="mb-4">
            At KanpurAI.space (“KanpurAI”, “we”, “our”, or “us”), we respect
            your privacy and are committed to protecting it. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you access our website, participate in our
            community, attend events, or use our related services.
          </p>
          <p>
            By using KanpurAI.space, you agree to the practices described in
            this Privacy Policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if voluntarily provided)</li>
                <li>College, organization, or affiliation (optional)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Usage & Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Pages visited and interactions on the website</li>
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Date and time of visits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Community & Event Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                <li>Event registrations and participation details</li>
                <li>Feedback, forms, or communications submitted by you</li>
              </ul>
            </div>

            <p className="mt-4">
              KanpurAI does not intentionally collect sensitive personal data
              unless explicitly required and consented to.
            </p>
          </div>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>
              Provide and maintain KanpurAI services and community platforms
            </li>
            <li>Organize events, workshops, meetups, and programs</li>
            <li>
              Communicate important updates, announcements, and support messages
            </li>
            <li>Improve website performance and user experience</li>
            <li>Monitor usage trends and community engagement</li>
            <li>Ensure security and prevent misuse or abuse</li>
          </ul>
          <p className="mt-4 font-bold text-emerald-400">
            We do not sell your personal information.
          </p>
        </section>

        {/* 4. Information Sharing */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            4. Information Sharing
          </h2>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information. We may
            share information only in the following situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations or lawful requests</li>
            <li>
              To protect the rights, safety, and integrity of KanpurAI and its
              community
            </li>
            <li>
              With trusted service providers (analytics, email tools) strictly
              for operational purposes
            </li>
          </ul>
          <p className="mt-4">
            All third parties are required to handle your data responsibly.
          </p>
        </section>

        {/* 5. Data Security */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            5. Data Security
          </h2>
          <p className="mb-4">
            We use reasonable technical and organizational safeguards to protect
            your personal information from unauthorized access, misuse,
            alteration, or disclosure.
          </p>
          <p>
            However, no method of internet transmission or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* 6. Your Rights */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
          <p className="mb-4">
            Depending on applicable laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to certain data processing activities</li>
            <li>Request data portability</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, please contact us using the details below.
          </p>
        </section>

        {/* 7. Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            KanpurAI.space uses cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
            <li>Enable essential website functionality</li>
            <li>Analyze traffic and user interactions</li>
            <li>Improve performance and user experience</li>
          </ul>
          <p className="mt-4 mb-4">
            You can configure your browser to refuse cookies or notify you when
            cookies are sent. Disabling cookies may affect certain website
            features.
          </p>
          <p>
            For more details, please refer to our{" "}
            <Link
              href="/cookies"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </section>

        {/* 8. Children’s Privacy */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            8. Children’s Privacy
          </h2>
          <p className="mb-4">
            KanpurAI services are not intended for children under the age of 13.
            We do not knowingly collect personal information from children under
            13.
          </p>
          <p>
            If you believe a child has provided personal data, please contact us
            so we can remove it promptly.
          </p>
        </section>

        {/* 9. Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            9. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated “Last updated” date.
          </p>
          <p>
            Continued use of KanpurAI.space after updates constitutes acceptance
            of the revised policy.
          </p>
        </section>

        {/* 10. Data Ownership, Sharing & Atmanirbhar Approach */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            10. Data Ownership, Sharing & Atmanirbhar Approach
          </h2>
          <p className="mb-4">
            KanpurAI.space follows a strict data ownership and minimal-sharing
            policy.
          </p>
          <p className="mb-4">
            We do not share, sell, rent, or transfer any user data to third
            parties under any circumstances for marketing, commercial, or
            profiling purposes.
          </p>
          <p className="mb-4">
            All registration forms, event forms, and data collection mechanisms
            used by KanpurAI.space are self-developed and hosted on our own
            infrastructure or controlled services.
          </p>
          <p className="mb-4">
            We do not rely on third-party form builders or external data
            collection platforms for core registrations, in alignment with our
            belief in Atmanirbhar Bharat (self-reliant digital systems).
          </p>

          <h3 className="text-xl font-semibold text-white mb-2 mt-6">
            Exceptional Access Requests
          </h3>
          <p className="mb-4">
            In rare cases where data access or verification is legally or
            operationally required:
          </p>
          <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mb-4">
            <li>Requests must be sent from an official email address</li>
            <li>A genuine, documented reason must be provided</li>
            <li>
              Requests will be reviewed internally, and data will only be shared
              if legally mandated
            </li>
          </ul>
          <p>
            Users may also contact us from their registered email address for
            any clarification or concern regarding their data.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
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
