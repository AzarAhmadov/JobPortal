'use client'

import React, { useEffect } from 'react'
import { useChangeLocale, useCurrentLocale } from '../../locales/client'
import styles from './LocaleSwitcher.module.css'

const LocaleSwitcher = () => {

    const changeLocale = useChangeLocale()
    const currentLocale = useCurrentLocale()

    useEffect(() => {
        const savedLocale = localStorage.getItem('selectedLocale')
        if (savedLocale) {
            changeLocale(savedLocale as "az" | "en")
        }
    }, [changeLocale])

    const handleChangeLocale = (locale: "az" | "en") => {
        changeLocale(locale)
        localStorage.setItem('selectedLocale', locale)
    }

    return (
        <div className={styles.switch}>
            <select
                value={currentLocale}
                className={`${styles.select} font-poppions-light`}
                name="lang"
                onChange={(e) => handleChangeLocale(e.target.value as "az" | "en")}
            >
                <option value="az">🇦🇿 AZE</option>
                <option value="en">🇺🇸 ENG</option>
            </select>
        </div>
    )
}

export default LocaleSwitcher

