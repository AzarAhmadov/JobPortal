'use client'

import React, { useRef, useState } from 'react';
import styles from './Login.module.css';
import config from '@/config';

const Login: React.FC = async () => {

    const textRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const getDashboard = (event: React.FormEvent) => {
        event.preventDefault();

        const login = textRef.current?.value;
        const password = passwordRef.current?.value;

        if (login === config.username && password === config.password) {
            window.location.href = config.dashboardRoute;
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    return (
        <section className={styles.content}>
            <div className={`${styles.login} font-poppions-light`}>
                <h3> Login </h3>
                <form onSubmit={getDashboard}>
                    <input ref={textRef} name='login' required type="text" placeholder="Login" />
                    <input ref={passwordRef} name='password' required type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            </div>
        </section>
    );
};

export default Login;
