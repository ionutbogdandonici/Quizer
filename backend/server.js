const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const database = require('../backend/db/database');
const errorHandler = require('../backend/middleware/errorMiddleware');

const logger = require('./logger')

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
        logger.error("Error occured: ", err);
        throw err;
    }
})
