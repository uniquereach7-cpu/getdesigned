import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "./site";

export const metadata: Metadata = {
  icons: { icon: "/assets/logo.png", apple: "/assets/logo.png" },
  title: {
    default: "GetDesigned — Thoughtful Interiors, Hyderabad",
    template: "%s — GetDesigned",
  },
  description:
    "Considered space planning, bespoke interiors, and execution in Hyderabad. GetDesigned creates spaces around the way you live, with a reason behind every detail.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
