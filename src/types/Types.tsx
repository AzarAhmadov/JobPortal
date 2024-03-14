export type Vacancy = {
    id: number,
    img: string;
    company_name: string;
    job: string;
    path: string;
    detail_jobs: {
        location: string;
        time: string;
        time_post: string;
    }[];
    date: string;
    salary?: string;
    desc: string;
    category: string;
};

export type CategoryKey = 'design' | 'service' | 'sales' | 'marketing' | 'finance' | 'technology' | 'engineer' | 'bussiness' | 'service' | 'education' | 'healthcare' | 'restaurants' | 'hr';

export type CategoryType = {
    title: string;
    path: string;
    icon: React.ReactNode;
}

export type JobKey = 'Commission' | 'Freelance' | 'Full Time' | 'Internship' | 'Part Time' | 'Volunteer' | 'Scholarship';

export type JobCategoriesKey = 'construction' | 'design' | 'education' | 'finance' | 'healthcare' | 'SosialServices';