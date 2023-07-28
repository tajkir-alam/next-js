'use client'
import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import AuthProvider from '@/Provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Uniech Blog',
  description: 'Welcome to the blog page of Uniech',
}

export default function RootLayout({ children }) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className={`${pathName === '/login' ? '' : pathName === '/signup' ? '' : 'px-2 md:px-0 md:w-4/5 mx-auto'}`}>
            {pathName !== '/login' && pathName !== '/signup' &&
              <Nav></Nav>
            }
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
