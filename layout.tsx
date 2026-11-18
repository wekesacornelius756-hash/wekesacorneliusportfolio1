import type { Metadata } from "next";

const SITE_URL = "https://wekesacorneliusportfolio1.vercel.app";

export const metadata: Metadata = {
  title: "Wekesa Cornelius | Full Stack Web Developer",
  description: "Portfolio of Wekesa Cornelius - Full Stack Web Developer & Software Engineer from Kenya.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: `${SITE_URL}/logo.png`,
    shortcut: `${SITE_URL}/logo.png`,
    apple: `${SITE_URL}/logo.png`,
  },
  openGraph: {
    title: "Wekesa Cornelius | Full Stack Web Developer",
    description: "Full Stack Web Developer & Software Engineer - Kenya",
    url: SITE_URL,
    siteName: "Wekesa Cornelius",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wekesa Cornelius",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wekesa Cornelius",
    description: "Full Stack Web Developer & Software Engineer",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body>{children}</body>
    </html>
  );
}
