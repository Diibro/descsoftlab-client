import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata optimized for SEO
export const metadata: Metadata = {
  title: "Desc Softlab Ltd | Leading Software Development & IT Solutions",
  description:
    "Desc Softlab Ltd provides top-tier Web Development, Mobile Apps, Desktop Apps, IT Consultation, Deployment Services, Graphic Design & Computer Maintenance.",
  keywords: [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "IT Consultation",
    "Graphic Design",
    "Cloud Deployment",
    "Computer Maintenance",
    "Desktop Applications",
    "IT Services",
    "Best Software Company",
  ].join(", "),
  robots: "index, follow", // Allows Google to crawl the site
  authors: [{ name: "Desc Softlab Ltd" }, {name: "Dushime Brother"}],
  openGraph: {
    title: "Desc Softlab Ltd | Top Software & IT Solutions",
    description:
      "Leading software company specializing in Web Development, Mobile Apps, IT Services, Deployment & More.",
    url: "https://descsoftlab.com",
    type: "website",
    images: [
      {
        url: "https://descsoftlab.com/images/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Desc Softlab Ltd - Leading IT Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#177587" />
        <meta name="msapplication-TileColor" content="#177587" />
        <meta name="google-site-verification" content="your-verification-code" /> 
        {/* Add your Google Search Console verification code */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Desc Softlab Ltd",
              url: "https://descsoftlab.com",
              logo: "https://descsoftlab.com/images/logo.png", 
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+250XXXXXXXXX",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/descsoftlab",
                "https://twitter.com/descsoftlab",
                "https://linkedin.com/company/descsoftlab",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Maintenance Notice */}
        <p className="w-full p-2 bg-gray-100 text-red-600 text-center font-bold text-sm">
          This Site is under maintenance. We apologize for any inconvenience!
        </p>
        
        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}
