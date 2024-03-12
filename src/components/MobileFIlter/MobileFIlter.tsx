import React, { memo } from 'react'
import styles from './MobileFIlter.module.css'
import { JobCategories, JobTranslations, categories, categoryTranslations, jobType } from "@/constants/data";
import { ToogleProps } from '../MobileMenu/MobileMenu';
import ToggleBodyClass from '../ToggleBodyClass/ToggleBodyClass';
import { useScopedI18n } from '@/locales/client';

const MobileFIlter: React.FC<ToogleProps> = ({ toggle, isToggled }) => {

    const t = useScopedI18n('filter')
    const c = useScopedI18n('categories')

    return (
        <section className={`${styles.filter} ${isToggled ? styles.active : styles.filter}`}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h4 className='font-poppions-light'> {t('more_filter')} </h4>
                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>

                <div className={styles.row}>
                    <div>
                        <h3 className={`${styles.title} font-poppions-light`}>
                            {t('job_type')}
                        </h3>

                        <ul className={`${styles.list} font-poppions-thin`}>
                            {
                                jobType.map((el, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" id={`checkbox_${el.id}`} />
                                        <label htmlFor={`checkbox_${el.id}`}>
                                            {t(JobTranslations[idx])}
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className={`${styles.title} font-poppions-light`}>
                            {t('categories')}
                        </h3>

                        <ul className={`${styles.list} font-poppions-thin`}>
                            {
                                categories.map((el, idx) => (
                                    <li key={idx}>
                                        <input type="checkbox" id={el.label} />
                                        <label htmlFor={el.label}>
                                            {c(categoryTranslations[idx])}
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h3 className={`${styles.title} font-poppions-light`}>
                            {t('salary')}
                        </h3>

                        <ul className={`${styles.list} font-poppions-thin`}>
                            <li>
                                <input type="checkbox" id="salary_title" />
                                <label htmlFor="salary_title">
                                    {t('salary_title')}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.action}>
                    <button className={`${styles.send} font-poppions-light`}>
                        {t('search')}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </button>

                    <button className={`${styles.reset} font-poppions-light`}>
                        {t('reset')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"></path><path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"></path></svg>
                    </button>
                </div>

            </div>
            <ToggleBodyClass isToggled={isToggled} />
        </section>
    )
}

export default memo(MobileFIlter)
