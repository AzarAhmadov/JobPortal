import Footer from '@/common/Footer/Footer';
import Header from '@/common/Header/Header';
import { Analytics } from "@vercel/analytics/react"
import '@/css/globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className='body'>
                <div>
                    <Header />
                    {children}
                </div>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}