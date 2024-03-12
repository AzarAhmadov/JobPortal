import React, { memo } from 'react'
import { Vacancy } from '@/types/Types'
import styles from './Vacancies.module.css'
import Link from 'next/link'
export interface VacancyType {
    el: Vacancy
}

const VacanciesCards: React.FC<VacancyType> = ({ el }) => {

    return (
        <section className={styles.content}>
            <Link className={styles.row} href={`Vacancies/${el.path}`}>
                <div>
                    <img
                        className={styles.img}
                        src={el.img}
                        alt={el.company_name}
                        loading='lazy'
                    />
                </div>
                <div className={styles.detail}>
                    <div>
                        <h5 className={`${styles.company_name} font-poppions-light`}>{el.company_name}</h5>
                        <h4 className={`${styles.job} font-poppions-medium`}>
                            {el.job.length > 45 ? el.job.slice(0, 45) + '...' : el.job}
                        </h4>
                        <ul className={`${styles.list} font-poppions-light`}>
                            {
                                el.detail_jobs.map((el, idx) => (
                                    <React.Fragment key={idx}>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                            {el.location}
                                            <span className={styles.circle}></span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>
                                            {el.time_post}
                                        </li>
                                    </React.Fragment>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <span className={`${styles.salary} font-poppions-medium`}>{el.salary}</span>
                    </div>
                </div>
            </Link>
            <div className={styles.save}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path></svg>
            </div>
        </section>
    )
}

export default memo(VacanciesCards)
