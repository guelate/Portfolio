import "./globals.css";
import type { Metadata } from "next";
import HeaderLayout from "./components/LayoutHeader";

export const metadata: Metadata = {
  title: "Killian Seyo",
  description: "portfolio website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
    <body>
      <HeaderLayout />
      <main>{children}</main>
    </body>
  </html>
  );
}
