'use client'

import React from 'react';
import styles from './Heading.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Heading = () => {
    const path_name = usePathname();
    const normalizedPath = path_name.startsWith('/') ? path_name : `/${path_name}`;

    return (
        <div className={styles.banner}>
            <ul className={`${styles.list} container font-poppions-light`}>
                <li>
                    <Link href='/'> Home </Link>
                </li>
                <li>{normalizedPath.split('/').map((part, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span></span>}
                        {part}
                    </React.Fragment>
                ))}
                </li>
            </ul>
        </div>
    );
};

export default Heading;

