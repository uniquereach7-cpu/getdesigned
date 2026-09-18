import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GetDesigned — Thoughtful Interiors, Hyderabad",
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
      <body>{children}</body>
    </html>
  );
}
