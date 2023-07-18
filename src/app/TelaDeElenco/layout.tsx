import { Inter } from 'next/font/google'
import SessionProviderApp from '../SessionProviderApp'
import PrivateRouter from '../PrivateRouter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
          <body className={inter.className}>
              <PrivateRouter>
                {children}
              </PrivateRouter>
          </body>
      </html>
    )
  }