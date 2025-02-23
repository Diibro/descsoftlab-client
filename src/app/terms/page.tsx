import ClientPage from "@/components/wrappers/ClientPage";
import React from "react";

export const metadata = {
  title: "Terms of Service | Desc Softlab Ltd",
  description:
    "Read the Terms of Service for Desc Softlab Ltd. By using our website and services, you agree to these terms. Review our policies for compliance.",
  keywords: [
    "Desc Softlab Terms of Service",
    "Terms and Conditions",
    "IT Service Agreement",
    "Legal Policies",
    "Software Development Terms",
  ].join(", "),
  openGraph: {
    title: "Terms of Service - Desc Softlab Ltd",
    description:
      "By using Desc Softlab Ltd services, you agree to our terms and conditions. Review our legal policies to understand your rights and obligations.",
    url: "https://descsoftlab.com/terms",
  },
};

const TermsPage = () => {
  return (
    <ClientPage>
     <div className="bg-gray-50 w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-main-blue-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-lg">Effective Date: February 23, 2025</p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-2xl font-semibold text-main-blue-800">1. Introduction</h2>
        <p className="mt-4 text-gray-700">
          Welcome to Desc Softlab Ltd. By accessing or using our website and services, you agree to 
          comply with these Terms of Service. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">2. Use of Services</h2>
        <p className="mt-4 text-gray-700">
          Our services are intended for lawful purposes only. You agree not to misuse our services, 
          violate intellectual property rights, or engage in fraudulent activities.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">3. Intellectual Property</h2>
        <p className="mt-4 text-gray-700">
          All content, trademarks, and intellectual property displayed on our website belong to 
          Desc Softlab Ltd and are protected under copyright law.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">4. Limitation of Liability</h2>
        <p className="mt-4 text-gray-700">
          We are not liable for any indirect, incidental, or consequential damages arising from the 
          use of our services.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">5. Changes to Terms</h2>
        <p className="mt-4 text-gray-700">
          We reserve the right to modify these terms at any time. Continued use of our services 
          after updates constitutes acceptance of the changes.
        </p>

        <h2 className="text-2xl font-semibold text-main-blue-800 mt-8">6. Contact Information</h2>
        <p className="mt-4 text-gray-700">
          If you have any questions regarding these Terms of Service, please contact us at{" "}
          <a href="mailto:support@descsoftlab.com" className="text-main-blue-600 font-semibold">
            support@descsoftlab.com
          </a>.
        </p>
      </div>
    </div>
    </ClientPage>
  );
};

export default TermsPage;
