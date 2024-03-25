import { GetVacanciesByAdmin, GetVacanciesByCategory } from "@/lib/data/data";

export default async function sitemap() {
    const baseUrl = 'https://jobhubcenter.vercel.app/az';
    const Categories = 'https://jobhubcenter.vercel.app/az/Categories';
    const Create = 'https://jobhubcenter.vercel.app/az/Create';
    const Vacancies = await GetVacanciesByAdmin();
    
    const VacanciesUrls = Vacancies?.map((vacancy) => {
        return {
            url: `${baseUrl}/Vacancies/${vacancy.path}/${vacancy._id}`,
            lastModified: new Date(),
        };
    }) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: Categories,
            lastModified: new Date(),
        },
        {
            url: Create,
            lastModified: new Date(),
        },
        ...VacanciesUrls,
    ];
}
