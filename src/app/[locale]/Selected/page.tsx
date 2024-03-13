import React from 'react'
import Heading from '@/common/Header/Header';

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Selected"),
    title: "Selected | Job Hub Center",
    description: "vacancies you have selected",
};

const page: React.FC = () => {
    return (
        <>
            <Heading />
            <div>
                Selected
            </div>
        </>
    )
}

export default page
