// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './theme-provider'
import React, { ReactNode } from 'react';
export const metadata: Metadata = {
  title: 'J.R.Iversen',
  description: '',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className='bg-black'>
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

