import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import { getScopedI18n } from '@/locales/server'
import FilterButton from '../FilterButton/FilterButton'

const Vacancies: React.FC = async () => {

    const t = await getScopedI18n('job')

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


