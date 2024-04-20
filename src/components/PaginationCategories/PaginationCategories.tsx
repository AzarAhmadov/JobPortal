'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './Pagination.module.css'

interface PaginationControlsProps {
    hasNextPage: boolean
    hasPrevPage: boolean
    data: any
}

const PaginationCategories: FC<PaginationControlsProps> = (
    {
        hasNextPage,
        hasPrevPage,
        data
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = parseInt(searchParams.get('page') ?? '1', 8)
    const per_page = parseInt(searchParams.get('per_page') ?? '8', 18)

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / per_page)

    return (
        <div className={styles.pagination}>
            {
                hasPrevPage && <button
                    className='bg-blue-500 text-white p-1'
                    disabled={!hasPrevPage}
                    onClick={() => {
                        router.push(`/Categories/services/?page=${Number(page) - 1}  `)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </button>
            }

            <div className={`${styles.count} font-poppions-light`}>
                {page} / {totalPages}
            </div>

            {
                hasNextPage && <button
                    className='bg-blue-500 text-white p-1'
                    disabled={!hasNextPage}
                    onClick={() => {
                        router.push(`/Categories/services/?page=${Number(page) + 1}`)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
            }
        </div>
    )
}

export default PaginationCategories