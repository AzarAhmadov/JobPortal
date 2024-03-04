'use client'

import React from 'react'
import Heading from '@/common/Heading/Heading'
import styles from '../Vacancy.module.css'
import { VacanciesData } from '@/constants/data'
import { useParams } from 'next/navigation'

const page: React.FC = () => {

    const { slug } = useParams();
    const vacancy = VacanciesData.find(item => item.path === slug);

    return (
        <>
            <Heading />

            <div className='container'>
                <div className={styles.apply}>
                    <img src={vacancy?.img} alt={vacancy?.company_name} />
                    <div className={styles.row}>
                        <div className={styles.top}>
                            <h4 className={`${styles.job} font-poppions-medium`}>{vacancy?.job}</h4>
                            <div>
                                <h4 className={`${styles.name} font-poppions-light`}>{vacancy?.company_name}</h4>
                                <span className={styles.circle}></span>
                                <span className='font-poppions-light'>{vacancy?.detail_jobs.map(el => el.location)}</span>
                                <span className={styles.circle}></span>
                                <span className='font-poppions-light'>{vacancy?.detail_jobs.map(el => el.time)}</span>
                            </div>
                        </div>
                        <a className='font-poppions-light' href=''>Apply</a>
                    </div>
                </div>

                <div className={styles.detail}>
                    <div className={styles.detailRow}>
                        <div className={styles.left}>
                            <div>
                                <h3 className='font-poppions-medium'>
                                    Description
                                </h3>
                                <p className='font-poppions-thin'>
                                    {vacancy?.desc}
                                </p>
                            </div>

                            <div>
                                <h3 className='font-poppions-medium'>
                                    Responsibilities
                                </h3>
                                {vacancy?.list && <div dangerouslySetInnerHTML={{ __html: vacancy?.list }} />}
                            </div>

                        </div>
                        <div className={styles.right}>
                            <h3 className='font-poppions-medium'>
                                About this role
                            </h3>
                            <ul>
                                <li>
                                    <span className={`${styles.title} font-poppions-thin`}>Job Posted On</span>
                                    <span className={`${styles.desc} font-poppions-medium`}>July 31, 2021</span>
                                </li>
                                <li>
                                    <span className={`${styles.title} font-poppions-thin`}>Job Type</span>
                                    <span className={`${styles.desc} font-poppions-medium`}>
                                        {vacancy?.detail_jobs.map((el) => (
                                            el.time
                                        ))}
                                    </span>
                                </li>
                                <li>
                                    <span className={`${styles.title} font-poppions-thin`}>Salary</span>
                                    <span className={`${styles.desc} font-poppions-medium`}>{vacancy?.salary}</span>
                                </li>
                            </ul>
                            <div>
                                <h3 className='font-poppions-medium'>
                                    Categories
                                </h3>
                                <button>
                                    {vacancy?.category}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
