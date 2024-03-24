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
    const page = searchParams && 'page' in searchParams ? searchParams['page'] : '1';
    const per_page = searchParams && 'per_page' in searchParams ? searchParams['per_page'] : '10';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page)

    return (
        <>
            <Hero />
            <div className="container">
                <div className={styles.row}>
                    <Filter />
                    <Vacancies start={start} end={end} q={q} type={type} category={category} salaried={salaried} />
                </div>
            </div>
        </>
    );
};

export default Page;
