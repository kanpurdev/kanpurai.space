import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | KanpurAI.space",
    description: "Cookie Policy for KanpurAI.space - How we use cookies to improve your experience.",
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6 sm:px-12 lg:px-24 max-w-5xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-white neon-text">
                Cookie Policy
            </h1>
            <p className="text-zinc-400 mb-12 text-lg">
                Last updated: December 18, 2025
            </p>

            <div className="space-y-12 text-zinc-300 leading-relaxed font-sans">

                <section>
                    <p className="mb-4">
                        This Cookie Policy explains how KanpurAI.space (“KanpurAI”, “we”, “our”, “us”) uses cookies and similar technologies when you visit our website at <a href="https://kanpurai.space" className="text-emerald-400 hover:text-emerald-300 transition-colors">https://kanpurai.space</a>.
                    </p>
                </section>

                {/* What Are Cookies? */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                    <p className="mb-4">
                        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, improve user experience, and provide information to website owners.
                    </p>
                    <p>
                        Cookies do not typically contain personally identifiable information but may be linked to personal data that we store about you.
                    </p>
                </section>

                {/* How We Use Cookies */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                    <p className="mb-6">We use cookies for the following purposes:</p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                            <p>
                                These cookies are necessary for the website to function properly. They enable core features such as page navigation, security, and access to certain areas of the website. The website cannot function correctly without these cookies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Preference Cookies</h3>
                            <p>
                                These cookies allow our website to remember information that changes the way the website behaves or looks, such as your language preferences or region.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                            <p>
                                Analytics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve website performance, content, and user experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Marketing Cookies</h3>
                            <p>
                                Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users and thereby more valuable to publishers and third-party advertisers (if applicable).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Types of Cookies We Use */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">First-Party Cookies</h3>
                            <p>
                                First-party cookies are set directly by KanpurAI.space and are primarily used to enable core website functionality and improve user experience.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Third-Party Cookies</h3>
                            <p>
                                Third-party cookies are set by external services that appear on our website, such as analytics providers or embedded content platforms. These cookies are governed by the respective third party’s privacy policies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Managing Cookies */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                    <p className="mb-4">
                        You can control and manage cookies through your browser settings. Most web browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500 mb-6">
                        <li>View which cookies are stored</li>
                        <li>Delete cookies</li>
                        <li>Block cookies from specific websites</li>
                        <li>Block all cookies entirely</li>
                    </ul>
                    <p className="mb-4">
                        Please note that disabling cookies may affect the functionality and performance of our website.
                    </p>
                    <p className="mb-4">Below are links to manage cookie settings in popular browsers:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-emerald-500">
                        <li>
                            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Google Chrome</a>
                        </li>
                        <li>
                            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Mozilla Firefox</a>
                        </li>
                        <li>
                            <a href="https://support.microsoft.com/help/4027947" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Microsoft Edge</a>
                        </li>
                        <li>
                            <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">Apple Safari</a>
                        </li>
                    </ul>
                </section>

                {/* Changes to This Cookie Policy */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Changes to This Cookie Policy</h2>
                    <p className="mb-4">
                        We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our practices. Any changes will be posted on this page, and the “Last updated” date will be revised accordingly.
                    </p>
                    <p>We encourage you to review this policy periodically.</p>
                </section>

                {/* Contact Us */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns about this Cookie Policy, you may contact us at:</p>
                    <p className="mb-2">
                        <span className="text-zinc-400">Email:</span> <a href="mailto:hisamarth@zohomail.in" className="text-emerald-400 hover:text-emerald-300 transition-colors">hisamarth@zohomail.in</a>
                    </p>
                    <p className="mb-2">
                        <span className="text-zinc-400">Address:</span> <span className="text-zinc-200">Kanpur, Uttar Pradesh</span>
                    </p>
                    <p>
                        <span className="text-zinc-400">Website:</span> <a href="https://kanpurai.space" className="text-emerald-400 hover:text-emerald-300 transition-colors">https://kanpurai.space</a>
                    </p>
                </section>

            </div>
        </div>
    );
}
