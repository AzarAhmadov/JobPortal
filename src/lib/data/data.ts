import { VacancyDB } from "../models/models";
import { connectToDb } from "../utils/renderFunction";

export const GetVacancies = async () => {
    try {
        connectToDb();
        const vacancies = await VacancyDB.find();
        return vacancies;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch getVacancy!");
    }
};

export const GetVacancy = async (id: string) => {
    try {
        connectToDb();
        const vacancy = await VacancyDB.findOne({ _id: id });
        return vacancy;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch getVacancyById!");
    }
};

export const GetVacanciesByCategory = async (category: string) => {
    try {
        connectToDb();
        const vacancies = await VacancyDB.find({ category: category });
        return vacancies;
    } catch (err) {
        console.log(err);
        throw new Error(`Failed to fetch vacancies for category: ${category}`);
    }
};