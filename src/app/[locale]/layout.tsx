import Header from "@/common/Header/Header";
import I18nProviderClientProvider from "@/components/I18nProviderClientProvider/I18nProviderClientProvider";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import('@/common/Footer/Footer'), { ssr: false });

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <I18nProviderClientProvider>
            <div className="row">
                <div>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
        </I18nProviderClientProvider>
    );
}
