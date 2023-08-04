let Student = require("../models/student");

const getAllStudents = async (req, res) => {
    await Student.find()
        .then((students) => {
            res.status(200).send({ status: "All students", students });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get all students", error: err.message });
        });
};

const addStudent = async (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender,
    });

    await newStudent.save()
        .then((student) => {
            res.status(200).send({ status: "Student added", student});
        })
        .catch((err) => {
            console.log(err.message); 
            res.status(500).send({status: "Error with add student", error: err.message })
        });
};

const getStudent = async (req, res) => {
    let userId = req.params.id;

    await Student.findById(userId)
        .then((student) => {
            res.status(200).send({ status: "Student fetched", student });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get student", error: err.message });
        });
};

const updateStudent = async (req, res) => {
    let userId = req.params.id; //fetch the id
  
    const {name, age, gender} = req.body; // new value

    const updateStudent = {
        name,
        age,
        gender,
    };

    await Student.findByIdAndUpdate(userId, updateStudent)
        .then((student) => {
            res.status(200).send({ status: "Student updated", student });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        });
};

const deleteStudent = async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId)
        .then((student) => {
            res.status(200).send({ status: "Student Deleted", Student });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete student", error: err.message });
        });
};


module.exports = {
    getAllStudents,
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent,
};