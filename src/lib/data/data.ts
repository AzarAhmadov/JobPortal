import { VacancyDB, VacancyDBAdmin } from "../models/models";
import { connectToDb } from "../utils/renderFunction";

export const GetVacancies = async () => {
    try {
        connectToDb();
        const vacancies = await VacancyDB.find();
        return vacancies;
    } catch (err) {
        throw new Error("Failed to fetch getVacancy!");
    }
};

export const GetVacanciesByAdmin = async () => {
    try {
        connectToDb();
        const vacancies_admin = await VacancyDBAdmin.find();
        return vacancies_admin;
    } catch (err) {
        throw new Error("Failed to fetch getVacancy!");
    }
};

export const GetVacanciesByAdminByOne = async (id: string) => {
    try {
        connectToDb();
        const vacancy = await VacancyDBAdmin.findOne({ _id: id });
        return vacancy;
    } catch (err) {
        throw new Error("Failed to fetch getVacancyById!");
    }
};

export const GetVacancy = async (id: string) => {
    try {
        connectToDb();
        const vacancy = await VacancyDB.findOne({ _id: id });
        return vacancy;
    } catch (err) {
        throw new Error("Failed to fetch getVacancyById!");
    }
};

export const GetVacanciesByCategory = async (category: string) => {
    try {
        connectToDb();
        const vacancies = await VacancyDBAdmin.find({ category: category });
        return vacancies;
    } catch (err) {
        throw new Error(`Failed to fetch vacancies for category: ${category}`);
    }
};