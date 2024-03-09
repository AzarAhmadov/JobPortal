'use client'

import React from 'react';
import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import Vacancies from '@/components/Vacancies/Vacancies';
import styles from '../page.module.css';


const Page: React.FC = () => {

    return (
        <>
            <Hero />
            <div className="container">
                <div className={styles.row}>
                    <Filter />
                    <Vacancies />
                </div>
            </div>
        </>
    );
};

export default Page;
