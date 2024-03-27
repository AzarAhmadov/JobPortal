import '@/assets/css/globals.css'
import I18nProviderClientProvider from "@/components/I18nProviderClientProvider/I18nProviderClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("http://jobhubcenter.com/az"),
    title: {
        default: "Vakansiyalar | İş elanları | Job Hub Center",
        template: `%s | Job Hub Center`,
    },
    description: "Job Hub Center ilə iş elanları,təcrübə proqramları və part time iş elanlarına müraciət edin"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/logo.png" />
                <link rel="author" href="https://azarahmadov.com" />
                <meta name="author" content="Azar Ahmadov" />
                <meta name="creator" content="Azar Ahmadov" />
                <meta name="publisher" content="jobhubcenter.com/az" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="vakansiyalar,iş elanları, vakansiyalar 2024" />
                <meta name="copyright" content="© 2024 jobhubcenter.com - Bütün hüquqlar qorunur" />
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