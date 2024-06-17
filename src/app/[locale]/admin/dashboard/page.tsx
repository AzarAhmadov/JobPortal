import DashBoard from '@/components/DashBoard/DashBoard'
import { PagePropsParams } from '@/types/Types';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import React from 'react'

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    },
};

const getToken = () => {
    const token = cookies().get('token');

    return token;
};


const Page: React.FC<PagePropsParams> = async ({ searchParams }) => {

    const token = getToken();

    if (!token) {
        redirect('/admin')
    }

    const page = searchParams && 'page' in searchParams ? searchParams['page'] : '1';
    const per_page = searchParams && 'per_page' in searchParams ? searchParams['per_page'] : '10';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page)

    return (
        <DashBoard start={start} end={end} />
    )
}

export default Page
