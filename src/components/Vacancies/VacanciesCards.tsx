import React from 'react'
import { Vacancy } from '@/types/Types'
import styles from './Vacancies.module.css'
import Link from 'next/link'

interface VacancyType {
    el: Vacancy
}

const VacanciesCards: React.FC<VacancyType> = ({ el }) => {
    return (
        <>
            <section className={styles.content}>
                <Link className={styles.row} href={''}>
                    <div>
                        <img className={styles.img} src={el.img} width={100} alt={el.company_name} />
                    </div>
                    <div className={styles.detail}>
                        <div>
                            <h5 className={`${styles.company_name} font-poppions-light`}>{el.company_name}</h5>
                            <h4 className={`${styles.job} font-poppions-medium`}>{el.job}</h4>
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
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                                {el.time}
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
                            <span className={`${styles.salary} font-poppions-medium`}>{el.salary} AZN</span>
                        </div>
                    </div>
                </Link>
                <div className={styles.like}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
                </div>
            </section>
        </>
    )
}

export default VacanciesCards
