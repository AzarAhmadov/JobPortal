'use client'

import React, { FormEvent, useRef } from 'react';
import styles from './Login.module.css';

const Login: React.FC = async () => {

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const getDashboard = (e: FormEvent) => {
        e.preventDefault()

        const loginValue = loginRef.current?.value
        const passwordValue = passwordRef.current?.value

        if (process.env.NEXT_PUBLIC_USER === loginValue?.trim() && process.env.NEXT_PUBLIC_PASSWORD === passwordValue?.trim()) {
            window.location.href = '/admin/dashboard'
        } else {
            window.location.href = '/admin'
        }
    }

    return (
        <section className={styles.content}>
            <div className={`${styles.login} font-poppions-light`}>
                <h3> Login </h3>
                <form onSubmit={getDashboard}>
                    <input ref={loginRef} name='login' required type="text" placeholder="Login" />
                    <input ref={passwordRef} name='password' required type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
