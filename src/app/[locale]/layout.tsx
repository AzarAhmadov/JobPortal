import Header from "@/common/Header/Header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import('@/common/Footer/Footer'), { ssr: false });

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="row">
            <div>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}
