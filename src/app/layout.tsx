import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from '../components/ScrollToTop'


import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vignesh Venkatraman - Senior IT Team Lead Portfolio',
  description: 'Portfolio showcasing the projects and skills of Vignesh Venkatraman, an experienced Senior IT Team Lead',
  icons: {
    icon: [
      { url: '/favicon.ico' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <main className="pt-16">
          {children}
        </main>
        <ScrollToTop />
      </body>
    </html>
  )
}
