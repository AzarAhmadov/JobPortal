'use client'

import React from 'react';
import styles from './Heading.module.css';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';
import { usePathname } from 'next/navigation';

interface HeadingProps {
    link: string;
    path: string;
}

const Heading: React.FC<HeadingProps> = ({ link, path }) => {
    const t = useScopedI18n('heading');
    const path_name = usePathname();
    const parts = path_name.split("/");
    const thirdPart = parts[3]?.replace(/[-0-9]+/g, ' ').trim();

    return (
        <section className={styles.banner}>
            <ul className={`${styles.list} container font-poppions-light`}>
                <li>
                    <Link href={'/'}>{t('home')}</Link>
                    <span className={styles.circle}></span>
                </li>
                <li>
                    <Link href={path}>{link}</Link>
                    {
                        thirdPart && <span className={styles.circle}></span>
                    }
                </li>
                <li>
                    {
                        thirdPart && <span>
                            {thirdPart.length > 20 ? thirdPart.slice(0, 20) + '...' : thirdPart}
                            {/* {thirdPart} */}
                        </span>
                    }
                </li>
            </ul>
        </section>
    );
};

export default Heading;
