import Heading from '../../../common/Heading/Heading';
import Categories from '@/components/Categories/Categories'
import React from 'react'
import { getScopedI18n } from '@/locales/server'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Kateqoriyalar",
    description: "Job Hub Center ilə işəgötürmə proseslərini idarə edin, aktiv vakansiyalar, iş elanları, məşğulluq, təcrübə proqramları və part time iş elanlarına müraciət edin"
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
