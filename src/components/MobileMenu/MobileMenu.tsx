'use client'

import React, { memo, useEffect } from 'react'
import styles from './MobileMenu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ToggleBodyClass from '../ToggleBodyClass/ToggleBodyClass'
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher'
import { useScopedI18n } from '@/locales/client'
import useToggle from '@/hooks/useToggle'
export interface ToogleProps {
    toggle?: () => void
    isToggled?: boolean
}

const MobileMenu: React.FC<ToogleProps> = ({ toggle, isToggled }) => {

    const pathname = usePathname();

    const isActive = (paths: string[]) => {
        return paths.includes(pathname);
    };

    const [isToggledTheme, toggleTheme] = useToggle(
        localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        localStorage.setItem('theme', isToggledTheme ? 'dark' : 'light');

        if (isToggledTheme) {
            document.body.classList.add('theme');
        } else {
            document.body.classList.remove('theme');
        }
    }, [isToggledTheme])

    const t = useScopedI18n('mobile_menu')

    return (
        <nav className={`${styles.nav} ${isToggled ? styles.active : styles.nav}`}>
            <div>
                <ul className='font-poppions-thin'>
                    <li onClick={toggle}>
                        <Link href='/' className={isActive(['/az', '/en']) ? styles.active : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
                            {t('link_1')}
                        </Link>
                    </li>
                    <li onClick={toggle}>
                        <Link href='/Categories' className={isActive(['/az/Categories', '/en/Categories']) ? styles.active : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
                            {t('link_2')}
                        </Link>
                    </li>
                    <li onClick={toggle}>
                        <Link href='/Create' className={isActive(['/az/Create', '/en/Create']) ? styles.active : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                            {t('link_3')}
                        </Link>
                    </li>
                    {/* <li onClick={toggle}>
                        <Link href='/Selected' className={isActive(['/az/Selected', '/en/Selected']) ? styles.active : ''}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path></svg>
                            {t('link_4')}
                        </Link>
                    </li> */}
                </ul>

                <ul className={`${styles.bottom} font-poppions-thin`}>
                    <li>
                        {t('theme')}:
                        {
                            isToggledTheme ?
                                <button onClick={toggleTheme} className={styles.mode}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                                </button> :
                                <button onClick={toggleTheme} className={styles.mode}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>
                                </button>
                        }
                    </li>
                    <li>
                        {t('lang')}:
                        <LocaleSwitcher />
                    </li>
                </ul>
            </div>

            <ToggleBodyClass isToggled={isToggled} />
        </nav>
    )
}

export default memo(MobileMenu)
