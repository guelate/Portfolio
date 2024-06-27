import "./globals.css";
import type { Metadata } from "next";
import HeaderLayout from "./components/HeaderLayout";

export const metadata: Metadata = {
  title: "portfolio",
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
    // <div>
    //   <HeaderLayout />
    //   <main>{children}</main>
    // </div>
  );
}
