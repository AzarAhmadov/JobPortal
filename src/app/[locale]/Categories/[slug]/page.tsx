import React from 'react'
import Heading from '@/common/Heading/Heading';
import CatagoryFilter from '@/components/CatagoryFilter/CatagoryFilter'
import styles from './Categories.module.css'
import { getScopedI18n } from '@/locales/server';

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories | Job Hub Center",
    description: "Categories",
};

const Page = async () => {

    const h = await getScopedI18n('heading')

    return (
        <>
            <Heading link={h('categories')} path='/Categories' />
            <div className={`${styles.content} container`}>
                <div className={styles.row}>
                    <CatagoryFilter />
                </div>
            </div>
        </>
    )
}

export default Page
