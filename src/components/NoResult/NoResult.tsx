import React from 'react'
import styles from './NoResult.module.css'
import Link from 'next/link'

const NoResult = () => {
    return (
        <div className={`${styles.notFound} font-poppions-light`}>
            <img src="/images/not-found.png" alt="not-found" />
            <p>
                Təəssüf ki hal-hazırda axtardığınız sorğuya uyğun nəticə mövcud deyil.
            </p>
            <ul>
                <li>
                    <Link className={styles.active} href='/'> Home </Link>
                </li>
                <li>
                    <Link href='/'> Vacancies </Link>
                </li>
            </ul>
        </div>
    )
}

export default NoResult
