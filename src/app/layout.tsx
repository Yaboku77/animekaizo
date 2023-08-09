import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideBar from '../components/SideBar'
import TopNavbar from '../components/TopNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AnimeTrix',
  description: 'An ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white max-w-[2500px] m-auto`}>
        <TopNavbar />
        <SideBar />
        <div className='flex flex-col ml-0 md:ml-20 lg:ml-72 '>
          {children}
        </div>
      </body>
    </html>
  )
}