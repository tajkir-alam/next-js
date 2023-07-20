import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Uniech Blog',
  description: 'Welcome to the blog page of Uniech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='px-2 py-4 md:px-0 md:w-4/5 mx-auto'>
        <Nav></Nav>
        {children}
        </div>
      </body>
    </html>
  )
}
