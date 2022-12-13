import {DataTypes, Sequelize} from "sequelize";

import {dbConfig} from "../config/db.config.js";
import {Book} from "./book.model.js";

const sequelize = new Sequelize(dbConfig.DB_NAME, dbConfig.DB_USER, dbConfig.DB_PASSWORD, {
    host: dbConfig.DB_HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.DB_PORT
});

export const database = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    book: Book(sequelize, Sequelize, DataTypes),
};
