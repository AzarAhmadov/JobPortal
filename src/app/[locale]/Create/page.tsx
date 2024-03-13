import CreateVacancy from '@/components/Create/CreateVacancy'
import React from 'react'

export const metadata = {
    metadataBase: new URL("https://jobhubcenter.vercel.app/Create"),
    title: "Create | Job Hub Center",
    description: "create a vacancy",
};

const page = () => {
    return (
        <CreateVacancy />
    )
}

export default page
