'use client'

import React, { useState } from "react";
import styles from './Filter.module.css'
import { categories, jobType } from "@/constants/data";

const Filter: React.FC = () => {

    const [activeSection, setActiveSection] = useState<number | null>(0);

    const toggleSection = (sectionIndex: number) => {
        setActiveSection(activeSection === sectionIndex ? null : sectionIndex);
    };

    return (
        <section className={styles.section}>
            <div className={styles.content}>

                <div className={`${styles.section} ${activeSection === 0 ? styles.active : ''}`}>
                    <h3 onClick={() => toggleSection(0)} className={`${styles.title} font-poppions-light`}>
                        Type of Employment
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </h3>

                    <ul className={`${styles.list} font-poppions-thin`}>
                        {jobType.map(item => (
                            <li key={item.id}>
                                <input type="checkbox" id={item.id} />
                                <label htmlFor={item.id}>{item.label}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.section} ${activeSection === 1 ? styles.active : ''}`}>
                    <h3 onClick={() => toggleSection(1)} className={`${styles.title} font-poppions-light`}>
                        Categories
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </h3>

                    <ul className={`${styles.list} font-poppions-thin`}>
                        {categories.map(item => (
                            <li key={item.id}>
                                <input type="checkbox" id={item.id} />
                                <label htmlFor={item.id}>{item.label}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`${styles.section} ${activeSection === 2 ? styles.active : ''}`}>
                    <h3 onClick={() => toggleSection(2)} className={`${styles.title} font-poppions-light`}>
                        Salary range
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                    </h3>

                    <ul className={`${styles.list} font-poppions-thin`}>
                        <li>
                            <input type="checkbox" id="salary" />
                            <label htmlFor="salary">Show only with salary</label>
                        </li>
                    </ul>
                </div>

                <button className={`${styles.send} font-poppions-light`}>
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </button>

                <button className={`${styles.reset} font-poppions-light`}>
                    Reset
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"></path><path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"></path></svg>
                </button>

            </div>
        </section>

    )
}

export default Filter;
