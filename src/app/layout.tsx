import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import HeaderMenu from "./_components/header-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Dario Milicic - Senior Mobile Engineer`,
  description: `I'm a Senior Mobile Engineer with a passion for mobile app development and AI. I specialize in building mobile apps for iOS and Android.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/Icon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/Icon-16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />

        <meta
          name="description"
          content="Blog - Senior Mobile Developer - Dario Milicic"
        />

        <meta
          name="keywords"
          content="Senior Android Engineer, Senior Mobile Engineer, Software Engineer, App Developer, Android Developer, Flutter Developer, Android, Kotlin, Flutter, Dart, Dario Milicic"
        />
        <meta name="author" content="Dario Milicic" />
        <meta property="og:title" content="Blog by Dario" />
        <meta
          property="og:description"
          content="Blog - Senior Mobile Engineer - Dario Milicic"
        />

        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/dart.min.js"></script>
      </head>
      <body
        className={cn(
          inter.className,
          "dark:bg-slate-900 dark:text-slate-400",
          "hero-background"
        )}
      >
        <HeaderMenu />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
