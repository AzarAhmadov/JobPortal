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