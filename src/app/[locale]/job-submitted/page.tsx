import React from 'react'
import styles from './Job.module.css'

const page = () => {
    return (
        <section className={styles.job}>
            <img src="/images/job-submitted.png" alt="job-submitted" loading='lazy' />
            <h2 className='font-poppions-medium'>
                İş tələbi uğurla yaradıldı
                yoxlanıldıqdan sonra paylaşılacaq 🙂
            </h2>
        </section>
    )
}

export default page
