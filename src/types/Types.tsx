export type Vacancy = {
    img: string;
    company_name: string;
    job: string;
    detail_jobs: {
        location: string;
        time: string;
        time_post: string;
    }[];
    salary?: string;
    desc: string;
};
