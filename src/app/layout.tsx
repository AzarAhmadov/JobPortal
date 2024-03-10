import Footer from '@/common/Footer/Footer';
import Header from '@/common/Header/Header';
import { Analytics } from "@vercel/analytics/react"
import '@/assets/css/globals.css'
import I18nProviderClientProvider from '@/components/I18nProviderClientProvider/I18nProviderClientProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className='body'>
                <div className='row'>
                    <I18nProviderClientProvider>
                        <div>
                            <Header />
                            {children}
                        </div>
                        <Footer />
                    </I18nProviderClientProvider>
                </div>
                <Analytics />
            </body>
        </html >
    );
}