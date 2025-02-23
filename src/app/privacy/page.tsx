import ClientPage from "@/components/wrappers/ClientPage";
import React from "react";

export const metadata = {
  title: "Privacy Policy | Desc Softlab Ltd",
  description:
    "Read the Privacy Policy of Desc Softlab Ltd. Learn how we collect, use, and protect your personal data in compliance with global data protection laws.",
  keywords: [
    "Desc Softlab Privacy Policy",
    "Data Protection",
    "GDPR Compliance",
    "Personal Data Security",
    "User Privacy",
  ].join(", "),
  openGraph: {
    title: "Privacy Policy - Desc Softlab Ltd",
    description:
      "Desc Softlab Ltd values your privacy. Read our Privacy Policy to understand how we collect, store, and protect your personal information.",
    url: "https://descsoftlab.com/privacy",
  },
};

const PrivacyPage = () => {
  return (
    <ClientPage>
     <div className="bg-gray-50 w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-main-blue-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-lg">Effective Date: February 23, 2025</p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-2xl font-semibold text-main-blue-800">1. Introduction</h2>
        <p className="mt-4 text-gray-700">
          Desc Softlab Ltd respects your privacy. This policy explains how we collect, use, and 
          protect your personal data.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">2. Information We Collect</h2>
        <p className="mt-4 text-gray-700">
          We collect personal data such as name, email, and browsing behavior when you interact 
          with our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">3. How We Use Your Information</h2>
        <p className="mt-4 text-gray-700">
          Your information is used for service improvement, customer support, marketing, and legal compliance.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">4. Data Protection</h2>
        <p className="mt-4 text-gray-700">
          We implement security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">5. Third-Party Services</h2>
        <p className="mt-4 text-gray-700">
          We may share your data with third-party service providers for analytics and marketing purposes. 
          However, we do not sell your data.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">6. Your Rights</h2>
        <p className="mt-4 text-gray-700">
          You have the right to access, update, or delete your personal data. Contact us if you need assistance.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">7. Contact Information</h2>
        <p className="mt-4 text-gray-700">
          For privacy-related inquiries, email us at{" "}
          <a href="mailto:privacy@descsoftlab.com" className="text-main-blue-600 font-semibold">
            privacy@descsoftlab.com
          </a>.
        </p>
      </div>
    </div>
    </ClientPage>
  );
};

export default PrivacyPage;
