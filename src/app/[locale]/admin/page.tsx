import Login from '@/components/Login/Login'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    },
};

const page = async () => {

    return (
        <Login />
    )
}

export default page
