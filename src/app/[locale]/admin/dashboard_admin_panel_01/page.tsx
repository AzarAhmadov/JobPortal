import DashBoard from '@/components/DashBoard/DashBoard'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    },
};

const Page: React.FC = async () => {
    return (
        <DashBoard />
    )
}

export default Page
