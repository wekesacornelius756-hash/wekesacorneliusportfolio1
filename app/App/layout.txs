import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wekesa Cornelius | Full Stack Web Developer & Software Engineer",
  description: "Full Stack Web Developer & Software Engineer - Portfolio of Wekesa Cornelius from Kenya.",
  metadataBase: new URL("https://wekesacorneliusportfolio1.vercel.app"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Wekesa Cornelius | Full Stack Web Developer",
    description: "Full Stack Web Developer & Software Engineer - Kenya",
    url: "https://wekesacorneliusportfolio1.vercel.app/",
    siteName: "Wekesa Cornelius",
    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
