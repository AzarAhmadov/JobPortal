import Heading from '../../../common/Heading/Heading';
import Categories from '@/components/Categories/Categories'
import React from 'react'
import { getScopedI18n } from '@/locales/server'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories | Job Hub Center",
    description: "Categories",
};

const Page = async () => {

    const h = await getScopedI18n('heading')

    return (
        <>
            <Heading link={h('categories')} path='' />
            <Categories />
        </>
    )
}

export default Page
