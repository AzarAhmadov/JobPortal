import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import { getScopedI18n } from '@/locales/server'

const Footer: React.FC = async () => {

    const t = await getScopedI18n('footer')

    return (
        <footer className={styles.footer}>
            <Link className={styles.logo} href={'/'}>
                Job
                <span>Portal</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"></path></svg>
            </Link>
            <p className='font-poppions-thin'>
                {t('text')}
            </p>
        </footer>
    )
}

export default Footer
