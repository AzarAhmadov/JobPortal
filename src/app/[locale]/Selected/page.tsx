import Heading from '@/common/Heading/Heading';
import Selected from '@/components/Selected/Selected';
import { getScopedI18n } from '@/locales/server';
import React from 'react'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Selected"),
    title: "Selected | Job Hub Center",
    description: "vacancies you have selected",
};

const page: React.FC = async () => {

    const h = await getScopedI18n('heading')

    return (
        <>
            <Heading link={h('selected')} path='' />
            <Selected />
        </>
    )
}

export default page
