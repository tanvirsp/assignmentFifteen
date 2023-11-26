const express = require('express');
const router = express.Router();

const RegistrationController = require("../controllers/RegistrationController.js");



//Regisration model api
router.post('/registration', RegistrationController.register );
router.get("/students", RegistrationController.viewStudents );
router.post("/update-register/:id", RegistrationController.updateStudent );
router.delete("/delete-student/:id", RegistrationController.deleteStudent );
router.get("/student-details/:id", RegistrationController.studentDetails );






module.exports = router;