'use client'

import React, { useRef, useState } from 'react'
import styles from './Hero.module.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useScopedI18n } from '@/locales/client'
import { useDebouncedCallback } from 'use-debounce'

const Hero: React.FC = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const inputRef = useRef<HTMLInputElement | any>();
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)

        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }

        replace(`${pathName}?${params.toString()}`)
    }, 300)

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const searchTerm = inputRef.current.value.trim();
        handleSearch(searchTerm);
    }

    const handleReset = () => {
        setInputValue("");
        inputRef.current.value = '';
        replace(pathName);
    }

    const t = useScopedI18n('hero')

    return (
        <section className={styles.hero}>
            <div className={styles.row}>
                <h1 className={`${styles.title} font-poppions-medium `}>
                    {t('top_text')}
                    <span>
                        {t('bottom_line_text')}
                        <svg width="241.000000" height="11.378906" viewBox="0 0 241 11.3789" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs />
                            <path id="Vector" d="M5.13867 5.83789C7.02539 5.83789 9.00293 5.77832 10.8896 5.71875C11.6982 5.71875 12.417 5.65918 13.2256 5.65918C16.6396 5.54004 20.0547 5.4209 23.4688 5.30176C27.6016 5.18262 31.6455 5.00391 35.7783 4.88477C41.6191 4.64648 47.459 4.46777 53.2998 4.22949C54.6475 4.16992 55.9951 4.16992 57.3428 4.11035C60.7568 3.99121 64.1719 3.87207 67.5859 3.8125C71 3.69336 74.415 3.57422 77.8291 3.51465C79.1768 3.45508 80.5244 3.39551 81.8721 3.39551C87.2637 3.27637 92.7441 3.15723 98.1357 3.03809C101.46 2.97852 104.784 2.91895 108.199 2.7998C109.547 2.7998 110.805 2.74023 112.152 2.74023C117.364 2.68066 122.665 2.62109 127.877 2.56152C133.088 2.50195 138.21 2.44238 143.421 2.38281C144.769 2.38281 146.116 2.38281 147.554 2.38281C150.969 2.38281 154.293 2.38281 157.707 2.38281C163.009 2.38281 168.22 2.38281 173.521 2.32324C175.229 2.32324 176.936 2.32324 178.643 2.32324C182.237 2.32324 185.831 2.32324 189.425 2.32324C189.694 2.32324 190.054 2.32324 190.323 2.32324C182.237 2.38281 174.061 2.44238 165.974 2.56152C162.56 2.62109 159.234 2.62109 155.82 2.68066C154.383 2.68066 152.855 2.68066 151.418 2.74023C146.476 2.7998 141.624 2.91895 136.682 2.97852C131.021 3.09766 125.36 3.15723 119.7 3.27637C118.712 3.27637 117.813 3.33594 116.825 3.33594C113.77 3.45508 110.805 3.51465 107.75 3.63379C101.64 3.8125 95.5303 3.99121 89.4199 4.16992C88.5215 4.16992 87.623 4.22949 86.7246 4.28906C83.7598 4.4082 80.7041 4.58691 77.7393 4.70605C72.3477 4.94434 67.0469 5.18262 61.6562 5.4209C60.2178 5.48047 58.6904 5.59961 57.2529 5.65918C53.8389 5.83789 50.4238 6.0166 47.0098 6.25488C42.6973 6.49316 38.2939 6.73145 33.9814 6.9707C27.9609 7.32812 21.8516 7.68555 15.8311 8.04297C14.3936 8.10254 12.9561 8.22168 11.4287 8.28125C8.82324 8.45996 6.2168 8.63867 3.61133 8.81738C3.3418 8.81738 3.07227 8.93652 3.07227 9.1748C3.07227 9.35352 3.3418 9.53223 3.61133 9.53223C4.59961 9.53223 5.49805 9.5918 6.48633 9.5918C6.39648 9.77051 6.30664 9.94922 6.30664 10.1279C6.30664 10.7832 7.11523 11.3789 8.19434 11.3789C15.6514 11.0811 23.0195 10.7236 30.4775 10.4854C36.9463 10.3066 43.416 10.0684 49.8848 9.88965C56.9834 9.65137 64.1719 9.41309 71.2695 9.23438C73.5166 9.1748 75.7627 9.11523 78.0088 8.99609C78.6377 8.99609 79.2666 8.93652 79.9854 8.93652C91.4863 8.75781 102.987 8.51953 114.488 8.34082C120.599 8.22168 126.798 8.10254 132.908 8.04297C135.154 7.9834 137.311 7.9834 139.558 7.92383C151.328 7.80469 163.099 7.68555 174.869 7.56641C179.9 7.50684 184.933 7.44727 189.964 7.3877C194.277 7.32812 198.59 7.32812 202.902 7.20898C206.497 7.14941 210.001 7.03027 213.595 6.9707C215.393 6.91113 217.189 6.91113 218.896 6.85059C222.939 6.67188 226.983 6.49316 231.026 6.31445C230.757 6.55273 230.757 6.91113 230.847 7.14941C230.937 7.44727 231.206 7.68555 231.655 7.80469C232.015 7.92383 232.554 8.04297 232.913 7.92383C233.812 7.68555 234.71 7.44727 235.52 7.20898C235.52 7.20898 235.52 7.20898 235.429 7.20898C235.52 7.20898 235.52 7.14941 235.609 7.14941C235.699 7.14941 235.789 7.08984 235.789 7.08984L235.699 7.08984C236.148 6.9707 236.598 6.85156 237.137 6.67188C237.586 6.55273 238.125 6.37402 238.574 6.25488C239.113 6.07617 239.562 5.89746 240.102 5.71875C240.641 5.54004 241 5.06348 241 4.64648C241 4.4082 240.91 4.22949 240.73 3.99121C240.551 3.75293 240.102 3.45508 239.652 3.39551C239.203 3.33594 238.754 3.27637 238.305 3.27637C238.215 3.27637 238.125 3.27637 238.035 3.27637C237.766 3.27637 237.406 3.27637 237.137 3.33594C236.418 3.39551 235.789 3.45508 235.069 3.45508C234.53 3.45508 233.991 3.51465 233.362 3.51465C231.835 3.57422 230.397 3.63379 228.87 3.75293C228.511 3.75293 228.062 3.8125 227.702 3.8125C227.882 3.69336 227.972 3.57422 227.972 3.45508C228.062 3.33594 228.062 3.2168 228.062 3.09766C228.062 3.03809 228.062 2.91895 228.151 2.85938C228.151 2.74023 228.151 2.62109 228.062 2.56152C228.062 2.56152 228.151 2.56152 228.151 2.50195C228.421 2.38281 228.69 2.26367 228.87 2.02539C229.05 1.84668 229.14 1.6084 229.14 1.37012C229.14 1.13184 229.05 0.953125 228.87 0.714844C228.78 0.655273 228.69 0.536133 228.601 0.476562C228.331 0.297852 228.062 0.238281 227.792 0.178711C227.253 0.0595703 226.624 0 225.995 0C225.456 0 225.007 0 224.467 0C223.748 0 223.029 0 222.311 0C221.322 0 220.244 0 219.256 0C216.561 0 213.865 0 211.169 0C208.653 0 206.048 0 203.532 0C201.195 0 198.949 0 196.613 0C187.358 0 178.193 0.0595703 168.938 0.119141C162.021 0.178711 155.102 0.238281 148.183 0.238281C145.128 0.238281 141.983 0.297852 138.929 0.357422C132.01 0.476562 125.091 0.536133 118.173 0.655273C116.196 0.655273 114.219 0.714844 112.242 0.714844C111.074 0.714844 109.996 0.774414 108.828 0.774414C101.999 0.953125 95.1709 1.13184 88.3418 1.31055C86.2754 1.37012 84.209 1.42969 82.0518 1.48926C80.8838 1.48926 79.7158 1.54883 78.5479 1.6084C71.7188 1.84668 64.9805 2.08496 58.1514 2.32324C54.6475 2.44238 51.1436 2.56152 47.6387 2.74023C41.6191 2.97852 35.5986 3.2168 29.6689 3.51465C24.457 3.75293 19.2461 3.93164 14.0342 4.11035C13.2256 4.16992 12.417 4.16992 11.5186 4.22949C10.1709 4.28906 8.82324 4.28906 7.47559 4.34863C6.30664 4.4082 5.13867 4.4082 3.88086 4.4082C3.79102 4.22949 3.43164 4.05078 3.16211 4.05078C2.35352 4.11035 1.63477 4.16992 0.826172 4.22949C0.466797 4.22949 0.107422 4.34863 0.0175781 4.64648C-0.0722656 4.94434 0.197266 5.24219 0.556641 5.30176C0.916016 5.36133 1.18555 5.4209 1.54492 5.48047C1.9043 5.54004 2.17383 5.54004 2.5332 5.54004C3.43164 5.77832 4.24023 5.77832 5.13867 5.83789ZM215.393 3.87207C216.471 3.87207 217.639 3.87207 218.717 3.87207C218.807 4.05078 218.986 4.16992 219.166 4.28906C218.717 4.28906 218.268 4.34863 217.908 4.34863C217.1 4.34863 216.291 4.4082 215.482 4.4082C211.888 4.46777 208.384 4.58691 204.79 4.64648C203.172 4.70605 201.555 4.76562 199.938 4.76562C197.422 4.76562 194.816 4.8252 192.301 4.8252C186.46 4.88477 180.709 4.94434 174.869 5.00391C163.548 5.12305 152.316 5.24219 140.995 5.36133C132.908 5.4209 124.821 5.59961 116.735 5.77832C104.604 6.0166 92.3848 6.19531 80.2549 6.43359C77.8291 6.49316 75.4033 6.55273 72.9775 6.67188C66.0586 6.91113 59.1396 7.08984 52.2217 7.32812C45.4824 7.56641 38.6533 7.74512 31.915 7.9834C31.2861 7.9834 30.6572 8.04297 30.0283 8.04297C31.8252 7.92383 33.7119 7.86426 35.5088 7.74512C41.8887 7.44727 48.2676 7.08984 54.6475 6.79102C56.8936 6.67188 59.1396 6.55273 61.2959 6.43359C62.4648 6.37402 63.6328 6.31445 64.7109 6.31445C71.3594 6.07617 78.0088 5.77832 84.6582 5.54004C85.916 5.48047 87.2637 5.4209 88.5215 5.36133C90.4082 5.30176 92.2949 5.24219 94.0918 5.24219C100.921 5.06348 107.75 4.88477 114.578 4.70605C116.106 4.64648 117.634 4.64648 119.071 4.58691C119.431 4.58691 119.88 4.58691 120.239 4.58691C121.317 4.58691 122.396 4.58691 123.384 4.52734C130.213 4.4082 137.131 4.34863 143.96 4.22949C147.104 4.16992 150.25 4.11035 153.395 4.11035C163.548 4.05078 173.791 3.99121 183.944 3.93164C194.637 3.93164 205.06 3.93164 215.393 3.87207Z" fill="#26A4FF" fillOpacity="1.000000" fillRule="nonzero" />
                        </svg>
                    </span>
                </h1>
                <p className={`${styles.desc} font-poppions-thin `}>
                    {t('bottom_text')}
                </p>
                <form onSubmit={handleSubmit} className={`${styles.form} font-poppions-light`}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <div>
                            <input
                                type="text"
                                placeholder={t('placeholder')}
                                defaultValue={searchParams.get('query') ?? ''}
                                ref={inputRef}
                                onChange={(event) => handleInputChange(event.target.value)}
                            />

                            {
                                inputValue.length >= 1 && <span onClick={handleReset} className={styles.reset}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                </span>

                            }
                        </div>

                        <button name='search' className={`${styles.search} font-poppions-light`}>
                            {t('search')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Hero