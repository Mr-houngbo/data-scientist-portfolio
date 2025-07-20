import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GORD ENVER - Data Scientist & AI Developer",
  description:
    "Portfolio professionnel de GORD ENVER, Data Scientist senior spécialisé en IA, Machine Learning et Data Engineering. Découvrez mes 15 projets phares et mon expertise technique.",
  keywords:
    "data science, intelligence artificielle, machine learning, deep learning, python, portfolio, data engineer, MLOps",
  authors: [{ name: "GORD ENVER" }],
  openGraph: {
    title: "GORD ENVER - Data Scientist & AI Developer",
    description: "Portfolio professionnel - Turning Data into Scalable Intelligence",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GORD ENVER - Data Scientist & AI Developer",
    description: "Portfolio professionnel - Turning Data into Scalable Intelligence",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
