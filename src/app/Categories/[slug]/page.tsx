import React from 'react'
import Heading from '@/common/Heading/Heading'
import CatagoryFilter from '@/components/CatagoryFilter/CatagoryFilter'
import styles from '../Categories.module.css'

const page = () => {
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

export default page
