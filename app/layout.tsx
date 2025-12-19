import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Personal & Professional',
  description: 'Welcome to my personal portfolio showcasing my work, skills, and journey as a developer.',
  keywords: ['portfolio', 'developer', 'web development', 'projects'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Personal & Professional',
    description: 'Welcome to my personal portfolio showcasing my work, skills, and journey as a developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
