const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/database');

const Courses = db.sequelize.define('Courses', {
    _id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    }, courseName: {
        type: DataTypes.STRING, allowNull: false
    }, courseDescription: {
        type: DataTypes.STRING, allowNull: true, defaultValue: "No description provided yet!",
    }, courseCFU: {
        type: DataTypes.INTEGER, allowNull: false
    }, courseYear: {
        type: DataTypes.INTEGER, allowNull: false
    }, courseSemester: {
        type: DataTypes.INTEGER, allowNull: false
    }, _idCourseTeacher: {
        type: DataTypes.INTEGER, allowNull: true
    }
});

Courses.sync().then();

module.exports = Courses;