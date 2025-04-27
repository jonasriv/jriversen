// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'J.R. Iversen | Fullstack Developer Portfolio',
  description: "I'm a fullstack developer specializing in Next.js, React, TypeScript, Node.js, Express, and machine learning with TensorFlow. Explore my projects and work.",
  openGraph: {
    title: 'J.R. Iversen | Fullstack Developer Portfolio',
    description: 'Portfolio showcasing projects built with Next.js, React, TypeScript, Node.js, Express, and TensorFlow.',
    url: 'https://jriversen.com/',
    siteName: 'JRiversen',
    images: [
      {
        url: 'https://jriversen.com/preview.jpg', 
        width: 1200,
        height: 630,
        alt: 'JRiversen Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://jriversen.com'),
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-black">
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
