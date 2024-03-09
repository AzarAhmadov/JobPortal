'use client'

import React from 'react'
import { useChangeLocale, useCurrentLocale } from '../../locales/client'
import styles from './LocaleSwitcher.module.css'

const LocaleSwitcher = () => {

    const changeLocale = useChangeLocale()
    const currentLocale = useCurrentLocale()

    return (
        <div>
            <select value={currentLocale} className={`${styles.select} font-poppions-light`} name="lang" id="lang" onChange={(e) => changeLocale(e.target.value as "en" | "az")}>
                <option value="en">🇺🇸 ENG</option>
                <option value="az">🇦🇿 AZE</option>
            </select>
        </div>
    )
}

export default LocaleSwitcher
