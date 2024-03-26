import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(

    {
        job_title: {
            type: String,
            required: true,
        },

        company_name: {
            type: String,
            required: true,
        },

        about_company: String,

        path: {
            type: String,
            required: true,
        },

        job_type: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        apply_method_1: {
            type: String,
        },

        apply_method_2: {
            type: String,
        },

        desc: {
            type: String,
            required: true,
        },

        salary: String,

        last_date: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const vacancySchemaAdmin = new mongoose.Schema(

    {
        job_title: {
            type: String,
            required: true,
        },

        company_name: {
            type: String,
            required: true,
        },

        about_company: String,

        path: {
            type: String,
            required: true,
        },

        company_logo: {
            type: String,
            required: true,
        },

        job_type: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        apply_method_1: {
            type: String,
        },

        apply_method_2: {
            type: String,
        },

        desc: {
            type: String,
            required: true,
        },

        salary: String,

        last_date: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

const vacancySchemaAdminPanel = new mongoose.Schema(
    {
        login: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

export const VacancyDBAdminPanel = mongoose.models?.VacancyAdminPanel || mongoose.model("VacancyAdminPanel", vacancySchemaAdminPanel);
export const VacancyDB = mongoose.models?.Vacancy || mongoose.model("Vacancy", vacancySchema);
export const VacancyDBAdmin = mongoose.models?.VacancyAdmin || mongoose.model("VacancyAdmin", vacancySchemaAdmin);
