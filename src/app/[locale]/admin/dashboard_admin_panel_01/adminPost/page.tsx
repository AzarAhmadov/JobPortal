import AdminPostForm from '@/components/AdminPostForm/AdminPostForm'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    },
};

const AdminPost = () => {
    return (
        <main >
            <AdminPostForm />
        </main>
    )
}

export default AdminPost
