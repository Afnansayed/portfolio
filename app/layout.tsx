import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Afnan Razin',
  description: 'Portfolio of Afnan Razin ,a passionate Full Stack Developer.',
  icons: {
    icon: [
      {
        url: '/logo_afnan.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_afnan.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo_afnan.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo_afnan.png',
  },
}

import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
