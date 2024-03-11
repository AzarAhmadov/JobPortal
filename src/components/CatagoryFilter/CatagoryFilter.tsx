'use client'

import React from 'react';
import styles from './CatagoryFilter.module.css';
import { useParams } from 'next/navigation';
import { VacanciesData } from '@/constants/data';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';

const CatagoryFilter: React.FC = () => {

    const { slug } = useParams();
    const filterByCategory = VacanciesData.filter(item => item.category === slug);
    const router = useRouter()

    const t = useScopedI18n('notResult')

    const handleLinkClick = (path: string) => {
        router.push(`/Vacancies/${path}`);
    };

    if (filterByCategory.length === 0) {
        return <div className={`${styles.NoResult} font-poppions-light`}>
            <img src='/images/not-found.png' alt='not-found' />
            <p>
                {t('not_result')}
            </p>
            <Link href="/Categories">
                {t('link')}
            </Link>
        </div>
    }

    return (
        <>
            {filterByCategory.map((el, idx) => (
                <div onClick={() => handleLinkClick(el.path)} className={styles.card} key={idx}>
                    <div>
                        <img src={el.img} alt={el.job} loading='lazy' />
                        <h4 className='font-poppions-medium'>{el.job}</h4>
                        <ul className='font-poppions-light'>
                            <li>{el.company_name}</li>
                            <span className={styles.circle}></span>
                            <li>{el.detail_jobs.map((detail) => detail.location)}</li>
                        </ul>
                        <span className={`${styles.salary} font-poppions-medium`}>{el?.salary}</span>
                        <p className='font-poppions-thin'>{el?.desc}</p>
                        <span className={`${styles.date} font-poppions-thin`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                            {el?.date}
                        </span>
                    </div>
                    <span className={`${styles.detail} font-poppions-light`}>{el.detail_jobs.map((detail) => detail.time)}</span>
                </div>
            ))}
        </>
    );
}

export default CatagoryFilter;
