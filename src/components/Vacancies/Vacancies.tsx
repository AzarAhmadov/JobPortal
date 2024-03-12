'use client'

import React, { Suspense } from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import useToggle from '@/hooks/useToggle'
import dynamic from 'next/dynamic'
const MobileFIlter = dynamic(() => import('../MobileFIlter/MobileFIlter'), { ssr: false });
import Loading from './loading'
import Image from 'next/image'
import { useScopedI18n } from '@/locales/client'

const Vacancies: React.FC = () => {

    const searchParams = useSearchParams();
    const search = (searchParams.get('query') || '').toLowerCase().trim();

    const filteredVacancies = VacanciesData.filter(vacancy => {
        const jobTitle = `${vacancy.job || ''} ${vacancy.company_name || ''} ${vacancy.category || ''}`.toLowerCase();
        return jobTitle.includes(search.toLowerCase());
    });

    const [isToggled, toggle] = useToggle(false);

    const t = useScopedI18n('job')

    return (
        <>
            <div className={styles.rowVacancies}>
                <h3 className={`${styles.title_jobs} font-poppions-medium`}>
                    {filteredVacancies.length > 0 ? (
                        <>
                            <p>
                                {t('job_title')}
                            </p>
                        </>
                    ) : (
                        <article className={`${styles.noResults} font-poppions-light`}>
                            <div className={styles.noImg}>
                                <Image fill src="/images/not-found.png" alt="not-found" />
                            </div>
                            <p>
                                {t('alert')}
                            </p>
                            <Link href={'/'}> Home page </Link>
                        </article>
                    )}

                    {filteredVacancies.length !== 0 && search && (
                        <div className='font-poppions-light'>
                            Result for :
                            <span>{search}</span>
                        </div>
                    )}

                    {filteredVacancies.length > 0 && (
                        <button onClick={toggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
                            </svg>
                        </button>
                    )}
                </h3>
                {filteredVacancies.reverse().map((el, idx: number) => (
                    <Suspense key={idx} fallback={<Loading />}>
                        <VacanciesCards el={el} key={idx} />
                    </Suspense>
                ))}
            </div>

            <MobileFIlter isToggled={isToggled} toggle={toggle} />
        </>
    );
};

export default Vacancies;

