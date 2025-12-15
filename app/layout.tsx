import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Route Book - Sidebar Demo",
  description: "Route Book with shadcn/ui sidebar and ocean theme",
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
