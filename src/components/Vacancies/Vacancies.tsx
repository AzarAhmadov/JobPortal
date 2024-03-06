'use client'

import React from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Vacancies: React.FC = () => {

    const searchParams = useSearchParams();
    const search = (searchParams.get('query') || '').toLowerCase().trim();

    const filteredVacancies = VacanciesData.filter(vacancy => {
        const jobTitle = `${vacancy.job || ''} ${vacancy.company_name || ''} ${vacancy.category || ''}`.toLowerCase();
        return jobTitle.includes(search.toLowerCase());
    });

    return (
        <div className={styles.rowVacancies}>
            <h3 className={`${styles.title_jobs} font-poppions-medium`}>
                {
                    filteredVacancies.length > 0 ? (
                        `${filteredVacancies.length} Jobs`
                    ) : (
                        <p className={`${styles.noResults} font-poppions-light`}>
                            <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="not-found" />
                            We can’t find what you are looking for, in the meantime you can browse jobs or return back to homepage
                            <Link href={'/'}> Home page </Link>
                        </p>
                    )
                }
                {
                    filteredVacancies.length !== 0 && search &&
                    <div className='font-poppions-light'>
                        Result for :
                        <span>
                            {search}
                        </span>
                    </div>
                }
            </h3 >
            {
                filteredVacancies.reverse().map((el, idx: number) => (
                    <VacanciesCards el={el} key={idx} />
                ))
            }
        </div >
    )
}

export default Vacancies
