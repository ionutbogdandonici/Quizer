import express from 'express';
import {config} from "dotenv";

import {logger} from "./logger";

const app = express();
const dotenv = config();
const database = require('./db/database');
const errorHandler = require('./middleware/errorMiddleware');

// Prima di migrare a TypeScript


const port = process.env.SERVER_PORT;

app.use('/api', require('./routes/apiRoutes'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(errorHandler);


app.listen(port, async () => {
    try {
        await database.sequelize.authenticate();
        logger.info(`Server runing on port ${port}. Good work!`);
        logger.info("Database Connected");
    } catch (err) {
        logger.error("Error occured:", err);
    }
})

