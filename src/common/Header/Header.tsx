'use client'

import React, { useEffect } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import useToggle from '@/hooks/useToggle';
import dynamic from 'next/dynamic';
const MobileMenu = dynamic(() => import('@/components/MobileMenu/MobileMenu'), { ssr: false });
import LocaleSwitcher from '@/components/LocaleSwitcher/LocaleSwitcher';
import { useScopedI18n } from '../../locales/client'

const Header: React.FC = () => {

    const pathname = usePathname();

    const isActive = (paths: string[]) => {
        return paths.includes(pathname);
    };

    const [isToggled, toggle] = useToggle(false);

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

    const t = useScopedI18n('header')

    return (
        <>
            <header className={styles.header}>
                <div className={styles.row}>
                    <div>
                        <Link className={styles.logo} href={'/'}>
                            Job <span>Portal</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2zm-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10v9zm2-2v-5h2l.002 5H17z"></path></svg>
                        </Link>
                        <ul className={`${styles.list} font-poppions-light`}>
                            <li>
                                <Link href='/' className={isActive(['/az', '/en']) ? styles.active : ''}> {t('link_1')} </Link>
                            </li>
                            <li>
                                <Link href='/Categories' className={isActive(['/az/Categories', '/en/Categories']) ? styles.active : ''}> {t('link_2')} </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`${styles.list} font-poppions-light`}>
                            <li>
                                <Link className={styles.create} href={'/Create'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                                    {t('Create')}
                                </Link>
                            </li>
                            <li>
                                <button className={styles.mode}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path></svg>
                                </button>
                            </li>
                            <li>
                                <>
                                    {
                                        isToggledTheme ?
                                            <button onClick={toggleTheme} className={styles.mode}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                                            </button> :
                                            <button onClick={toggleTheme} className={styles.mode}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path></svg>
                                            </button>
                                    }
                                </>
                            </li>
                            <li>
                                <LocaleSwitcher />
                            </li>
                        </ul>

                        <button onClick={toggle} className={styles.bar}>
                            {
                                isToggled ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            }
                        </button>
                    </div>
                </div>
            </header>

            <MobileMenu toggle={toggle} isToggled={isToggled} />
        </>
    )
}

export default Header
