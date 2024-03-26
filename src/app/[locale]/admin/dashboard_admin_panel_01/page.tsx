import DashBoard from '@/components/DashBoard/DashBoard'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    },
};

const Page: React.FC = async ({ searchParams }: any) => {
    const page = searchParams && 'page' in searchParams ? searchParams['page'] : '1';
    const per_page = searchParams && 'per_page' in searchParams ? searchParams['per_page'] : '10';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page)

    return (
        <DashBoard start={start} end={end} />
    )
}

export default Page
