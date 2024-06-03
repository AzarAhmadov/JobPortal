import React from 'react'
import Heading from '@/common/Heading/Heading';
import CatagoryFilter from '@/components/CatagoryFilter/CatagoryFilter'
import { getScopedI18n } from '@/locales/server';
import { PagePropsParams } from '@/types/Types';

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories",
    description: "Job Hub Center ilə işəgötürmə proseslərini idarə edin, aktiv vakansiyalar, iş elanları, məşğulluq, təcrübə proqramları və part time iş elanlarına müraciət edin"
};

const Page: React.FC<PagePropsParams> = async ({ params, searchParams }) => {

    const h = await getScopedI18n('heading')
    const paramsProps = params.slug;

    const page = searchParams && 'page' in searchParams ? searchParams['page'] : '1';
    const per_page = searchParams && 'per_page' in searchParams ? searchParams['per_page'] : '8';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page)

    return (
        <>
            <Heading link={h('categories')} path='/Categories' />
            <div className='container'>
                <CatagoryFilter end={end} start={start} params={paramsProps} />
            </div>
        </>
    )
}

export default Page
