'use client'

import React, { useRef, useState } from 'react'
import styles from './AdminPost.module.css'
import ReactQuill from 'react-quill';
import { useScopedI18n } from '@/locales/client'
import 'react-quill/dist/quill.snow.css';
import { VacancyPostFromAdmin } from '@/lib/actions/action'

const AdminPostForm: React.FC = () => {

    const t = useScopedI18n('create')
    const [isFormValid, setIsFormValid] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const getJobSubmitted = () => {

        if (isFormValid) {
            window.location.href = '/';
        }
    }

    const modules = {
        toolbar: [
            [{ 'header': '2' }],
            ['bold'], ['underline'],
            // [{ 'list': 'ordered' },],
            [{ 'list': 'bullet' },],
            ['link'],
        ]
    };

    const handleInputChange = () => {
        const form = formRef.current;
        if (!form) return;

        const inputs = form.querySelectorAll<HTMLInputElement>('input[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
            }
        });

        const hiddenDescInput = document.getElementById("hiddenDescInput") as HTMLInputElement;

        if (!hiddenDescInput.value) {
            isValid = false;
        }

        setIsFormValid(isValid);
    };

    const [jobTitle, setJobTitle] = useState<string>('');

    const handleJobTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const formattedPath = value.trim().replace(/\s+/g, '-');
        setJobTitle(value);
    };

    return (
        <section className={`${styles.create} container`}>
            <h2 className='font-poppions-light'>
                {t('title_1')}
                <span>{t('title_2')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path></svg>
            </h2>
            <div className={styles.content}>
                <form ref={formRef} onChange={handleInputChange} action={VacancyPostFromAdmin} className='font-poppions-light'>

                    <label htmlFor="job_name">{t('job_title')}</label>

                    <input
                        required
                        name="job_title"
                        type="text"
                        id="job_name"
                        placeholder="Developer"
                        value={jobTitle}
                        onChange={handleJobTitleChange}
                    />

                    <label htmlFor='path'>Url</label>
                    <input
                        required
                        name="path"
                        type="text"
                        id="path"
                        placeholder="Url"
                    />

                    <label htmlFor="Company"> {t("Company")} </label>
                    <input required name='company_name' type="text" id='Company' placeholder='Apple' />

                    <label htmlFor="Description"> {t('Desc')} ({t('optional')}) </label>
                    <textarea name="about_company" placeholder={t('InputDesc')} className='font-poppions-light' id="Description"></textarea>

                    <label htmlFor="logo"> {t('Logo')} </label>
                    <input required name='company_logo' type="text" id='logo' placeholder={t('Logoİnput')} />

                    <label htmlFor="type"> {t('Type')} </label>
                    <select required name="job_type" className='font-poppions-light' id="type">
                        <option defaultValue='' value='' hidden> {t('TypeText')} </option>
                        <option value="commission"> {t('commission')} </option>
                        <option value="freelance"> {t('freelance')} </option>
                        <option value="fullTime"> {t('fullTime')} </option>
                        <option value="internship"> {t('internship')} </option>
                        <option value="partTime"> {t('partTime')} </option>
                        <option value="volunteer"> {t('volunteer')} </option>
                        <option value="Scholarship"> {t('Scholarship')} </option>
                    </select>

                    <label htmlFor="category"> {t('category')} </label>
                    <select required name="category" className='font-poppions-light' id="category">
                        <option defaultValue='' value='' hidden> {t('TypeText')} </option>
                        <option value="design"> {t('design')} </option>
                        <option value="sales"> {t('sales')} </option>
                        <option value="marketing"> {t('marketing')} </option>
                        <option value="finance"> {t('finance')} </option>
                        <option value="technology"> {t('technology')} </option>
                        <option value="bussiness"> {t('bussiness')} </option>
                        <option value="education"> {t('education')} </option>
                        <option value="healthcare"> {t('healthcare')} </option>
                        <option value="restaurants"> {t('restaurants')} </option>
                        <option value="engineer"> {t('engineer')} </option>
                        <option value="hr"> {t('hr')} </option>
                    </select>

                    <label htmlFor="Location"> {t('Location')} </label>
                    <input required name='location' type="text" id='Location' placeholder='Baku, Azerbaijan' />

                    <label> {t('ApplyMethod')} </label>
                    <div className={styles.formFlex}>
                        <div>
                            <input name='apply_method_1' type="mail" placeholder='azar@gmail.com' />
                        </div>
                        <span>{t('or')}</span>
                        <div>
                            <input name='apply_method_2' type="text" placeholder='azarahmadov.com' />
                        </div>
                    </div>

                    <label> {t('Description')} </label>
                    <input required type="hidden" name="desc" id="hiddenDescInput" />

                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        className={`${styles.quill} font-poppions-light`}
                        onChange={(content) => {
                            const hiddenDescInput = document.getElementById("hiddenDescInput") as HTMLInputElement;
                            if (hiddenDescInput) {
                                hiddenDescInput.value = content;
                                handleInputChange(); t
                            } else {
                                console.error("Element with ID 'hiddenDescInput' not found.");
                            }
                        }}
                    />

                    <label htmlFor="Salary"> {t('Salary')} ({t('optional')}) </label>
                    <input name='salary'
                        type="text"
                        id='Salary'
                        placeholder={t('salary_txt')}
                    />

                    <label> {t('postDate')} </label>
                    <input
                        name='last_date'
                        id='date'
                        required
                        placeholder={t('datePlaceholder')}
                        type="text"
                    />
                    <button onClick={getJobSubmitted} className={`${!isFormValid && styles.disable} font-poppions-medium`} disabled={!isFormValid}> {t('Send')} </button>
                </form>
            </div>
        </section>
    )
}

export default AdminPostForm