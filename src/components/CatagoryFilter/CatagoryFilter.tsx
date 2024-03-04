'use client'

import React from 'react';
import styles from './CatagoryFilter.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { VacanciesData } from '@/constants/data';
import { useRouter } from 'next/navigation';

const CatagoryFilter: React.FC = () => {

    const { slug } = useParams();
    const filterByCategory = VacanciesData.filter(item => item.category === slug);
    const router = useRouter()

    const handleLinkClick = (path: string) => {
        router.push(`/Vacancy/${path}`);
    };

    return (
        <>
            {filterByCategory.map((el, idx) => (
                <div onClick={() => handleLinkClick(el.path)} className={styles.card} key={idx}>
                    <div>
                        <img src={el.img} alt={el.job} />
                        <h4 className='font-poppions-medium'>{el.job}</h4>
                        <ul className='font-poppions-light'>
                            <li>{el.company_name}</li>
                            <span className={styles.circle}></span>
                            <li>{el.detail_jobs.map((detail) => detail.location)}</li>
                        </ul>
                        <p className='font-poppions-thin'>{el.desc}</p>
                    </div>
                    <span className={`${styles.detail} font-poppions-light`}>{el.detail_jobs.map((detail) => detail.time)}</span>
                    <button className='font-poppions-medium'>{el.category}</button>
                </div>
            ))}
        </>
    );
}

export default CatagoryFilter;
