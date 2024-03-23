import React from 'react';
import Filter from '@/components/Filter/Filter';
import Hero from '@/components/Hero/Hero';
import Vacancies from '@/components/Vacancies/Vacancies';
import styles from '../page.module.css';

const Page: React.FC = ({ searchParams, }: { searchParams?: { query?: string; type: string, category: string, salaried: string }; }) => {

    const q = searchParams?.query
    const type = searchParams?.type
    const category = searchParams?.category
    const salaried = searchParams?.salaried
    
    return (
        <>
            <Hero />
            <div className="container">
                <div className={styles.row}>
                    <Filter />
                    <Vacancies q={q} type={type} category={category} salaried={salaried} />
                </div>
            </div>
        </>
    );
};

export default Page;
