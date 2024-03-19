
'use client'

import React from 'react';
import styles from './LoadMore.module.css';

const LoadMore: React.FC = () => {

    return (
        <button className={`${styles.button} font-poppins-medium`}>
            Load More
        </button>
    );
}

export default LoadMore;
