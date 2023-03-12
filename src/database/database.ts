import { Dialect, Sequelize } from "sequelize";

const connString = "postgres://bookshopuser:super-secret-password@127.0.0.1:5432/bookshop";
// TODO: Replace the above string with a string built from YOUR process.env.DB_USERNAME etc variables

export let sequelize = new Sequelize(connString);
if (process.env.NODE_ENV !== 'test') {
    sequelize = new Sequelize(
        process.env.DB_NAME ?? 'MISSING_DB_NAME_CONFIG',
        process.env.DB_USERNAME ?? 'MISSING_DB_USERNAME_CONFIG',
        process.env.DB_PASSWORD ?? 'MISSING_DB_PASSWORD_CONFIG', {
        host: process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG',
        dialect: (process.env.DB_DIALECT as Dialect) ?? 'postgres',
    });
}