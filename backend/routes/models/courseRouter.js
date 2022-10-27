const express = require('express');
const router = express.Router();
const logger = require('../../logger');

const Course = require('../../models/courses');

router.use(express.json())
// Create API
router.post("/", (req, res) => {
    logger.http("POST api/courses/ ");
    Course.create({
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        courseCFU: req.body.courseCFU,
        courseYear: req.body.courseYear,
        courseSemester: req.body.courseSemester,
        _idCourseTeacher: req.body._idCourseTeacher
    }).then();
    logger.info("New course added to database");
    res.status(200).end();
});

// Read API
router.get("/all", async (req, res) => {
    logger.http("GET /api/courses/all")
    const courses = await Course.findAll();
    res.json(courses);
})
router.get('/:id', (req, res) => {
    res.json({
        apiLocation: "api/courses/:id",
        requestType: "GET"
    })
})
// Update API
router.put('/:id', (req, res) => {
    res.json({
        apiLocation: "api/courses/:id",
        requestType: "UPDATE"
    })
})

// Delete API
router.delete('/:id', (req, res) => {
    res.json({
        apiLocation: "api/courses/:id",
        requestType: "DELETE"
    })
})

module.exports = router;