import express, {Request, Response} from "express";

import courseRouter from "./models/courseRouter";

let router = express.Router();
const logger = require('../logger')


router.use('/courses', courseRouter);

router.get('/', (req: Request, res: Response) => {
    logger.info("GET: api/");
    res.json({
        apiLocation: "api/"
    })
})


module.exports = router;