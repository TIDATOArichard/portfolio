import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIDATOA Diminine Richard (s_richard) | Portfolio Développeur",
  description: "Portfolio de TIDATOA Diminine Richard, développeur web & logiciel full-stack basé à Lomé, Togo. Conception d'expériences numériques minimalistes, interactives et performantes.",
  keywords: [
    "TIDATOA Richard",
    "s_richard",
    "TIDATOArichard",
    "Développeur Web Togo",
    "Next.js Developer",
    "React",
    "Full-Stack",
    "Dark Minimal Portfolio",
    "Lomé",
    "TypeScript"
  ],
  authors: [{ name: "TIDATOA Diminine Richard", url: "https://github.com/TIDATOArichard" }],
  creator: "TIDATOA Diminine Richard",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://github.com/TIDATOArichard",
    title: "TIDATOA Diminine Richard | Développeur Full-Stack",
    description: "Conception d'expériences web modernes, interactives et épurées avec Next.js et Tailwind CSS.",
    siteName: "TIDATOA Richard Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/204076196?v=4",
        width: 460,
        height: 460,
        alt: "TIDATOA Diminine Richard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TIDATOA Diminine Richard | Développeur Full-Stack",
    description: "Portfolio officiel de TIDATOA Richard, développeur web moderne.",
    images: ["https://avatars.githubusercontent.com/u/204076196?v=4"],
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/204076196?v=4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "TIDATOA Diminine Richard",
    alternateName: "s_richard",
    url: "https://github.com/TIDATOArichard",
    image: "https://avatars.githubusercontent.com/u/204076196?v=4",
    jobTitle: "Développeur Full-Stack",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lomé",
      addressCountry: "Togo",
    },
    email: "tidatoar@gmail.com",
    telephone: "+228 91443682",
    sameAs: [
      "https://github.com/TIDATOArichard",
      "https://askydkmguineafowl.vercel.app"
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#101010] text-[#dfdfdf] sm:px-12 md:px-20 lg:px-28 px-6 min-h-screen relative antialiased selection:bg-[#a476ff] selection:text-black">
        {children}
      </body>
    </html>
  );
}
