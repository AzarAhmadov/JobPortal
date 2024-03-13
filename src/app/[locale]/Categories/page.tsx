import Heading from '../../../common/Heading/Heading';
import Categories from '@/components/Categories/Categories'
import React from 'react'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories | Job Hub Center",
    description: "Categories",
};

const Page = () => {
    return (
        <>
            <Heading />
            <Categories />
        </>
    )
}

export default Page
