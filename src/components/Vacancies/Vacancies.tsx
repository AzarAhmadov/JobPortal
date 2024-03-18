import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import FilterButton from '../FilterButton/FilterButton'
import { GetVacancies } from '@/lib/data/data'

const Vacancies: React.FC = async () => {

    const Vacancies = await GetVacancies()

    return (
        <>
            <div className={styles.rowVacancies}>
                <FilterButton />
                {
                    Vacancies.slice().reverse().map((el, idx) => (
                        <Suspense key={idx} fallback={<Loading />}>
                            <VacanciesCards el={el} key={idx} />
                        </Suspense>
                    ))
                }   
            </div>
        </>
    );
};

export default Vacancies;


