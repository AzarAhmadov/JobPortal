import React from 'react'
import styles from './Vacancies.module.css'
import { VacanciesData } from '@/constants/data'
import VacanciesCards from './VacanciesCards'

const Vacancies: React.FC = () => {
    return (
        <div className={styles.rowVacancies}>
            <h3 className={`${styles.title_jobs} font-poppions-medium`}> 4 Jobs </h3>
            {
                VacanciesData.map((el, idx: number) => (
                    <VacanciesCards el={el} key={idx} />
                ))
            }
        </div>
    )
}

export default Vacancies
