import './globals.css'
import Footer from '../components/Footer/Footer'
import { Anek_Gurmukhi } from '@next/font/google'

const anek = Anek_Gurmukhi({ subsets: ['latin'] })
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body className={anek.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
