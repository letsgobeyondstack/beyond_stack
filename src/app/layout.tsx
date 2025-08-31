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
          strategy="beforeInteractive" // ensure config exists before loader runs
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: 'MihxeAdTZ2yr7xfO',
                inputs: {
                  // key: "VALUE"
                },
                systemVariables: {
                  // user_id: '',
                  // conversation_id: '',
                },
                userVariables: {
                  // avatar_url: '',
                  // name: '',
                },
              };
            `,
          }}
        />

        {/* Your exact loader script (id matches your snippet) */}
        <Script
          id="MihxeAdTZ2yr7xfO"
          src="https://udify.app/embed.min.js"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}
