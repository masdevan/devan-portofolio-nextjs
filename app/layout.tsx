import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devan Yudistira Sugiharta | Personal Website Portofolio',
  description: 'Devan Yudistira Sugiharta Portofolio - Introduction Personal Website.',
  keywords: ['Portofolio', 'Personal Portofolio', 'Devan Yudistira Sugiharta', 'Web Developer', 'Software Engineer'],
  icons: {
    icon: '/icon/icon.webp',
    shortcut: '/icon/icon.webp',
    apple: '/icon/icon.webp',
  },
  openGraph: {
    title: 'Devan Yudistira Sugiharta | Personal Website Portofolio',
    description: 'Devan Yudistira Sugiharta Portofolio - Introduction Personal Website.',
    url: 'https://devansugiharta.my.id',
    siteName: 'Devan Yudistira Sugiharta',
    images: [
      {
        url: 'https://devansugiharta.my.id/professional-developer-portrait.webp',
        width: 630,
        height: 630,
        alt: 'Devan Yudistira Sugiharta - Professional Developer Profile',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://devansugiharta.my.id',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}