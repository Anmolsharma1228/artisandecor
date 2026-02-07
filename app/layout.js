import "./globals.css";
import {Palyfair_Display, Playfair, Playfair_Display} from 'next/font/google';
import WhatsAppIcon from '../app/components/WhatsAppIcon'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const playfair_display = Playfair_Display({
  subsets: ["latin"]
})

export const metadata = {
  title: "Artisan Decor - Wallpaper & Interior Decor",
  description:
    "Artisan Decor provides premium wallpapers, wall panels and interior decor solutions for modern homes.",

  verification: {
    google: "vJCX8kKa61RSyQh8zxnssLWD_Lg2pJiycFcgPZnqkWI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <WhatsAppIcon/>
        <Footer/>
      </body>
    </html>
  );
}
