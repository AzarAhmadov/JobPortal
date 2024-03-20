import React from 'react'
import styles from './admin.module.css'

const page: React.FC = () => {
    return (
        <section className={styles.content}>
            <div className={`${styles.login} font-poppions-light`}>
                <h3> Login  </h3>
                <form>
                    <input type="text" placeholder='Login' />
                    <input type="password" placeholder='Password' />
                </form>
                <button>
                    Login
                </button>
            </div>
        </section>
    )
}

export default page
