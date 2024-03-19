import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import FilterButton from '../FilterButton/FilterButton'
import { GetVacancies } from '@/lib/data/data'
import LoadMore from '../LoadMore/LoadMore'
import NoResult from '../NoResult/NoResult'

const Vacancies: React.FC<any> = async ({ q }) => {

    const Vacancies = await GetVacancies()
    const filteredVacancies = q ? Vacancies.filter(vacancy => {
        const companyNameLower = vacancy.company_name.toLowerCase();
        const jobTitleLower = vacancy.job_title.toLowerCase();
        const categoryLower = vacancy.category.toLowerCase();
        const qLower = q.toLowerCase();

        return (
            companyNameLower.includes(qLower) ||
            jobTitleLower.includes(qLower) ||
            categoryLower.includes(qLower)
        );
    }) : Vacancies;


    return (
        <>
            <div className={styles.rowVacancies}>

                <FilterButton />

                {filteredVacancies.length > 0 ? (
                    filteredVacancies.reverse().map((el, idx) => (
                        <Suspense key={idx} fallback={<Loading />}>
                            <VacanciesCards el={el} key={idx} />
                        </Suspense>
                    ))
                ) : (
                    <NoResult />
                )}

                {/* <LoadMore /> */}
            </div>
        </>
    );
};

export default Vacancies;


