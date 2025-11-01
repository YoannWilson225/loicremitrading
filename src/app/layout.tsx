import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Loader from "@/components/Loader"; // ✅ Ajout du loader

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Loïc Rémy Trading - Formation Trading Professionnelle",
  description:
    "Rejoignez plus de 500 traders formés par Loïc Rémy Yao. Formations complètes en trading, du débutant à l'expert. SMC, Price Action et stratégies gagnantes.",
  keywords:
    "trading, formation trading, SMC, Price Action, forex, trader professionnel, Loïc Rémy Trading",
  metadataBase: new URL("https://www.loicremytrading.com"),
  openGraph: {
    type: "website",
    url: "https://www.loicremytrading.com",
    title: "Loïc Rémy Trading",
    description: "Formations SMC, Price Action...",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loïc Rémy Trading",
    description: "Formations SMC, Price Action...",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          {/* ✅ Loader global (s'affiche avant tout le site) */}
          <Loader />

          {/* ✅ Le contenu principal */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
