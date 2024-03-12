import { Analytics } from "@vercel/analytics/react"
import '@/assets/css/globals.css'
import I18nProviderClientProvider from "@/components/I18nProviderClientProvider/I18nProviderClientProvider";
import Header from "@/common/Header/Header";
import Footer from "@/common/Footer/Footer";

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
                        <Header />
                        <div>
                            {children}
                        </div>
                    </I18nProviderClientProvider>
                    <Footer />
                </div>
                <Analytics />
            </body>
        </html>
    );
}