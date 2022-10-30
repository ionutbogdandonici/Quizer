import * as express from 'express';
import {logger} from "../../logger";
import {Request, Response} from "express";

let router = express.Router();

// Create API
router.post('/', async (req: Request, res: Response) => {
    logger.http("[POST] /api/courses");
    const [row, created] = await Course
})

export = router;

/*
import express, { Express, Request, Response } from 'express';
const logger = require('../../logger');
const Course = require('../../model/courses');

const router = express.Router;



router().use(express.json());

router().post("/", async (req: Request, res: Response) => {
    logger().http("POST api/courses");
})
// Create API
router.post("/", async (req, res) => {
    logger.http("POST api/courses/ ");
    const [row, created] = await Course.findOrCreate({
        where: {
            courseName: req.body.courseName,
        },
        defaults: {
            courseDescription: req.body.courseDescription,
            courseCFU: req.body.courseCFU,
            courseYear: req.body.courseYear,
            courseSemester: req.body.courseSemester,
        }
    });
    if (created) {
        res.status(200).json({
            message: "Course created successfully",
            course: row
        });
        logger.info("Course created successfully");
    } else {
        res.status(200).json({
            message: "Course already exists",
            course: row
        });
        logger.info("Course already exists");
    }
});

// Read API
router.get("/all", async (req, res) => {
    logger.http("GET /api/courses/all")
    const courses = await Course.findAll();
    res.json(courses);
});
router.get('/:id', async (req, res) => {
    logger.http(`GET /api/courses/${req.params.id}`)
    const course = await Course.findOne({
        where: {
            _id: req.params.id
        }
    });
    if (course === null) {
        res.json({
            message: "Course not found"
        })
        logger.info("Course not found");
    } else {
        res.json(course);
        logger.info(`Course with _id:${req.params.id} retrieved`);
    }
});
// Update API
router.put('/:id', async (req, res) => {
    logger.http(`PUT /api/courses/${req.params.id}`)
    // Update course by id and return the updated course if it exists or return a message if it doesn't
    const [updated] = await Course.update({
        courseName: req.body.courseName,
        courseDescription: req.body.courseDescription,
        courseCFU: req.body.courseCFU,
        courseYear: req.body.courseYear,
        courseSemester: req.body.courseSemester,
    }, {
        where: {
            _id: req.params.id
        }
    });
    if (updated) {
        logger.info(`Course with _id:${req.params.id} updated`);
        res.status(200).json({
            message: "Course updated successfully"
        });
    }
});

// Delete API
router.delete('/:id', (req, res) => {
    res.json({
        apiLocation: "api/courses/:id", requestType: "DELETE"
    })
});*/