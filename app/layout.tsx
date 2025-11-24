import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Code Value – Frontend Developer Assignment | Shashank Maurya",
  description:
    "A pixel-perfect implementation of the Code Value landing page based on the provided Figma design. Built with Next.js, React, and Tailwind CSS as part of the frontend assignment for Digital Prospects Consulting.",
  keywords: [
    "Next.js",
    "Frontend Developer",
    "React",
    "Tailwind CSS",
    "UI Development",
    "Figma to Code",
    "Responsive Design",
    "Frontend Assignment",
    "Digital Prospects Consulting",
    "Shashank Maurya",
  ],
  authors: [
    {
      name: "Shashank Maurya",
      url: "https://shashank-maurya-portfolio.vercel.app",
    },
  ],
  creator: "Shashank Maurya",
  publisher: "Digital Prospects Consulting – Assignment Submission",
  openGraph: {
    title: "Code Value – Frontend Developer Assignment | Shashank Maurya",
    description:
      "Pixel-perfect recreation of the Code Value UI from Figma using Next.js, React, and Tailwind CSS. Submitted for Digital Prospects Consulting.",
    url: "https://your-demo-link.com", // Replace with Vercel URL
    siteName: "Code Value UI – Frontend Assignment",
    images: [
      {
        url: "/og-image.png", // Add an OG image if you'd like
        width: 1200,
        height: 630,
        alt: "Code Value Frontend Assignment – UI Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
