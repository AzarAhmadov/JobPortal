export type Vacancy = {
    id: number,
    company_logo: string;
    company_name: string;
    job_title: string;
    path: string;
    location: string;
    time: string;
    date: string;
    salary?: string;
    desc: string;
    category: string;
    createdAt: Date;
};

export interface IVacancies {
    q: string | undefined;
    type: string | undefined;
    category: string | undefined;
    salaried: string | undefined;
    start: number;
    end: number;
}

export interface PagePropsParams {
    params: {
        slug: string;
        paramsProps?: string;
    };
    searchParams?: {
        page?: string;
        per_page?: string;
    };
}
