import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import FilterButton from '../FilterButton/FilterButton'
import { GetVacanciesByAdmin } from '@/lib/data/data'
import NoResult from '../NoResult/NoResult'
import { getScopedI18n } from '@/locales/server'
import Pagination from '../Pagination/Pagination'

interface IVacancies {
    q: string | undefined,
    type: string | undefined,
    category: string | undefined,
    salaried: string | undefined
}

const Vacancies: React.FC<IVacancies> = async ({ q, type, category, salaried }) => {

    const Vacancies = await GetVacanciesByAdmin()

    const t = await getScopedI18n('noVacancy')

    if (Vacancies.length === 0) {
        return (
            <p className={`${styles.noVacancy} font-poppions-light`}>
                {t('txt')} 🙁
            </p>
        )
    }

    const filteredVacancies = Vacancies.filter((vacancy) => {
        const companyNameLower = vacancy?.company_name?.toLowerCase();
        const jobTitleLower = vacancy?.job_title?.toLowerCase();
        const categoryLower = vacancy?.category?.toLowerCase();
        const jobTypeLower = vacancy?.job_type?.toLowerCase();
        const salaryLower = vacancy?.salary?.toLowerCase();

        const qLower = q ? q.toLowerCase() || q.toUpperCase() : '';
        const typeLower = type ? type.toLowerCase() : '';
        const categoryFilterLower = category ? category.toLowerCase() : '';
        const salaryFilterLower = salaried ? salaried.toString().toLowerCase() : '';

        const matchesQuery =
            !qLower ||
            companyNameLower?.includes(qLower) ||
            jobTitleLower?.includes(qLower) ||
            categoryLower?.includes(qLower);

        const matchesType = !typeLower || jobTypeLower?.includes(typeLower);

        const matchesCategory = !categoryFilterLower || categoryLower?.includes(categoryFilterLower);

        const matchesSalaried = !salaryFilterLower || salaryLower.includes(salaryFilterLower) || salaryLower !== '';

        return matchesQuery && matchesType && matchesCategory && matchesSalaried;
    });

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

                {/* <Pagination /> */}
            </div>
        </>
    );
};

export default Vacancies;


