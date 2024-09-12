import './globals.css'
import { Inter } from 'next/font/google'
import ScrollToTop from '../components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vignesh Venkatraman - Senior IT Team Lead Portfolio',
  description: 'Portfolio showcasing the projects and skills of Vignesh Venkatraman, an experienced Senior IT Team Lead',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
