// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import React, { ReactNode } from 'react';
export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        
        </head>
        <body>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="dark"
            
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

