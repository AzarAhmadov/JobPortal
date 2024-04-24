import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import VacanciesCards from './VacanciesCards'
import Loading from './loading'
import FilterButton from '../FilterButton/FilterButton'
import { GetVacanciesByAdmin } from '@/lib/data/data'
const NoResult = dynamic(() => import('../NoResult/NoResult'), { ssr: false });
import { getScopedI18n } from '@/locales/server'
import Pagination from '../Pagination/Pagination'
import dynamic from 'next/dynamic'
export interface IVacancies {
    q: string | undefined;
    type: string | undefined;
    category: string | undefined;
    salaried: string | undefined;
    start: number;
    end: number;
}

const Vacancies: React.FC<IVacancies> = async ({ q, type, category, salaried, start, end }) => {

    const Vacancies = (await GetVacanciesByAdmin()).reverse()

    const t = await getScopedI18n('noVacancy')

    if (Vacancies.length === 0) {
        return (
            <p className={`${styles.noVacancy} font-poppions-light`}>
                {t('txt')} 🙁
            </p>
        )
    }

    const filteredVacancies = Vacancies.filter((vacancy) => {
        const companyNameLower = vacancy?.company_name?.toLowerCase() || '';
        const jobTitleLower = vacancy?.job_title?.toLowerCase() || '';
        const categoryLower = vacancy?.category?.toLowerCase() || '';
        const jobTypeLower = vacancy?.job_type?.toLowerCase() || '';
        const salaryLower = vacancy?.salary?.toLowerCase() || '';

        const qLower = q ? q.trim().toLowerCase() : '';
        const typeLower = type ? type.toLowerCase() : '';
        const categoryFilterLower = category ? category.toLowerCase() : '';
        const salaryFilterLower = salaried ? salaried.toString().toLowerCase() : '';

        const matchesQuery = !qLower || companyNameLower.includes(qLower) || jobTitleLower.includes(qLower);
        const matchesType = !typeLower || jobTypeLower.includes(typeLower);
        const matchesCategory = !categoryFilterLower || categoryLower.includes(categoryFilterLower);
        const matchesSalaried = !salaryFilterLower || salaryLower.includes(salaryFilterLower) || salaryLower !== '';

        return matchesQuery && matchesType && matchesCategory && matchesSalaried;
    });

    const entries = filteredVacancies.slice(start, end);

    if (entries.length === 0 && filteredVacancies.length > 10) {
        return <div className={styles.Center}><NoResult /></div>;
    }

    if (filteredVacancies.length === 0) {
        return <div className={styles.Center}><NoResult /></div>;
    }

    return (
        <section className={styles.rowVacancies}>
            <FilterButton />
            {entries.length > 0 ? (
                entries.map((el, idx) => (
                    <Suspense key={idx} fallback={<Loading />}>
                        <VacanciesCards el={el} key={idx} />
                    </Suspense>
                ))
            ) : (
                filteredVacancies.map((el, idx) => (
                    <Suspense key={idx} fallback={<Loading />}>
                        <VacanciesCards el={el} key={idx} />
                    </Suspense>
                ))
            )}
            {(entries.length > 0) && (
                <Pagination
                    filteredVacancies={filteredVacancies}
                    hasNextPage={end < filteredVacancies.length}
                    hasPrevPage={start > 0}
                />
            )}
        </section>
    );
};

export default Vacancies;