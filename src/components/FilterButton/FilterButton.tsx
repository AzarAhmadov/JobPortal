'use client'

import useToggle from '@/hooks/useToggle'
import React from 'react'
import MobileFIlter from '../MobileFIlter/MobileFIlter'
import styles from './FilterButton.module.css'
import { useSearchParams } from 'next/navigation'
import { useScopedI18n } from '@/locales/client'

const FilterButton = () => {

    const [isToggled, toggle] = useToggle(false)
    const searchParams = useSearchParams();
    const search = (searchParams.get('query') || '').toLowerCase().trim();
    const t = useScopedI18n('job')
    const s = useScopedI18n('Search')

    return (
        <>
            <div className={styles.rowVacancies}>
                <h3 className={`${styles.title_jobs} font-poppions-medium`}>
                    {t('job_title')}
                    {search && (
                        <div className='font-poppions-light'>
                            {s('search_text')} :
                            <span>{search}</span>
                        </div>
                    )}
                </h3>

                <button onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
                    </svg>
                </button>
            </div>

            <MobileFIlter isToggled={isToggled} toggle={toggle} />
        </>
    );
}



export default FilterButton
