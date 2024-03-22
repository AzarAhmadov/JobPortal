import React from 'react'
import styles from './Job.module.css'

const page = () => {
    return (
        <section className={styles.job}>
            <div>
                <img src="https://i.pinimg.com/originals/8d/ac/4f/8dac4f8274a9ef0381d12b0ca30e1956.gif" alt="job-submitted" loading='lazy' />
                <h2 className='font-poppions-medium'>
                    İş tələbi uğurla yaradıldı
                    yoxlanıldıqdan sonra paylaşılacaq :)
                </h2>
            </div>
        </section>
    )
}

export default page
