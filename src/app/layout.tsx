import Footer from '@/common/Footer/Footer';
import Header from '@/common/Header/Header';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import '@/css/globals.css'
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
          {/* <MobileMenu /> */}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
