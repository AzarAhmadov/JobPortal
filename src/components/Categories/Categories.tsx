import React from 'react'
import { CategoriesData, VacanciesData } from '@/constants/data'
import Link from 'next/link'
import styles from './Categories.module.css'

const Categories = () => {

    const filteredByCategoryLength = (categoryName: string) => {
        const filteredVacancies = VacanciesData.filter((el) => el.category === categoryName);
        return filteredVacancies.length;
    }

    return (
        <section className={styles.content}>
            <ul className={`${styles.list} container font-poppions-medium `}>
                {
                    CategoriesData.map((el, idx: number) => (
                        <li key={idx}>
                            <Link href={`Categories/${el.path}`}>
                                <span dangerouslySetInnerHTML={{ __html: el.icon }} />
                                <span className={styles.title}> {el.title}</span>
                                <div>
                                    <p className={`${styles.desc} font-poppions-light`}>
                                        {filteredByCategoryLength(el.path)} jobs available
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Categories