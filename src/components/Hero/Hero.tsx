import React from 'react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.row}>
                <h1 className={`${styles.title} font-poppions-medium `}>
                    <span>
                        Where
                    </span>
                    Your Future Begins
                </h1>
                <p className={`${styles.desc} font-poppions-thin `}>
                    Join the 76 people who found their dream job with Job Portal in the last 30 days.
                </p>
                <form className={`${styles.form} font-poppions-light`}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <input type="text" placeholder='Job title or keyword' />
                        <button className={styles.search} type='submit'>
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Hero
