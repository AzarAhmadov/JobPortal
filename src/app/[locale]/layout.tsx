import Header from "@/common/Header/Header";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import('@/common/Footer/Footer'), { ssr: false });

export const metadata: Metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/"),
    title: {
        default: "Job Hub Center",
        template: `%s | Job Hub Center`,
    },
    description: "Job Portal is a new online platform for job seekers. You can easily find what you want.",
};

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
