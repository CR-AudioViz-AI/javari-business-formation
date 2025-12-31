import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Business Formation | Start Your Business Today',
  description: 'Form your LLC, Corporation, or Nonprofit in minutes. Affordable business formation services with expert support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
