// src/pages/T&C.jsx
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-dark px-4 py-12 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-highlight mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 text-sm sm:text-base mb-4">
          By accessing and using Bitescape, you accept and agree to be bound by
          the terms and conditions of this agreement. If you do not agree to
          abide by the above, please do not use this service.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          1. Account Registration
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          To use certain features of our site, you must create an account. You
          agree to provide accurate and complete information and to keep this
          information up to date. You are responsible for maintaining the
          confidentiality of your account and password.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          2. Privacy
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We respect your privacy. Please refer to our Privacy Policy to
          understand how we collect, use, and disclose your information.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          3. User Conduct
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          You agree to use the platform for lawful purposes only. You are
          prohibited from posting or transmitting any unlawful, threatening,
          defamatory, or otherwise offensive material.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          4. Orders and Payments
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          All orders placed through Bitescape are subject to availability and
          acceptance. Prices and availability are subject to change without
          notice. Payment must be made at the time of ordering.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          5. Intellectual Property
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          All content on the site including logos, text, images, and software is
          the property of Bitescape or its content suppliers and is protected by
          copyright and other intellectual property laws.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          6. Termination
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We reserve the right to terminate or suspend your account and access
          to our services at any time, without prior notice, for conduct that we
          believe violates these Terms.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-6 mb-2">
          7. Modifications
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We reserve the right to revise these Terms & Conditions at any time.
          Any changes will be effective immediately upon posting to the site.
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/signup"
            className="text-highlight underline font-medium hover:text-primary"
          >
            Back to Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
