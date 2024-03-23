import Heading from '@/common/Heading/Heading';
import CreateVacancy from '@/components/Create/CreateVacancy'
import { getScopedI18n } from '@/locales/server';
import React from 'react'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Create"),
    title: "Vakansiya yarat",
    description: "Job Hub Center ilə işəgötürmə proseslərini idarə edin, aktiv vakansiyalar, iş elanları, məşğulluq, təcrübə proqramları və part time iş elanlarına müraciət edin"
};

const page = async () => {

    const h = await getScopedI18n('heading')

    return (
        <>
            <Heading link={h('create')} path='' />
            <CreateVacancy />
        </>
    )
}

export default page
