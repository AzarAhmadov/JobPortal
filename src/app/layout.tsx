import Footer from '@/common/Footer/Footer';
import Header from '@/common/Header/Header';
import '@/css/globals.css'

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
        </div>
        <Footer />
      </body>
    </html>
  );
}
