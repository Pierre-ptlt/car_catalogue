import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car hub simulator',
  description: 'Side project to simulate a car catalogue using Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
