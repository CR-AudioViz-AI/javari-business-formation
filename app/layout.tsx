// app/layout.tsx — Javari Formation
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Formation | Javari by CR AudioViz AI',
  description: 'AI business formation — LLC, Corp, EIN',
  keywords: 'Javari Formation, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Formation"
          appColor="#10b981"
          appEmoji="🏢"
          appDesc="AI business formation — LLC, Corp, EIN"
      handoffApp="Javari Legal"
      handoffUrl="https://javari-legal.vercel.app"
      handoffPitch="Get your operating agreement and contracts →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
