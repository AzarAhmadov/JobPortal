import React from 'react'
import Heading from '@/common/Heading/Heading';
import CatagoryFilter from '@/components/CatagoryFilter/CatagoryFilter'
import styles from './Categories.module.css'
import { getScopedI18n } from '@/locales/server';
import { PageParams } from '../../Vacancies/[...slug]/page';

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories | Job Hub Center",
    description: "Categories",
};

export interface PagePropsParams {
    params: {
        slug: string;
        paramsProps?: string;
    };
}


const Page: React.FC<PagePropsParams> = async ({ params }) => {

    const h = await getScopedI18n('heading')
    const paramsProps = params.slug;

    return (
        <>
            <Heading link={h('categories')} path='/Categories' />
            <div className={`${styles.content} container`}>
                <div className={styles.row}>
                    <CatagoryFilter params={paramsProps} />
                </div>
            </div>
        </>
    )
}

export default Page
