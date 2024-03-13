import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import FilterButton from '../FilterButton/FilterButton'

const Vacancies: React.FC = () => {

    return (
        <>
            <div className={styles.rowVacancies}>

                <FilterButton />

                {
                    VacanciesData.map((el, idx) => (
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


