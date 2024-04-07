import React from 'react';
import styles from './CatagoryFilter.module.css';
import Link from 'next/link';
import { getLand } from '@/lib/utils/renderFunction';
import { getScopedI18n } from '@/locales/server';
import { GetVacanciesByCategory } from '@/lib/data/data';
interface FilterProps {
    params: string
}

const CatagoryFilter: React.FC<FilterProps> = async ({ params }) => {

    const vacancies = await GetVacanciesByCategory(params);

    const n = await getScopedI18n('notResult')
    const t = await getScopedI18n('detail')
    const f = await getScopedI18n('filter')

    if (vacancies.length === 0) {
        return <div className={`${styles.NoResult} font-poppions-light`}>
            <img src='/images/not-found.png' alt='not-found' />
            <p>
                {n('not_result')}
            </p>
            <Link href="/Categories">
                {n('link')}
            </Link>
        </div>
    }

    return (
        <>
            {vacancies.reverse().map((el, idx) => (
                <Link href={`/Vacancies/${el.path}/${el.id}`} className={styles.card} key={idx}>
                    <div>
                        <img src={el.company_logo} alt={el.job_title} loading='lazy' />
                        <h4 className='font-poppions-medium'>{el.job_title}</h4>
                        <ul className='font-poppions-light'>
                            <li>{el.company_name}</li>
                            <span className={styles.circle}></span>
                            <li> {el.location}</li>
                        </ul>
                        {el?.salary && el?.salary.length > 0 ? (
                            <span className={`${styles.salary} font-poppions-medium`}>
                                {el.salary}
                            </span>
                        ) : (
                            <span className={`${styles.salary} font-poppions-medium`}>
                                {t('salaryText')}
                            </span>
                        )}
                        <span className={`${styles.date} font-poppions-light`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                            {(() => {
                                const vacancyDate = new Date(el.createdAt);
                                const day = String(vacancyDate.getDate()).padStart(2, '0');
                                const month = String(vacancyDate.getMonth() + 1).padStart(2, '0');
                                const year = vacancyDate.getFullYear();
                                const formattedDate = `${day}.${month}.${year}`;
                                return formattedDate;
                            })()}
                        </span>
                    </div>
                    <span className={`${styles.detail} font-poppions-light`}>
                        {getLand(el.job_type, f)}
                    </span>
                </Link>
            ))}
        </>
    );
}

export default CatagoryFilter;
