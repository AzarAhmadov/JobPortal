'use client'

import React from 'react'
import { Watch } from 'react-loader-spinner'
import styles from './Vacancy.module.css'

const loading = () => {
    return (
        <div className={styles.loading}>
            <Watch
                visible={true}
                height="80"
                width="80"
                radius="48"
                color="#6661f4"
                ariaLabel="watch-loading"
                wrapperClass=""
            />
        </div>
    )
}

export default loading
