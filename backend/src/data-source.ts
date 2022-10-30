import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "quizer-production",
    synchronize: true,
    logging: true,
    // entities: [Post, Category],
    subscribers: [],
    migrations: [],
})