'use client'

import React from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import useToggle from '@/hooks/useToggle'
import MobileFIlter from '../MobileFIlter/MobileFIlter'

const Vacancies: React.FC = () => {

    const searchParams = useSearchParams();
    const search = (searchParams.get('query') || '').toLowerCase().trim();

    const filteredVacancies = VacanciesData.filter(vacancy => {
        const jobTitle = `${vacancy.job || ''} ${vacancy.company_name || ''} ${vacancy.category || ''}`.toLowerCase();
        return jobTitle.includes(search.toLowerCase());
    });

    const [isToggled, toggle] = useToggle(false);

    return (
        <>
            <div className={styles.rowVacancies}>
                <h3 className={`${styles.title_jobs} font-poppions-medium`}>
                    {
                        filteredVacancies.length > 0 ? (
                            <>
                                {filteredVacancies.length} Jobs
                            </>
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

                    {
                        filteredVacancies.length > 0 ?
                            <button onClick={toggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path></svg>
                            </button> : null
                    }

                </h3>
                {
                    filteredVacancies.reverse().map((el, idx: number) => (
                        <VacanciesCards el={el} key={idx} />
                    ))
                }
            </div>

            <MobileFIlter isToggled={isToggled} toggle={toggle} />
        </>
    )
}

export default Vacancies
