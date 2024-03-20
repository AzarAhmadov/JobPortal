import React from 'react'
import Link from 'next/link'
import styles from './Categories.module.css'
import { getCategory } from '@/lib/utils/renderFunction'
import { GetVacancies } from '@/lib/data/data'
import { getScopedI18n } from '@/locales/server'
import { CategoriesData } from '@/constants/data'

const Categories: React.FC = async () => {

    const Vacancies = await GetVacancies()

    const filteredByCategoryLength = (categoryName: string) => {
        const filteredVacancies = Vacancies.filter((el) => el.category.toLowerCase() === categoryName.toLowerCase());
        return filteredVacancies.length;
    }

    const t = await getScopedI18n('detail');
    const c = await getScopedI18n('categories');

    return (
        <section className={styles.content}>
            <ul className={`${styles.list} container font-poppions-medium `}>
                {
                    CategoriesData.map((el, idx: number) => (
                        <li key={idx}>
                            <Link href={`Categories/${el.path}`}>

                                <i dangerouslySetInnerHTML={{ __html: el.icon }} />

                                <span className={styles.title}>
                                    {getCategory(el.title.toLocaleLowerCase(), c)}
                                </span>

                                <div>
                                    <p className={`${styles.desc} font-poppions-light`}>
                                        {filteredByCategoryLength(el.title)} {t('available')}
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul >
        </section>
    )
}

export default Categories