'use client'

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { I18nProviderClient } from '@/locales/client';

interface Props {
    children: ReactNode;
}

const I18nProviderClientProvider: React.FC<Props> = ({ children }: Props) => {
    const pathname = usePathname();
    const parts = pathname.split('/');
    const languageCode = parts[1];

    return (
        <I18nProviderClient locale={languageCode}>
            {children}
        </I18nProviderClient>
    );
};

export default I18nProviderClientProvider;
