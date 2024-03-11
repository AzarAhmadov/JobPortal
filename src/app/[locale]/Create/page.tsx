'use client'

import React from 'react'
import styles from './Create.module.css'
import Heading from '@/common/Heading/Heading'
import ReactQuill from 'react-quill';
import { useScopedI18n } from '@/locales/client'
import 'react-quill/dist/quill.snow.css';

const page: React.FC = async () => {

    const t = useScopedI18n('create')

    const modules = {
        toolbar: [
            [{ 'header': '2' }],
            ['bold'],['underline'],
            [{ 'list': 'ordered' },],
            [{ 'list': 'bullet' },],
            ['link'],
        ]
    };

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

                        <label htmlFor="Company"> {t("Company")} </label>
                        <input type="text" id='Company' placeholder='Apple' />

                        <label htmlFor="Description"> {t('Desc')} </label>
                        <textarea name="Description" placeholder={t('InputDesc')} className='font-poppions-light' id="Description"></textarea>

                        <label htmlFor="logo"> {t('Logo')} </label>
                        <input type="text" id='logo' placeholder={t('Logoİnput')} />

                        <label htmlFor="type"> {t('Type')} </label>
                        <select name="type" className='font-poppions-light' id="type">
                            <option selected value='' hidden> {t('TypeText')} </option>
                            <option value="0"> {t('commission')} </option>
                            <option value="1"> {t('freelance')} </option>
                            <option value="2"> {t('fullTime')} </option>
                            <option value="3"> {t('internship')} </option>
                            <option value="4"> {t('partTime')} </option>
                            <option value="5"> {t('volunteer')} </option>
                            <option value="6"> {t('Scholarship')} </option>
                        </select>

                        <label htmlFor="category"> {t('category')} </label>
                        <select name="category" className='font-poppions-light' id="category">
                            <option selected value='' hidden> {t('TypeText')} </option>
                            <option value="0"> {t('design')} </option>
                            <option value="1"> {t('sales')} </option>
                            <option value="2"> {t('marketing')} </option>
                            <option value="3"> {t('finance')} </option>
                            <option value="4"> {t('technology')} </option>
                            <option value="5"> {t('bussiness')} </option>
                            <option value="6"> {t('education')} </option>
                            <option value="7"> {t('healthcare')} </option>
                            <option value="8"> {t('restaurants')} </option>
                            <option value="9"> {t('engineer')} </option>
                            <option value="10"> {t('hr')} </option>
                        </select>

                        <label htmlFor="Location"> {t('Location')} </label>
                        <input type="text" id='Location' placeholder='Baku, Azerbaijan' />

                        <label> {t('ApplyMethod')} </label>
                        <div className={styles.formFlex}>
                            <div>
                                <input type="text" placeholder='azar@gmail.com' />
                            </div>
                            <span>{t('or')}</span>
                            <div>
                                <input type="text" id='Location' placeholder='azarahmadov.com' />
                            </div>
                        </div>

                        <label> {t('Description')} </label>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            className={`${styles.quill} font-poppions-light`}
                        />

                        <label htmlFor="Salary"> {t('Salary')} </label>
                        <input type="number" id='Salary' placeholder='1000 AZN' />
                        <button className='font-poppions-medium'> {t('Send')} </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default page
