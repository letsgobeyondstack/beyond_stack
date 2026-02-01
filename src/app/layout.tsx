import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beyond Stack",
  description: "Managed by Team Beyond Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-100 antialiased">
        {children}
        {/* Your exact config script */}
        <Script
          id="dify-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.difyChatbotConfig = {
        token: 'RU0ied75kckVJ2Di',
        inputs: {},
        systemVariables: {},
        userVariables: {},
      };
    `,
          }}
        />

        <Script
          id="dify-loader"
          src="https://udify.app/embed.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
