const {DataTypes} = require('sequelize');
const db = require('../db/database');

const Courses = db.sequelize.define('Courses', {
    _id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    }, courseName: {
        type: DataTypes.STRING, allowNull: false, unique: true
    }, courseDescription: {
        type: DataTypes.STRING, allowNull: false,
        defaultValue: "No description provided yet!",
    }, courseCFU: {
        type: DataTypes.INTEGER, allowNull: false
    }, courseYear: {
        type: DataTypes.INTEGER, allowNull: false
    }, courseSemester: {
        type: DataTypes.INTEGER, allowNull: false
    }, _idCourseTeacher: {
        type: DataTypes.INTEGER, allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'course'
});

Courses.sync().then();

module.exports = Courses;