import React from 'react'
import styles from './page.module.css'
import Filter from '@/components/Filter/Filter'
import Hero from '@/components/Hero/Hero'
import Vacancies from '@/components/Vacancies/Vacancies'

const page: React.FC = () => {
  return (
    <main>
      <Hero />
      <div className="container">
        <div className={styles.row}>
          <Filter />
          <Vacancies />
        </div>
      </div>
    </main>
  )
}

export default page
