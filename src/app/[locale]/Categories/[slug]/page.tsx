import React from 'react'
import Heading from '@/common/Heading/Heading';
import CatagoryFilter from '@/components/CatagoryFilter/CatagoryFilter'
import styles from './Categories.module.css'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Categories"),
    title: "Categories | Job Hub Center",
    description: "Categories",
};

const Page = () => {
    return (
        <>
            <Heading />
            <div className={`${styles.content} container`}>
                <div className={styles.row}>
                    <CatagoryFilter />
                </div>
            </div>
        </>
    )
}

export default Page
