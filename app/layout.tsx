import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Blue — Premium Web Design & Development",
  description: "Signal Blue is an independent web design and development studio in Skopje creating distinctive, high-performing digital experiences.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
  verification: {
  google: "vhz5xkFmYAs3Cmx8VJ3ZAojaDyqGIgpZRy_PF-rH6YM",
},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
