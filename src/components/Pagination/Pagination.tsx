'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './Pagination.module.css'

interface PaginationControlsProps {
    hasNextPage: boolean
    hasPrevPage: boolean
}

const Pagination: FC<PaginationControlsProps> = (
    {
        hasNextPage,
        hasPrevPage,
    }
) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '10'

    const totalPages = hasNextPage ? Math.ceil(11 / Number(per_page)) : Number(page)

    return (
        <div className={styles.pagination}>
            {hasPrevPage && (
                <button
                    name='arrow_left'
                    onClick={() => {
                        router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </button>
            )}

            <div className={`${styles.count} font-poppions-light`}>
                {page} / {totalPages}
            </div>
            {hasNextPage && (
                <button
                    name='arrow_right'
                    onClick={() => {
                        router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
            )}
        </div>
    )
}

export default Pagination
