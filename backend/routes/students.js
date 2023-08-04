const router = require("express").Router(); //import router of express package
let student = require("../models/student"); //import student module
const studentController = require("../controllers/students"); //import student controller

router.route("/").get(studentController.getAllStudents);

router.route("/add").post(studentController.addStudent);

router.route("/get/:id").get(studentController.getStudent);

router.route("/update/:id").put(studentController.updateStudent);

router.route("/delete/:id").delete(studentController.deleteStudent);

module.exports = router;
