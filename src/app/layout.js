require('dotenv').config();

import { Roboto } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import { Providers } from "./redux/Providers"
import GoogleProviders from './components/GoogleProviders';
import Navbar from './components/navbar';
import Footer from './components/footer';


const inter = Roboto({ subsets: ['latin-ext'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata = {
  title: 'Quick Swappers',
  description: '',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GoogleProviders>
            {/* <Navbar/> */}
            {children}
          <Footer/>
          </GoogleProviders>
        </Providers>
      </body>
    </html>
  )
}
