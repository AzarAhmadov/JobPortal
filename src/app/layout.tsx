import '@/assets/css/globals.css'
import I18nProviderClientProvider from "@/components/I18nProviderClientProvider/I18nProviderClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("http://jobhubcenter.vercel.app/az"),
    title: {
        default: "Vakansiyalar | Job Hub Center | İş elanları",
        template: `%s | Job Hub Center`,
    },
    description: "Job Hub Center ilə işəgötürmə proseslərini idarə edin, aktiv vakansiyalar, iş elanları, məşğulluq, təcrübə proqramları və part time iş elanlarına müraciət edin"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/images/logo.png" />
                <link rel="author" href="https://azarahmadov.com" />
                <meta name="author" content="Job Hub Center LLC" />
            </head>
            <body className='body'>
                <I18nProviderClientProvider>
                    <div className='row'>
                        <div>
                            {children}
                        </div>
                    </div>
                </I18nProviderClientProvider>
            </body>
        </html>
    );
}