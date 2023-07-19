import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Date Range Picker for shadcn',
  description: 'Advanced Date Selection Component built for shadcn with multi-month views, text entry, preset ranges, and date comparisons. Ideal for applications like dashboards, analytics reports or booking systems.',
  openGraph: {
    title: 'Date Range Picker for shadcn',
    description: 'Advanced Date Selection Component built for shadcn with multi-month views, text entry, preset ranges, and date comparisons. Ideal for applications like dashboards, analytics reports or booking systems.',
    url: 'https://date-range-picker-for-shadcn.vercel.app',
    siteName: 'Date Range Picker for shadcn',
    images: [
      {
        url: 'https://date-range-picker-for-shadcn.vercel.app/date-range-picker-for-shadcn.jpg',
        width: 904,
        height: 619,
        alt: 'Date Range Picker component with dropdown, text inputs for dates, compare toggle, calendars and date preset buttons.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
