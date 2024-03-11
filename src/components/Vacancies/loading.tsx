import React from 'react'
import styles from './Vacancies.module.css'

const Loading = () => {

    

    return (
        <div className={styles.skeletonArea}>
            <div className={styles.skeletonAreaRow}>
                <div>
                    <div className={styles.img}>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className={styles.skeleton}>
                        </div>
                    </li>
                    <li>
                        <div className={styles.skeleton}>
                        </div>
                    </li>
                    <li>
                        <div className={styles.skeleton}>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Loading
