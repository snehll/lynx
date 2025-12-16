// src/app/privacy-policy/page.tsx
export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <article className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-black">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: December 16, 2025
        </p>

        <div className="prose prose-lg dark:prose-invert space-y-8 text-muted-foreground">
          <p>
            This Privacy Policy describes how{" "}
            <strong>Lynx Global FZ-LLC</strong>, a company duly organized and
            existing under the laws of the United Arab Emirates, having its
            registered office in Ras Al Khaimah Free Zone (“Lynx Global”, “we,”
            “our,” or “us”), collects, uses, stores, and protects your personal
            information when you visit our website{" "}
            <strong>[WEBSITE NAME]</strong> (“Website”).
          </p>
          <p>
            By using our Website and submitting your personal information
            through it, you agree to this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect and process the following information:</p>
          <ul>
            <li>
              <strong>Personal information you provide directly:</strong> when
              you fill out a contact or callback form, including your name and
              phone number.
            </li>
            <li>
              <strong>Automatically collected information:</strong> such as your
              IP address, browser type, operating system, and the date and time
              of your visit. This information is collected through standard web
              analytics tools to improve our Website’s performance and security.
            </li>
          </ul>

          <h2>2. Purpose of Collecting Personal Information</h2>
          <p>
            We collect your personal information for the following purposes:
          </p>
          <ul>
            <li>
              To contact you in response to your inquiry or request submitted
              through the Website;
            </li>
            <li>To provide you with information about our services;</li>
            <li>To improve our Website and communication methods;</li>
            <li>
              To comply with legal and regulatory requirements under applicable
              UAE laws.
            </li>
          </ul>

          <h2>3. Legal Basis for Processing</h2>
          <p>
            We process your personal data on the basis of your consent, which
            you provide when you voluntarily submit your information through our
            Website forms.
          </p>

          <h2>4. How We Store and Protect Your Information</h2>
          <p>
            We take reasonable administrative and technical measures to protect
            your personal data against loss, unauthorized access, alteration, or
            disclosure.
          </p>
          <p>
            Your personal information is stored securely and is accessible only
            to authorized personnel of Lynx Global FZ-LLC for the purposes
            stated in this Policy.
          </p>

          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell, rent, or trade your personal data. We may share your
            information only:
          </p>
          <ul>
            <li>
              With our authorized employees or service providers who assist us
              in operating the Website or communicating with you;
            </li>
            <li>
              If required to do so by law, a court order, or a competent
              authority in the UAE.
            </li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We will retain your personal data only for as long as necessary to
            fulfill the purposes for which it was collected or as required by
            applicable law.
          </p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you;</li>
            <li>Request correction or deletion of your data;</li>
            <li>
              Withdraw your consent at any time (by contacting us at the email
              below).
            </li>
          </ul>
          <p>
            Please note that withdrawing consent may limit our ability to
            contact you or provide our services.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Our Website may use cookies to improve user experience and analyze
            web traffic. You can adjust your browser settings to disable
            cookies, but this may affect certain Website functions.
          </p>

          <h2>9. Links to Third-Party Sites</h2>
          <p>
            Our Website may contain links to social media or messenger platforms
            (such as WhatsApp, Telegram, LinkedIn, etc.). Please note that we
            are not responsible for the privacy practices or content of these
            external websites or applications.
          </p>

          <h2>10. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date of revision. We
            encourage you to review this page periodically.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            the handling of your personal information, please contact us at:
          </p>
          <p>
            <strong>Lynx Global FZ-LLC</strong>
            <br />
            Ras Al Khaimah Free Zone, United Arab Emirates
            <br />
            Email: hello@lynxglobal.ae
            <br />
            Website: [WEBSITE NAME]
          </p>
        </div>
      </div>
    </article>
  );
}
