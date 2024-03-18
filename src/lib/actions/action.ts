"use server"

import { revalidatePath } from "next/cache";
import { VacancyDB } from "../models/models";
import { connectToDb } from "../utils/renderFunction";

export const Vacancy = async(formData: FormData) => {
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
        salary,
        job_title,
        date,
        path
    } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newVacancy = new VacancyDB({
            company_name,
            about_company,
            company_logo,
            job_type,
            category,
            location,
            apply_method_1,
            apply_method_2,
            desc,
            salary,
            date,
            job_title,
            path
        });

        await newVacancy.save();
        revalidatePath("/create");
        revalidatePath("/");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}