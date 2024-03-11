import React from 'react'
import styles from './Create.module.css'
import Heading from '@/common/Heading/Heading'
import { getScopedI18n } from '@/locales/server'

const page: React.FC = async () => {

    const t = await getScopedI18n('create')

    return (
        <>
            <Heading />
            <section className={`${styles.create} container`}>
                <h2 className='font-poppions-light'>
                    {t('title_1')}
                    <span>{t('title_2')}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path></svg>
                </h2>
                <div className={styles.content}>
                    <form action="" className='font-poppions-light'>

                        <label htmlFor="Company"> Company </label>
                        <input type="text" id='Company' placeholder='Apple' />

                        <label htmlFor="Description"> Description </label>
                        <textarea name="Description" placeholder='write about company' className='font-poppions-light' id="Description"></textarea>

                        <label htmlFor="logo"> Company logo </label>
                        <input type="text" id='logo' placeholder='add a company logo url' />

                        <label htmlFor="type"> Job Type </label>
                        <select name="type" className='font-poppions-light' id="type">
                            <option selected value='' hidden> Job Type </option>
                            <option value="0"> Commission</option>
                            <option value="1"> Freelance </option>
                            <option value="2"> Full time </option>
                            <option value="3"> Part time </option>
                        </select>

                        <label htmlFor="Location"> Location </label>
                        <input type="text" id='Location' placeholder='Baku, Azerbaijan' />

                        <label>Method of application</label>
                        <div className={styles.formFlex}>
                            <div>
                                <input type="text" placeholder='azar@gmail.com' />
                            </div>
                            <span>or</span>
                            <div>
                                <input type="text" id='Location' placeholder='azarahmadov.com' />
                            </div>
                        </div>

                        <label htmlFor="Salary"> Salary </label>
                        <input type="number" id='Salary' placeholder='1000 AZN' />
                        <button className='font-poppions-medium'> Send </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page
