import Heading from '@/common/Heading/Heading';
import CreateVacancy from '@/components/Create/CreateVacancy'
import { getScopedI18n } from '@/locales/server';
import React from 'react'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Create"),
    title: "Create | Job Hub Center",
    description: "create a vacancy",
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
