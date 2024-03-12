import Footer from "@/common/Footer/Footer";
import Header from "@/common/Header/Header";
import I18nProviderClientProvider from "@/components/I18nProviderClientProvider/I18nProviderClientProvider";

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
