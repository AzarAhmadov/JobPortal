"use server"


export const Vacancy = (formData: FormData) => {
    const {
        company_name,
        about_company,
        company_logo,
        job_type,
        category,
        location,
        apply_method_1,
        apply_method_2,
        desc,
        salary
    } = Object.fromEntries(formData);

    console.log(company_name,
        about_company,
        company_logo,
        job_type,
        category,
        location,
        apply_method_1,
        apply_method_2,
        desc,
        salary)
}