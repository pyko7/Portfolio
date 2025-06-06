import { Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import Footer from '@/components/footer/Footer'
import HeaderWrapper from '@/components/header/HeaderWrapper'
import '@/styles/globals.css'
export const metadata: Metadata = {
  title: 'Julien Henry – Fullstack Developer',
  description:
    'Julien Henry, experienced French full-stack developer based in France, showcasing a portfolio of modern web applications, creative solutions, and technical expertise.',
  openGraph: {
    title: 'Julien Henry – Fullstack Developer',
    description:
      'Julien Henry, experienced French full-stack developer based in France, showcasing a portfolio of modern web applications, creative solutions, and technical expertise.',
    url: 'https://julienhenry.fr/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://julienhenry.fr/',
  },
  robots: 'index, follow',
}

const syne = Syne({
  subsets: ['latin'],
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body
      className={`w-full min-h-screen ${syne.className}`}
      suppressHydrationWarning
    >
      <div className="relative w-full h-screen bg-main-bg-color text-main-font-color">
        <HeaderWrapper />
        <main className="w-full h-full flex items-center justify-center py-20">
          <section className="w-full h-full py-10 sm:w-[70%]">
            {children}
            <Analytics />
          </section>
        </main>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout
