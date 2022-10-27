const express = require('express');
const router = express.Router();
const logger = require('../logger')


router.use('/courses', require('./models/courseRouter'));

router.get('/', (req, res) => {
    logger.info("GET: api/");
    res.json({
        apiLocation: "api/"
    })
})


module.exports = router;