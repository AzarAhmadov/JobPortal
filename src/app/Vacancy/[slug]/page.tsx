'use client'

import React from 'react';
import Heading from '@/common/Heading/Heading';
import styles from '../Vacancy.module.css';
import { VacanciesData } from '@/constants/data';
import { useParams } from 'next/navigation';

const Page = () => {

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
                        <a className='font-poppions-light' href=''>Apply <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg></a>
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
    );
}

export default Page;
