import type { Metadata } from "next";
import "./globals.css";
import { serif, sans } from "@/lib/fonts";
import { baseMetadata } from "@/lib/seo";
import { Toaster } from "sonner";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}