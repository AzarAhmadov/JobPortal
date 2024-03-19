import React from 'react'
import styles from './NoResult.module.css'
import Link from 'next/link'
import { getScopedI18n } from '@/locales/server'

const NoResult: React.FC = async () => {

    const t = await getScopedI18n('job')

    return (
        <div className={`${styles.notFound} font-poppions-light`}>
            <img src="/images/not-found.png" alt="not-found" />
            <p>
                {t('alert')}
            </p>
            <ul>
                <li>
                    <Link className={styles.active} href='/'> {t('back')} </Link>
                </li>
                <li>
                    <Link href='/'> {t('vacancies')} </Link>
                </li>
            </ul>
        </div>
    )
}

export default NoResult
