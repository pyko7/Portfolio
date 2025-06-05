import { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Icons from '@/components/icons/Icons'
import Footer from '@/components/footer/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Julien Henry',
  description:
    'Julien Henry, experienced French full-stack developer based in France, showcasing a portfolio of modern web applications, creative solutions, and technical expertise.',
  openGraph: {
    title: 'Julien Henry',
    description:
      'Julien Henry, experienced French full-stack developer based in France, showcasing a portfolio of modern web applications, creative solutions, and technical expertise.',
  },
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className="w-full min-h-screen" suppressHydrationWarning>
      <div className="relative w-full h-screen bg-main-bg-color text-main-font-color">
        <Header />
        <div className="absolute left-[10%] -ml-[15px] top-[70%] z-[51] lg:left-[15%] lg:-ml-3 md:hidden">
          <Icons />
        </div>
        <main className="w-full h-full flex items-center justify-center py-20">
          <section className="w-4/5 h-full py-10 lg:w-[70%] sm:w-full">
            {children}
          </section>
        </main>
        <Footer />
      </div>
    </body>
  </html>
)

export default RootLayout
