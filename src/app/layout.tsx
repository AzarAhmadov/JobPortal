import { Analytics } from "@vercel/analytics/react"
import '@/assets/css/globals.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className='body'>
                <div className='row'>
                    <div>
                        {children}
                    </div>
                </div>
                <Analytics />
            </body>
        </html>
    );
}