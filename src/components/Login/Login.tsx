import React from 'react';
import styles from './Login.module.css';
import { LoginAccount } from '@/lib/actions/action';

const Login: React.FC = async () => {

    return (
        <section className={styles.content}>
            <div className={`${styles.login} font-poppions-light`}>
                <h3> Login </h3>
                <form action={LoginAccount}>
                    <input name='login' required type="text" placeholder="Login" />
                    <input name='password' required type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
