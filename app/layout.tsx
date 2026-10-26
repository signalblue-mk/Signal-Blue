import type { Metadata } from "next";
import "./globals.css";

const title = "Signal Blue | Web Design & Development in Skopje";
const description =
  "Signal Blue is a digital studio in Skopje, North Macedonia, creating custom websites, social media designs and digital solutions for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://signalblue.mk"),

  title,
  description,

  alternates: {
    canonical: "https://signalblue.mk/",
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },

  openGraph: {
    type: "website",
    url: "https://signalblue.mk/",
    siteName: "Signal Blue",
    title,
    description,
  },

  twitter: {
    card: "summary",
    title,
    description,
  },

  verification: {
    google: "vhz5xkFmYAs3Cmx8VJ3ZAojaDyqGIgpZRy_PF-rH6YM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
